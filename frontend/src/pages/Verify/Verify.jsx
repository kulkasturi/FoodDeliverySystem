import React, { useContext } from 'react'
import './Verify.css'
import { Navigate, useSearchParams } from 'react-router-dom'
import axios from 'axios';

const Verify = () => {

    const [searchParams,setSearchParams] = useSearchParams();
    const success = searchParams.get("success")
    const orderId = searchParams.get("orderId")
    const {url} = useContext(StoreContext);


    const verifyPayment = async () => {
        const response = await axios.post(url+"/api/order/verify",{success,orderId});
        if(response.data.success) {
            Navigate("/myorders");
        }
        else{
            Navigate("/")
        }
    }


    useEffect(()=>{
        verifyPayment();
    },[])

  return (
    <div className='verify'>
    <div className='spinner'></div>
      
    </div>
  )
}

export default Verify
