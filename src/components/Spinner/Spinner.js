import React from "react";
import style from "./index.module.css";

const Spinner = () => {
  return (
    <div className={style["container"]}>
      <div className={style["sk-folding-cube"]}>
        <div className={[style["sk-cube1"], style["sk-cube"]].join(" ")} />
        <div className={[style["sk-cube2"], style["sk-cube"]].join(" ")} />
        <div className={[style["sk-cube3"], style["sk-cube"]].join(" ")} />
        <div className={[style["sk-cube4"], style["sk-cube"]].join(" ")} />
      </div>
    </div>
  );
};

export default Spinner;
