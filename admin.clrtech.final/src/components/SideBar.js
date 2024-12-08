import { memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { site_path } from "../utils"

import './SideBar.css';

function SideBar() {
   const location = useLocation();

   const isMatchsite_path = (pattern, site_path) => {
      return pattern.test(site_path);
   };

   const sidebarItemList = [
      {
         title: "Dashboard",
         regex: new RegExp(`^${site_path.HOME}(\/.*)?$`),
         link: site_path.HOME
      },
      {
         title: "Categories",
         regex: new RegExp(`^${site_path.CATEGORY_LIST}(\/.*)?$`),
         link: site_path.CATEGORY_LIST
      },
      {
         title: "Products",
         regex: new RegExp(`^${site_path.PRODUCT_LIST}(\/.*)?$`),
         link: site_path.PRODUCT_LIST
      },
      {
         title: "Users",
         regex: new RegExp(`^${site_path.USER_LIST}(\/.*)?$`),
         link: site_path.USER_LIST
      },
      {
         title: "Companies",
         regex: new RegExp(`^${site_path.COMPANY_LIST}(\/.*)?$`),
         link: site_path.COMPANY_LIST
      },
      {
         title: "Orders",
         regex: new RegExp(`^${site_path.ORDER_LIST}(\/.*)?$`),
         link: site_path.ORDER_LIST
      }
   ];

   function SideBarList({ items }) {
      return (
         <ul className="left-side-bar">
            {items.map((item, i) => (
               <SideBarItem key={i} item={item} />
            ))}
         </ul>
      );
   }

   function SideBarItem({ item }) {
      return (
         <li
            className={
               isMatchsite_path(item.regex, location.site_pathname)
                  ? 'left-side-bar-item active'
                  : 'left-side-bar-item'
            }
         >
            <Link to={item.link}>{item.title}</Link>
         </li>
      );
   }

   return (
      <nav className="sidebar">
         <div>
            <h1>Book Store</h1>
         </div>

         <SideBarList items={sidebarItemList} />
      </nav>
   );
}

export default memo(SideBar);
