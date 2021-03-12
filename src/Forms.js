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
        <div class="form-group">
          <label for="test">Email address</label>
          <input onChange={handleChange} type="email" class="form-control" id="test" aria-describedby="emailHelp" placeholder={formval}></input>
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label for="test">Password</label>
          <input type="password" class="form-control" id="test" placeholder="enter pwd"></input>
        </div>
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="test"></input>
          <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
      </div>
    );
}

  export default FormTest;
