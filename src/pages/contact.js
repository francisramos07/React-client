import React from "react";
import Meta from "components/Meta";
import NavbarCustom from "components/NavbarCustom";
import ContactSection from "components/ContactSection";
import Footer from "components/Footer";

function AboutPage(props) {
  return (
    <>
      <Meta title="About" description="Learn about our company and team" />
      <NavbarCustom
        bg="white"
        variant="light"
        expand="md"
        logo="https://uploads.divjoy.com/logo.svg"
      />
      <ContactSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Contact Us"
        subtitle=""
        buttonText="Send message"
        buttonColor="primary"
        showNameField={true}
      />
      <Footer
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        copyright={`© ${new Date().getFullYear()} Company`}
        logo="https://uploads.divjoy.com/logo.svg"
      />
    </>
  );
}

export default AboutPage;
