import React, { ReactNode } from "react";
import classNames from "classnames";

interface PageContainerProps {
  children: ReactNode;
  className?: string;
}

const PageContainer = ({ children, className }: PageContainerProps) => {
  return (
    <section
      className={classNames(
        "auth-container-background w-full max-w-[593px] py-[49px] flex flex-col items-center justify-center",
        className
      )}
    >
      {children}
    </section>
  );
};

export default PageContainer;
