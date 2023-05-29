import { useEffect, useState } from "react";
import { motion } from "framer-motion"


export default function PostLayoutTen () {
    const [count , setCount] = useState({parts: 0,parishes: 0,customers:0})

    
   useEffect(() => {
    const intervalId = setInterval(() => {

        setCount((prevCount) => {
         const updatedValue = prevCount.parts + 1
         const updatedParish = prevCount.parishes + 1
         const updatedCustomer = prevCount.customers + 1
    
        if (updatedValue <= 5000 && updatedParish <=  14 && updatedCustomer <= 2000) {
            return {...prevCount, parts : updatedValue, parishes:updatedParish,customers: updatedCustomer}

        }
        else if (updatedValue <= 5000 && updatedParish <=  14) {

            return {...prevCount, parts : updatedValue, parishes:updatedParish}

         } else if(updatedValue <= 5000 && updatedCustomer <= 2000) {
            return {...prevCount, parts : updatedValue, customers: updatedCustomer}

         }
         else if(updatedParish <= 14 && updatedCustomer <= 2000)
         {
            return {...prevCount, parishes:updatedParish, customers: updatedCustomer}

         }
         else if(updatedParish <= 14)
         {
            return {...prevCount, parishes:updatedParish}

         }
         else if(updatedValue <= 5000)
         {
            return {...prevCount, parts:updatedValue}

         }
         else if(updatedCustomer <= 2000)
         {
            return {...prevCount, customers:updatedCustomer}

         }
         else {
            return prevCount
         }

        })
    }, 0.0000111)

    return () => {
        clearInterval(intervalId)
    };

   },[])

    return(
        <>
            <div className="mt-5">
            <div className="progress">
                <div className="progress-bar progress-bar-striped progress-bar-animated  bg-danger" role="progressbar" style={{width: "15%"}} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" style={{width: "30%"}} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                <div className="progress-bar progress-bar-striped progress-bar-animated bg-danger" role="progressbar" style={{width: "20%"}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div className="border border-4 bg-danger mt-2">
                <div className="d-flex align-items-center justify-content-center mt-5" style={{display:"block"}}>
                    <div className="mb-5">
                        <div className="display-1 text-center">{count.parts}+ </div>
                        <div className="blockquote-footer mt-2 fs-2">Parts Sold</div>

                    </div>

                </div>
                
                <div className="d-flex align-items-center justify-content-center mt-5" style={{display:"block"}}>
                    <div className="mb-5">
                        <div className="display-1 text-center">{count.parishes}</div>
                        <div className="blockquote-footer mt-2 fs-2">Different Parishes</div>
                    </div>
                </div>
                
                <div className="d-flex align-items-center justify-content-center mt-5" style={{display:"block"}}>
                    <div className="mb-5">
                        <div className="display-1 text-center">{count.customers}</div>
                        <div className="blockquote-footer mt- fs-2">Customers Satisfied
                            <div className="text-center fs-2">across Jamaica</div>

                        </div>
                    </div>
                </div>
                
                </div>
            </div>
            <div className="bg-light">
                <h1 className="fw-light text-center mt-3">How it Works ? </h1>

            <div className=" mt-4 mb-5">
                <div className="progress mb-4" style={{height : "1px"}}>
                    <div className="progress-bar bg-danger" role="progressbar" style={{width: "20%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div className="text-center mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-person-fill-up" viewBox="0 0 16 16">
                <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.354-5.854 1.5 1.5a.5.5 0 0 1-.708.708L13 11.707V14.5a.5.5 0 0 1-1 0v-2.793l-.646.647a.5.5 0 0 1-.708-.708l1.5-1.5a.5.5 0 0 1 .708 0ZM11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                <path d="M2 13c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Z"/>
                </svg></div>
                    <div className="shadow-lg p-3 mb-5 bg-body rounded text-center">Place Your Order</div>

                    <div className="progress mb-4" style={{height : "1px"}}>
                    <div className="progress-bar bg-danger" role="progressbar" style={{width: "80%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>  

                    <div className="text-center mb-5">

                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-alarm-fill" viewBox="0 0 16 16">
                    <path d="M6 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H9v1.07a7.001 7.001 0 0 1 3.274 12.474l.601.602a.5.5 0 0 1-.707.708l-.746-.746A6.97 6.97 0 0 1 8 16a6.97 6.97 0 0 1-3.422-.892l-.746.746a.5.5 0 0 1-.707-.708l.602-.602A7.001 7.001 0 0 1 7 2.07V1h-.5A.5.5 0 0 1 6 .5zm2.5 5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5zM.86 5.387A2.5 2.5 0 1 1 4.387 1.86 8.035 8.035 0 0 0 .86 5.387zM11.613 1.86a2.5 2.5 0 1 1 3.527 3.527 8.035 8.035 0 0 0-3.527-3.527z"/>
                    </svg>
                    </div>

                    <div className="shadow-lg p-3 mb-5 bg-body rounded text-center">We Source , Prepare and Package Your Order</div>


                    <div className="progress mb-4" style={{height : "1px"}}>
                    <div className="progress-bar bg-danger" role="progressbar" style={{width: "100%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                </div>

                <div className="text-center mb-5">

                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-box2" viewBox="0 0 16 16">
                <path d="M2.95.4a1 1 0 0 1 .8-.4h8.5a1 1 0 0 1 .8.4l2.85 3.8a.5.5 0 0 1 .1.3V15a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4.5a.5.5 0 0 1 .1-.3L2.95.4ZM7.5 1H3.75L1.5 4h6V1Zm1 0v3h6l-2.25-3H8.5ZM15 5H1v10h14V5Z"/>
                </svg>
                </div>
                    <div className="shadow-lg p-3 mb-5 bg-body rounded text-center">Your Order is Ready For Pickup in Two Weeks or Less</div>
                    
                </div>
            </div>
           
        </>
    )
}