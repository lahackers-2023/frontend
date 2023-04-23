import LoadingSpinner from "../Components/Spinner/spinner"
import { useEffect, useState} from "react"
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";


const VerifyUser = () => {
    const { user } = useAuth0();
    const [uid, setUID] = useState(null)
    const navigate = useNavigate();


    const redirect = (obj) => {
        console.log(obj)
        let json = JSON.parse(obj);
        if (Object.keys(json).length ===0) {
            console.log(user)
            console.log(obj)
            navigate('/signup', {state: {email: user.email}})
        } else {
            console.log(json["uid"])
            navigate('/home', {state: {uid: json['uid']}})
        }
    }
    useEffect(() => {
        const getUsers = async () =>{
        
            var formdata = new FormData();
            formdata.append("email", user.email);
            console.log(user.email)

            var requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
            };

            fetch("http://localhost:8000/getuser", requestOptions)
            .then(response => response.text())
            .then(result => redirect(result))
            .catch(error => console.log('error', error));
        } 
        getUsers();
    })

    return (
        
    <div>
        <LoadingSpinner/>
    </div>
    )
}

export default VerifyUser;