import React from "react";
import useEscape from "../../hooks/useEscape";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  useEscape(setToasts([]));

  function addToast(variant, message) {
    let updatedToastArray = [...toasts];
    let id = crypto.randomUUID();
    updatedToastArray.push({ id, variant, message });
    setToasts(updatedToastArray);
  }

  function handleDismiss(id) {
    let newArray = toasts.filter((item) => item.id !== id);
    setToasts(newArray);
  }

  return (
    <ToastContext.Provider
      value={{ toasts, setToasts, addToast, handleDismiss }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
