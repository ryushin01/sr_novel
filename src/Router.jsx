import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '@pages/Main/Main';
import SignUp from '@pages/SignUp/SignUp';
import List from '@pages/List/List';
import Header from '@components/Header/Header';
import BookDetail from '@pages/BookDetail/BookDetail';
import Footer from '@components/Footer/Footer';

const Router = () => {
  return (
    <BrowserRouter basename="/sr_novel">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/list/:queryType" element={<List />} />
        <Route path="/detail/:isbn13" element={<BookDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
