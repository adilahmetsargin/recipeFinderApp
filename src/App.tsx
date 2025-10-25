import { Outlet } from "react-router-dom";

import "./styles/global.css";
import Header from "./components/Header";

const App = () => {
  return (
    <div>
      <Header />
      <main style={{ padding: "1rem 2rem" }}>
        <Outlet />
      </main>
    </div>
  );
};

export default App;
