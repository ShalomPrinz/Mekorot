import { useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import Search from "./Search";
import ConditionalList from "./ConditionalList";
import TextEditor from "./TextEditor";

import { useDafContext } from "../contexts";
import { SEARCH_AGAIN_RESULT, useAutoSuggestions } from "../hooks";
import type { InitialResult } from "../types";
import { extractText } from "../util";

const emptyMakorText = "";

function Editor() {
  const [query, setQuery] = useState("");
  const [makorText, setMakorText] = useState(emptyMakorText);
  const displayMakorText = makorText !== emptyMakorText;

  const { isLoading, pickSuggestionResult, suggestions } =
    useAutoSuggestions(query);

  const { addMakor } = useDafContext();

  function onTextEditFinish(text: string) {
    addMakor({
      title: "מקור חדש",
      content: text,
    });
  }

  const makorCallback = (makor: InitialResult) => (
    <button
      className="row py-1 me-4 my-2 rounded fs-5 bg-white"
      onClick={async () => {
        const result = await pickSuggestionResult(makor);
        if (result === SEARCH_AGAIN_RESULT) {
          setQuery(makor.value.trim() + " ");
        } else {
          setMakorText(result);
        }
      }}
      type="button"
    >
      {makor.value}
    </button>
  );

  return (
    <>
      <h3>בחירת מקורות</h3>
      <Row>
        <Col sm="9">
          <Search
            onChange={(q: string) => setQuery(q)}
            placeholder="הכנס שם מקור..."
            query={query}
          />
        </Col>
        {displayMakorText && (
          <Col sm="3" className="my-auto">
            <button
              className="fs-4 p-2 rounded bg-default"
              onClick={() => setMakorText(emptyMakorText)}
              type="button"
            >
              בטל בחירה
            </button>
          </Col>
        )}
      </Row>
      {isLoading ? (
        <div className="m-5 text-center fs-1">טוען...</div>
      ) : displayMakorText ? (
        <TextEditor
          initialText={extractText(makorText)}
          onSubmit={(text) => onTextEditFinish(text)}
        />
      ) : (
        <ConditionalList
          list={suggestions}
          itemCallback={makorCallback}
          keyProp="value"
        />
      )}
    </>
  );
}

export default Editor;
