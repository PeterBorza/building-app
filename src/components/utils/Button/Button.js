import React from "react";

import classNames from "classnames";
import styles from "./Button.module.scss";

const Button = ({
  type,
  disabled,
  handler,
  children,
  loading,
  btnClassName,
}) => {
  const btnClass = classNames(styles.primary_btn, btnClassName, {
    [styles.bg_transparent]: loading,
  });
  return (
    <div>
      <button
        type={type}
        className={btnClass}
        disabled={disabled}
        onClick={handler}
        data-loading={loading}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
