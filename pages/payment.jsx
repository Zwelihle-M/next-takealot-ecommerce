
import CheckoutSteps from "@/components/CheckoutSteps";
import { Store } from "@/utils/Store";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function PaymentPage() {
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
    const {state, dispatch} = useContext(Store);
    const {cart} = state;
    const {shippingAddress, paymentMethod} = cart;


    const router = useRouter();


    const submitHandler = (e) =>{
        e.preventDefault();
        if(!selectedPaymentMethod){
            return toast.error("Please select a payment method")
        }
        dispatch({type:"Save_Payment_Method", payload: selectedPaymentMethod});
        Cookies.set(
            "cart",JSON.stringify({
                ...cart,paymentMethod: selectedPaymentMethod
            })
        );
        router.push("/placeorder")

    }

    useEffect(() =>{

        if(!shippingAddress.address) {
            return router.push("/shipping")
        }
        setSelectedPaymentMethod(paymentMethod || "")

    },[paymentMethod, router, shippingAddress.address]);

  return (
    <div className="sm:py-16 px-6 py-6 flex justify-center items-start">
      <div className="xl:max-w-[1280px] w-full">
        <CheckoutSteps activeStep={2} />
        <form className="mx-auto max-w-screen-md" onSubmit={submitHandler}>
          <h1>Payment Method</h1>
          {["PayPal", "Stripe", "CashOnDelivery"].map((payment) => (
            <div key={payment} className="mb-4">
              <input
                name="paymentMethod"
                className="p-2 outline-none focus:ring-0"
                id={payment}
                type="radio"
                checked={selectedPaymentMethod === payment}
                onChange={() => setSelectedPaymentMethod(payment)}
              />

              <label className="p-2" htmlFor={payment}>
                {payment}
              </label>
            </div>
          ))}
          <div className="mb-4 flex justify-between">
            <button
              onClick={() => router.push("/shipping")}
              type="button"
              className=" relative items-center justify-center p-4 px-5 py-2 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1"
            >
                             <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-sky-500"></span>
                <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-sky-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                <span className="relative text-white flex gap-2">
                  Back
 
                </span>
            </button>
            <div>
            <button
                className="relative inline-flex
      items-center justify-center p-4 px-5 py-2 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 "
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-sky-500"></span>
                <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-sky-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                <span className="relative text-white flex gap-2">
                  Next
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                </span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}


PaymentPage.auth =true;