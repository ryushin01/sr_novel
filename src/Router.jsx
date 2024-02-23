import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import Header from './components/Header/Header';
import BookDetail from './pages/BookDetail/BookDetail';
import Footer from './components/Footer/Footer';
import Viewer from './pages/Viewer/Viewer';
import List from './pages/List/List';

const Router = () => {
  return (
    <BrowserRouter basename="/sr_novel">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/list/:queryType" element={<List />} />
        <Route path="/detail/:isbn13" element={<BookDetail />} />
        <Route path="/viewer/:type" element={<Viewer />} />

        {/* 404 */}
        {/* <Route path="*" element={<Error />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
