import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Header() {
  return (
    <header className="shadow-md">
      <div className="flex justify-between items-center max-w-8xl max-auto p-8">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-lg flex flex-wrap">
            <span className="text-white">Kingarments</span>
          </h1>
        </Link>
        <ul className="flex gap-9">
          <Link to="/product/apparels">
            <li className="hidden sm:inline text-white">Apparels</li>
          </Link>
          <Link to="/product/nonwoven">
            <li className="hidden sm:inline text-white">Nonwovens</li>
          </Link>
          <Link to="/contact-us">
            <li className="hidden sm:inline text-white">Contact us</li>
          </Link>
        </ul>
      </div>
      <div className="page-bg">
        <img
          fetchpriority="high"
          decoding="async"
          width="2560"
          height="827"
          src="https://hagor.co.il/wp-content/uploads/2023/12/together7-2-scaled.jpg"
          alt=""
          data-lazy-sizes="(max-width: 2560px) 100vw, 2560px"
          data-lazy-src="https://hagor.co.il/wp-content/uploads/2023/12/together7-2-scaled.jpg"
          data-ll-status="loaded"
          sizes="(max-width: 2560px) 100vw, 2560px"
        />
      </div>
    </header>
  );
}
