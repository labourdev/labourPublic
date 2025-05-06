import "./ContactUs.scss";
import Download from "./svgs/Download";
import Whatsapp from "./svgs/Whatsapp";
import LinkedIn from "./svgs/LinkedIn";
import Instagram from "./svgs/Instagram";
import Facebook from "./svgs/Facebook";
import Redirect from "./svgs/Redirect";

const ContactUs = () => {
  const contactUsAction = (action) => {
    switch (action) {
      case "DOWNLOAD":
        const vCardData = `
            BEGIN:VCARD
            VERSION:3.0
            FN:Rasmi Abu Baker
            N:Abu Baker;Rasmi;;;
            TITLE:Managing Director
            ORG:Labour Link Group
            TEL;TYPE=WORK,VOICE:(02) 8000 1113
            TEL;TYPE=CELL,VOICE:0410 714 615
            EMAIL:admin@labourlinkgroup.com.au
            URL:https://labourlinkgroup.com.au
            ADR;TYPE=WORK:;;150 George Street;Parramatta;NSW;2150;Australia
            NOTE:LinkedIn - https://www.linkedin.com/company/labour-link-group\\nInstagram - https://www.instagram.com/labourlinkgroup?igsh=ZDZhYmZmdmh2Zzl6\\nFacebook - https://www.facebook.com/share/155YmdhjkUr/\\nWhatsApp - https://wa.me/61410714615
            END:VCARD
        `;

        const blob = new Blob([vCardData], {
          type: "text/vcard;charset=utf-8",
        });
        const url = URL.createObjectURL(blob);

        const link = document.createElement("a");
        link.href = url;
        link.download = "Rasmi_Abu_Baker.vcf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
        break;

      case "WHATSAPP":
        const phoneNumber = "61410714615";
        const message = "Hello, I would like to inquire about your services.";
        const whatsAppURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
          message
        )}`;
        window.open(whatsAppURL, "_blank");
        break;

      case "LINKEDIN":
        const linkedInURL =
          "https://www.linkedin.com/company/labour-link-group";
        window.open(linkedInURL, "_blank");
        break;

      case "INSTAGRAM":
        const instagramURL =
          "https://www.instagram.com/labourlinkgroup?igsh=ZDZhYmZmdmh2Zzl6";
        window.open(instagramURL, "_blank");
        break;

      case "FACEBOOK":
        const facebookURL = "https://www.facebook.com/share/155YmdhjkUr/";
        window.open(facebookURL, "_blank");
        break;

      case "REDIRECT":
        const homeURL = "https://labourlinkgroup.com.au";
        window.open(homeURL, "_blank");
        break;

      default:
        console.log("uknown action");
    }
  };
  return (
    <div className="contact-us-page d-flex flex-column align-items-center gap-20">
      <div className="title">LABOUR LINK GROUP</div>
      <div className="sub-title">
        <div>Thanks for scanning our card.</div>
        <div>Stay connected with us:</div>
      </div>
      <div>
        <div
          className="d-flex align-items-center action-card"
          onClick={() => contactUsAction("DOWNLOAD")}
        >
          <div className="icon">
            <Download />
          </div>
          <div className="action-text">Download Our Contact Info (vCard)</div>
        </div>
        <div
          className="d-flex align-items-center action-card"
          onClick={() => contactUsAction("WHATSAPP")}
        >
          <div className="icon">
            <Whatsapp />
          </div>
          <div className="action-text">Message Us on WhatsApp</div>
        </div>
        <div
          className="d-flex align-items-center action-card"
          onClick={() => contactUsAction("LINKEDIN")}
        >
          <div className="icon">
            <LinkedIn />
          </div>
          <div className="action-text">Follow Us on LinkedIn</div>
        </div>
        <div
          className="d-flex align-items-center action-card"
          onClick={() => contactUsAction("INSTAGRAM")}
        >
          <div className="icon">
            <Instagram />
          </div>
          <div className="action-text">Message Us on Instagram</div>
        </div>
        <div
          className="d-flex align-items-center action-card"
          onClick={() => contactUsAction("FACEBOOK")}
        >
          <div className="icon fb">
            <Facebook />
          </div>
          <div className="action-text">Message Us on Facebook</div>
        </div>
        <div
          className="d-flex align-items-center action-card"
          onClick={() => contactUsAction("REDIRECT")}
        >
          <div className="icon">
            <Redirect />
          </div>
          <div className="action-text">Visit Our Website</div>
        </div>
      </div>
      <div>&copy; 2025 Labour Link Group</div>
    </div>
  );
};

export default ContactUs;
