import "./App.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import { routes } from "./routes/routes";
import Footer from "./components/Footer.jsx";
function App() {
  return (
    <>
      <Header />
      <Routes>
        {routes.map((r) => (
          <Route path={r.path} element={r.element} key={r.path} />
        ))}
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
