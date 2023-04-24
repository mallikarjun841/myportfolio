import Headers from "../Header";
import Sidemenu from "../sidemenu";
import "./index.css";

import {
  ContactMainContainer,
  Button,
  FormContainer,
  InputBox,
  Labelname,
  Normaldiv,
} from "../styled-components";

const Contact = () => {
  return (
    <ContactMainContainer>
      <Headers />
      <Sidemenu />
      <h1 className="contacttag">Feel free to contact me</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1161.8941493966595!2d79.78508324998016!3d18.854768555406967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDUxJzE5LjYiTiA3OcKwNDcnMDcuMSJF!5e0!3m2!1sen!2sin!4v1682321104494!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <h1 className="contacttag">Contact Me</h1>
      <div className="contactcontainer">
        <form
          action="https://formspree.io/f/xgebrndj"
          method="POST"
          className="formcontainer"
        >
          <input
            className="input"
            name="username"
            id="name"
            placeholder="Name"
            required
            autoComplete="off"
          />

          <input
            className="input"
            name="email"
            id="email"
            placeholder="Email"
            required
            autoComplete="off"
          />
          <textarea
            name="message"
            rows={6}
            autoComplete="off"
            placeholder="Message....."
            cols={30}
            required
          ></textarea>
          <button className="sendbutton" type="submit">
            Send
          </button>
        </form>
        <div className="touchs">
          <a
            className="anchor"
            href="https://www.linkedin.com/in/mallikarjun-godishela84"
            target="blank"
          >
            <box-icon
              border="circle"
              animation="tada-hover"
              size="md"
              name="linkedin"
              type="logo"
            ></box-icon>
          </a>
          <a
            className="anchor"
            href="https://wa.me/918328653284"
            target="blank"
          >
            <box-icon
              border="circle"
              animation="tada-hover"
              size="md"
              name="whatsapp"
              type="logo"
            ></box-icon>
          </a>
          <a
            href="https://www.facebook.com/godisala.mallikarjun"
            target="blank"
            className="anchor"
          >
            <box-icon
              border="circle"
              animation="tada-hover"
              backgroundColor="blue"
              size="md"
              type="logo"
              name="facebook"
            ></box-icon>
          </a>

          <a
            className="anchor"
            href="https://www.instagram.com/mallikarjun_reddy_84/"
            target="blank"
          >
            <box-icon
              border="circle"
              animation="tada-hover"
              size="md"
              type="logo"
              name="instagram"
            ></box-icon>
          </a>

          <a
            href=" https://github.com/mallikarjun841"
            className="anchor"
            target="blank"
          >
            <box-icon
              border="circle"
              animation="tada-hover"
              size="md"
              type="logo"
              name="github"
            ></box-icon>
          </a>
        </div>
      </div>
    </ContactMainContainer>
  );
};

export default Contact;
