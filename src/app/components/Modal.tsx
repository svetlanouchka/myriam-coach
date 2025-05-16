// components/Modal.tsx
import React from 'react';

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, onClose }) => {
  return (
    <div className="fixed h-screen inset-0 bg-light-gold/50 backdrop-blur-md flex items-center justify-center overflow-y-auto z-50">
      <div className="bg-white p-6 rounded-lg max-w-lg w-full max-h-[80vh] overflow-y-auto">
        {children}
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 text-gold cursor-pointer"
        >
          Fermer
        </button>
      </div>
    </div>
  );
};

export default Modal;