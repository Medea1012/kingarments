import { Link } from "react-router-dom";
import { RxDoubleArrowLeft } from "react-icons/rx";
import surgery from "../assets/surgery gowns.jpg";
import bouffant from "../assets/bouffant cap and mask.jpg";
import woven from "../assets/woven.jpg";
import boots from "../assets/boots cover.jpg";
import base from "../assets/woven base.mp4";

export default function Woven() {
  return (
    <section>
      <div class="common-main">
        <div class="contact-title">
          <h2 class="title">Wovens</h2>
        </div>
        <div class="video_item">
          <div class="video_wrap">
            <video controls autoPlay muted loop width="270px" height="500px">
              <source src={base}></source>
            </video>
          </div>
        </div>
        <ul class="products columns-2">
          <div class="p-c">
            <li
              class="product type-product product-data"
              data-url="https://hagor.co.il/product-category/soldiers/"
            >
              <a
                href="https://hagor.co.il/product-category/soldiers/"
                class="woocommerce-LoopProduct-link woocommerce-loop-product__link"
              >
                <img
                  fetchpriority="high"
                  width="400"
                  height="400"
                  src={surgery}
                  class="attachment"
                  alt=""
                  decoding="async"
                  sizes="(max-width: 500px) 100vw, 500px"
                />
                <div class="product-data">
                  <h2 class="woocommerce-loop-product__title">Surgery suits</h2>
                  <p class="excerpt">
                    Hagor’s new edition of the classic Dubon Coat. The filling
                    is made from high quality hollowfiber material for heat
                    isolation. The coat has two side pockets, an internal
                    pocket, and a hood.
                  </p>
                </div>
              </a>
            </li>
          </div>
          <li class="product type-product product-data">
            <a
              href="https://hagor.co.il/shop/soldiers/%d7%9b%d7%9c%d7%9c%d7%99-soldiers/%d7%a9%d7%a7-%d7%9b%d7%91%d7%99%d7%a1%d7%94/"
              class="woocommerce-LoopProduct-link woocommerce-loop-product__link"
            >
              <img
                loading="lazy"
                width="500"
                height="500"
                src={woven}
                class="attachment"
                alt=""
                decoding="async"
                sizes="(max-width: 500px) 100vw, 500px"
              />
              <div class="product-data">
                <h2 class="woocommerce-loop-product__title">Woven</h2>
                <p class="excerpt">
                  A classic Snowsuit made of extra strong fabric with high
                  flexibility and a redesign that allows maximum freedom of
                  movement and up-to-date visibility.
                </p>
              </div>
            </a>
          </li>
          <li class="product type-product product-data">
            <a
              href="https://hagor.co.il/shop/soldiers/%d7%9b%d7%9c%d7%9c%d7%99-soldiers/%d7%a9%d7%a7-%d7%9b%d7%91%d7%99%d7%a1%d7%94/"
              class="woocommerce-LoopProduct-link woocommerce-loop-product__link"
            >
              <img
                loading="lazy"
                width="500"
                height="500"
                src={bouffant}
                class="attachment"
                alt=""
                decoding="async"
                sizes="(max-width: 500px) 100vw, 500px"
              />
              <div class="product-data">
                <h2 class="woocommerce-loop-product__title">
                  bouffant cap and mask
                </h2>
                <p class="excerpt">
                  A classic Snowsuit made of extra strong fabric with high
                  flexibility and a redesign that allows maximum freedom of
                  movement and up-to-date visibility.
                </p>
              </div>
            </a>
          </li>
          <li class="product type-product product-data">
            <a
              href="https://hagor.co.il/shop/soldiers/%d7%9b%d7%9c%d7%9c%d7%99-soldiers/%d7%a9%d7%a7-%d7%9b%d7%91%d7%99%d7%a1%d7%94/"
              class="woocommerce-LoopProduct-link woocommerce-loop-product__link"
            >
              <img
                loading="lazy"
                width="500"
                height="500"
                src={boots}
                class="attachment"
                alt=""
                decoding="async"
                sizes="(max-width: 500px) 100vw, 500px"
              />
              <div class="product-data">
                <h2 class="woocommerce-loop-product__title">boots cover</h2>
                <p class="excerpt">
                  High-quality and durable fabric, insulated and pleasant to the
                  touch, provides perfect insulation from cold and moisture,
                  without being bulky and heavy.
                </p>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div class="contact-bottom">
        <div class="back-to">
          <div class="back-link">
            <Link to="/">
              <RxDoubleArrowLeft />
              Back to Home
            </Link>
          </div>
          <div class="back-link">
            <Link to="/product/apparels">
              <RxDoubleArrowLeft />
              Apparels
            </Link>
          </div>
        </div>
        <div class="switch-lab">
          <p>Kingarments © WUHAN SWITCH CO LTD. All Rights Reserved.</p>
        </div>
      </div>
    </section>
  );
}
