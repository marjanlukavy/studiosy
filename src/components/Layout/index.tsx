import React, { ReactNode } from "react";
import Header from "./Header";
import BackgroundImage from "../UI/BackgroundImage";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <BackgroundImage>
      <Header />
      <main className="w-full flex items-center justify-center mb-[111px]">
        {children}
      </main>
    </BackgroundImage>
  );
};

export default Layout;
