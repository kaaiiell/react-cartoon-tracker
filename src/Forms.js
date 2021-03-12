import React, {useState} from 'react';

function FormTest(props){
    const [formval,setFormval] = useState("Enter Text");
    const handleChange = (event) => {
        setFormval(event.target.value);
    }
    const handleSubmit = (event) => {
      alert('duur essay was submitted: ' + formval);
      event.preventDefault();
    }
    return(
        <div style={{
            textAlign:"center",
            width: "50%",
            margin: "auto",
            marginBottom:"20px",
            borderStyle: "solid",
            padding: "5px",
        }}>
        <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="test">Email address</label>
          <input onChange={handleChange} type="email" className="form-control" id="test" aria-describedby="emailHelp" placeholder={formval}></input>
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label htmlFor="test">Password</label>
          <input type="password" className="form-control" id="test" placeholder="enter pwd"></input>
        </div>
        <div className="form-check">
          <input type="checkbox" className="form-check-input" id="test"></input>
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      </div>
    );
}

  export default FormTest;
