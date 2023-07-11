import Navbar from "react-bootstrap/Navbar";

function AppNavbar() {
  return (
    <Navbar
      className="navbar bg-default pe-4"
      expand="lg"
      expanded={false}
      style={{ direction: "rtl" }}
    >
      <h1 className="navbar-brand fs-1 text-white m-4">דפי מקורות</h1>
    </Navbar>
  );
}

export default AppNavbar;
