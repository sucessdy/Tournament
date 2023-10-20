import React from "react";
import styles from "./Cursor.module.css";

const CursorPointer = (props) => {
  return (
    <div
      className={` ${styles.div} bg-white absolute border rounded-full  mix-blend-difference translate-x-[-50%] translate-y-[50%] w-[42px] h-[42px] z-50 `}
      style={{ left: props.x, top: props.y }}
    ></div>
  );
};

export default CursorPointer;
