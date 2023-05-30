import OurServiseButton from "./OurServiseButton";

function Planning() {
  (function () {
    document.querySelector("body").style.overflow = "hidden";

    let card1On = setInterval(function () {
      document.querySelector(".servis-change-style1").style.backgroundColor =
        "#CAA892";
      document.querySelector(".servis-change-style1").style.borderColor =
        "#CAA892";
      document.querySelector(".servis-change-style1-p").style.color = "#fff";
      document.querySelector(".servis-change-style1-h5").style.color = "#fff";
      document.querySelector(".servis-change-style1-img").style.filter =
        "invert(1)";
    }, 500);

    let card1Off = setInterval(function () {
      document.querySelector(".servis-change-style1").style.backgroundColor =
        "";
      document.querySelector(".servis-change-style1").style.borderColor = "";
      document.querySelector(".servis-change-style1-p").style.color = "";
      document.querySelector(".servis-change-style1-h5").style.color = "";
      document.querySelector(".servis-change-style1-img").style.filter = "";
    }, 750);

    setTimeout(function () {
      clearInterval(card1On);
      clearInterval(card1Off);
      document.querySelector(".servis-change-style2").style.opacity = "0";
    }, 7200);

    let card2On = setInterval(function () {
      document.querySelector(".servis-change-style2").style.backgroundColor =
        "#CAA892";
      document.querySelector(".servis-change-style2").style.borderColor =
        "#CAA892";
      document.querySelector(".servis-change-style2-p").style.color = "#fff";
      document.querySelector(".servis-change-style2-h5").style.color = "#fff";
      document.querySelector(".servis-change-style2-img").style.filter =
        "invert(1)";
    }, 2250);

    let card2Off = setInterval(function () {
      document.querySelector(".servis-change-style2").style.backgroundColor =
        "";
      document.querySelector(".servis-change-style2").style.borderColor = "";
      document.querySelector(".servis-change-style2-p").style.color = "";
      document.querySelector(".servis-change-style2-h5").style.color = "";
      document.querySelector(".servis-change-style2-img").style.filter = "";
    }, 3250);

    setTimeout(function () {
      clearInterval(card2On);
      clearInterval(card2Off);
      document.querySelector(".servis-change-style2").style.opacity = "0";
    }, 6200);

    let card3On = setInterval(function () {
      document.querySelector(".servis-change-style3").style.backgroundColor =
        "#CAA892";
      document.querySelector(".servis-change-style3").style.borderColor =
        "#CAA892";
      document.querySelector(".servis-change-style3-p").style.color = "#fff";
      document.querySelector(".servis-change-style3-h5").style.color = "#fff";
      document.querySelector(".servis-change-style3-img").style.filter =
        "invert(1)";
    }, 1500);

    let card3Off = setInterval(function () {
      document.querySelector(".servis-change-style3").style.backgroundColor =
        "";
      document.querySelector(".servis-change-style3").style.borderColor = "";
      document.querySelector(".servis-change-style3-p").style.color = "";
      document.querySelector(".servis-change-style3-h5").style.color = "";
      document.querySelector(".servis-change-style3-img").style.filter = "";
    }, 2500);

    setTimeout(function () {
      clearInterval(card3On);
      clearInterval(card3Off);
      document.querySelector(".servis-change-style3").style.opacity = "0";
    }, 7000);

    let card4On = setInterval(function () {
      document.querySelector(".servis-change-style4").style.backgroundColor =
        "#CAA892";
      document.querySelector(".servis-change-style4").style.borderColor =
        "#CAA892";
      document.querySelector(".servis-change-style4-p").style.color = "#fff";
      document.querySelector(".servis-change-style4-h5").style.color = "#fff";
      document.querySelector(".servis-change-style4-img").style.filter =
        "invert(1)";
    }, 1750);

    let card4Off = setInterval(function () {
      document.querySelector(".servis-change-style4").style.backgroundColor =
        "";
      document.querySelector(".servis-change-style4").style.borderColor = "";
      document.querySelector(".servis-change-style4-p").style.color = "";
      document.querySelector(".servis-change-style4-h5").style.color = "";
      document.querySelector(".servis-change-style4-img").style.filter = "";
    }, 2750);

    setTimeout(function () {
      clearInterval(card4On);
      clearInterval(card4Off);
      document.querySelector(".servis-change-style4").style.opacity = "0";
    }, 6800);

    let card5On = setInterval(function () {
      document.querySelector(".servis-change-style5").style.backgroundColor =
        "#CAA892";
      document.querySelector(".servis-change-style5").style.borderColor =
        "#CAA892";
      document.querySelector(".servis-change-style5-p").style.color = "#fff";
      document.querySelector(".servis-change-style5-h5").style.color = "#fff";
      document.querySelector(".servis-change-style5-img").style.filter =
        "invert(1)";
    }, 1000);

    let card5Off = setInterval(function () {
      document.querySelector(".servis-change-style5").style.backgroundColor =
        "";
      document.querySelector(".servis-change-style5").style.borderColor = "";
      document.querySelector(".servis-change-style5-p").style.color = "";
      document.querySelector(".servis-change-style5-h5").style.color = "";
      document.querySelector(".servis-change-style5-img").style.filter = "";
    }, 1500);

    setTimeout(function () {
      clearInterval(card5On);
      clearInterval(card5Off);
      document.querySelector(".servis-change-style5").style.opacity = "0";
    }, 7500);

    setTimeout(function () {
      document.querySelector(".our-servis-icon-article").style.transition =
        "4s";
      document.querySelector(".our-servis-icon-article").style.opacity = "1";
      document.querySelector(".our-servis-icon-article").style.scale = "1";
    }, 11000);

    setTimeout(function () {
      document.querySelector("body").style.overflow = "";
    }, 25000);
  })();

  return (
    <div className="Planning MainPage1">
      <div className="OurServise">
        <div className="our-servise-text">
          <h4>WHAT WE DO</h4>
          <h2>Our Service</h2>
        </div>
        <div className="our-servis-button">
          <OurServiseButton />
        </div>
        <div className="our-servis-icon">
          <a className="our-servis-card servis-change-style1" href="">
            <div className="our-servis-interior1">
              <img
                className="servis-change-style1-img"
                src="images/sd.png"
                alt="our-servis-interior"
              />
              <div className="our-servis-card-text">
                <h5 className="servis-change-style1-h5">Planning1</h5>
                <p className="servis-change-style1-p">
                  Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod
                  tempor incididunt ut labore.
                </p>
              </div>
            </div>
          </a>
          <a className="our-servis-card servis-change-style2" href="">
            <div className="our-servis-interior1">
              <img
                className="servis-change-style2-img"
                src="images/sd.png"
                alt="our-servis-interior"
              />
              <div className="our-servis-card-text">
                <h5 className="servis-change-style2-h5">Planning2</h5>
                <p className="servis-change-style2-p">
                  Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod
                  tempor incididunt ut labore.
                </p>
              </div>
            </div>
          </a>
          <a className="our-servis-card servis-change-style3" href="">
            <div className="our-servis-interior1">
              <img
                className="servis-change-style3-img"
                src="images/sd.png"
                alt="our-servis-interior"
              />
              <div className="our-servis-card-text">
                <h5 className="servis-change-style3-h5">Planning3</h5>
                <p className="servis-change-style3-p">
                  Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod
                  tempor incididunt ut labore.
                </p>
              </div>
            </div>
          </a>
          <a className="our-servis-card servis-change-style4" href="">
            <div className="our-servis-interior1">
              <img
                className="servis-change-style4-img"
                src="images/sd.png"
                alt="our-servis-interior"
              />
              <div className="our-servis-card-text">
                <h5 className="servis-change-style4-h5">Planning4</h5>
                <p className="servis-change-style4-p">
                  Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod
                  tempor incididunt ut labore.
                </p>
              </div>
            </div>
          </a>
          <a className="our-servis-card servis-change-style5" href="">
            <div className="our-servis-interior1">
              <img
                className="servis-change-style5-img"
                src="images/sd.png"
                alt="our-servis-interior"
              />
              <div className="our-servis-card-text">
                <h5 className="servis-change-style5-h5">Planning5</h5>
                <p className="servis-change-style5-p">
                  Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod
                  tempor incididunt ut labore.
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>

      <div className="our-servis-icon-article">
        <a className="our-servis-card servis-change-style1" href="">
          <div className="our-servis-interior1">
            <img
              className="servis-change-style1-img"
              src="images/sd.png"
              alt="our-servis-interior"
            />
            <div className="our-servis-card-text">
              <h5 className="servis-change-style1-h5">Planning1</h5>
              <p className="servis-change-style1-p">
                Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod
                tempor incididunt ut labore.
              </p>
            </div>
          </div>
        </a>
        <a className="our-servis-card servis-change-style2" href="">
          <div className="our-servis-interior1">
            <img
              className="servis-change-style2-img"
              src="images/sd.png"
              alt="our-servis-interior"
            />
            <div className="our-servis-card-text">
              <h5 className="servis-change-style2-h5">Planning2</h5>
              <p className="servis-change-style2-p">
                Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod
                tempor incididunt ut labore.
              </p>
            </div>
          </div>
        </a>
        <a className="our-servis-card servis-change-style3" href="">
          <div className="our-servis-interior1">
            <img
              className="servis-change-style3-img"
              src="images/sd.png"
              alt="our-servis-interior"
            />
            <div className="our-servis-card-text">
              <h5 className="servis-change-style3-h5">Planning3</h5>
              <p className="servis-change-style3-p">
                Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod
                tempor incididunt ut labore.
              </p>
            </div>
          </div>
        </a>
        <a className="our-servis-card servis-change-style4" href="">
          <div className="our-servis-interior1">
            <img
              className="servis-change-style4-img"
              src="images/sd.png"
              alt="our-servis-interior"
            />
            <div className="our-servis-card-text">
              <h5 className="servis-change-style4-h5">Planning4</h5>
              <p className="servis-change-style4-p">
                Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod
                tempor incididunt ut labore.
              </p>
            </div>
          </div>
        </a>
        <a className="our-servis-card servis-change-style5" href="">
          <div className="our-servis-interior1">
            <img
              className="servis-change-style5-img"
              src="images/sd.png"
              alt="our-servis-interior"
            />
            <div className="our-servis-card-text">
              <h5 className="servis-change-style5-h5">Planning5</h5>
              <p className="servis-change-style5-p">
                Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod
                tempor incididunt ut labore.
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Planning;
