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
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ElectricGloves from "../assets/Electric gloves.jpg";
import Golves from "../assets/gloves.jpg";

export default function Home() {
  const data = [
    {
      name: "Electric Gloves",
      img: ElectricGloves,
      review: "Electric Glove",
    },
    {
      name: "Gloves",
      img: Golves,
      review: "Gloves",
    },
    {
      name: "NonWoven",
      img: "https://www.smsnonwoven.com/repository/image/38ee5015-89bb-4509-946b-ef4645db90d8.jpg",
      review: "NonWoven",
    },
    {
      name: "Buffalo Snowsuit",
      img: "https://hagor.com/wp-content/uploads/2022/06/bofalo_flip.jpg",
      review: "Buffalo Snowsuit",
    },
    {
      name: "Soft-Shell Jacket",
      img: "https://hagor.com/wp-content/uploads/2022/10/softShell_0003_7290116122892_3.jpg",
      review: "Soft-Shell Jacket",
    },
    {
      name: "Snowsuit",
      img: "https://hagor.com/wp-content/uploads/2022/10/softshells_0004_man-softshell2-1.jpg",
      review: "Snowsuit",
    },
    {
      name: "Boots cover",
      img: "https://image.made-in-china.com/202f0j00QjTGcwdIEibs/Waterproof-Boot-Cover-with-Ties-Belt.jpg",
      review: "Boots cover",
    },
    {
      name: "Surgery suits",
      img: "https://honwaymed.files.wordpress.com/2022/10/surgeons-wearing-hospital-scrubs.jpg?w=612",
      review: "Surgery suits",
    },
  ];
  const settings = {
    dots: true,
    speed: 1700,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
  };
  return (
    <div class="page_wrap home_wrap">
      <section class="squares" id="squares">
        <div class="wrap">
          <div class="squares_in">
            <div class="square">
              <a href="/product/apparels" target="_self">
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
              <a href="/product/nonwoven" target="_self">
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
      <div class="introduce">
        <div class="about-king">About WUHAN SWITCH CO LTD</div>
        <div className="py-20 px-6 max-w-6xl mx-auto" class="company">
          <img
            src="https://img0.baidu.com/it/u=1568117388,941498682&fm=253&fmt=auto&app=138&f=JPEG?w=756&h=500"
            alt=""
            class="company-image"
          />
          <div class="company-profile">
            <h1 className="text-3xl font-bold mb-4">Who we are</h1>
            <p className="mb-4" class="int-text">
              At WUHAN SWITCH CO LTD, we've been producing high-quality textiles
              for over few years. Our journey began in a small workshop in
              WuHan, where we started creating unique fabrics that stand out
              from the rest. Since then, we've grown into a trusted brand that
              is known for our craftsmanship and attention to detail.
            </p>
          </div>
        </div>
        <div className="py-20 px-6 max-w-6xl mx-auto" class="company">
          <div class="company-profile text-reverse">
            <h1 className="text-3xl font-bold mb-4">Our Process</h1>
            <p className="mb-4" class="int-text">
              Wuhan Switch Co., Ltd., founded in 2018 in Wuhan, central China,
              has swiftly grown into a notable player in the import and export
              industry, particularly in textiles and non-woven fabrics. Our
              journey began with a modest annual revenue of $300,000, escalating
              to an impressive $3 million by 2023. This growth is testament to
              our dedicated team, strategic location, and robust industrial
              foundation.
            </p>
          </div>
          <img
            src="https://img1.wsimg.com/isteam/stock/Dxxk4yB/:/cr=t:12.5%25,l:0%25,w:100%25,h:75%25/rs=w:1200,h:600,cg:true"
            alt=""
            class="company-image"
          />
        </div>
      </div>
      <div className="py-20 px-6 max-w-6xl mx-auto" class="company">
        <img
          src="https://img1.wsimg.com/isteam/stock/GpK8Kel/:/cr=t:12.37%25,l:0%25,w:100%25,h:75.27%25/rs=w:1200,h:600,cg:true"
          alt=""
          class="company-image"
        />
        <div class="company-profile">
          <h1 className="text-3xl font-bold mb-4">Our Edge</h1>
          <p className="mb-4" class="int-text">
            At Wuhan Switch, innovation meets efficiency. We specialize in
            diverse clothing lines, especially workwear, and a range of
            non-woven fabric products including protective gear and medical
            disposables. Our location in Wuhan, a hub with excellent transport
            links, ensures prompt and reliable delivery.
          </p>
        </div>
      </div>
      <div className="py-20 px-6 max-w-6xl mx-auto" class="company">
        <div class="company-profile">
          <div class="first-par">
            <h1 className="text-3xl font-bold mb-4">Who we serve</h1>
            <p className="mb-4" class="int-text">
              Our clientele ranges from global fashion brands to healthcare
              providers, all seeking quality apparel and non-woven fabric
              products.
            </p>
          </div>
          <div class="second-par">
            <h1 className="text-3xl font-bold mb-4">Why choose us</h1>
            <p className="mb-4" class="int-text">
              We're not just a company; we're a partner in your success. With
              Wuhan Switch, you're choosing a blend of experienced
              craftsmanship, cutting-edge technology, and unparalleled customer
              service. Our commitment to quality and service has earned us
              accolades and a loyal customer base. Testimonials from satisfied
              clients speak to our exceptional standards and innovative
              solutions.
            </p>
          </div>
        </div>
        <img
          src="https://cbu01.alicdn.com/img/ibank/O1CN01BmRgRc1Bs2fjQpEpe_!!0-0-cib.jpg_Q75.jpg"
          alt=""
          class="company-image"
        />
      </div>
      <div class="slide-show">
        <p className="text-center text-2xl font-bold">
          Exploration of Our Products
        </p>
        <div className="p-3">
          <Slider {...settings}>
            {data.map((d) => (
              <div>
                <div className="flex flex-col justify-center items-center">
                  <img
                    src={d.img}
                    alt=""
                    className="rounded-lg"
                    class="slide-img"
                  />
                  <p>{d.review}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div class="contact-message">
        <p className="text-center text-2xl font-bold p-3">Drop us a line!</p>
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
                <Link to="/product/nonwoven">
                  <HiMiniArrowUpRight />
                  Nonwovens
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
