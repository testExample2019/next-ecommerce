import { APP_NAME } from "@/lib/constants";
import React from "react";

const Footer = () => {
  return (
    <footer className={"border-t"}>
      <div className={"p-5 flex-center"}>
        {new Date().getFullYear()} {APP_NAME}
      </div>
    </footer>
  );
};

export default Footer;
