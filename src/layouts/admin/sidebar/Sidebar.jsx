import React, { useContext } from "react";
import { AdminContext } from "../../../context/adminLayoutContext";
import Avatar from "./Avatar";
import SidebarGroupTitle from "./SidebarGroupTitle";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  const { showSidebar } = useContext(AdminContext);
  return (
    <section id="sidebar_section">
      <div
        className={`mini_sidebar collapsedd bg-dark h-100 ${
          showSidebar ? "expanded" : null
        }`}
      >
        <div className="p-0 m-0">
          <Avatar
            name={"امیرحسین امینی"}
            imagePath={"/assets/images/avatar/user4.jpg"}
          />
          <SidebarItem title={"داشبورد"} icon={"fas fa-tachometer-alt"} />
          {/* <!-- =================================== --> */}
          <SidebarGroupTitle title={"فروشگاه"} />
          <SidebarItem title={"مدیریت گروه محصول"} icon={"fas fa-stream"} />
          <SidebarItem title={"مدیریت محصول"} icon={"fas fa-cube"} />
          <SidebarItem title={"مدیریت برند ها"} icon={"fas fa-copyright"} />
          <SidebarItem title={"مدیریت گارانتی ها"} icon={"fab fa-pagelines"} />
          <SidebarItem title={"مدیریت رنگ ها"} icon={"fas fa-palette"} />
          <SidebarItem title={"مدیریت تخفیف ها"} icon={"fas fa-percentage"} />
          {/* <!-- =================================== --> */}
          <SidebarGroupTitle title={"سفارشات و سبد"} />
          <SidebarItem
            title={"مدیریت سبد ها"}
            icon={"fas fa-shopping-basket"}
          />
          <SidebarItem title={"مدیریت سفارشات"} icon={"fas fa-luggage-cart"} />
          <SidebarItem
            title={"مدیریت نحوه ارسال"}
            icon={"fas fa-truck-loading"}
          />
          {/* <!-- =================================== --> */}
          <SidebarGroupTitle title={"کاربران و همکاران"} />
          <SidebarItem title={"مشاهده کاربران"} icon={"fas fa-users"} />
          <SidebarItem title={"نقش ها"} icon={"fas fa-user-tag"} />
          <SidebarItem title={"مجوز ها"} icon={"fas fa-shield-alt"} />
          {/* <!-- =================================== --> */}
          <SidebarGroupTitle title={"ارتباطات"} />
          <SidebarItem title={"سوال ها"} icon={"fas fa-question-circle"} />
          <SidebarItem title={"نظرات"} icon={"fas fa-comment"} />
          {/* <!-- <li className="py-2 btn-group dropstart pe-4">
                    <i className="ms-3 icon fas fa-check text-light"></i>
                    <span className="hiddenable" data-bs-toggle="dropdown" aria-expanded="false">داشبورد</span>
                    
                    <ul className="dropdown-menu px-2 sidebar_submenu_list">
                      <li className="d-none">اول</li>
                      <li>اول</li>
                      <li>دوم</li>
                      <li>سوم</li>
                    </ul>
                </li> --> */}
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
