import React from "react";
import HeaderApp from "./components/HeaderApp";
import ContentApp from "./components/ContentApp";
import FooterApp from "./components/FooterApp";

export default function Layout() {
  return (
    <>
      {/* header panel */}
      <HeaderApp />
      {/* content panel */}
      <ContentApp />
      {/* footer panel */}
      <FooterApp />
    </>
  );
}
