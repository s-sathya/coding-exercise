import React from "react";
import { Link } from "react-router-dom";

import cn from "./index.module.css";

const homeUrl = "/";

function Header() {
  console.log(cn);
  return (
    <div className={cn.header}>
      <div className={cn.headerLeft}></div>

      <div className={cn.headerCenter}>
        <Link to={homeUrl} className={cn.logo}>
          <div >E & Comm</div>
        </Link>
      </div>

      <div className={cn.headerRight}>
      </div>
    </div>
  );
}

export default Header;
