"use client";
import React from "react";
import { DatePicker, Select, Space } from "antd";
import type { DatePickerProps } from "antd";
import ImageUploader from "./ImageUploader";

export default function CreateInvoice() {
  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  const handleChangeTrip = (value: string) => {
    console.log(`selected ${value}`);
  };
  return (
    <div className="mt-7 bg-white rounded-[10px] p-8">
      <form className=" grid grid-cols-12 gap-x-5">
        <div className="grid grid-cols-12 col-span-9 gap-x-5 gap-y-7">
          <div className="col-span-9 ">
            <label
              htmlFor="select"
              className="capitalize block text-[18px] font-semibold leading-6 text-[#3B3E44]"
            >
              select
            </label>
            <Select
              className=" rounded-[30px] w-full mt-4"
              size="large"
              defaultValue="lucy"
              onChange={handleChange}
              options={[
                { value: "jack", label: "Jack" },
                { value: "lucy", label: "Lucy" },
                { value: "Yiminghe", label: "yiminghe" },
                { value: "disabled", label: "Disabled", disabled: true },
              ]}
            />
          </div>
          <div className="col-span-3">
            <label
              htmlFor="select"
              className="capitalize block text-[18px] font-semibold leading-6 text-[#3B3E44]"
            >
              Invoice Date
            </label>
            <DatePicker
              className="mt-4 rounded-[30px] w-full"
              onChange={onChange}
              size="large"
            />
          </div>
          <div className="col-span-4 ">
            <label
              htmlFor="trip"
              className="capitalize block text-[18px] font-semibold leading-6 text-[#3B3E44]"
            >
              Trip
            </label>
            <Select
              className=" rounded-[30px] w-full mt-4"
              size="large"
              defaultValue="T2930"
              onChange={handleChangeTrip}
              options={[
                { value: "T2930", label: "T2930" },
                { value: "T2940", label: "T29340" },
                { value: "T2955", label: "T2955" },
                { value: "T2960", label: "T2960" },
              ]}
            />
          </div>
        </div>

        <div className="col-start-11 col-span-3 ">
          <label
            htmlFor="select"
            className="capitalize block text-[18px] font-semibold leading-6 text-[#3B3E44]"
          >
            Plane Image
          </label>
          <div className="mt-4">
            <ImageUploader />
          </div>
        </div>
      </form>
    </div>
  );
}
