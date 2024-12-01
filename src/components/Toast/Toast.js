import React from "react";
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from "react-feather";

import VisuallyHidden from "../VisuallyHidden";

import styles from "./Toast.module.css";

const ICONS_BY_VARIANT = {
  notice: <Info size={24} />,
  warning: <AlertTriangle size={24} />,
  success: <CheckCircle size={24} />,
  error: <AlertOctagon size={24} />,
};

function Toast({ variant, children }) {
  const [toastIsRendered, setToastIsRendered] = React.useState(true);

  if (toastIsRendered) {
    return (
      <div className={`${styles.toast} ${styles[variant]}`}>
        <div className={styles.iconContainer}>{ICONS_BY_VARIANT[variant]}</div>
        <p className={styles.content}>{children}</p>
        <button
          className={styles.closeButton}
          onClick={() => setToastIsRendered(false)}
        >
          <X size={24} />
          <VisuallyHidden>Dismiss message</VisuallyHidden>
        </button>
      </div>
    );
  }
}

export default Toast;
