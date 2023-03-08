import React, {  useState } from 'react';
import axios from 'axios';

function Update() {
    const [RestuarantDetails, setRestuarantDetails] = useState({
      location: "",
      foodName: "",
      restuarantName: "",
      rating: ""
    });
  
    const handleChange = (event) => {
      setRestuarantDetails({ ...RestuarantDetails, [event.target.name]: event.target.value });
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      axios.put("http://localhost:8083/api/update", RestuarantDetails).then((res) => {
        console.log(res.data);
        msg();
        setRestuarantDetails({  location: "", foodName: "", restuarantName: "",rating:""});
      });
    };

    function msg(){
        alert("THANKS FOR UPDATING A RATING")
    }
  
    return (
      <div className='newform' >
        <form  className="form">
            <h1 className='pos'>EDIT RATING</h1>
            <br></br>
          <label className='loc'>
            RESTUARANTNAME
            <input className="put" type="text" name="restuarantName" value={RestuarantDetails.restuarantName} onChange={handleChange} />
          </label>
          <br></br>
          <br></br>
          <label className='loc'>
            FOODNAME
            <input className='put' type="text" name="foodName" value={RestuarantDetails.foodName} onChange={handleChange} />
          </label>
          <br></br>
          <br></br>
          <label className='loc'>
            LOCATION:
            <input className='put' type="text" name="location" value={RestuarantDetails.location} onChange={handleChange} />
          </label>
          
          
          <br></br>
          <br></br>
          <label className='loc'>
            RATING 
            <input className='put' type="number" name="rating" value={RestuarantDetails.rating} onChange={handleChange} />
          </label>
          <br></br>
          <br></br>
          <button className='mit' onClick={handleSubmit} type="submit">UPDATE</button>
        </form>
      </div>
    );
  }
  export default Update;