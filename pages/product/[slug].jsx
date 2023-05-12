import NavigationBar from "@/components/NavigationBar";
import Rating from "@/components/Rating";
import Product from "@/models/Product";
import { Store } from "@/utils/Store";

import db from "@/utils/db";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";

export default function ProductPage(props) {
  const { product } = props;

  const [selectedImage, setSelectedImage] = useState(product.image);

  const images = [product.image, ...product.images];

  const { state, dispatch } = useContext(Store);

  console.log(product);

  const router = useRouter();

  if (!product) {
    return (
      <div>
        <p>Currently Unavailible</p>
      </div>
    );
  }

  const addToCartHandler = async () => {
    const existingItem = state.cart.cartItems.find(
      (x) => x.slug === product.slug
    );
    const quantity = existingItem ? existingItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${product._id}`);

    if (data.countInStock < quantity) {
      alert("Sorry but the current product is out of stock");
      return;
    }

    dispatch({ type: "Add_Cart_Item", payload: { ...product, quantity } });
    router.push("/cart");
  };

  return (
    <div>
      <div className="sm:px-16 px-6 flex justify-center items-center">
        <div className="xl:max-w-[1280px] w-full">
          <NavigationBar />
        </div>
      </div>

      <div className="sm:py-16 px-6 py-6 flex justify-center items-start">
        <div className="xl:max-w-[1280px] w-full">
          <div className="grid md:grid-cols-3 md:gap-10">
            <div className="md:col-span-1 flex flex-col items-center">
              <div>
                {/* parent Image */}

                <div>
                  <Image
                    src={selectedImage}
                    alt={product.name}
                    width={650}
                    height={550}
                    quality={100}
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="rounded-md shadow-xl "
                  />
                </div>

                {/* <div className="flex justify-center">
                  {images.map((image, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-center w-24 h-24 mx-2"
                    >
               
                      <Image
                        src={image}
                        alt={product.name}
                        width={120}
                        height={100}
                        quality={100}
                        priority
                        className="rounded-md"
                        onClick={() =>
                          setSelectedImage(index === 0 ? product.image : image)
                        }
                      />
                    </div>
                  ))}
                </div> */}
              </div>
            </div>

            <ul>
              <li className="mb-3">
                <h1 className="text-lg ">{product.name}</h1>
              </li>
              <li className="mb-2">Category:{product.category}</li>
              <li className="mb-2">
                Brand: <span className="text-blue-500">{product.brand}</span>{" "}
              </li>
              <li className="mb-2">
                <Rating rating={product.rating} numReviews={""}></Rating>
              </li>

              <li className="mb-2 text-sm">
                Description: {product.description}
              </li>
            </ul>

            <div>
              <div className="card p-5">
                <div className="mb-2 flex justify-between">
                  <div>Price</div>
                  <div>R{product.price}</div>
                </div>

                <div className="mb-2 flex justify-between">
                  <div>Status</div>
                  <div>
                    {product.countInStock > 0 ? (
                      <span className="inline-flex items-center justify-center px-2 py-1  text-sm font-bold leading-none text-white bg-green-600 rounded-full">
                        In Stock
                      </span>
                    ) : (
                      <span className="inline-flex items-center justify-center px-2 py-1  text-sm font-bold leading-none text-white bg-red-600 rounded-full">
                        Unavailable
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex justify-center">
                  <button
                    className="relative inline-flex
      items-center justify-center p-4 px-5 py-2 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 "
                    onClick={addToCartHandler}
                  >
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-sky-500"></span>
                    <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-sky-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                    <span className="relative text-white flex gap-2">
                      Add to cart
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const { slug } = params;

  await db.connect();
  const product = await Product.findOne({ slug }).lean();
  await db.disconnect();
  return {
    props: {
      product: product ? db.convertDocToObj(product) : null,
    },
  };
}
