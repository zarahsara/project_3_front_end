import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Menucreate from "./pages/MenuCreate";
import MenuList from "./pages/MenuList";
import MenuUpdate from "./pages/MenuUpdate";
import Register from "./pages/Register";
import Login from "./pages/Login";
import IsAnon from "./components/IsAnon";
import IsPrivate from "./components/IsPrivate";


export default function Navigation() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/register"
        element={
          <IsAnon>
            <Register />
          </IsAnon>
        }
      />
      <Route
        path="/login"
        element={
          <IsAnon>
            <Login />
          </IsAnon>
        }
      />
      <Route
        path="/menus"
        element={
            <MenuList />
        }
      />
      <Route
        path="/menus/new"
        element={
          <IsPrivate>
            < Menucreate/>
          </IsPrivate>
        }
     />
      <Route
        path="/menus/:menuId/edit"
        element={
          <IsPrivate>
            <MenuUpdate />
          </IsPrivate>
        }
      />
      </Routes>
  );
}

