import React from "react";

export interface NavigationItem {
  name: string;
  href: string;
  icon: React.ComponentType<any>;
  current: boolean;
  submenu?: NavigationItem[];
  hasChild: boolean;
}
