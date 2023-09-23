"use client";
import { Menu, Transition } from "@headlessui/react";
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";
import { Bars3Icon, BellIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { Fragment } from "react";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
const userNavigation = [
  { name: "Your profile", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

type Props = {
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Header({ setSidebarOpen }: Props) {
  return (
    <div className="z-40 flex shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4  sm:gap-x-6 sm:px-6 lg:px-6  rounded-[20px]">
      <button
        type="button"
        className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
        onClick={() => setSidebarOpen(true)}
      >
        <span className="sr-only">Open sidebar</span>
        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
      </button>

      {/* Separator */}
      <div className="h-6 w-px bg-gray-900/10 lg:hidden" aria-hidden="true" />

      <div className="flex flex-1 gap-x-4 lg:gap-x-6 py-8">
        <div className="peer relative p-2">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <MagnifyingGlassIcon className="pointer-events-none absolute inset-y-0 left-5 h-full w-7 text-[#3B3E44]" />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="w-full py-4 pl-10 pr-3 outline-none border border-[#3B3E44]/20  focus:outline-none placeholder:text-[#3B3E44] placeholder:text-base rounded-[30px] focus:ring-primary"
          />
        </div>
        <div className="peer-hover:hidden md:peer-hover:flex ml-auto flex items-center gap-x-4 lg:gap-x-6">
          <button
            type="button"
            className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500 relative"
          >
            <span className="sr-only">View notifications</span>
            <BiMessageRoundedDetail className="h-8 w-8" aria-hidden="true" />
            <div className="badge-primary">6</div>
          </button>
          <button
            type="button"
            className="-m-2.5 p-2.5 relative text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">View notifications</span>
            <BellIcon className="h-8 w-8" aria-hidden="true" />
            <div className="badge-warn">10</div>
          </button>
          {/* Profile dropdown */}
          <Menu as="div" className="relative">
            <Menu.Button className="-m-1.5 flex items-center p-1.5">
              <span className="sr-only">Open user menu</span>
              <Image
                className="rounded-full bg-gray-50"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
                width={50}
                height={50}
              />
              <span className="hidden lg:flex lg:items-center">
                <ChevronDownIcon
                  className="ml-2 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                {userNavigation.map((item) => (
                  <Menu.Item key={item.name}>
                    {({ active }) => (
                      <a
                        href={item.href}
                        className={classNames(
                          active ? "bg-gray-50" : "",
                          "block px-3 py-1 text-sm leading-6 text-gray-900"
                        )}
                      >
                        {item.name}
                      </a>
                    )}
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </div>
  );
}
