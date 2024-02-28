import React from "react";
import { NavLink } from "react-router-dom";

const SidebarItem = ({ title, icon, targetPath }) => {
  // const navStyle = (isActive) => {
  //   if (isActive) {
  //     return {
  //       background: "black",
  //     };
  //   }
  // };
  return (
    <NavLink
      // style={({ isActive }) => navStyle(isActive)}
      to={targetPath}
      className="py-1 text-start pe-4 sidebar_menu_item sidebar_items "
    >
      <i className={`ms-3 icon ${icon} text-light`}></i>
      <span className="hiddenable no_wrap font_08">{title}</span>
    </NavLink>
  );
};

export default SidebarItem;
