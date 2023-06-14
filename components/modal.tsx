import { useRef } from "react";
import {MdOutlineClose} from "react-icons/md"

export const useModal = () => {
  const modalRef = useRef<any>();

  const showModal = () => {
    modalRef.current.showModal()
  }

  const closeModal = () => {
    modalRef.current.close()
  }

  const getModalContent = (content: React.ReactNode) => {
    return (
      <dialog ref={modalRef} className="modalDialog">
        <div className="body">{content}</div>
        <div className="close">
          <MdOutlineClose onClick={closeModal}/>
        </div>
      </dialog>
    );
  };

  return {
    getModalContent,
    showModal,
    closeModal,
  };
};
