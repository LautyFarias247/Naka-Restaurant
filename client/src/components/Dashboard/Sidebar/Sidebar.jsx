import './SidebarD.css'
import {
  FaTh,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
  FaBars,
  FaMitten,
  FaUser,
  FaLeaf,
  FaShoppingBasket,
  FaRegListAlt,
  FaHome,
} from "react-icons/fa";
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Sidebar = () => {
  const admin = useSelector(state =>state.user)
  const menuItem = [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: <FaTh />
    },
    {
      path: "/",
      name: "Home",
      icon: <FaHome/>
    },
    {
      path: "/dashboard/foods",
      name: "Comidas",
      icon: <FaMitten />
    },
    {
      path: "/dashboard/users",
      name: "Usuarios",
      icon: <FaUser />
    },
    {
      path: "/dashboard/sales",
      name: "Pedidos",
      icon: <FaShoppingBasket />
    }

  ]

  const [isOpen, setIsOpen] = useState(true);
  // const toggle = () => setIsOpen(!isOpen)
  return (
    <div className="bodySidebar">
      <div className="containerSidebar">
        <div style={{ width: isOpen ? "100%" : "50px" }} className="sidebarSidebar">
          <div className="top_section">
            <h1 style={{ display: "block", fontSize: "30px"}} className="log">{"Bienvenido!"}</h1>
            <div style={{ marginLeft: isOpen ? "20px" : "-6px" }} className="bars">
              {/* <FaBars onClick={toggle} /> */}
            </div>
          </div>
          <div>
            {
              menuItem.map((item, index) => (
                <div>

                <NavLink to={item.path} key={index} className="link" activeclassName="active">
                  <div className="icon">{item.icon} </div>
                  <div
                    style={{ display: isOpen ? "block" : "none" }}
                    className="link_text">{item.name} </div>
                </NavLink>
                    </div>
              ))
            }
          </div>
        </div>
        {/* // <main className="mainSidebar">{children} </main>  */}
      </div>
    </div>
  );
};

export default Sidebar;
