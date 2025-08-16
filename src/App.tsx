import { Route, Routes } from "react-router-dom";
import "./App.module.scss";
import Menu from "./components/Menu";
import SearchBase from "./components/SearchBase";

export default function App() {
  return (
    <Routes>
      <Route
        path="*"
        element={
          <>
            <SearchBase />
            <Menu />
          </>
        }
      />
    </Routes>
  );
}
