import OurServiseButton from "./OurServiseButton";

function InteriorDesign() {
  (function () {
    setTimeout(function () {
      document.querySelector("#servis-change-style1").style.backgroundColor =
        "#CAA892";
      document.querySelector("#servis-change-style1").style.borderColor =
        "#CAA892";
    }, 10000);

    setTimeout(function () {
      document.querySelector("#servis-change-style1").style.backgroundColor =
        "";
      document.querySelector("#servis-change-style1").style.borderColor = "";
    }, 11000);

    setTimeout(function () {
      document.querySelector("#servis-change-style2").style.backgroundColor =
        "#CAA892";
      document.querySelector("#servis-change-style2").style.borderColor =
        "#CAA892";
    }, 10250);

    setTimeout(function () {
      document.querySelector("#servis-change-style2").style.backgroundColor =
        "";
      document.querySelector("#servis-change-style2").style.borderColor = "";
    }, 11250);

    setTimeout(function () {
      document.querySelector("#servis-change-style3").style.backgroundColor =
        "#CAA892";
      document.querySelector("#servis-change-style3").style.borderColor =
        "#CAA892";
    }, 10500);

    setTimeout(function () {
      document.querySelector("#servis-change-style3").style.backgroundColor =
        "";
      document.querySelector("#servis-change-style3").style.borderColor = "";
    }, 11500);

    setTimeout(function () {
      document.querySelector("#servis-change-style4").style.backgroundColor =
        "#CAA892";
      document.querySelector("#servis-change-style4").style.borderColor =
        "#CAA892";
    }, 10750);

    setTimeout(function () {
      document.querySelector("#servis-change-style4").style.backgroundColor =
        "";
      document.querySelector("#servis-change-style4").style.borderColor = "";
    }, 11750);

    setTimeout(function () {
      document.querySelector("#servis-change-style5").style.backgroundColor =
        "#CAA892";
      document.querySelector("#servis-change-style5").style.borderColor =
        "#CAA892";
      document.querySelector("#servis-change-style5-p").style.color = "#fff";
      document.querySelector("#servis-change-style5-h5").style.color = "#fff";
      document.querySelector("#servis-change-style5-img").style.filter =
        "invert(1)";
    }, 12000);

    setTimeout(function () {
      document.querySelector("#servis-change-style5").style.backgroundColor =
        "";
      document.querySelector("#servis-change-style5").style.borderColor = "";
      document.querySelector("#servis-change-style5-p").style.color = "";
      document.querySelector("#servis-change-style5-h5").style.color = "";
      document.querySelector("#servis-change-style5-img").style.filter = "";
    }, 13000);
  })();

  return (
    <div className="InteriorDesign MainPage1">
      <div className="OurServise">
        <div className="our-servise-text">
          <h4>WHAT WE DO</h4>
          <h2>Our Service</h2>
        </div>
        <div className="our-servis-button">
          <OurServiseButton />
        </div>
        <div className="our-servis-icon">
          <a id="servis-change-style1" className="our-servis-card" href="">
            <div className="our-servis-interior1">
              <img
                src="https://an-pr-ua.github.io/design_project/images/sr.png"
                alt="our-servis-interior"
              />
              <div className="our-servis-card-text">
                <h5>Interior Design1</h5>
                <p>
                  Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod
                  tempor incididunt ut labore.
                </p>
              </div>
            </div>
          </a>
          <a id="servis-change-style2" className="our-servis-card" href="">
            <div className="our-servis-interior1">
              <img
                src="https://an-pr-ua.github.io/design_project/images/sr.png"
                alt="our-servis-interior"
              />
              <div className="our-servis-card-text">
                <h5>Interior Design2</h5>
                <p>
                  Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod
                  tempor incididunt ut labore.
                </p>
              </div>
            </div>
          </a>
          <a id="servis-change-style3" className="our-servis-card" href="">
            <div className="our-servis-interior1">
              <img
                src="https://an-pr-ua.github.io/design_project/images/sr.png"
                alt="our-servis-interior"
              />
              <div className="our-servis-card-text">
                <h5>Interior Design3</h5>
                <p>
                  Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod
                  tempor incididunt ut labore.
                </p>
              </div>
            </div>
          </a>
          <a id="servis-change-style4" className="our-servis-card" href="">
            <div className="our-servis-interior1">
              <img
                src="https://an-pr-ua.github.io/design_project/images/sr.png"
                alt="our-servis-interior"
              />
              <div className="our-servis-card-text">
                <h5>Interior Design4</h5>
                <p>
                  Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod
                  tempor incididunt ut labore.
                </p>
              </div>
            </div>
          </a>
          <a id="servis-change-style5" className="our-servis-card" href="">
            <div className="our-servis-interior1">
              <img
                id="servis-change-style5-img"
                src="https://an-pr-ua.github.io/design_project/images/sr.png"
                alt="our-servis-interior"
              />
              <div className="our-servis-card-text">
                <h5 id="servis-change-style5-h5">Interior Design5</h5>
                <p id="servis-change-style5-p">
                  Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod
                  tempor incididunt ut labore.
                </p>
              </div>
            </div>
          </a>

          <a className="our-servis-card invert" href="">
            <div className="our-servis-architecture1">
              <img
                src="https://an-pr-ua.github.io/design_project/images/ere.png"
                alt="our-servis-architecture1"
              />
              <div className="our-servis-card-text">
                <h5>Architecture 1</h5>
                <p>
                  Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod
                  tempor incididunt ut labore.
                </p>
              </div>
            </div>
          </a>
          <a className="our-servis-card invert" href="">
            <div className="our-servis-architecture1">
              <img
                src="https://an-pr-ua.github.io/design_project/images/ere.png"
                alt="our-servis-architecture1"
              />
              <div className="our-servis-card-text">
                <h5>Architecture 2</h5>
                <p>
                  Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod
                  tempor incididunt ut labore.
                </p>
              </div>
            </div>
          </a>
          <a className="our-servis-card invert" href="">
            <div className="our-servis-architecture1">
              <img
                src="https://an-pr-ua.github.io/design_project/images/ere.png"
                alt="our-servis-architecture1"
              />
              <div className="our-servis-card-text">
                <h5>Architecture 3</h5>
                <p>
                  Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod
                  tempor incididunt ut labore.
                </p>
              </div>
            </div>
          </a>
          <a className="our-servis-card invert" href="">
            <div className="our-servis-architecture1">
              <img
                src="https://an-pr-ua.github.io/design_project/images/ere.png"
                alt="our-servis-architecture1"
              />
              <div className="our-servis-card-text">
                <h5>Architecture 4</h5>
                <p>
                  Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod
                  tempor incididunt ut labore.
                </p>
              </div>
            </div>
          </a>
          <a className="our-servis-card invert" href="">
            <div className="our-servis-architecture1">
              <img
                src="https://an-pr-ua.github.io/design_project/images/ere.png"
                alt="our-servis-architecture1"
              />
              <div className="our-servis-card-text">
                <h5>Architecture 5</h5>
                <p>
                  Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod
                  tempor incididunt ut labore.
                </p>
              </div>
            </div>
          </a>
          <a className="our-servis-card" href="">
            <div className="our-servis-planning1">
              <img
                src="https://an-pr-ua.github.io/design_project/images/sd.png"
                alt="our-servis-planning1"
              />
              <div className="our-servis-card-text">
                <h5>Planning 1</h5>
                <p>
                  Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod
                  tempor incididunt ut labore.
                </p>
              </div>
            </div>
          </a>
          <a className="our-servis-card" href="">
            <div className="our-servis-planning1">
              <img
                src="https://an-pr-ua.github.io/design_project/images/sd.png"
                alt="our-servis-planning1"
              />
              <div className="our-servis-card-text">
                <h5>Planning 2</h5>
                <p>
                  Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod
                  tempor incididunt ut labore.
                </p>
              </div>
            </div>
          </a>
          <a className="our-servis-card" href="">
            <div className="our-servis-planning1">
              <img
                src="https://an-pr-ua.github.io/design_project/images/sd.png"
                alt="our-servis-planning1"
              />
              <div className="our-servis-card-text">
                <h5>Planning 3</h5>
                <p>
                  Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod
                  tempor incididunt ut labore.
                </p>
              </div>
            </div>
          </a>
          <a className="our-servis-card" href="">
            <div className="our-servis-planning1">
              <img
                src="https://an-pr-ua.github.io/design_project/images/sd.png"
                alt="our-servis-planning1"
              />
              <div className="our-servis-card-text">
                <h5>Planning 4</h5>
                <p>
                  Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod
                  tempor incididunt ut labore.
                </p>
              </div>
            </div>
          </a>
          <a className="our-servis-card" href="">
            <div className="our-servis-planning1">
              <img
                src="https://an-pr-ua.github.io/design_project/images/sd.png"
                alt="our-servis-planning1"
              />
              <div className="our-servis-card-text">
                <h5>Planning 5</h5>
                <p>
                  Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod
                  tempor incididunt ut labore.
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default InteriorDesign;
