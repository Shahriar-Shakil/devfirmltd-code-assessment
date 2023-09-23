"use client";
import { Menu, Transition } from "@headlessui/react";
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";
import { Bars3Icon, BellIcon } from "@heroicons/react/24/outline";
import { Fragment, useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

const userNavigation = [
  { name: "Your profile", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  return (
    <>
      <div className="bg-slate-100 p-[25px] block lg:flex ">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <div className=" lg:ml-[20px] flex-grow ">
          <Header setSidebarOpen={setSidebarOpen} />
          <main className="mt-8">
            <div className="">{children}</div>
          </main>
        </div>
      </div>
    </>
  );
}
