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
          <h2 class="title">Nonwovens</h2>
        </div>
        <div class="video_des">
          <div class="video_introduce">
            This is our medical non-woven production facility, fully enclosed,
            with 100,000 dust-free workshops to ensure product quality.
          </div>
          <div class="video_item">
            <div class="video_wrap">
              <video
                controls
                autoPlay
                muted
                loop
                width="270px"
                height="500px"
                className="rounded-lg hidden sm:inline"
              >
                <source src={base}></source>
              </video>
            </div>
          </div>
        </div>
        <div class="page-container">
          <div class="product-list">
            <div class="product-item">
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
                <h2 class="product-title">Surgery suits</h2>
                <p class="excerpt">
                  Hagor’s new edition of the classic Dubon Coat. The filling is
                  made from high quality hollowfiber material for heat
                  isolation. The coat has two side pockets, an internal pocket,
                  and a hood.
                </p>
              </div>
            </div>
            <div class="product-item">
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
                <h2 class="product-title">nonWoven</h2>
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
                src={bouffant}
                class="attachment"
                alt=""
                decoding="async"
                sizes="(max-width: 500px) 100vw, 500px"
              />
              <div class="product-data">
                <h2 class="product-title">bouffant cap and mask</h2>
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
                src={boots}
                class="attachment"
                alt=""
                decoding="async"
              />
              <div class="product-data">
                <h2 class="product-title">boots cover</h2>
                <p class="excerpt">
                  High-quality and durable fabric, insulated and pleasant to the
                  touch, provides perfect insulation from cold and moisture,
                  without being bulky and heavy.
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
