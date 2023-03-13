import React from "react";
//
import Header from "@widgets/Header";
import BottomNav from "@widgets/Header/BottomNav";

// default layout configuration
const Layout = ({ children }) => {
  return (
    <>
      <Header />
        {children}
      <BottomNav />
      {/* <Footer /> */}
    </>
  );
};
export default Layout;
