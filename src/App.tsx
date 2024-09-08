import HomeComponent from "./components/home/Home";
import DetailComponent from "./components/DetailPage/DetailComponent";
import Header from "./components/header/Header";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/home" element={<HomeComponent />} />
        <Route path="/details" element={<DetailComponent />} />
      </Routes>
    </>
  );
}

export default App;
