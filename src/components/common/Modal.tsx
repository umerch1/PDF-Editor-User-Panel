import React from "react";
interface modalType {
  open?: boolean;
  onClose?: () => void;
  children: React.ReactNode;
}
const Modal = ({ open, onClose, children }: modalType) => {
  return (
    <div
      onClick={onClose}
      className={`
    fixed inset-0 flex justify-center items-center transition-colors ${
      open ? "visible bg-black/20" : "invisible"
    }`}
    >
      {/* modal */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`
                bg-white rounded-xl shadow p-6 transition-all
                ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}
                `}
      >
        <button className="absolute top-2 right-2 p-1 rounded-lg text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600">
          X
        </button>

        {children}
      </div>
    </div>
  );
};

export default Modal;
