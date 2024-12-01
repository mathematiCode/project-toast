import React from "react";

import Button from "../Button";
import ToastShelf from "../ToastShelf";
import { ToastContext } from "../ToastProvider";

import styles from "./ToastPlayground.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [variant, setVariant] = React.useState("");
  const [message, setMessage] = React.useState("");
  const { toasts, addToast } = React.useContext(ToastContext);

  function popToast(event, variant, message) {
    event.preventDefault();
    addToast(variant, message);
    setVariant();
    setMessage("");
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf toasts={toasts}></ToastShelf>

      <form
        className={styles.controlsWrapper}
        onSubmit={(event) => popToast(event, variant, message)}
      >
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: "baseline" }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              value={message}
              onChange={(event) => {
                setMessage(event.target.value);
              }}
              id="message"
              className={styles.messageInput}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((option) => (
              <label htmlFor={`variant-${option}`} key={`${option}-label`}>
                <input
                  id={`variant-${option}`}
                  key={option}
                  type="radio"
                  name="variant"
                  value={option}
                  checked={variant === option}
                  onChange={(event) => {
                    setVariant(event.target.value);
                  }}
                />
                {option}
              </label>
            ))}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
