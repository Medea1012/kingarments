import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
export default function Contact() {
  return (
    <section class="contact-section">
      <div></div>
      <div>
        <div class="left-contact">
          <h2 class="title">Contact Us</h2>
          <div class="contact-tel">
            <div class="contact-tel-icon">
              <BsFillTelephoneOutboundFill />
            </div>
            <div class="contact-tel-text">
              <p class="email-text">
                Gray:{" "}
                <a
                  href="mailto:13396070228@vip.163.com"
                  target="_blank"
                  class="tel-num"
                >
                  13396070228@vip.163.com
                </a>
                Medea:{" "}
                <a
                  href="mailto:medea.wangxy@gmail.com"
                  target="_blank"
                  class="tel-num"
                >
                  medea.wangxy@gmail.com
                </a>
              </p>
            </div>
          </div>
          <div class="contact-email">
            <div class="contact-email-icon">
              <MdEmail />
            </div>
            <p class="email-text">
              China:{" "}
              <a href="tel:+86 13396070228" class="tel-num">
                +86-13396070228
              </a>
              Canada:{" "}
              <a href="tel:+1 6479243724" class="tel-num">
                +1-6479243724
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
