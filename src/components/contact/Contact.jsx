import "./contact.css";
import Phone from "../../img/whats.png";
import Email from "../../img/mail.png";
import Address from "../../img/gps.png";
import Youtube from "../../img/youtube.png"
import Linkedin from "../../img/linkedin.png"
import Github from "../../img/github.png"
import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { useContext } from "react";
import { ThemeContext } from "../../context";
const Contact = () => {
  const formRef = useRef();
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const [done, setDone] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_g7n6n8m",
        "template_9n4oap7",
        formRef.current,
        "user_yqimngPQxBoZsByq1zEN0"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your projects</h1>
          <div className="c-info">
            <div className="c-info-item">
              <a href="https://wa.me/5930983592690" target="_blank">
                <img src={Phone} alt="" className="c-icon" />
              </a>{" "}
              + 593 983592690
            </div>
            <div className="c-info-item">
              <a
                href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWsdJKlVfXFRhwRsJTKSvnSGXzZWmcTpLhqKxVwzHqdXhhwtwfgCrQFdzXFFBVZlfXbsSMGPq"
                target="_blank"
              >
                <img src={Email} alt="" className="c-icon" />
              </a>{" "}
              corozco6489@gmail.com
            </div>




            <div className="c-info-item">
              <a href="https://www.youtube.com/channel/UCgR2CZLCClCdTeo_l5W53eQ" target="_blank"><img src={Youtube} alt="" className="c-icon" /></a>

              ElectroDev
            </div>

            <div className="c-info-item">
              <a href="https://www.linkedin.com/in/carlosorozco6489/" target="_blank">
              <img src={Linkedin} alt="" className="c-icon" />

              </a>
              Carlos Orozco
            </div>

            <div className="c-info-item">
              <a href="https://github.com/corozco6489" target="_blank"><img src={Github} alt="" className="c-icon" /></a>
              corozco6489(Carlos Orozco)
            </div>

            
            <div className="c-info-item">
              <img src={Address} alt="" className="c-icon" />
              Ambato - Ecuador
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What's your story ?</b> 
            <br />

            Send us an email about the concerns you have about us.
            
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{ background: darkMode && "#333" }}
              type="text"
              placeholder="Name"
              name="user_name"
            />
            <input
              style={{ background: darkMode && "#333" }}
              type="text"
              placeholder="Subject"
              name="user_subject"
            />

            <input
              style={{ background: darkMode && "#333" }}
              type="text"
              placeholder="Email"
              name="user_email"
            />

            <textarea
              style={{ background: darkMode && "#333" }}
              name="message"
              placeholder="Message"
              id=""
              rows="5"
            ></textarea>
            <button>Submit</button>

            {done && "Thank You...."}
          </form>
        </div>
      </div>
      <div class="credit">Created by<a href="https://www.linkedin.com/in/carlosorozco6489/" target="_blank"><span> Carlos Orozco </span></a>  || All rights reserved</div>
    </div>
  );
};

export default Contact;
