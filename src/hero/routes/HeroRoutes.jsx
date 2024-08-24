import { Navigate, Route, Routes } from "react-router";
import { Navbar } from "../../ui"
import { DcPage, MarvelPage,HeroPage,SerchPage } from "../";





export const HeroRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="marvel" element={<MarvelPage />} />
          <Route path="dc" element={<DcPage />} />
          <Route path="serch" element={<SerchPage />} />
          <Route path="hero/:id" element={<HeroPage />} />
          
          <Route path="/" element={<Navigate to="marvel" />} />
        </Routes>
      </div>
    </>
  );
}
