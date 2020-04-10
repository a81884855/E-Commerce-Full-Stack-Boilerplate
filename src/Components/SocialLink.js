import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaGooglePlusG,
} from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

const SocialLink = ({
  googlePlus,
  facebook,
  twitter,
  pinterest,
  instagram,
  youtube,
}) => {
  return (
    <div id="social-link">
      {facebook && (
        <a className="icon facebook" href="/https://www.facebook.com/">
          <FaFacebookF />
        </a>
      )}
      {twitter && (
        <a className="icon twitter" href="https://www.twitter.com/">
          <FaTwitter />
        </a>
      )}
      {instagram && (
        <a className="icon instagram" href="https://www.instagram.com/">
          <FaInstagram />
        </a>
      )}
      {pinterest && (
        <a className="icon pinterest" href="https://www.pinterest.com/">
          <FaPinterest />
        </a>
      )}
      {youtube && (
        <a className="icon youtube" href="https://www.youtube.com/">
          <IoLogoYoutube />
        </a>
      )}
      {googlePlus && (
        <a className="icon googlePlus" href="https://aboutme.google.com/">
          <FaGooglePlusG />
        </a>
      )}
    </div>
  );
};

export default SocialLink;
