import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import "./App.module.scss";
import Menu from "./components/Menu";
import SearchBase from "./components/SearchBase";
import { useEffect } from "react";
import Main from "./components/Main";

export default function App() {
  const navigate = useNavigate();
  const path = useLocation().pathname;

  useEffect(() => {
    if (path === "/") {
      navigate("/tasks");
    }
  }, [path]);

  return (
    <Routes>
      <Route
        path="*"
        element={
          <>
            <SearchBase />
            <Menu />
            <Main />
          </>
        }
      />
    </Routes>
  );
}
