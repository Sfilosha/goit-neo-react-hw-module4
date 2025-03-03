import React from "react";
import { PuffLoader } from "react-spinners";
import css from "./Loader.module.css";

function Loader() {
  return <PuffLoader className={css.loader} />;
}

export default Loader;
