// @flow
import * as React from "react";
import { renderRoutes } from "react-router-config";

import { Navbar } from "../componnets/Navbar";
import { MainSideBar } from "../componnets/MainSideBar";
import { ContentWrapper } from "../componnets/ContentWrapper";
import { Footer } from "../componnets/footer";
import { ControlSideBar } from "../componnets/ControlSideBar";
type Props = {};

export function FixedSidebar(props: Props) {
  const { route } = props;
  return (
    <>
      <Navbar />
      <MainSideBar />
      <ContentWrapper>{renderRoutes(route.routes)}</ContentWrapper>
      <Footer />
      <ControlSideBar />
    </>
  );
}
