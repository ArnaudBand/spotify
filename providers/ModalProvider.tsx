'use client';

import Modal from '@/components/Modal';
import React, { useState, useEffect } from 'react';

const ModalProvider = () => {

  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if(!isMounted) return null;

  return (
    <div>
      <Modal />
    </div>
  );
}

export default ModalProvider;