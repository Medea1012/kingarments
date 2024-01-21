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
      id: 5,
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
    <div className="page_wrap home_wrap">
      <section className="squares" id="squares">
        <div className="wrap">
          <div className="squares_in">
            <div className="square">
              <Link to="/product/apparels">
                <div className="square_im">
                  <img
                    className="image"
                    src="https://res.cloudinary.com/doaazgsrk/image/upload/v1593536301/Beige/title_nbetk7.jpg"
                    alt=""
                  />
                </div>
                <div className="square_content">
                  <h3 className="square_title">Apparels</h3>
                  <div className="square_tx"></div>
                </div>
              </Link>
            </div>
            <div className="square">
              <Link to="/product/nonwoven">
                <div className="square_im">
                  <img
                    className="image"
                    src="https://www.crodaindustrialspecialties.com/mediaassets/images/industrial-chemicals/products-and-applications/nonwoven2.jpg?w=1920&la=en-GB&focalpointcrop=1&xratio=0&yratio=0&hash=A99CDD804A6829E8187BA6D8C7E7A3B1"
                    alt=""
                  />
                </div>
                <div className="square_content">
                  <h3 className="square_title">Non woven products</h3>
                  <div className="square_tx"></div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="introduce">
        <div className="about-king">About WUHAN SWITCH CO LTD</div>
        <div className="py-20 px-6 max-w-6xl mx-auto company">
          <img
            src="https://img0.baidu.com/it/u=1568117388,941498682&fm=253&fmt=auto&app=138&f=JPEG?w=756&h=500"
            alt=""
            className="company-image"
          />
          <div className="company-profile">
            <h1 className="text-3xl font-bold mb-4">Who we are</h1>
            <p className="mb-4 int-text">
              At WUHAN SWITCH CO LTD, we've been producing high-quality textiles
              for over few years. Our journey began in a small workshop in
              WuHan, where we started creating unique fabrics that stand out
              from the rest. Since then, we've grown into a trusted brand that
              is known for our craftsmanship and attention to detail.
            </p>
          </div>
        </div>
        <div className="py-20 px-6 max-w-6xl mx-auto company">
          <div className="company-profile text-reverse">
            <h1 className="text-3xl font-bold mb-4">Our Process</h1>
            <p className="mb-4 int-text">
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
            className="company-image"
          />
        </div>
      </div>
      <div className="py-20 px-6 max-w-6xl mx-auto company">
        <img
          src="https://img1.wsimg.com/isteam/stock/GpK8Kel/:/cr=t:12.37%25,l:0%25,w:100%25,h:75.27%25/rs=w:1200,h:600,cg:true"
          alt=""
          className="company-image"
        />
        <div className="company-profile">
          <h1 className="text-3xl font-bold mb-4">Our Edge</h1>
          <p className="mb-4 int-text">
            At Wuhan Switch, innovation meets efficiency. We specialize in
            diverse clothing lines, especially workwear, and a range of
            non-woven fabric products including protective gear and medical
            disposables. Our location in Wuhan, a hub with excellent transport
            links, ensures prompt and reliable delivery.
          </p>
        </div>
      </div>
      <div className="py-20 px-6 max-w-6xl mx-auto company">
        <div className="company-profile">
          <div className="first-par">
            <h1 className="text-3xl font-bold mb-4">Who we serve</h1>
            <p className="mb-4 int-text">
              Our clientele ranges from global fashion brands to healthcare
              providers, all seeking quality apparel and non-woven fabric
              products.
            </p>
          </div>
          <div className="second-par">
            <h1 className="text-3xl font-bold mb-4">Why choose us</h1>
            <p className="mb-4 int-text">
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
          className="company-image"
        />
      </div>
      <div className="slide-show">
        <p className="text-center text-2xl font-bold">
          Exploration of Our Products
        </p>
        <div className="p-3">
          <Slider {...settings}>
            {data.map((d, i) => (
              <div key={i}>
                <div className="flex flex-col justify-center items-center">
                  <img src={d.img} alt="" className="rounded-lg slide-img" />
                  <p>{d.review}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="contact-message">
        <div className="contact-total">
          <p className="drop-message text-center text-2xl font-bold p-5">
            Drop us a line!
          </p>
          <form className="message-form">
            <input
              type="text"
              placeholder="Name:*"
              className="message-item message-text"
            ></input>
            <input
              type="text"
              placeholder="Email:*"
              className="message-item message-text"
            ></input>
            <textarea
              rows="10"
              cols="30"
              placeholder="Leave your message:*"
              className="message-item message-box"
            ></textarea>
            <button className="send-button">SEND</button>
          </form>
        </div>
      </div>
      <footer>
        <div className="botton-item contact-us-bottom">
          <div className="left-wrap">
            <div className="foot-item foot-info">
              <p className="foot-title foot-code">QR Code</p>
              <div className="foot-qrimg">
                <img
                  src={QRCode}
                  width="180"
                  height="180"
                  loading="lazy"
                  alt="QR Code"
                />
                <div className="symbol">
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
          <div className="foot-item foot-quick">
            <p className="foot-title">Navigation</p>
            <ul className="foot-list">
              <li className="menu">
                <Link to="/product/apparels">
                  <HiMiniArrowUpRight />
                  Apparels
                </Link>
              </li>
              <li className="menu">
                <Link to="/product/nonwoven">
                  <HiMiniArrowUpRight />
                  Nonwovens
                </Link>
              </li>
              <li className="menu">
                <Link to="/contact-us">
                  <HiMiniArrowUpRight />
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
          <div className="foot-item foot-contact hidden sm:inline">
            <p className="foot-title">Contact us</p>
            <div className="foot-tel">
              <div className="tel-icon">
                <BsTelephoneFill color="red" size="2vw" />
                <p className="tel-text">Call us on</p>
              </div>
              <a href="tel:+86 13396070228" className="tel-num">
                +86-13396070228
              </a>
            </div>
            <div className="item">
              <div className="email-icon">
                <MdEmail size="1vw" />
                <p className="email-text">Email:</p>
              </div>
              <a
                href="mailto:13396070228@vip.163.com"
                target="_blank"
                className="tel-num"
              >
                13396070228@vip.163.com
              </a>
            </div>
            <div className="item">
              <div className="fax-icon">
                <FaLocationArrow size="1vw" />
                <p className="fax-text">Fax:</p>
              </div>
              <a href="tel:+86 27-87669028" className="tel-num">
                86-27-87669028
              </a>
            </div>
          </div>
        </div>
        <div className="switch">
          <p>Kingarments © WUHAN SWITCH CO LTD. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
