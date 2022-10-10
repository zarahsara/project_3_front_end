import { Axios } from "axios";

const client = new Axios({
  baseURL: "http://localhost:5005/api",
});

export function getMenus() {
  const token = localStorage.getItem("menu_token");
  return client.get("/menus", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export function getMenu(menuId) {
  const token = localStorage.getItem("menu_token");
  return client.get(`/menus/${menuId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export function deleteMenu(menuId) {
  const token = localStorage.getItem("menu_token");

  return client.delete(`/menus/${menuId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export function createMenu(data) {
  const token = localStorage.getItem("menu_token");

  return client.post("/menus", JSON.stringify(data), {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}

export function updateMenu(menuId, data) {
  const token = localStorage.getItem("menu_token");

  return client.put(`/menus/${menuId}`, JSON.stringify(data), {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}

export function createOrder(data) {
  const token = localStorage.getItem("menu_token");

  return client.post("/orders", JSON.stringify(data), {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}

export function register(data) {
  return client.post("/auth/signup", JSON.stringify(data), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export function login(data) {
  return client.post("/auth/login", JSON.stringify(data), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export function verifyToken(token) {
  return client.get("/auth/verify", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}