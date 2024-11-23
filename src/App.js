import './App.css';
import { Route, Routes } from 'react-router-dom';

import Footer from './components/Footer/footer';
import Header from './components/Header/header';
import Home from './components/pages/Home/home';
import Shop from './components/pages/Shop/shop';


function App() {
  return (
    <>
      <Header/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
