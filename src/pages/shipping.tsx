import React, { ChangeEvent, useState } from 'react'
import { BiArrowBack } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

const Shipping = () => {
    const [shippingInfo, setShippingInfo] = useState({
        address: "",
        city: "",
        state: "",
        country: "",
        pinCode: ""
    });

    const navigate = useNavigate();

    const changeHandler=(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>)=>{
        setShippingInfo((prev) => ({...prev, [e.target.name]: e.target.value}))
    };
  return (
    <div className="shipping">
        <button className='back-btn' onClick={()=>navigate("/cart")}>
            <BiArrowBack/>
        </button>
        <form action="">
            <h1>Shipping Address</h1>
            <input required type="text" value={shippingInfo.address} placeholder='Address' name='address' onChange={changeHandler}/>
            <input required type="text" value={shippingInfo.city} placeholder='City' name='city' onChange={changeHandler}/>
            <input required type="text" value={shippingInfo.state} placeholder='State' name='state' onChange={changeHandler}/>
            <select required name="country" value={shippingInfo.country} onChange={changeHandler}>
                <option value="">Choose Country</option>
                <option value="india">India</option>
                <option value="america">America</option>
            </select>
            <input required type="number" value={shippingInfo.pinCode} placeholder='Pin Code' name='pinCode' onChange={changeHandler}/>
            <button type='submit'>Pay Now</button>
        </form>
    </div>
  )
}

export default Shipping