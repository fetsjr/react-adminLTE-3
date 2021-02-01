// @flow
import "overlayscrollbars/css/OverlayScrollbars.css";
import * as React from "react";
import "react-perfect-scrollbar/dist/css/styles.css";
import { BrandLogoLink } from "./BrandLogoLink";
import logo from "../assets/img/AdminLTELogo.png";
import image from "../assets/img/user2-160x160.jpg";
import { SidebarUser } from "./SidebarUser";
import { SidebarSearch } from "./SidebarSearch";
import { SidebarNav } from "./SidebarNav";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
type Props = {};

export function MainSideBar(props: Props) {
  return (
    <>
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        <BrandLogoLink brand={"AdminLTE "} link={"/"} logo={logo} />
        <OverlayScrollbarsComponent className={"os-theme-light"} options={{sizeAutoCapable:true,scrollbars: {autoHide:"l", clickScrolling:true}}}>
          <div className="sidebar sidebar">
            <SidebarUser image={image} nameUser={"Jesus Rodriguez"} />
            <SidebarSearch placeholder={"Search"} />
            <SidebarNav />
          </div>
        </OverlayScrollbarsComponent>
      </aside>
    </>
  );
}
