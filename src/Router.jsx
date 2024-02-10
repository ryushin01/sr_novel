import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import Header from './components/Header/Header';
import BestSeller from './pages/BestSeller/BestSeller';
import BookDetail from './pages/BookDetail/BookDetail';
import Footer from './components/Footer/Footer';

const Router = () => {
  return (
    <BrowserRouter basename="/sr_novel">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/bestseller" element={<BestSeller />} />
        <Route path="/detail/:isbn13" element={<BookDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
