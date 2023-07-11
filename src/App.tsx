import { Editor, Navbar } from "./components";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row d-flex">
          <div className="col m-4">
            <Editor />
          </div>
          <div className="col m-4">
            <h3>Viewer</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
