import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import logo from "../static/logo.png";
import "../App.css";

const Navigation = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg" id="my-nav">
        <Navbar.Brand className="app-logo" href="/">
          <img
            src={logo}
            width="40"
            height="50"
            className="d-inline-block align-center"
            alt="React Bootstrap logo"
          />{" "}
          Magazines Management System
        </Navbar.Brand>
      </Navbar>
      <div className="sidebar">
        <CDBSidebar textColor="#333" backgroundColor="#f0f0f0">
          <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>
            Navigation
          </CDBSidebarHeader>
          <CDBSidebarContent>
            <CDBSidebarMenu>
              <NavLink exact to="/" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="home">Home</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/magazines" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="list">
                  Magazines List
                </CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/manage" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="book">
                  Manage Magazines
                </CDBSidebarMenuItem>
              </NavLink>
            </CDBSidebarMenu>
          </CDBSidebarContent>
        </CDBSidebar>
      </div>
    </div>
  );
};

export default Navigation;
