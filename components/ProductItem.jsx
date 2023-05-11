import Image from "next/image";
import Link from "next/link";
import React from "react";
import Rating from "./Rating";

export default function ProductItem({ product }) {
  return (
    <div
      className="h-full w-full bg-gray-400 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 shadow-sm"
      id="shop"
    >
      <div>
        <div className="h-[300px] mb-4 md:mb-0 md:mr-0 flex flex-col items-center justify-center p-1.5">
          <Link href={`/product/${product.slug}`}>
            <Image
              src={product.image}
              width={300}
              height={450}
              quality={100}
              priority
              alt={product.name}
            />
          </Link>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center p-5">
        <p className="text-lg">{product.name}</p>
        <p className=" text-blue-500 mb-2">{product.brand}</p>
        <p className="mb-2">R{product.price}</p>

        <div className="mb-2">
          <Rating rating={product.rating} numReviews={""}></Rating>
        </div>

        <button
          className="relative inline-flex
      items-center justify-center p-4 px-5 py-2 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 "
          type="button"
        >
          <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-sky-500"></span>
          <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-sky-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
          <span className="relative text-white flex gap-2">
            View
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
                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </span>{" "}
          </span>
        </button>
      </div>
    </div>
  );
}
