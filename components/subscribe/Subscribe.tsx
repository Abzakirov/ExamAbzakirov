import { integralCF } from "@/font/Font";
import { Button, Input } from "antd";
import { Mail } from "lucide-react";
import React from "react";

const NewsletterSubscribe = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="bg-black rounded-lg p-4 sm:p-6 md:p-8 lg:p-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="w-full md:w-1/2">
            <h1
              className={`${integralCF.className} text-start text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight`}
            >
              STAY UP TO DATE ABOUT <br className="hidden sm:block" /> OUR
              LATEST OFFERS
            </h1>
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-3">
            <Input
              prefix={<Mail size={18} />}
              placeholder="Enter your email address"
              size="large"
              className="w-full"
            />
            <Button type="primary" size="large" className="w-full">
              Subscribe to Newsletter
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSubscribe;
