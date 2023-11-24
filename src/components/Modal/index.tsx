import { ReactNode, useEffect, useRef } from "react";
import { useClickAway } from "react-use";
import styles from "./Modal.module.css";
import CloseIcon from "./CloseIcon";

type Props = {
  show: boolean;
  children: ReactNode;
  onClose: () => void;
}

function Modal({ show, children, onClose }: Props) {
  const modalRef = useRef<HTMLDivElement>(null);

  useClickAway(modalRef, onClose);
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    }

    if (show) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    }
  }, [show]);

  if (!show) {
    return null;
  }

  return (
    <div className={styles.Overlay}>
      <div className={styles.Modal} ref={modalRef}>
        <button
          className={styles.CloseButton}
          onClick={onClose}
        >
          <CloseIcon />
        </button>
        {children}
      </div>
    </div>
  )
}

export default Modal;
