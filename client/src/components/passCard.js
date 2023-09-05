import axios from "axios"
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";

export const PassCard = (props) => {

    const [savedPasses, setSavedPasses] = useState([]);
  
    useEffect(() => {
      const fetchSavedPasses = async () => {
        try {
          const response = await axios.get(
            `http://localhost:${5000}/pass`
          );
          setSavedPasses(response.data);
        } catch (err) {
          console.log(err);
        }
      }
      fetchSavedPasses();
    },[]);

    const displayInfo = (event, info) => {
      alert(info)
    }


    return (
<div className="cards">
  
  {savedPasses.map((pass) =>
      
      <div className="card" key={pass._id}>
        <div className="opponent">{pass.Opponent}</div>
        <div className="quantity">Quantity; {pass.quantity}</div>
        <div className="price">Price: ${pass.price} each</div>
        <div className="type">Classification: {pass.type}</div>
        <div className="guest">{pass.guest ? 'Guest pass included ' : 'Guest pass not included '}</div>
        <div className="phNumber">Contact: {pass.phoneNumber}</div>
      </div>
  )}
</div>
    )
}