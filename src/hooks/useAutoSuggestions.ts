import { useEffect, useState } from "react";

import { aht } from "../autocomplete-try";
import type { InitialResult } from "../types";

const SEARCH_AGAIN_RESULT = "SEARCH_AGAIN_TRIMMED_SPACE";

function initAutoSuggestions() {
  // @ts-expect-error aht is a javascript object
  aht.texts.init(function () {}, {
    tree: false,
  });
}

function getSuggestions(
  query: string,
  callback: (result: InitialResult[]) => void
) {
  // @ts-expect-error aht is a javascript object
  aht.texts.textOrSearch.getSuggestions(
    {
      term: query,
    },
    callback,
    "he"
  );
}

function search(value: string) {
  // @ts-expect-error aht is a javascript object
  aht.texts.textOrSearch.search(value);
}

async function pickSuggestion(value: string) {
  if (!value || typeof value === "undefined") return;

  const trimmedValue = value.trim();

  // @ts-expect-error aht is a javascript object
  const ref = aht.texts.parseInputRef(value);

  if (!ref.book) {
    search(value);
    return;
  }

  // @ts-expect-error aht is a javascript object
  const bookData = aht.texts.data[ref.book];
  const isParashah = bookData.isParashah;

  if (
    !ref.url &&
    !bookData.expandedListOfSections &&
    !bookData.compressedListOfSections &&
    !isParashah
  ) {
    search(value);
    return;
  }

  const hasSecondSegment =
    ref.segments &&
    Array.isArray(ref.segments) &&
    ref.segments.length >= 2 &&
    typeof ref.segments[2] !== "undefined";

  const secondRefSegment = hasSecondSegment ? ref.segments[2] : "";
  let done = isParashah || hasSecondSegment;

  if (done && hasSecondSegment) {
    // @ts-expect-error aht is a javascript object
    const allChapters = aht.texts.database.getExpandedListOfSections(ref.book);
    let chapter = secondRefSegment;

    if (ref.hasAmudim && typeof chapter === "object") {
      chapter = chapter[0] + chapter[1];
    }
    if (ref.Yerushalmi) {
      chapter = ref.Yerushalmi[1];
    }

    if (!allChapters[chapter]) {
      search(value);
      return;
    }
  }

  if (ref.url && !done) {
    const firstSection =
      bookData?.compressedListOfSections?.he?.length === 1 &&
      bookData.compressedListOfSections.he[0];

    done = firstSection === "nosections";
  }

  if (done) {
    let NAME_OF_BOOK =
      ref.mgType && ref.mgType === "Tanakh"
        ? "Tanakh Menukad " + ref.book
        : ref.book;

    const CHAPTER = Array.isArray(secondRefSegment)
      ? secondRefSegment.join("")
      : secondRefSegment;

    const url = `https://alhatorah.org/Texts/database.php/${NAME_OF_BOOK}/${CHAPTER}.txt`;

    const response = await fetch(
      `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`
    );

    const json = await response.json();
    return json.contents.replace(/<(cn|tn|abb)>(.+?)<\/(cn|tn|abb)>/g, "");
  } else {
    if (trimmedValue != ref.book) ref.segments = [trimmedValue, trimmedValue];

    // @ts-expect-error aht is a javascript object
    aht.texts.textOrSearch.hopingForChapters = ref;
    return SEARCH_AGAIN_RESULT;
  }
}

function useAutoSuggestions(query: string) {
  const [isLoading, setIsLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<InitialResult[]>([]);

  async function pickSuggestionResult(result: InitialResult) {
    setIsLoading(true);
    return pickSuggestion(result.value).finally(() => setIsLoading(false));
  }

  useEffect(() => initAutoSuggestions(), []);

  useEffect(() => getSuggestions(query, setSuggestions), [query]);

  return { isLoading, pickSuggestionResult, suggestions };
}

export { SEARCH_AGAIN_RESULT, useAutoSuggestions };
