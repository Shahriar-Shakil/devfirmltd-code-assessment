import { Breadcrumbs } from "@/interface/Breadcrumb";
import Link from "next/link";
import React, { ReactNode } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";

type Props = {
  children?: ReactNode;
  items: Breadcrumbs[];
  // name:string;
  // url:string
};

export default function PageHeading({ items, children }: Props) {
  let breadcrumbUi = items.map((item, index) => (
    <li key={item.name}>
      <Link href={item.href} className="capitalize text-[#84878B] ">
        {item.name}
        <span className="px-1">{index !== items.length - 1 && "/"}</span>
      </Link>
    </li>
  ));
  return (
    <div className="flex items-center ">
      <div className="space-y-[5px]">
        <h2 className="text-[#3B3E44] text-[26px] font-semibold">Invoice</h2>
        <ul className="flex">{breadcrumbUi}</ul>
      </div>
      {children}
    </div>
  );
}
