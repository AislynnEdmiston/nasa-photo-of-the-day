import React from "react";
import "./App.css";
import Nav from './components/nav/nav';
import Header from './components/header/Header'
import Image from './components/image/image';
import Description from './components/description/Description';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Image />
      <Description />
      <Footer />
    </div>
  );
}

export default App;
