import { useState } from "react";

import Search from "./Search";
import ConditionalList from "./ConditionalList";

import { useDafContext } from "../contexts";
import type { Makor } from "../types";

function Editor() {
  const [query, setQuery] = useState("");
  const mekorot = useSearchMekorot(query);

  const { addMakor } = useDafContext();

  const makorCallback = (makor: Makor) => (
    <div className="row">
      <div className="col my-2">
        <span className="fs-4 m-1 p-1">{makor.title}</span>
        {makor.content}
      </div>
      <div className="col my-2">
        <button
          className="fs-5 bg-default rounded p-2"
          onClick={() => addMakor(makor)}
        >
          הוסף
        </button>
      </div>
    </div>
  );

  return (
    <>
      <h3>בחירת מקורות</h3>
      <Search
        onChange={(q: string) => setQuery(q)}
        placeholder="הכנס שם מקור..."
      />
      <ConditionalList
        list={mekorot}
        itemCallback={makorCallback}
        keyProp="title"
      />
    </>
  );
}

function useSearchMekorot(query: string): Makor[] {
  if (query === "") return [];
  return [
    {
      content: query,
      title: query,
    },
  ];
}

export default Editor;
