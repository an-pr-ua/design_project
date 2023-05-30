function Form() {
  return (
    <div className="Form">
      <h2>DON’T FORGET TO SIGN UP</h2>
      <hr/>
      <p>
        Find out early about all upcoming promotions and new product releases
        with<br/> our newsletter.
      </p>
      
      <div className="form-div">
      <div className="form-floating mb-7 top-button">
        
        <input
          type="text"
          className="form-control text-bg-light"
          id="exampleFormControlInput1"
          placeholder="Enter your name...."
          required
          pattern="[a-zA-ZА-Яа-я]*"
        />
        <label for="exampleFormControlInput1" className="form-label">
        Enter your name....
        </label>
      </div>
      <div className="form-floating mb-7 top-button">
        
        <input
          type="text"
          className="form-control text-bg-light"
          id="exampleFormControlInput1"
          placeholder="Enter your surname...."
          required
          pattern="[a-zA-ZА-Яа-я]*"
        />
        <label for="exampleFormControlInput1" className="form-label">
        Enter your surname....
        </label>
      </div>
      </div>
      <div className="form-floating mb-7 bottom-button">
        <input
          type="email"
          className="form-control border-bottom text-bg-light"
          id="exampleFormControlInput2"
          placeholder="Email"
          required
        />
        <label for="exampleFormControlInput2" className="form-label">
        Enter your e-mail....
        </label>
      </div>
      <form action="https://google.com">
                 <button className="button-contact">SUBSCRIBE</button>
      </form>
    </div>
  );
}

export default Form;
