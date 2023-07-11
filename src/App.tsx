import { Editor, Navbar } from "./components";
import { DafProvider } from "./contexts";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row d-flex">
          <DafProvider>
            <div className="col m-4">
              <Editor />
            </div>
            <div className="col m-4">
              <h3>Viewer</h3>
            </div>
          </DafProvider>
        </div>
      </div>
    </>
  );
}

export default App;
