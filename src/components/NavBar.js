import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Scrap from "./Scrap";
import { Link } from "react-router-dom";

var a = true;
var i = 0;

function NavBar() {
  function autoBgHours() {
    console.log(i, "вход проверки на 0", a);
    if (i === 0) {
      let h = new Date().getHours();

      if (h > 19 || h < 7) {
        return (a = true), console.log(i, a, "ночь часы"), bgHors();
      } else {
        return (a = false), console.log(i, a, "день часы"), bgHors();
      }
    } else {
      console.log(i, a, "не часы");
    }
  }

  function bgHors() {
    if (document.querySelector(".page5")) {
      if (a === true) {
        return [
          console.log(a, "в часы ночь"),

          (document.querySelector(".bg-white").style.backgroundImage =
            'url("https://an-pr-ua.github.io/design_project/images/796_original.jpg")'),
          (document.getElementById("page5").style.backgroundImage =
            'url("https://an-pr-ua.github.io/design_project/images/8efcd7a70a8d624bdf076bfa1cfb6d013d932284.jpeg")'),
          (document.querySelector(".page7").style.backgroundImage =
            'url("https://an-pr-ua.github.io/design_project/images/8efcd7a70a8d624bdf076bfa1cfb6d013d932284.jpeg")'),
          (document.querySelector(".Footer").style.backgroundImage =
            'url("https://an-pr-ua.github.io/design_project/images/796_original.jpg")'),
          (document.body.style =
            'background: url("https://an-pr-ua.github.io/design_project/images/Oregon_15.jpg")'),
          (document.querySelector("hr").style.color = "#7d7d7d"),
          Array.from(document.getElementsByClassName("button-contact")).forEach(
            (e) => (e.style.color = "#646464")
          ),
          Array.from(document.getElementsByClassName("btn")).forEach(
            (e) => (e.style.color = "#646464")
          ),
          Array.from(document.getElementsByClassName("scrap")).forEach(
            (e) => (e.style.opacity = "0.6")
          ),
        ];
      } else {
        return [
          console.log(a, "в часы день"),
          (document.querySelector(".bg-white").style.backgroundImage = ""),
          (document.getElementById("page5").style.backgroundImage = ""),
          (document.querySelector(".page7").style.backgroundImage = ""),
          (document.querySelector(".Footer").style.backgroundImage = ""),
          (document.body.style = ""),
          (document.querySelector("hr").style.color = ""),
          Array.from(document.getElementsByClassName("button-contact")).forEach(
            (e) => (e.style.color = "")
          ),
          Array.from(document.getElementsByClassName("btn")).forEach(
            (e) => (e.style.color = "")
          ),
          Array.from(document.getElementsByClassName("scrap")).forEach(
            (e) => (e.style.opacity = "0")
          ),
        ];
      }
    } else {
      if (a === true) {
        return [
          console.log(a, "в часы ночь"),

          (document.querySelector(".bg-white").style.backgroundImage =
            'url("https://an-pr-ua.github.io/design_project/images/796_original.jpg")'),
          (document.querySelector(".Footer").style.backgroundImage =
            'url("https://an-pr-ua.github.io/design_project/images/796_original.jpg")'),
          (document.body.style =
            'background: url("https://an-pr-ua.github.io/design_project/images/Oregon_15.jpg")'),
          Array.from(document.getElementsByClassName("button-contact")).forEach(
            (e) => (e.style.color = "#646464")
          ),
          Array.from(document.getElementsByClassName("btn")).forEach(
            (e) => (e.style.color = "#646464")
          ),
          Array.from(document.getElementsByClassName("scrap")).forEach(
            (e) => (e.style.opacity = "0.6")
          ),
        ];
      } else {
        return [
          console.log(a, "в часы день"),
          (document.querySelector(".bg-white").style.backgroundImage = ""),
          (document.querySelector(".Footer").style.backgroundImage = ""),
          (document.body.style = ""),
          Array.from(document.getElementsByClassName("button-contact")).forEach(
            (e) => (e.style.color = "")
          ),
          Array.from(document.getElementsByClassName("btn")).forEach(
            (e) => (e.style.color = "")
          ),
          Array.from(document.getElementsByClassName("scrap")).forEach(
            (e) => (e.style.opacity = "0")
          ),
        ];
      }
    }
  }

  setInterval(autoBgHours, 5000);

  let funclick = function () {
    i = i + 1;

    if (i === 1) {
      a = true;
      document.querySelector("#btn-day-night").src =
        "https://an-pr-ua.github.io/design_project/images/moon.png";
      console.log(i, a);

      return i, a, bgHors();
    } else if (i === 2) {
      a = false;
      document.querySelector("#btn-day-night").src =
        "https://an-pr-ua.github.io/design_project/images/sun.png";
      console.log(i, a);
      return i, a, bgHors();
    } else if (i === 3) {
      i = 0;
      document.querySelector("#btn-day-night").src =
        "https://an-pr-ua.github.io/design_project/images/click.png";
      console.log(i, a);
      return i, a, autoBgHours();
    }

    alert("111111111");
  };

  return (
    <>
      <Navbar className="Navbar" bg="white" variant="light">
        <Container>
          <Navbar.Brand as={Link} to="/design_project">
            <img
              src="https://an-pr-ua.github.io/design_project/images/logo.png"
              alt="logo"
            />
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="me-1 bt-hr" href="">
              HOME
            </Nav.Link>
            <Nav.Link
              className="me-1 bt-hr"
              href="https://gis.uk.com/project-room/"
            >
              PROJECT
            </Nav.Link>
            <Nav.Link
              className="me-1 bt-hr"
              href="https://www.beoffices.com/serviced-offices/project-room-space"
            >
              SERVICES
            </Nav.Link>
            <Nav.Link
              className="me-1 bt-hr"
              href="https://find-and-update.company-information.service.gov.uk/company/09769142/more"
            >
              ABOUT
            </Nav.Link>
            <Nav.Link className="me-1 bt-hr" href="/blog">
              BLOG
            </Nav.Link>
            <Nav.Link className="me-1 bt-hr" href="/shop">
              SHOP
            </Nav.Link>
            <Nav.Link className="me-4 bt-hr" href="/contact">
              CONTACT
            </Nav.Link>
          </Nav>
          <Nav.Link className="me-1" href=" ">
            <img
              className="sign-up"
              src="https://an-pr-ua.github.io/design_project/images/Group 37.png"
              alt="button-navbar"
            />
          </Nav.Link>
        </Container>
        <button className="button-contact1" type="submit" onClick={funclick}>
          <img
            id="btn-day-night"
            src="https://an-pr-ua.github.io/design_project/images/click.png"
            alt="day/night"
          />
        </button>
        <Scrap />
      </Navbar>
    </>
  );
}

export default NavBar;
