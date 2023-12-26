import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = (props) => {
    let navigate = useNavigate();
    const { id } = useParams();
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: "",
    });
    console.log(props.targerValue);

    const { name, username, email, phone, website } = user;
    const onInputChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value});
    };

    useEffect(() => {
        loadUser();
    }, []);

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(
            `https://62736209a6522e24ac46aea5.mockapi.io/${props.targetValue}/${id}`,
            user
        );
        navigate("/");
    };

    const loadUser = async () => {
        const result = await axios.get(
            `https://62736209a6522e24ac46aea5.mockapi.io/${props.targetValue}/${id}`
        );
        setUser(result.data);
    };
    return(
        <div className="container ">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Edit A User</h2>
                <form onSubmit={(e) => onSubmit(e)}>
                    <div className="form-group">
                        <input 
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter Your Name"
                        name="name"
                        value={name}
                        onChange={(e) => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input 
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter Your UserName"
                        name="username"
                        value={username}
                        onChange={(e) => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input 
                        type="email"
                        className="form-control form-control-lg"
                        placeholder="Enter Your Email Address"
                        name="email"
                        value={email}
                        onChange={(e) => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input 
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter Your phone Number"
                        name="phone"
                        value={phone}
                        onChange={(e) => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input 
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter Your Website Name"
                        name="website"
                        value={website}
                        onChange={(e) => onInputChange(e)}
                        />
                    </div>
                    <button className="btn btn-warning btn-block">Update User</button>
                </form>
            </div>
        </div>
    );
};

export default EditUser;