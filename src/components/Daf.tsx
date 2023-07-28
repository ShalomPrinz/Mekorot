import { Makor } from "../types";

function Daf({ mekorot }: { mekorot: Makor[] }) {
  return (
    <div
      style={{
        width: "21rem",
        height: "29.7rem",
      }}
      className="shadow-lg p-3 rounded"
      id="daf"
    >
      <div
        style={{
          display: "grid",
          gap: "5px",
        }}
      >
        {mekorot.map((makor: Makor, index: number) => (
          <div
            style={{
              border: "solid black 1px",
              gridColumn: 1,
              gridRow: index + 1,
            }}
            key={index}
          >
            {makor.content}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Daf;
