"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu as MenuIcon } from "lucide-react";
import { ModeToggle } from "../shared/mode-toggle";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import Menu from "./Menu";
import { navLinks } from "@/lib/constants";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed w-full z-50">
      <div className="border rounded-full mx-3 my-1.5 shadow-lg backdrop-blur-md bg-background/60">
        <div className="flex h-8 justify-between py-1 items-center flex-nowrap px-2 gap-2">
          <div className="items-center flex gap-1 shrink-0">
            <Link href="/">
              <Image src="/logo.png" alt="logo" width={24} height={24} />
            </Link>
            <Link href="/">
              <h1 className="text-sm font-bold">SSOKOBAN</h1>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex justify-center items-center text-xs">
            <Menu />
          </div>

          {/* Mobile Right Side - Theme Toggle + Hamburger Menu */}
          <div className="md:hidden flex items-center gap-1">
            <div className="scale-75">
              <ModeToggle />
            </div>
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <MenuIcon className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[300px] sm:w-[400px] border-0"
              >
                <div className="flex flex-col gap-2 mt-4">
                  <div className="flex flex-col gap-1">
                    {Object.entries(navLinks).map(([key, link]) => (
                      <Link
                        key={key}
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="flex items-center px-3 py-1.5 rounded-md hover:bg-accent transition-colors text-[0.7rem]"
                      >
                        <span className="font-medium">{link.title}</span>
                      </Link>
                    ))}
                  </div>
                  <div className="flex flex-col gap-1.5 mt-2 mx-3">
                    <Button
                      size="sm"
                      className="rounded-full text-[0.7rem] h-7 px-6"
                    >
                      Sign In
                    </Button>
                    <Button
                      size="sm"
                      className="rounded-full text-[0.7rem] h-7 px-6"
                    >
                      Sign Up
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Desktop Right Side */}
          <div className="hidden sm:flex mx-2 gap-0.5 items-center shrink-0">
            <Button size="sm" className="rounded-full text-xs h-6 px-3">
              Sign In
            </Button>
            <Button size="sm" className="rounded-full text-xs h-6 px-3">
              Sign Up
            </Button>
            <div className="scale-75">
              <ModeToggle />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
