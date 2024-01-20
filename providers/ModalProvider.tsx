"use client";

import React, { useState, useEffect } from "react";
import AuthModal from "@/components/AuthModal";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div>
      <AuthModal />
    </div>
  );
};

export default ModalProvider;
