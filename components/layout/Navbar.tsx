"use client";
import React from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const isMobile = useIsMobile();
  return (
    <div className="flex w-full h-16 justify-between py-4">
      <div className="mx-8 items-center flex">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={60} height={60} />
        </Link>
        <h1 className="text-xl font-bold ml-2">SSOKOBAN</h1>
      </div>
      {isMobile ? "" : "Menu"}
      <div className="mx-8">button</div>
    </div>
  );
};

export default Navbar;
