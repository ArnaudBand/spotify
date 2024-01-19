'use client';

import React, { useState, useEffect } from 'react';

const ModalProvider = () => {

  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if(!isMounted) return null;

  return (
    <div>
      Enter
    </div>
  );
}

export default ModalProvider;