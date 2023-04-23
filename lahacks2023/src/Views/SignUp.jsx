import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import '../styles.css';
import PlaceSelector from "../Components/PlaceSelector"
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const parseDate =(string) => {
        var parts_of_date = string.split("/")
        var month = parts_of_date[0] 
        var day = parts_of_date[1]
        if (month.length == 1) {
            month = "0" + month 
        }
        if (day.length == 1) {
            day = "0" + day
        }
        
        return parts_of_date[2] + '-' + month + '-' + day
        
        
    }
    
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    
    const onSubmit = async (event) => {
        event.preventDefault();
        if (city !== "") {
            var date = new Date();
            var formdata = new FormData();

            formdata.append("email", location.state.email);
            formdata.append("fname", fname);
            formdata.append("lname", lname);
            formdata.append("city", city);
            formdata.append("country", country);
            formdata.append("account_date", parseDate(
                date.toLocaleDateString('en-US', { timeZone: 'America/Los_Angeles' }),
                true,
              ));
        }

            var requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
            };

            fetch("http://localhost:8000/users", requestOptions)
            .then(response => response.text())
            .then(result => navigate('/home', {state:{uid:JSON.parse(result)["uid"]}}))
            .catch(error => console.log('error', error));
            
        }
        

    
        

    return (
        
        <div className="page">
        <h1>Sincerely,</h1>
       <form className="form" onSubmit={onSubmit}>
       
           
            <input id="fname" placeholder="First Name" value={fname} onChange={(newValue) => setFname(newValue.target.value) } required/>
            <input id="lname" placeholder="Last Name" value={lname} onChange={(newValue) => setLname(newValue.target.value)} required/>
  
            <div className="country">
            <PlaceSelector setCity={setCity} setCountry={setCountry} />
            </div>
            

            <div className="btn-container">
                <button type="submit" value="Submit">Create a New Account</button>
            </div>
           
           
            
            
            
       </form>
       </div>
    
    )
}

export default SignUp;