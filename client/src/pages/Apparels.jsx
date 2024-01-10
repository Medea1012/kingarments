import { Link } from "react-router-dom";
import { RxDoubleArrowLeft } from "react-icons/rx";

export default function Apparels() {
  return (
    <section>
      <div class="common-main">
        <div class="contact-title">
          <h2 class="title">Apparels</h2>
        </div>
        <div class="page-container">
          <div class="product-list">
            <div class="product-item">
              <img
                fetchpriority="high"
                width="400"
                height="400"
                src="https://hagor.co.il/wp-content/uploads/2020/10/softshells_0004_man-softshell2-1-1.jpg"
                class="attachment"
                alt=""
                decoding="async"
              />
              <div class="product-data">
                <h2 class="product-title">Dubon Coat</h2>
                <p class="excerpt">
                  Fabric : TC Fabric with W/R Padding: hollow fiber quilted Two
                  side pocket and inside chest pocket
                </p>
              </div>
            </div>
            <div class="product-item">
              <img
                loading="lazy"
                width="500"
                height="500"
                src="https://hagor.co.il/wp-content/uploads/2020/11/bofalo_flip_green.jpg"
                class="attachment"
                alt=""
                decoding="async"
                sizes="(max-width: 500px) 100vw, 500px"
              />
              <div class="product-data">
                <h2 class="product-title">BUFFALO SNOWSUIT</h2>
                <p class="excerpt">
                  High density oxford fabric with youli coating, All the seams
                  are sealed. Wind proof, water proof. Hollow fiber padding Hood
                  with fur.
                </p>
              </div>
            </div>
            <div class="product-item">
              <img
                loading="lazy"
                width="500"
                height="500"
                src="https://hagor.co.il/wp-content/uploads/2020/11/kids5_flip.jpg"
                class="attachment"
                alt=""
                decoding="async"
                sizes="(max-width: 500px) 100vw, 500px"
              />
              <div class="product-data">
                <h2 class="product-title">Buffalo Snowsuit</h2>
                <p class="excerpt">
                  A classic Snowsuit made of extra strong fabric with high
                  flexibility and a redesign that allows maximum freedom of
                  movement and up-to-date visibility.
                </p>
              </div>
            </div>
            <div class="product-item">
              <img
                loading="lazy"
                width="500"
                height="500"
                src="https://hagor.co.il/wp-content/uploads/2020/10/softShell_0003_7290116122892_3.jpg"
                class="attachment"
                alt=""
                decoding="async"
                sizes="(max-width: 500px) 100vw, 500px"
              />
              <div class="product-data">
                <h2 class="product-title">Soldier softshell</h2>
                <p class="excerpt">
                  High quality and durable fabric, insulated and pleasant to
                  touch, Fabric compound with imitating fur, that makes light in
                  weight but warm.
                </p>
              </div>
            </div>
          </div>
        </div>
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
            <Link to="/product/nonwoven">
              <RxDoubleArrowLeft />
              nonWoven
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
