import React from "react";

export default function CheckoutSteps({ activeStep = 0 }) {
  return (
    <div className="mb-5 flex flex-wrap">
      {["User Login", "Shipping Address", "Payment Method", "Place Order"].map(
        (step, index) => (
          <div
            key={step}
            className={`flex-1 border-b-2
        text-center
     ${
       index <= activeStep
         ? "border-Takealotblue  text-Takealotblue"
         : "border-gray-400 text-gray-300"
     }

     `}
          >
            {step}
          </div>
        )
      )}
    </div>
  );
}
