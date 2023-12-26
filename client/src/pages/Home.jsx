import { HiMiniArrowUpRight } from "react-icons/hi2";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa";
import { MdOutlineAttachEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { AiFillAliwangwang } from "react-icons/ai";
import { BsTelephoneOutboundFill } from "react-icons/bs";

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
      <div className="py-20 px-6 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Who Are We</h1>
        <p className="mb-4">General Manager:</p>
        <p className="mb-4">
          Food, clothing, housing and travelling are four basic necessities of
          people's life. Clothing leads human towards civilization. The British
          Industrial Revolution in the 18th century began with the textile
          industry. China's reform and opening up in the last century also began
          with the textile and clothing industry.
        </p>
        <p className="mb-4">
          I am fortunate to grow up with this era. My company, WUHAN SWITCH CO
          LTD founded in 2018. I have been engaged in the clothing production
          and export industry for more than 30 years. With 30 years of
          experience in clothing export, our company exports all types of work
          wear and casual wear. Our main markets are Europe and North America.
          Superior quality and excellent service are our advantages. Welcome
          friends from all over the world to discuss cooperation.
        </p>
        <div className="mb-2">
          <p>Sincerely yours,</p>
          <p>General Manager,</p>
          <p>Gary</p>
        </div>
      </div>
      <footer>
        <div class="botton-item">
          <div class="left-wrap">
            <div class="foot-item foot-info">
              <p class="foot-title foot-code">QR Code</p>
              <div class="foot-qrimg">
                <img
                  src="https://next-with-ant-design.vercel.app/btc.jpg"
                  width="180"
                  height="180"
                  loading="lazy"
                  class="ErWeiImg"
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
            <p class="foot-title foot-nav">Navigation</p>

            <ul class="foot-list">
              <li class="menu">
                <a href="http://127.0.0.1:5173/">
                  <HiMiniArrowUpRight />
                  Home
                </a>
              </li>
              <li class="menu">
                <a href="http://127.0.0.1:5173/about">
                  <HiMiniArrowUpRight />
                  About us
                </a>
              </li>
              <li class="menu">
                <a href="http://127.0.0.1:5173/product">
                  <HiMiniArrowUpRight />
                  Products
                </a>
              </li>
              <li class="menu">
                <a href="http://127.0.0.1:5173/contact-us=">
                  <HiMiniArrowUpRight />
                  Contact us
                </a>
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
              <a href="mailto:13396070228@vip.163.com" target="_blank">
                13396070228@vip.163.com
              </a>
            </div>
            <div class="item">
              <div class="fax-icon">
                <FaLocationArrow size="1vw" />
                <p class="fax-text">Fax:</p>
              </div>
              <a href="tel:+86 27-87669028">86-27-87669028</a>
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
