import React, { useContext, useEffect, useState, Fragment } from "react";
import MoonAnimation from "./MoonAnimation";
import SunAnimation from "./SunAnimation";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import TakealotLogo from "../public/images/TakealotLogo.svg";
import { signOut, useSession } from "next-auth/react";
import { Menu, Transition } from "@headlessui/react";
import Cookies from "js-cookie";
import { Store } from "@/utils/Store";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavigationBar() {
  const { status, data: session } = useSession();
  const { dispatch } = useContext(Store);

  const [navigation, setNavigation] = useState(false);
  // dark//light theme
  const { systemTheme, theme, setTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);
  // hydration
  const [mounted, setMounted] = useState(false);

  const renderThemeChanger = () => {
    // hydration
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <div onClick={() => setTheme("light")}>
          <SunAnimation />
        </div>
      );
    } else {
      return (
        <div onClick={() => setTheme("dark")}>
          <MoonAnimation />
        </div>
      );
    }
  };

  const logoutClickHandler = () => {
    Cookies.remove("cart");
    dispatch({ type: "Reset_Cart" });
    signOut({ callbackUrl: "/login" });
  };

  return (
    <header>
      <nav className="w-full flex py-6 justify-between items-center ">
        <div>
          <Image
            src={TakealotLogo}
            alt="capitec bank Logo"
            quality={100}
            width={160}
            height={37}
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        <ul className="list-none sm:flex hidden justify-end items-center flex-1">
          <Link
            href={"/"}
            className="ml-10 text-md cursor-pointer duration-200 ease-out hover:scale-105 capitalize"
          >
            home
          </Link>

          <li className="ml-10 text-md cursor-pointer duration-200 ease-out hover:scale-105 capitalize">
            {status === "loading" ? (
              "Loading"
            ) : session?.user ? (
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 ">
                    {session.user.name}
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href="/profile"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Profile
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href="/order-history"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Order History
                          </Link>
                        )}
                      </Menu.Item>

                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href="#"
                            onClick={logoutClickHandler}
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block w-full px-4 py-2 text-left text-sm"
                            )}
                          >
                            Sign out
                          </Link>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            ) : (
              <Link href={"/login"} className="">
                signIn
              </Link>
            )}
          </li>

          <Link
            href={"/cart"}
            className="ml-10 text-md cursor-pointer duration-200 ease-out hover:scale-105 capitalize"
          >
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
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
          </Link>
          <button className="ml-10 cursor-pointer transition-all ease-in-out duration-1000 ">
            {renderThemeChanger()}
          </button>
        </ul>
        {!navigation && (
          <button
            className="sm:hidden flex flex-1 justify-end items-center"
            onClick={() => setNavigation(true)}
          >
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
                d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
              />
            </svg>
          </button>
        )}

        <div
          className={
            navigation
              ? "md:hidden fixed left-0 top-0 w-full h-full bg-black/5 backdrop-blur p-6 "
              : ""
          }
        >
          <div
            className={
              navigation
                ? "fixed left-0 top-0 w-4/5 h-full bg-white p-10 ease-in duration-500"
                : "fixed top-0 left-[-100%] p-10 h-full ease-in duration-200"
            }
          >
            <div>
              <div className="flex w-full items-center justify-between ">
                <Image
                  src={TakealotLogo}
                  alt="capitec bank Logo"
                  width={120}
                  height={64}
                  quality={100}
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                <button
                  onClick={() => setNavigation(false)}
                  className="p-3 cursor-pointer text-gray-900"
                >
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
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div>
              <ul className="mt-24 flex flex-col h-fit gap-1 text-gray-900 ">
                <Link
                  href={"/"}
                  className="text-lg py-4 tracking-wider cursor-pointer text-gray-900 capitalize mr-0"
                >
                  home
                </Link>

                <Link
                  href={"/profile"}
                  className="text-lg py-4 tracking-wider cursor-pointer text-gray-900 capitalize mr-0"
                >
                  Profile
                </Link>

                <Link href="/order-history" className="text-lg py-4 tracking-wider cursor-pointer text-gray-900 capitalize mr-0">Order History</Link>

                <Link
                  href={"/cart"}
                  className="text-lg py-4 tracking-wider cursor-pointer text-gray-900 capitalize mr-0"
                >
                  cart
                </Link>
                <Link href={"/login"} className="text-lg py-4 tracking-wider cursor-pointer text-gray-900 capitalize mr-0">
                  signIn
                </Link>

                <Link href="#" onClick={logoutClickHandler} className="text-lg py-4 tracking-wider cursor-pointer text-gray-900 capitalize mr-0">
                  Sign out
                </Link>
                <button className="text-gray-900 cursor-pointer transition-all duration-700 py-4">
                  {renderThemeChanger()}
                </button>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
