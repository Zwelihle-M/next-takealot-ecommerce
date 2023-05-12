
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
              className="default-button"
            >
              Back
            </button>
            <button className="primary-button">Next</button>
          </div>
        </form>
      </div>
    </div>
  );
}


PaymentPage.auth =true;