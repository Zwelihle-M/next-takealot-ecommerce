import CheckoutSteps from "@/components/CheckoutSteps";
import NavigationBar from "@/components/NavigationBar";
import { Store } from "@/utils/Store";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";

export default function ShippingPage() {
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
   
  } = useForm();

  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const { shippingAddress } = cart;

  useEffect(() => {
    if (shippingAddress) {
      setValue("fullName", shippingAddress.fullName);
      setValue("address", shippingAddress.address);
      setValue("city", shippingAddress.city);
      setValue("postalCode", shippingAddress.postalCode);
      setValue("province", shippingAddress.province);
    }
  }, [setValue, shippingAddress]);

  const router = useRouter();

  const submitHandler = ({ fullName, address, city, postalCode, province }) => {
    dispatch({
      type: "Save_Delivery_Address",
      payload: { fullName, address, city, postalCode, province },
    });
    Cookies.set(
      "cart",
      JSON.stringify({
        ...cart,
        shippingAddress: {
          fullName,
          address,
          city,
          postalCode,
          province,
        },
      })
    );
    router.push("/payment");
  };
  return (
    <div>
      <div className="sm:px-16 px-6 flex justify-center items-center">
        <div className="xl:max-w-[1280px] w-full">
          <NavigationBar />
        </div>
      </div>
      <div className="sm:px-16 px-6 flex justify-center items-center pt-12">
        <div className="xl:max-w-[1280px] w-full">
          <CheckoutSteps activeStep={1} />

          <form
            className="mx-auto maxw-w-screen-md"
            onSubmit={handleSubmit(submitHandler)}
          >
            <h1 className="mb-4 text-lg">Delivery Address</h1>

            <div className="mb-4">
              <label htmlFor="fullName" className="mb-2">
                Full Name
              </label>
              <input
                type="text"
                className="w-full rounded-lg border p-2 outline-none ring-Takealotblue focus:ring"
                id="fullName"
                autoFocus
                {...register("fullName", {
                  required: "Please enter your Full Name ",
                })}
              />
              {errors.fullName && (
                <div className="text-red-600">{errors.fullName.message}</div>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="address">Address</label>
              <input
                className="w-full rounded-lg border p-2 outline-none ring-Takealotblue focus:ring"
                id="address"
                {...register("address", {
                  required: "Please enter address",
                  minLength: {
                    value: 3,
                    message: "Address is more than 2 chars",
                  },
                })}
              />
              {errors.address && (
                <div className="text-red-700">{errors.address.message}</div>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="city">City</label>
              <input
                className="w-full rounded-lg border p-2 outline-none ring-Takealotblue focus:ring"
                id="city"
                {...register("city", {
                  required: "Please enter city",
                })}
              />
              {errors.city && (
                <div className="text-red-700 ">{errors.city.message}</div>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="postalCode">Postal Code</label>
              <input
                className="w-full rounded-lg border p-2 outline-none ring-Takealotblue focus:ring"
                id="postalCode"
                {...register("postalCode", {
                  required: "Please enter postal code",
                })}
              />
              {errors.postalCode && (
                <div className="text-red-700 ">{errors.postalCode.message}</div>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="country">Province</label>
              <input
                className="w-full rounded-lg border p-2 outline-none ring-Takealotblue focus:ring"
                id="country"
                {...register("country", {
                  required: "Please enter country",
                })}
              />
              {errors.province && (
                <div className="text-red-700 ">{errors.country.message}</div>
              )}
            </div>

            <div className="mb-4 flex justify-between">
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
          </form>
        </div>
      </div>
    </div>
  );
}

ShippingPage.auth = true;

