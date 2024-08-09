import React from "react";
import facebook from "../assets/svg/facebook.svg";
import instagram from "../assets/svg/instagram.svg";
import twitch from "../assets/svg/twitch.svg";
import youtube from "../assets/svg/youtube.svg";
const ContactUs = () => {
  return (
    <section
      id="contact-us"
      className="section-container flex scroll-mt-12 flex-col items-center justify-between px-12 py-16 lg:flex-row"
    >
      <div className="mb-10 shrink-0 space-y-8 self-start md:self-center lg:mb-0">
        <h3 className="text-3xl font-bold md:text-6xl">Contact Us</h3>
        <p className="w-[160px]">
          THE SHOE COMPANY, Dallas, Texas, USA +1 5590 1120 9910
        </p>
        <ul className="flex space-x-2">
          <li>
            <img src={facebook} alt="" />
          </li>
          <li>
            <img src={instagram} alt="" />
          </li>
          <li>
            <img src={twitch} alt="" />
          </li>
          <li>
            <img src={youtube} alt="" />
          </li>
        </ul>
      </div>
      <div className="w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d429174.1217878468!2d-97.06122535324542!3d32.82080972076902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c19f77b45974b%3A0xb9ec9ba4f647678f!2sDallas%2C%20TX%2C%20USA!5e0!3m2!1sen!2sin!4v1723199750543!5m2!1sen!2sin"
          className="mx-auto w-full max-w-xl lg:mx-0 lg:ml-auto"
          height="600"
          //   style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactUs;
