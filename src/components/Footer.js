import Hours from "./Hours";
import "react-clock/dist/Clock.css";
// import Scrap from "./Scrap";

function Footer() {
  // setTimeout(function () {
  //   alert(
  //     "CLICK on the switch in the upper right corner of the page and select the required viewing mode: -clock, -day or -night."
  //     // "ТИЦЬКНИ на перемикач в правому верхньому куточку сторінки, та обери необхідний режим перегляду: -годинник, -денний або -нічний."
  //   );
  // }, 2000);
  return (
    <div className="Footer">
      {/* <Scrap/> */}
      <div className="in-footer">
        <div>
          <img src="images/logo.png" alt="logo" />
          <p>
            But i must explain to you all this mistaken idea of dencouncing
            pleasure.
          </p>
        </div>
        <div>
          <h5>Quick Links</h5>
          <p>About Our Company</p>
          <p>Services WE provide</p>
          <p>Career & Opportunity</p>
          <p>Privacy & policy</p>
          <p>Contact US</p>
        </div>
        <div>
          <h5>Company</h5>
          <p>About Company</p>
          <p>Our Testimonials</p>
          <p>Latest News</p>
          <p>Our misson</p>
          <p>Get a free Quot</p>
        </div>
        <div>
          <h5>Contact us</h5>
          <p>Sagrada Familia, Herba</p>
          <p>Street Front USA</p>
          <p>brandoxide@gmail.com</p>
          <p>002-568423591</p>
        </div>
        <div>
          <h5>Follow Us</h5>
          <div className="all-nets">
            <a href="">
              <div className="sociale-nets">
                <img src="images/Group 32.png" alt="icon-fas" />
              </div>
            </a>
            <a href="">
              <div className="sociale-nets">
                <img src="images/Group 33.png" alt="icon-tw" />
              </div>
            </a>
            <a href="">
              <div className="sociale-nets">
                <img src="images/Group 34.png" alt="icon-inst" />
              </div>
            </a>
            <a href="">
              <div className="sociale-nets">
                <img src="images/Group 35.png" alt="icon-in" />
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="hours">
        <Hours />
      </div>
    </div>
  );
}

export default Footer;
