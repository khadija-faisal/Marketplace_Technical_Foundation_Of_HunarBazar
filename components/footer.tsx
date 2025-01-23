import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <footer className="text-gray-600 font-montserrat ">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap md:text-left text-center order-first">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-sm mb-3">
                CONTACT US
              </h2>
              <nav className="list-none flex items-center md:items-start flex-col gap-3 mb-10">
                <li className="flex gap-4">
                  <MapPin className="h-10" />
                  <span>
                    Sapphire Retail Head Office 1.5-Km, Defence Road, Bhobtian
                    Chowk, Off Raiwind Road, Opposite University of Lahore,
                    Lahore.
                  </span>
                </li>
                <li className="flex gap-4 items-center">
                  <Mail className="h-10" />
                  <span>wecare@sapphireonline.pk</span>
                </li>
                <li className="flex gap-4 items-center">
                  <Phone className="h-10" />
                  <span>+92042 111-738-245</span>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-sm mb-3">
                CUSTOMER CARE
              </h2>
              <nav className="list-none flex flex-col gap-4 mb-10">
                <li>
                  <Link
                    href={"/"}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Exchange & Return Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/"}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/"}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Contact Us
                  </Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                INFORMATION
              </h2>
              <nav className="list-none flex flex-col gap-4 mb-10">
                <li>
                  <Link
                    href={"/"}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/"}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/"}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    SafePay Guide
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/"}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Payments
                  </Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-sm mb-3">
                NEWLETTER SIGNUP
              </h2>
              <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                  <label
                    htmlFor="footer-field"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Placeholder
                  </label>
                  <input
                    type="text"
                    id="footer-field"
                    name="footer-field"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-hashblack border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded">
                  Subscribe
                </button>
              </div>
              <p className="text-gray-500 text-sm mt-2 md:text-left text-center">
                Subscribe to our Newsletter for Exclusive Updates
              </p>
            </div>
          </div>
        </div>
        <div className="bg-gray-100">
          <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
            <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
              © COPYRIGHT 2025 SAPPHIRE
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              <Link href={"/"} className="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </Link>
              <Link href={"/"} className="ml-3 text-gray-500">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                </svg>
              </Link>
              <Link href={"/"} className="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={0}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  />
                  <circle cx={4} cy={4} r={2} stroke="none" />
                </svg>
              </Link>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
