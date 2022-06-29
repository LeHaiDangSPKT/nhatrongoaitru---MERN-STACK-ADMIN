import Footer from "./components/Footer";
import Header from "./components/Header";
import Content_main from "./components/Content_main";
import { Routes, Route } from "react-router-dom";
import Streets from "./components/Streets/Streets";

function App() {
  return (
    <div id="main">
      <Header />
      <Routes>
        <Route path="/" element={<Content_main />} />
        <Route path="/TPDiAn" element={<Streets name="TPDiAn" />} />
        <Route path="/LinhDong" element={<Streets name="LinhDong" />} />
        <Route path="/LinhTrung" element={<Streets name="LinhTrung" />} />
        <Route path="/LinhChieu" element={<Streets name="LinhChieu" />} />
        <Route path="/TangNhonPhuA" element={<Streets name="TangNhonPhuA" />} />
        <Route path="/TanPhu" element={<Streets name="TanPhu" />} />
        <Route path="/BinhTho" element={<Streets name="BinhTho" />} />
        <Route path="/HiepPhu" element={<Streets name="HiepPhu" />} />
        <Route path="/TruongTho" element={<Streets name="TruongTho" />} />
        <Route path="/TangNhonPhuB" element={<Streets name="TangNhonPhuB" />} />
        <Route path="/LongThanhMy" element={<Streets name="LongThanhMy" />} />
        <Route path="/PhuocLongA" element={<Streets name="PhuocLongA" />} />
        <Route path="/PhuocLongB" element={<Streets name="PhuocLongB" />} />
        <Route
          path="/HiepBinhChanh"
          element={<Streets name="HiepBinhChanh" />}
        />
        <Route path="/PhuHuu" element={<Streets name="PhuHuu" />} />
        <Route path="/LinhTay" element={<Streets name="LinhTay" />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
