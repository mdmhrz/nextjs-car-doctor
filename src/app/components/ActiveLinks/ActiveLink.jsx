"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";
import React from "react";

export default function ActiveLink({
    href,
    children,
    activeClassName = "",
    className = "",
    exact = true,
}) {
    const pathname = usePathname();
    const isActive = exact ? pathname === href : pathname.startsWith(href);

    const combinedClassName = twMerge(className, isActive && activeClassName);

    return (
        <Link href={href} className={combinedClassName}>
            {children}
        </Link>
    );
}
