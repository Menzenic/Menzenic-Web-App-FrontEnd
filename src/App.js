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

function App() {
  return (
    <div className="App">
      <Header />
      <Products />
      <About />
      <BestSellers />
      <Ingredients />
      <Blogs />
      <Testimonials />
      <Footer />
      {/* <ChatSystem /> */}
      {/* <WhatChatSystem /> */}
    </div>
  );
}

export default App;
