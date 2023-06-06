import * as React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LoginButton from "../LoginComponents/LoginButton/LoginButton";
import LogoutButton from "../LoginComponents/LogoutButton/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import { Link, Outlet, useFetcher, useLocation } from "react-router-dom";
import style from "./Navbar.module.css";
import SearchBar from "./SearchBar";
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai"
import { useState } from "react";
// import El_Bodegon_de_Tony from "../images/El_Bodegon_de_Tony.png"

import { Container, Form, Nav, NavDropdown, Navbar, Offcanvas } from "react-bootstrap";







export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const { isAuthenticated, user, isLoading } = useAuth0();
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const dispatch = useDispatch()
  const userLogged = useSelector(state => state.user)
  const cart = useSelector(state => state.cart)
  const [aux, setAux] = useState(0)
  const location = useLocation()




  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  //
  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Perfil</MenuItem>
      <MenuItem onClick={handleMenuClose}>Mis Pedidos</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >

      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Perfil</p>
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <Navbar className={style.navBg} collapseOnSelect expand="lg">
        <Container className={style.navContainer}>
          {/* <Navbar.Brand href="#home"><Link to="/"><button className={style.buttonLogo}><img src={El_Bodegon_de_Tony} alt="Logo" className={style.logo} /></button></Link> */}
          {/* </Navbar.Brand> */}
          <Navbar.Brand href="#home"><Link to="/"><button className={style.buttonLogo}><h2 className={style.titleNav}>El Bodegón de Tony</h2></button></Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className={style.itemsNav} as={Link} to="/">Inicio</Nav.Link>
              <Nav.Link className={style.itemsNav} as={Link} to="/menu">Menu</Nav.Link>
              {userLogged.role ? <Link to="/dashboard" style={{ textDecoration: 'none' }}>
                <Nav.Link className={style.itemsNav} as={Link} to="/dashboard">Dashboard</Nav.Link>
              </Link> : ""}

            </Nav>
            <Nav>
              <NavDropdown title={userLogged.name} id="collasible-nav-dropdown">
                {!isAuthenticated ? "" :
                  <NavDropdown.Item as={Link} to="account" >Ver usuario</NavDropdown.Item>
                }
                <NavDropdown.Item as={Link} to="/account/login" >Login</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/user"> Registrarme </NavDropdown.Item>
                {!isAuthenticated && !userLogged ? "" : <NavDropdown.Item ><LogoutButton /></NavDropdown.Item>}

              </NavDropdown>
              <Nav.Link as={Link} to="/account/login"><AiOutlineUser className={style.login} /></Nav.Link>
              <Nav.Link as={Link} to="/cart"  >
                <AiOutlineShoppingCart className={style.cart} />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar className={style.Navbar}>
            <Box
              sx={{
                width: "20%",
                display: "flex",
                alignItems: "center",
                height: "140px",
                margin: "30px",
                padding: "10px"
              }}
            >
              <Link to="/"><button className={style.buttonLogo}><img src={El_Bodegon_de_Tony} alt="Logo" className={style.logo} /></button></Link>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ display: { xs: "none", sm: "block" } }}
              >
              </Typography>
            </Box>
            <h2 className={style.titleNav}>El Bodegón de Tony</h2>
            {location.pathname === "/menu" && <SearchBar />}
            {userLogged.role ? <Link to="/dashboard" style={{ textDecoration: 'none' }}>
              <a class="nav-link active" aria-current="page" className={style.aNav}>Dashboard</a>
            </Link> : ""}
            <Link to="/menu" style={{ textDecoration: 'none' }}>
              <a class="nav-link active" aria-current="page" className={style.aNav}>Menu</a>
            </Link>
            <Link to="/nosotros" style={{ textDecoration: 'none' }}>
              <a class="nav-link active" aria-current="page" className={style.aNav}>Nosotros</a>
            </Link>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <div className={style.userContainer}>
                {!userLogged.name ? <Link to='/account/login'><AiOutlineUser className={style.login} /></Link>
                  : <><Nav><NavDropdown title={userLogged.name}><NavDropdown.Item><LogoutButton /></NavDropdown.Item></NavDropdown></Nav></>}
                {!isAuthenticated ? "" :
                  <Link to='account'><img className={style.userPicture} src={user.picture} alt={user.name} /></Link>
                }
              </div>
              <div className={style.cartContainer}>
                <Link to='cart'><AiOutlineShoppingCart className={style.cart} /></Link>
              </div>
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
            </Box>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </Box> */}
    </>
  );
}