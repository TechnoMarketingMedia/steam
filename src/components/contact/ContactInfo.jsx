import SocialLink from "../../data/social/SocialLink.json";

const ContactInfo = () => {
  return (
    <div className="axil-contact-info-wrapper p-l-md-45 m-b-xs-30">
      <div className="axil-contact-info-inner">
        <h2 className="h4 m-b-xs-10">Contact Information</h2>
        <div className="axil-contact-info">
          <address className="address">
            <p className="mid m-b-xs-30">
              7 3/3 Deanery Road,
              <br />
             Kingston 3
            </p>
            <div className="h5 m-b-xs-10">We&apos;re Available 24/ 7. Call Now.</div>
            <div>
              <a className="tel" href="tel:8884562790">
                <i className="fas fa-phone" />
                (876) 324-44087
              </a>
            </div>
           
          </address>
          {/* End of address */}
          <div className="contact-social-share m-t-xs-30">
            <div className="axil-social-title h5">Follow Us</div>
            <ul className="social-share social-share__with-bg">
              <li>
                <a href={SocialLink.fb.url}>
                  <i className={SocialLink.fb.icon} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
