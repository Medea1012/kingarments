import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Header() {
  return (
    <header className="bg-black shadow-md">
      <link
        href="src/assets/Header.css"
        type="text/css"
        rel="stylesheet"
      ></link>
      <div className="flex justify-between items-center max-w-7xl max-auto p-8">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-lg flex flex-wrap">
            <span className="text-white">Kingarments</span>
          </h1>
        </Link>
        <ul className="flex gap-6">
          <Link to="/about">
            <li className="text-white text-sm sm:text-lg">About us</li>
          </Link>
          <Link to="/product">
            <li className="text-white text-sm sm:text-lg">Our Product</li>
          </Link>
          <Link to="/contact-us">
            <li className="text-white text-sm sm:text-lg">Contact us</li>
          </Link>
        </ul>
      </div>
      <div class="page-bg"></div>
    </header>
  );
}
