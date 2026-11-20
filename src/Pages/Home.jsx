import NavBar from "../Components/Navbar";
import Baner from "../Components/Baner";

import img1 from "../assets/product-thumb-1.png";
import img2 from "../assets/product-thumb-2.png";
import img3 from "../assets/product-thumb-3.png";
import img4 from "../assets/product-thumb-4.png";
import img5 from "../assets/product-thumb-5.png";
import img6 from "../assets/product-thumb-6.png";
import img7 from "../assets/product-thumb-7.png";
import img8 from "../assets/product-thumb-8.png";
import img9 from "../assets/product-thumb-9.png";
import img10 from "../assets/product-thumb-10.png";

const Products = [
  {
    id: 1,
    image: img1,
    name: "Whole Wheat Sandwich Bread",
    rating: 4.5,
    price: 18.0,
  },
  {
    id: 2,
    image: img2,
    name: "Whole Grain Oatmeal",
    rating: 4.5,
    price: 50.0,
  },
  {
    id: 3,
    image: img3,
    name: "Sharp Cheddar Cheese Block",
    rating: 4.5,
    price: 12.0,
  },
  {
    id: 4,
    image: img4,
    name: "Organic Baby Spinach",
    rating: 4.5,
    price: 18.0,
  },
  {
    id: 5,
    image: img5,
    name: "Organic Spinach Leaves (Fresh Produce)",
    rating: 4.5,
    price: 18.0,
  },
  {
    id: 6,
    image: img6,
    name: "Fresh Salmon",
    rating: 4.5,
    price: 18.0,
  },
  {
    id: 7,
    image: img7,
    name: "Imported Italian Spaghetti Pasta",
    rating: 4.5,
    price: 18.0,
  },
  {
    id: 8,
    image: img8,
    name: "Granny Smith Apples",
    rating: 4.5,
    price: 18.0,
  },
  {
    id: 9,
    image: img9,
    name: "Organic 2% Reduced Fat Milk",
    rating: 4.5,
    price: 18.0,
  },
  {
    id: 10,
    image: img10,
    name: "Greek Style Plain Yogurt",
    rating: 4.5,
    price: 18.0,
  },
];

function Home() {
  return (
    <>
    <NavBar products={Products} />
    <Baner/>
    </>
      
      
      
    
  );
}

export default Home;
