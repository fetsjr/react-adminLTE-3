// @flow
import * as React from "react";
import { connect } from "react-redux";
import { isMobileOnly } from "react-device-detect";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import {
  UncontrolledDropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
} from "reactstrap";
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

        <OverlayScrollbarsComponent options={{className:"os-theme-light",sizeAutoCapable:true,scrollbars: {autoHide:"l", clickScrolling:true}}}>
          <div className="sidebar sidebar os-host os-theme-light os-host-overflow os-host-overflow-y os-host-resize-disabled os-host-scrollbar-horizontal-hidden os-host-transition">
            {/*// <!-- Sidebar user (optional) -->*/}
            <SidebarUser image={image} nameUser={"Jesus Rodriguez"} />
            <SidebarSearch placeholder={"Search"} />
            <SidebarNav />
          </div>
        </OverlayScrollbarsComponent>
      </aside>
    </>
  );
}
