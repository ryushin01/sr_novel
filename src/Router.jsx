import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main/Main';
import SignUp from '@pages/SignUp/SignUp';
import Header from './components/Header/Header';
import BookDetail from './pages/BookDetail/BookDetail';
import Footer from './components/Footer/Footer';
import Viewer from './pages/Viewer/Viewer';
import List from './pages/List/List';
import Search from './pages/Search/Search';
import ScrollTop from './components/ScrollTop/ScrollTop';

const Router = () => {
  return (
    <BrowserRouter basename="/sr_novel">
      <Header />
      <ScrollTop />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/list/:queryType" element={<List />} />
        <Route path="/detail/:isbn13" element={<BookDetail />} />
        <Route path="/viewer/:chapterNumber" element={<Viewer />} />
        <Route path="/search" element={<Search />} />
        {/* 404 */}
        {/* <Route path="*" element={<Error />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
