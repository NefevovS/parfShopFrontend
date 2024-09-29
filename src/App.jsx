import "./App.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import { routes } from "./routes/routes";
function App() {
  return (
    <>
      <Header />
      <Routes>
        {routes.map((r) => (
          <Route path={r.path} element={r.element} key={r.path} />
        ))}
      </Routes>
      <footer>footer</footer>
    </>
  );
}

export default App;
