import React from "react";
import Meta from "components/Meta";
import NavbarCustom from "components/NavbarCustom";
import FaqSection from "components/FaqSection";
import Footer from "components/Footer";

function FaqPage(props) {
  return (
    <>
      <Meta title="Faq" />
      <NavbarCustom
        bg="white"
        variant="light"
        expand="md"
        logo="https://uploads.divjoy.com/logo.svg"
      />
      <FaqSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Frequently Asked Questions"
        subtitle="Here are some answers to the questions we hear from people the most."
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

export default FaqPage;
