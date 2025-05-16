import { useState } from "react";

import "./index.css";
import HeroSection from "./components/HeroSection/HeroSection";
import NewArrivals from "./components/Sections/NewArrivals";
import Category from "./components/Sections/Categories/Category";
import content from "./data/content.json";
import Footer from "./components/Footer/Footer";

function Shop() {
  const [count, setCount] = useState(0);

  return (
    <>
      <HeroSection />
      <NewArrivals />
      {content?.pages?.shop?.sections &&
        content?.pages?.shop?.sections?.map((item, index) => (
          <Category key={item?.title + index} {...item} />
        ))}

      {/*<Category title={content?.categories[0]?.title} data={content?.categories[0]?.data}/>*/}
      <Footer content={content?.footer} />
    </>
  );
}

export default Shop;
