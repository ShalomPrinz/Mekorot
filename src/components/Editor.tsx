import { useState } from "react";

import Search from "./Search";
import ConditionalList from "./ConditionalList";

import type { Makor } from "../types";

function Editor() {
  const [query, setQuery] = useState("");
  const mekorot = useSearchMekorot(query);

  const makorCallback = ({ content, title }: Makor) => (
    <div>
      <span className="fs-4 m-1 p-1">{title}</span>
      {content}
    </div>
  );

  return (
    <>
      <h3>בחירת מקורות</h3>
      <Search
        onChange={(q: string) => setQuery(q)}
        placeholder="הכנס שם מקור..."
      />
      <ConditionalList list={mekorot} itemCallback={makorCallback} />
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
