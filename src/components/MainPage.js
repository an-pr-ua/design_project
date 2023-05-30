import AboutUs from "./AboutUs";
import Completed3000 from "./Completed3000";
import OurServise from "./OurServise";
import TwentyYears from "./TwentyYears";
import Testimonials from "./Testimonials";
import LetestNews from "./LetestNews";
import Form from "./Form";
import ModernInterior from "./ModernInterior";
import Scrap from "./Scrap";

function MainPage() {
  return (
    <div className="MainPage">
      <div className="MainPage1">
        <div className="page1">
          <ModernInterior />
        </div>
        <div className="page2">
          <OurServise />
        </div>
        <div className="page3">
          <AboutUs />
        </div>
        <div className="page4">
          <TwentyYears />
        </div>
        <Scrap />
      </div>
      <div id="page5" className="page5">
        <Scrap />
        <Completed3000 />
      </div>
      <div className="page6">
        <Scrap />
        <Testimonials />
      </div>
      <div className="page7">
        <Scrap />
        <LetestNews />
      </div>
      <div className="page8">
        <Scrap />
        <Form />
      </div>
      <Scrap />
    </div>
  );
}

export default MainPage;
