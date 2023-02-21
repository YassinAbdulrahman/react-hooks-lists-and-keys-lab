import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
    let nav = links.map((ele , index) => {
      return <a href={'#'+ele} key={index}>{ele}</a>
    })
  return <nav>{nav}</nav>;
}

export default NavBar;
