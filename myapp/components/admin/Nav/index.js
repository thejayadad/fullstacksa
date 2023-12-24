'use client'
import Modal from '@/components/modals'
import React, { useState } from 'react';

const NewCategory = () => {
  const [isNewModalOpen, setNewModalOpen] = useState(false);

  const openNewModal = () => {
    setNewModalOpen(true);
  };

  const closeNewModal = () => {
    setNewModalOpen(false);
  };
  return (
    <Modal isOpen={isNewModalOpen} onClose={closeNewModal}>
    {/* Add any content for the modal here */}
    <h2>New Category Modal</h2>
    
  </Modal>
  )
}

export default NewCategory