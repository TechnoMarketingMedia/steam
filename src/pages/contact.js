import Image from "next/image";
import Breadcrumb from "../components/common/Breadcrumb";
import BreadcrumbBanner from "../components/common/BreadcrumbBanner";
import ContactForm from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";
import HeadMeta from "../components/elements/HeadMeta";
import SectionTitleTwo from "../components/elements/SectionTitleTwo";
import FooterOne from "../components/footer/FooterTwo";
import HeaderThree from "../components/header/HeaderThree";

const ContactPage = () => {

    return (
        <>
            <HeadMeta metaTitle="Contact Us" />
            <HeaderThree />
            <Breadcrumb aPage="Contact Us" />
            <BreadcrumbBanner pageTitle="Contact Us" />
            <div className="axil-about-us section-gap  section-gap-top__with-text">
                <div className="container">
                       <ContactInfo />

                </div>
            </div>
            
            <div className="section-gap our-location section-gap-top__with-text">
                <div className="container">
                    <div className="section-title">
                        <h2 className="axil-title m-b-xs-40">
                            Our Location
                        </h2>
                    </div>
                    {/* End of .section-title */}
                    <div className="axil-map-wrapper m-b-xs-30">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3794.8017702957954!2d-76.7737961894579!3d17.987957282934385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8edb3f7178257e39%3A0x800d2f43e265d751!2s7%20Deanery%20Rd%2C%20Kingston%2C%20Jamaica!5e0!3m2!1sen!2sus!4v1685139150678!5m2!1sen!2sus%22" width={600} height={450} allowFullScreen />
                    </div>
                    {/* End of .axil-map-wrapper */}
                </div>
                {/* End of .container */}
            </div>
            <FooterOne />
        </>
    );
}

export default ContactPage;





