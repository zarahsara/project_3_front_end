import {Menu, message } from "antd";
import { useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import { AuthContext } from "../context/auth.context";


export default function Header() {
const navigate = useNavigate();
const { isLoggedIn, logOutUser, user } = useContext(AuthContext);


  return (
    <Menu mode="horizontal" theme="dark" defaultSelectedKeys={["home"]}>
      <Menu.Item key="home"onClick={() => navigate("/")}>
      Home
      </Menu.Item>
      {isLoggedIn && (
        <>
          <Menu.Item
            key="menus"
            onClick={() => navigate("/menus")}
            >
            Menus
          </Menu.Item>
          <Menu.Item
            key="menu"
            onClick={() => navigate("/menus/new")}
          >
            Create Menu
          </Menu.Item>
          <Menu.Item
            key="logout"
            onClick={async () => {
              message.info(`Goodbye ${user.name}`);
              await logOutUser();
              navigate("/");
            }}
          >
            Logout
          </Menu.Item>
        </>
      )}
      {!isLoggedIn && (
        <>
          <Menu.Item
            key="register"
            onClick={() => navigate("/register")}
          >
            Register
          </Menu.Item>
          <Menu.Item
            key="login"
            onClick={() => navigate("/login")}
          >
            Login
          </Menu.Item>
        </>
      )}
    </Menu>
  );
}