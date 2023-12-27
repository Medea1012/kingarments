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
          <Link to="/product">
            <li className="hidden sm:inline text-white">Our Products</li>
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
          class="attachment-full size-full wp-image-33632 entered lazyloaded"
          alt=""
          data-lazy-srcset="https://hagor.co.il/wp-content/uploads/2023/12/together7-2-scaled.jpg 2560w, https://hagor.co.il/wp-content/uploads/2023/12/together7-2-300x97.jpg 300w, https://hagor.co.il/wp-content/uploads/2023/12/together7-2-1024x331.jpg 1024w, https://hagor.co.il/wp-content/uploads/2023/12/together7-2-768x248.jpg 768w, https://hagor.co.il/wp-content/uploads/2023/12/together7-2-1536x496.jpg 1536w, https://hagor.co.il/wp-content/uploads/2023/12/together7-2-2048x662.jpg 2048w, https://hagor.co.il/wp-content/uploads/2023/12/together7-2-1000x323.jpg 1000w, https://hagor.co.il/wp-content/uploads/2023/12/together7-2-64x21.jpg 64w"
          data-lazy-sizes="(max-width: 2560px) 100vw, 2560px"
          data-lazy-src="https://hagor.co.il/wp-content/uploads/2023/12/together7-2-scaled.jpg"
          data-ll-status="loaded"
          sizes="(max-width: 2560px) 100vw, 2560px"
          srcset="https://hagor.co.il/wp-content/uploads/2023/12/together7-2-scaled.jpg 2560w, https://hagor.co.il/wp-content/uploads/2023/12/together7-2-300x97.jpg 300w, https://hagor.co.il/wp-content/uploads/2023/12/together7-2-1024x331.jpg 1024w, https://hagor.co.il/wp-content/uploads/2023/12/together7-2-768x248.jpg 768w, https://hagor.co.il/wp-content/uploads/2023/12/together7-2-1536x496.jpg 1536w, https://hagor.co.il/wp-content/uploads/2023/12/together7-2-2048x662.jpg 2048w, https://hagor.co.il/wp-content/uploads/2023/12/together7-2-1000x323.jpg 1000w, https://hagor.co.il/wp-content/uploads/2023/12/together7-2-64x21.jpg 64w"
        />
      </div>
    </header>
  );
}
