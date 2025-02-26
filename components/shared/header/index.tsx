import React from "react";
import Link from "next/link";
import { APP_NAME } from "@/lib/constants";
import Image from "next/image";
import Menu from "./menu";

const Header = () => {
  return (
    <header className={"w-full border-b"}>
      <div className={"wrapper flex-between"}>
        <div className={"flex-start"}>
          <Link href={"/"} className={"flex-start"}>
            <Image
              src="/images/logo.svg"
              alt={`${APP_NAME} logo`}
              width={50}
              height={50}
              priority={true}
            />
          </Link>
          <span className={"hidden lg:block font-bold text-2xl ms-3"}>
            Store
          </span>
        </div>
        <Menu />
      </div>
    </header>
  );
};

export default Header;
