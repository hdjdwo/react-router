import React from "react";
import { Link, useMatch } from "react-router-dom";
import classes from "./MyLink.module.css";

export default function CustomLink({ children, to }) {
  const match = useMatch(to);
  // console.log(match);
  return (
    <Link
      className={
        match ? [classes.Link, classes.Active].join(" ") : classes.Link
      }
      to={to}
    >
      {children}
    </Link>
  );
}
