import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const socials = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/itsrituraz?stkn=ajJjYWg1OHA4MHE5",
      icon: <FaInstagram />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/itsrituraz",
      icon: <FaLinkedinIn />,
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/916201274623",
      icon: <FaWhatsapp />,
    },
    {
      name: "X",
      url: "https://x.com/itsRituRaz",
      icon: <FaXTwitter />,
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>Terms & Conditions</p>
        </div>

        <div className="socials">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
              aria-label={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Ritu Raj. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;