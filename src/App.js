import "./App.css";
import Header from "./components/Header";
import Products from "./components/Products";
import About from "./components/About";
import Ingredients from "./components/Ingredients";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Blogs from "./components/Blogs";
// import ChatSystem from "./components/ChatSystem";
// import WhatChatSystem from "./components/WhatChatSystem";
import BestSellers from "./components/BestSellers";
import ProductQuality from "./components/ProductQuality";

function App() {
  return (
    <div className="App">
      <Header />
      <Products />
      <ProductQuality />
      <Testimonials />
      {/* <About /> */}
      {/* <BestSellers /> */}
      {/* <Ingredients /> */}
      {/* <Blogs /> */}
      <Footer />
      {/* <ChatSystem /> */}
      {/* <WhatChatSystem /> */}
    </div>
  );
}

export default App;
