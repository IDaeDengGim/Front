import "./App.css";
import { Routes, Route } from "react-router-dom";

// 페이지 임포트
import MainPage from "./pages/main/Mainpage";
import PickPage from "./pages/login/PickPage";
import MovieInfo from "./components/MovieInfo";

// app에는 라우팅할 애들만 넣어놓기
function App() {
  return (
    <>
      <Routes>
        {/* 메인페이지 */}
        <Route exact path="/" element={<MainPage />} />
        <Route exact path="/login/pick" element={<PickPage />} />
        <Route exact path="/movieInfo/:id" element={<MovieInfo />} />
      </Routes>
    </>
  );
}

export default App;
