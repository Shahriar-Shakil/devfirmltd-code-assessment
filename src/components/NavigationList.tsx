import { NavigationItem } from "@/interface/NavigationItem";
import { classNames } from "@/utils/helper";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

type Props = {
  navigation: NavigationItem[];
  submenu?: boolean;
};

export default function NavigationList({ navigation, submenu }: Props) {
  const pathname = usePathname();
  return (
    <ul role="list" className="space-y-2">
      {navigation.map((item, index) => (
        <li key={item.name}>
          {item.hasChild ? (
            <>
              <Disclosure>
                {({ open }) => {
                  let subItems = item.submenu?.map((subItem) => (
                    <li key={subItem.name}>
                      <Link
                        href={subItem.href}
                        className={classNames(
                          open
                            ? "bg-slate-100/40 text-white "
                            : "text-white/70 hover:text-white hover:bg-slate-100/40",
                          "group flex gap-x-3  text-base leading-6 font-medium py-[23.5px] px-8  items-center transition-all"
                        )}
                      >
                        <item.icon
                          className={classNames(
                            subItem.current
                              ? "text-white"
                              : "text-white/70 group-hover:text-white",
                            "h-6 w-6 shrink-0 ml-3"
                          )}
                          aria-hidden="true"
                        />
                        {subItem.name}
                      </Link>
                    </li>
                  ));

                  return (
                    <>
                      <Disclosure.Button
                        className={classNames(
                          open
                            ? "bg-slate-100/40 text-white rounded-bl-none"
                            : "text-white/70 hover:text-white hover:bg-slate-100/40",
                          "flex w-full justify-between gap-x-3  text-base leading-6 font-medium py-[23.5px] px-8  items-center transition-all rounded-l-full"
                        )}
                      >
                        <span className="flex items-center gap-x-3">
                          {" "}
                          <item.icon
                            className={classNames(
                              item.current
                                ? "text-white"
                                : "text-white/70 group-hover:text-white",
                              "h-6 w-6 shrink-0 "
                            )}
                            aria-hidden="true"
                          />{" "}
                          {item.name}
                        </span>
                        <ChevronUpIcon
                          className={`${
                            open ? "rotate-180 transform" : ""
                          } h-5 w-5 text-white`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="disclouser">
                        <ul>{subItems}</ul>
                      </Disclosure.Panel>
                    </>
                  );
                }}
              </Disclosure>
            </>
          ) : (
            <>
              {!submenu && (
                <>
                  <Link
                    href={item.href}
                    className={classNames(
                      item.href === pathname
                        ? "bg-slate-100/40 text-white"
                        : "text-white/70 hover:text-white hover:bg-slate-100/40",
                      "group flex gap-x-3  text-base leading-6 font-medium py-[23.5px] px-8  items-center transition-all rounded-l-full"
                    )}
                  >
                    <item.icon
                      className={classNames(
                        item.current
                          ? "text-white"
                          : "text-white/70 group-hover:text-white",
                        "h-6 w-6 shrink-0 "
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                  </Link>
                </>
              )}
            </>
          )}

          {(item?.submenu?.length || 0) > 0 && (
            <NavigationList
              submenu={true}
              navigation={(item.submenu || []) as NavigationItem[]}
            />
          )}
        </li>
      ))}
    </ul>
  );
}
