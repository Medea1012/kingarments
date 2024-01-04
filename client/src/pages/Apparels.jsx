import { Link } from "react-router-dom";
import { RxDoubleArrowLeft } from "react-icons/rx";

export default function Apparels() {
  return (
    <section>
      <div class="common-main">
        <div class="contact-title">
          <h2 class="title">Apparels</h2>
        </div>
        <ul class="products columns-2">
          <li
            class="product type-product product-data"
            data-url="https://hagor.co.il/product-category/soldiers/"
          >
            <a
              href="https://hagor.co.il/shop/soldiers/%d7%9b%d7%9c%d7%9c%d7%99-soldiers/%d7%9e%d7%99%d7%9e%d7%99%d7%99%d7%94/"
              class="woocommerce-LoopProduct-link woocommerce-loop-product__link"
            >
              <img
                fetchpriority="high"
                width="500"
                height="500"
                src="https://hagor.co.il/wp-content/uploads/2020/10/softshells_0004_man-softshell2-1-1.jpg"
                class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                alt=""
                decoding="async"
                sizes="(max-width: 500px) 100vw, 500px"
              />
              <div class="product-data">
                <h2 class="woocommerce-loop-product__title">Dubon Coat</h2>
                <p class="excerpt">
                  Fabric : TC Fabric with W/R Padding: hollow fiber quilted Two
                  side pocket and inside chest pocket
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
                src="https://hagor.co.il/wp-content/uploads/2020/11/bofalo_flip_green.jpg"
                class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                alt=""
                decoding="async"
                sizes="(max-width: 500px) 100vw, 500px"
              />
              <div class="product-data">
                <h2 class="woocommerce-loop-product__title">
                  BUFFALO SNOWSUIT
                </h2>
                <p class="excerpt">
                  High density oxford fabric with youli coating, All the seams
                  are sealed. Wind proof, water proof. Hollow fiber padding Hood
                  with fur,
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
                src="https://hagor.co.il/wp-content/uploads/2020/11/kids5_flip.jpg"
                class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                alt=""
                decoding="async"
                sizes="(max-width: 500px) 100vw, 500px"
              />
              <div class="product-data">
                <h2 class="woocommerce-loop-product__title">
                  Buffalo Snowsuit
                </h2>
                <p class="excerpt">
                  A classic Snowsuit made of extra strong fabric with high
                  flexibility and a redesign that allows maximum freedom of
                  movement and up-to-date visibility.
                </p>
              </div>
            </a>
          </li>
          {/* <li class="product type-product product-data">
            <a
              href="https://hagor.co.il/shop/soldiers/%d7%9b%d7%9c%d7%9c%d7%99-soldiers/%d7%a9%d7%a7-%d7%9b%d7%91%d7%99%d7%a1%d7%94/"
              class="woocommerce-LoopProduct-link woocommerce-loop-product__link"
            >
              <img
                loading="lazy"
                width="500"
                height="500"
                src="https://hagor.co.il/wp-content/uploads/2020/11/kids5_flip.jpg"
                class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                alt=""
                decoding="async"
                sizes="(max-width: 500px) 100vw, 500px"
              />
              <div class="product-data">
                <h2 class="woocommerce-loop-product__title">
                  Buffalo Snowsuit
                </h2>
                <p class="excerpt">
                  High density oxford fabric with youli coating, All the seams
                  are sealed. Wind proof, water proof. Hollow fiber padding Hood
                  with fur,
                </p>
              </div>
            </a>
          </li> */}
          <li class="product type-product product-data">
            <a
              href="https://hagor.co.il/shop/soldiers/%d7%9b%d7%9c%d7%9c%d7%99-soldiers/%d7%a9%d7%a7-%d7%9b%d7%91%d7%99%d7%a1%d7%94/"
              class="woocommerce-LoopProduct-link woocommerce-loop-product__link"
            >
              <img
                loading="lazy"
                width="500"
                height="500"
                src="https://hagor.co.il/wp-content/uploads/2020/10/softShell_0003_7290116122892_3.jpg"
                class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                alt=""
                decoding="async"
                sizes="(max-width: 500px) 100vw, 500px"
              />
              <div class="product-data">
                <h2 class="woocommerce-loop-product__title">
                  Soldier softshell
                </h2>
                <p class="excerpt">
                  High quality and durable fabric, insulated and pleasant to
                  touch, Fabric compound with imitating fur, that makes light in
                  weight but warm.
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
            <Link to="/product/woven">
              <RxDoubleArrowLeft />
              Woven
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
