import React from "react";
import {
  FacebookOutlined,
  GithubOutlined,
  InstagramOutlined,
  TwitterOutlined,
} from "@ant-design/icons";

import { integralCF } from "@/font/Font";
import Image from "next/image";
const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-200 py-8 px-4 md:px-6 lg:px-8 bg-gray-50 ">
      <div className="container2 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="col-span-1 lg:col-span-1">
            <h2 className={`${integralCF.className}  text-2xl font-bold mb-4`}>
              SHOP.CO
            </h2>
            <p className="text-sm text-gray-600 mb-6">
              We have clothes that suits your style and which you&apos;re proud
              to wear. From women to men.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="rounded-full bg-white p-2 border border-gray-200 hover:bg-gray-100"
              >
                <TwitterOutlined size={18} />
              </a>
              <a
                href="#"
                className="rounded-full bg-white p-2 border border-gray-200 hover:bg-gray-100"
              >
                <FacebookOutlined size={18} />
              </a>
              <a
                href="#"
                className="rounded-full bg-white p-2 border border-gray-200 hover:bg-gray-100"
              >
                <InstagramOutlined size={18} />
              </a>
              <a
                href="#"
                className="rounded-full bg-white p-2 border border-gray-200 hover:bg-gray-100"
              >
                <GithubOutlined size={18} />
              </a>
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4">COMPANY</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Works
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Career
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4">HELP</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Customer Support
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Delivery Details
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4">FAQ</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Account
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Manage Deliveries
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Orders
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Payments
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4">RESOURCES</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Free eBooks
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Development Tutorial
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  How to - Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Youtube Playlist
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 mb-4 md:mb-0">
            Shop.co © 2000-2023, All Rights Reserved
          </p>

          <div className="flex items-center space-x-3 max-[568px]:flex-wrap">
            <Image
              src="/visa.svg"
              alt="Visa"
              width={100}
              height={100}
              className="cursor-pointer max-[400px]:!w-auto max-[400px]:h-auto"
            />
            <Image
              src="/mastercard.svg"
              alt="Mastercard"
              width={100}
              height={100}
              className="cursor-pointer max-[400px]:!w-auto max-[400px]:h-auto"
            />
            <Image
              src="/paypal.svg"
              alt="PayPal"
              width={100}
              height={100}
              className="cursor-pointer max-[400px]:!w-auto max-[400px]:h-auto"
            />
            <Image
              src="/apple.svg"
              alt="Apple Pay"
              width={100}
              height={100}
              className="cursor-pointer max-[400px]:!w-auto max-[400px]:h-auto"
            />
            <Image
              src="/google.svg"
              alt="Google Pay"
              width={100}
              height={100}
              className="cursor-pointer max-[400px]:!w-auto max-[400px]:h-auto"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
