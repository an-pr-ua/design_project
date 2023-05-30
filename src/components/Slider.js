import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Slider() {
    return(

<div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
    <div className='item'>
        <img
          className="d-block w-100"
          src="images/Group 82.png"
          alt="Second slide"
        />
         <img
          className="d-block w-100"
          src="images/Group 83.png"
          alt="Second slide"
        />
      </div>
    </div>
    <div class="carousel-item">
    <div className='item'>
        <img
          className="d-block w-100"
          src="images/Group 83.png"
          alt="Second slide"
        />
         <img
          className="d-block w-100"
          src="images/Group 82.png"
          alt="Second slide"
        />
      </div>
    </div>
    <div class="carousel-item">
    <div className='item'>
        <img
          className="d-block w-100"
          src="images/Group 83.png"
          alt="Second slide"
        />
         <img
          className="d-block w-100"
          src="images/Group 83.png"
          alt="Second slide"
        />
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Предыдущий</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Следующий</span>
  </button>
</div>

);
    
}

export default Slider;
