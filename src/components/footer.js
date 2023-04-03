import React from "react";
import FooterBtn from "./footerbtn";
import {AiFillHome} from "react-icons/ai"
import {IoSettingsOutline} from "react-icons/io5"
import {BiWallet} from "react-icons/bi"
import {HiOutlineCreditCard} from "react-icons/hi"

const Footer = () => {
  return (
    <div id="footer-section">
      <FooterBtn title="Home" active={true} >
        <AiFillHome size={25} color="#52aa95"/>
      </FooterBtn>
      <FooterBtn title="Voucher" active={true} >
        <HiOutlineCreditCard  size={25} color="#a9a9a9"/>
      </FooterBtn>
      <FooterBtn title="Wallet" active={true} >
        <BiWallet  size={25} color="#a9a9a9"/>
      </FooterBtn>
      <FooterBtn  title="Settings" active={true} >
        <IoSettingsOutline size={25} color="#a9a9a9"/>
      </FooterBtn>
    </div>
  );
};

export default Footer;
