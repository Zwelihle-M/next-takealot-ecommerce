import NavigationBar from "@/components/NavigationBar";
import { Store } from "@/utils/Store";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import dynamic from "next/dynamic";
import axios from "axios";
import { toast } from "react-toastify";

function CartPage() {
  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  const removeItemHandler = (item) => {
    dispatch({ type: "Remove_Cart_Item", payload: item });
  };

  const updateCartHandler = async (item, qty) => {
    const quantity = Number(qty);
    const { data } = await axios.get(`/api/products/${item._id}`);
    if (data.countInStock < quantity) {
      return toast.error("Sorry. Product is out of stock");
    }
    dispatch({ type: "Add_Cart_Item", payload: { ...item, quantity } });
  };
  return (
    <div>
      <div className="sm:px-16 px-6 flex justify-center items-center">
        <div className="xl:max-w-[1280px] w-full">
          <NavigationBar />
        </div>
      </div>

      {cartItems.length === 0 ? (
        <div className="sm:py-16 px-6 py-6 flex justify-center items-start">
          <div className="xl:max-w-[1280px] w-full">
            Shopping Cart is Empty... <br />
            <Link href={"/"}>Go back to shopping</Link>
          </div>
        </div>
      ) : (
        <div className="sm:py-16 px-2 py-6 flex justify-center items-start">
          <div className="xl:max-w-[1280px] w-full">
            <div className="grid md:grid-cols-4 md:gap-5">
              <div className="overflow-x-auto md:col-span-3 card ">
                <table className="min-w-full">
                  <thead className="border-b">
                    <tr>
                      <th className="px-5 text-left">Item</th>
                      <th className="p-5 text-right">Quantity</th>
                      <th className="p-5 text-right">Price</th>
                      <th className="p-5">Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <tr key={item.slug} className="border-b">
                        <td>
                          <Link href={`/product/${item.slug}`}>
                            <div className="flex items-center">
                              <Image
                                src={item.image}
                                alt={item.name}
                                width={150}
                                height={50}
                                quality={100}
                                priority
                              ></Image>
                              &nbsp;
                              {item.name}
                            </div>
                          </Link>
                        </td>

                        <td className="p-5 text-right">
                          <select
                            value={item.quantity}
                            onChange={(e) =>
                              updateCartHandler(item, e.target.value)
                            }
                            className="rounded-md border border-gray-300 p-1"
                          >
                            {[...Array(item.countInStock).keys()].map((x) => (
                              <option key={x + 1} value={x + 1}>
                                {x + 1}
                              </option>
                            ))}
                          </select>
                        </td>
                        <td className="p-5 text-right">R{item.price}</td>

                        <td className="p-5 text-center">
                          <button onClick={() => removeItemHandler(item)}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              className="w-6 h-6"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="card p-5">
                <ul>
                  <li>
                    <div className="pb-3 text-lg font-medium">
                      Total ({cartItems.reduce((a, c) => a + c.quantity, 0)})
                      {""}: R{" "}
                      {cartItems.reduce((a, c) => a + c.quantity * c.price, 0)}
                    </div>
                  </li>

                  <li>
               

                    <button
                      className="w-full relative inline-flex
      items-center justify-center p-4 px-5 py-2 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 "
      onClick={() => router.push("login?redirect=/shipping")}>
                      <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-sky-500"></span>
                      <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-sky-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                      <span className="relative text-white flex gap-2">
                        Checkout 
                      </span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default dynamic(() => Promise.resolve(CartPage), { ssr: false });
