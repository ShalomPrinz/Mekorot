import { Editor, Navbar, Viewer } from "./components";
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
              <Viewer />
            </div>
          </DafProvider>
        </div>
      </div>
    </>
  );
}

export default App;
