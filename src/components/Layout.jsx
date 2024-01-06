import React from "react";
import { NavLink, Link, Outlet } from "react-router-dom";
import CustomLink from "./CustomLink";

export default function Layout() {
  return (
    <>
      <header className="nav">
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/posts">Blog</CustomLink>
        <CustomLink to="/about">About</CustomLink>
      </header>

      <main className="contener">
        <Outlet />
      </main>

      <footer className="footer">2024</footer>
    </>
  );
}
