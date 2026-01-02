"use client";
import { useIsMobile } from "@/hooks/use-mobile";
import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "../shared/mode-toggle";
import { Button } from "../ui/button";

const Navbar = () => {
  const isMobile = useIsMobile();
  return (
    <div className="border rounded-full mx-8 my-4 shadow-xl">
      <div className="flex w-full h-16 justify-between py-2 items-center">
        <div className="mx-4 items-center flex">
          <Link href="/">
            <Image src="/logo.png" alt="logo" width={50} height={50} />
          </Link>
          <Link href="/">
            <h1 className="text-2xl font-bold ml-2">SSOKOBAN</h1>
          </Link>
        </div>
        <div>{isMobile ? "" : "Menu"}</div>
        <div className="hidden sm:flex mx-4 gap-1">
          <Button className="rounded-full">Sign In</Button>
          <Button className="rounded-full">Sign Up</Button>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
