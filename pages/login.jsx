import NavigationBar from "@/components/NavigationBar";
import Link from "next/link";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { signIn, useSession } from "next-auth/react";
import { getError } from "@/utils/error";
import { toast } from "react-toastify";

import { useRouter } from "next/router";

export default function LoginPage() {
  const { data: session } = useSession();
  const router = useRouter();
  const { redirect } = router.query;

  useEffect(() => {
    if (session?.user) {
      router.push(redirect || "/");
    }
  }, [router, session, redirect]);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const submithandler = async ({ email, password }) => {
    try {
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });
      if (result.error) {
        toast.error(result.error);
      }
    } catch (err) {
      toast.error(getError(err));
    }
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
          <form
            className="mx-auto max-w-screen-md"
            onSubmit={handleSubmit(submithandler)}
          >
            <h1 className="mb-4 text-md">Login</h1>

            <div className="mb-4">
              <label htmlFor="email">Email</label>
              <input
                type="email "
                className="w-full rounded-lg border p-2 outline-none ring-Takealotblue focus:ring"
                id="email"
                autoFocus
                {...register("email", {
                  required: "Please enter a valid email",
                  pattern: {
                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                    message: "Please enter a valid email",
                  },
                })}
              ></input>
              {errors.email && (
                <div className="text-red-600">{errors.email.message}</div>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="email">Password</label>
              <input
                type="password"
                className="w-full  rounded-lg border p-2 outline-none ring-Takealotblue focus:ring"
                id="password"
                autoFocus
                {...register("password", {
                  required: "Please enter your password",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
              ></input>
              {errors.password && (
                <div className="text-red-600">{errors.password.message}</div>
              )}
            </div>

            <div className="mb-4">
              <button
                className="relative inline-flex
      items-center justify-center p-4 px-6 py-2 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 "
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-sky-500"></span>
                <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-sky-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                <span className="relative text-white flex gap-2">Login</span>
              </button>
            </div>

            

            <div className="mb-4">
              <p>
                Don{"'"}t have an Account? &nbsp;
                <Link href={"register"}>Register</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
