"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const NavLink = ({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        className,
        isActive ? "underline underline-offset-8 opacity-100" : "opacity-85",
        "hover:opacity-100 transition-opacity duration-200 decoration-emerald-700 underline-offset-8 hover:underline hidden md:block"
      )}
    >
      {children}
    </Link>
  );
};

export default NavLink;
