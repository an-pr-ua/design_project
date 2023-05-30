import OurServiseButton from "./OurServiseButton";

function OurServise() {
  return (
    <div className="OurServise">
      <div className="our-servise-text">
        <h4>WHAT WE DO</h4>
        <h2>Our Service</h2>
      </div>
      <div className="our-servis-button">
        <OurServiseButton />
      </div>
      <div className="our-servis-icon">
        <a className="our-servis-card" href="">
          <div className="our-servis-interior1">
            <img
              src="https://an-pr-ua.github.io/design_project/images/sr.png"
              alt="our-servis-interior1"
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
      </div>
    </div>
  );
}

export default OurServise;
