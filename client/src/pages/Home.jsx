import { Link } from "react-router-dom";
import { HiMiniArrowUpRight } from "react-icons/hi2";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa";
import { MdOutlineAttachEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { AiFillAliwangwang } from "react-icons/ai";
import { BsTelephoneOutboundFill } from "react-icons/bs";
import QRCode from "../assets/QRCode.jpg";

export default function Home() {
  return (
    <div class="page_wrap home_wrap">
      <section class="squares" id="squares">
        <div class="wrap">
          <div class="squares_in">
            <div class="square">
              <a
                href="https://hagor.co.il/product-category/bags-and-backpacks/"
                target="_self"
              >
                <div class="square_im">
                  <img
                    class="image"
                    src="https://res.cloudinary.com/doaazgsrk/image/upload/v1593536301/Beige/title_nbetk7.jpg"
                    alt=""
                  />
                </div>
                <div class="square_content">
                  <h3 class="square_title">Apparels</h3>
                  <div class="square_tx"></div>
                </div>
              </a>
            </div>
            <div class="square">
              <a
                href="https://hagor.co.il/product-category/bags-and-backpacks/"
                target="_self"
              >
                <div class="square_im">
                  <img
                    class="image"
                    src="https://www.crodaindustrialspecialties.com/mediaassets/images/industrial-chemicals/products-and-applications/nonwoven2.jpg?w=1920&la=en-GB&focalpointcrop=1&xratio=0&yratio=0&hash=A99CDD804A6829E8187BA6D8C7E7A3B1"
                    alt=""
                  />
                </div>
                <div class="square_content">
                  <h3 class="square_title">Non woven products</h3>
                  <div class="square_tx"></div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="py-20 px-6 max-w-6xl mx-auto" class="company">
        <img
          src="https://img0.baidu.com/it/u=1568117388,941498682&fm=253&fmt=auto&app=138&f=JPEG?w=756&h=500"
          alt=""
          class="company-image"
        />

        <div class="company-profile">
          <h1 className="text-3xl font-bold mb-4">WUHAN SWITCH CO LTD</h1>
          <p className="mb-4">
            WUHAN SWITCH CO LTD was established in 2018. It located in Wuhan,
            Hubei Province, China. It is a professional foreign trade company
            engaged in import and export. In the company's inaugural year, its
            annual revenue was only $300,000. In 2023, the revenue reached 3
            million dollars.The rapid development of the company benefited from
            two aspects. First, we have an excellent team with abundant work
            experience to provide customers with outstanding services. Second,
            we have a strong textile and non-woven industrial base in Hubei
            Province.
          </p>
          <p className="mb-4">
            Wuhan, known as Oriental Chicago, has convenient transportation in
            China.Our products are concentrated in two fields, one is clothing,
            especially all kinds of work clothes, and the other is non-woven
            products, including non-woven protective clothing, medical
            disposable non-woven products, including isolation clothing,
            protective clothing, surgical clothing Clothes.
          </p>
          <p className="mb-4">
            If you are interested in any of our products or would like to
            discuss a custom order, please feel free to contact us. We are
            looking forward to forming successful business relationships with
            new clients around the world in the near future.
          </p>
        </div>
      </div>
      <footer>
        <div class="botton-item contact-us-bottom">
          <div class="left-wrap">
            <div class="foot-item foot-info">
              <p class="foot-title foot-code">QR Code</p>
              <div class="foot-qrimg">
                <img
                  src={QRCode}
                  width="180"
                  height="180"
                  loading="lazy"
                  alt="QR Code"
                />
                <div class="symbol">
                  <a href="mailto:13396070228@vip.163.com" target="_blank">
                    <MdOutlineAttachEmail size="1.5vw" />
                  </a>
                  <a href="https://www.linkedin.com/in/medea-wang/">
                    <FaLinkedin size="1.5vw" />
                  </a>
                  <a href="mailto:medea.wangxy@gmail.com" target="_blank">
                    <AiFillAliwangwang size="1.5vw" />
                  </a>
                  <a href="tel:+86 13396070228">
                    <BsTelephoneOutboundFill size="1.3vw" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="foot-item foot-quick">
            <p class="foot-title">Navigation</p>

            <ul class="foot-list">
              <li class="menu">
                <Link to="/product/apparels">
                  <HiMiniArrowUpRight />
                  Apparels
                </Link>
              </li>
              <li class="menu">
                <Link to="/product/woven">
                  <HiMiniArrowUpRight />
                  Woven
                </Link>
              </li>
              <li class="menu">
                <Link to="/contact-us">
                  <HiMiniArrowUpRight />
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
          <div class="foot-item foot-contact" className="hidden sm:inline">
            <p class="foot-title">Contact us</p>
            <div class="foot-tel">
              <div class="tel-icon">
                <BsTelephoneFill color="red" size="2vw" />
                <p class="tel-text">Call us on</p>
              </div>
              <a href="tel:+86 13396070228" class="tel-num">
                +86-13396070228
              </a>
            </div>
            <div class="item">
              <div class="email-icon">
                <MdEmail size="1vw" />
                <p class="email-text">Email:</p>
              </div>
              <a
                href="mailto:13396070228@vip.163.com"
                target="_blank"
                class="tel-num"
              >
                13396070228@vip.163.com
              </a>
            </div>
            <div class="item">
              <div class="fax-icon">
                <FaLocationArrow size="1vw" />
                <p class="fax-text">Fax:</p>
              </div>
              <a href="tel:+86 27-87669028" class="tel-num">
                86-27-87669028
              </a>
            </div>
          </div>
        </div>
        <div class="switch">
          <p>Kingarments © WUHAN SWITCH CO LTD. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
