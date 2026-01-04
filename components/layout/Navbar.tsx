"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu as MenuIcon } from "lucide-react";
import { ModeToggle } from "../shared/mode-toggle";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import Menu from "./Menu";
import { navLinks } from "@/lib/constants";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="fixed w-full z-50">
        <div className="border-[1.3px] rounded-full mx-3 my-1.5 shadow-lg backdrop-blur-md bg-background/60">
          <div className="flex h-10 justify-between py-2 items-center flex-nowrap px-3 gap-2">
            <div className="items-center flex gap-1 shrink-0">
              <Link href="/">
                <Image src="/logo.png" alt="logo" width={24} height={24} />
              </Link>
              <Link href="/">
                <h1 className="text-sm font-bold">SSOKOBAN</h1>
              </Link>
            </div>
            <div className="hidden md:flex mx-2 gap-2 items-center shrink-0">
              <div className="w-20 h-6" /> {/* Placeholder for buttons */}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed w-full z-50">
      <div className="border-[1.3px] rounded-full mx-3 my-1.5 shadow-lg backdrop-blur-md bg-background/60">
        <div className="flex h-10 justify-between py-2 items-center flex-nowrap px-3 gap-2">
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
                    <SignedOut>
                      <Button
                        asChild
                        size="sm"
                        className="rounded-full text-[0.7rem] h-7 px-6"
                      >
                        <SignInButton />
                      </Button>
                      <Button
                        asChild
                        size="sm"
                        className="rounded-full text-[0.7rem] h-7 px-6"
                      >
                        <SignUpButton />
                      </Button>
                    </SignedOut>
                    <SignedIn>
                      <div className="flex justify-center py-2">
                        <UserButton />
                      </div>
                    </SignedIn>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Desktop Right Side */}
          <div className="hidden md:flex mx-2 gap-2 items-center shrink-0">
            <SignedOut>
              <SignInButton mode="modal">
                <Button size="sm" className="rounded-full text-xs h-6 px-3">
                  Sign In
                </Button>
              </SignInButton>
              <SignUpButton mode="modal">
                <Button size="sm" className="rounded-full text-xs h-6 px-3">
                  Sign Up
                </Button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
            <ModeToggle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
