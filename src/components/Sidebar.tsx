"use client";
import { NavigationItem } from "@/interface/NavigationItem";
import { Dialog, Transition } from "@headlessui/react";
import { PaperAirplaneIcon } from "@heroicons/react/20/solid";
import {
  ArrowRightOnRectangleIcon,
  ChartPieIcon,
  FolderIcon,
  HomeIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import React, { Fragment } from "react";
import { AiOutlineContacts } from "react-icons/ai";
import { BsCalendarWeek, BsMicrosoftTeams } from "react-icons/bs";
import { FaFileInvoice } from "react-icons/fa";
import { FaPeopleRoof } from "react-icons/fa6";
import { FiMessageSquare, FiPhoneCall, FiSettings } from "react-icons/fi";
import NavigationList from "./NavigationList";

const navigation: NavigationItem[] = [
  {
    name: "Dashboard",
    href: "#",
    icon: HomeIcon,
    current: true,
    hasChild: false,
  },
  {
    name: "Reservations",
    href: "#",
    icon: FiPhoneCall,
    hasChild: false,
    current: false,
  },
  {
    name: "Trips",
    href: "#",
    icon: FolderIcon,
    hasChild: true,
    current: false,
    submenu: [
      {
        name: "Trip 1 ",
        href: "#",
        icon: FolderIcon,
        hasChild: false,
        current: false,
      },
    ],
  },
  {
    name: "Invoices",
    href: "#",
    icon: FaFileInvoice,
    hasChild: false,
    current: false,
  },
  {
    name: "Planes",
    href: "#",
    icon: PaperAirplaneIcon,
    hasChild: true,
    current: false,
    submenu: [
      {
        name: "Airbus ",
        href: "#",
        icon: FolderIcon,
        hasChild: false,
        current: false,
      },
      {
        name: "Boeing 747",
        href: "#",
        icon: FolderIcon,
        hasChild: false,
        current: false,
      },
    ],
  },
  {
    name: "Amenities",
    href: "#",
    icon: ChartPieIcon,
    hasChild: false,
    current: false,
  },
  {
    name: "Contacts",
    href: "#",
    icon: AiOutlineContacts,
    hasChild: false,
    current: false,
  },
  {
    name: "Team",
    href: "#",
    icon: BsMicrosoftTeams,
    hasChild: false,
    current: false,
  },
  {
    name: "Crew Members",
    href: "#",
    icon: FaPeopleRoof,
    hasChild: false,
    current: false,
  },
  {
    name: "Files",
    href: "#",
    icon: FolderIcon,
    hasChild: false,
    current: false,
  },
  {
    name: "Messages",
    href: "#",
    icon: FiMessageSquare,
    hasChild: false,
    current: false,
  },
  {
    name: "Calendar",
    href: "#",
    icon: BsCalendarWeek,
    hasChild: false,
    current: false,
  },
  {
    name: "Setting",
    href: "#",
    icon: FiSettings,
    hasChild: false,
    current: false,
  },
];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

type Props = {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Sidebar({ sidebarOpen, setSidebarOpen }: Props) {
  return (
    <>
      {/* mobile */}
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50 lg:hidden"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-900/80" />
          </Transition.Child>

          <div className="fixed inset-0 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative mr-16 flex w-full max-w-[345px] flex-1">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                    <button
                      type="button"
                      className="-m-2.5 p-2.5"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                {/* Sidebar component, swap this element with another sidebar if you like */}
                <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-primary px-6 pr-0 pb-4">
                  <div className="flex h-16 shrink-0 items-center"></div>
                  <nav className="flex flex-1 flex-col">
                    <ul role="list" className="flex flex-1 flex-col gap-y-7">
                      <li>
                        <NavigationList navigation={navigation} />
                      </li>

                      <li className="mt-auto">
                        <a
                          href="#"
                          className="group -mx-2 flex gap-x-3 rounded-md p-2 text-base font-medium leading-6 text-white  hover:text-white"
                        >
                          <ArrowRightOnRectangleIcon
                            className="h-6 w-6 shrink-0 text-white group-hover:text-white"
                            aria-hidden="true"
                          />
                          Logout
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="hidden   lg:inset-y-0 lg:z-50 lg:flex lg:w-[345px] lg:flex-col">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="bg-primary rounded-[20px] pt-8 shadow-xl">
          <div className="flex h-16 ">
            <h3 className="text-white/50  w-full  text-center text-[40px] font-medium ">
              Logo
            </h3>
          </div>
          <div className="flex grow  flex-col gap-y-5 overflow-y-auto  pl-[45px] overflow-x-hidden pb-4 mt-6">
            <nav className="flex flex-1 flex-col ">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <NavigationList navigation={navigation} />
                </li>

                <li className="mt-auto">
                  <a
                    href="#"
                    className="group -mx-2 flex gap-x-3 rounded-md p-2 text-base font-medium leading-6 text-white  hover:text-white"
                  >
                    <ArrowRightOnRectangleIcon
                      className="h-6 w-6 shrink-0 text-white group-hover:text-white"
                      aria-hidden="true"
                    />
                    Logout
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
