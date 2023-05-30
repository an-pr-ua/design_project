import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function OurServiseButton() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Link to="/ourservis">
        <Button variant="outline-success">ALL</Button>
      </Link>
      <Link to="/interiordesign">
        <Button variant="outline-success">INTERIOR DESIGN</Button>
      </Link>
      <Link to="/architecture">
        <Button variant="outline-success">ARCHITECTURE</Button>
      </Link>
      <Link to="/planning">
        <Button variant="outline-success">PLANNING</Button>
      </Link>
    </>
  );
}

export default OurServiseButton;
