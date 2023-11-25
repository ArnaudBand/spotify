"use client";

import { useRouter } from 'next/router';
import { twMerge } from "tailwind-merge";
import React from 'react';

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({
  children, className
}) => {
  const router = useRouter();

  const handleLogout = () => {};

  return (
    <div className={
      twMerge(
        "h-fit bg-gradientto-b from-emerald-800 p-6",
        className
      )
    }></div>
  )
}

export default Header;