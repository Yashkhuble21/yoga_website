import React from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { AiTwotoneMail } from "react-icons/ai";
import { CDBFooter, CDBFooterLink, CDBBox, CDBBtn, CDBIcon } from 'cdbreact';

export const Footer = () => {
  return (
    <CDBFooter className="shadow mt-5 ">
      <CDBBox display="flex" flex="column" className="mx-auto py-5" style={{ width: '90%' }}>
        <CDBBox display="flex" justifyContent="around" className="flex-wrap">
          <CDBBox>
            <a href="/" className="d-flex  p-0 text-dark">
              <h1>YOGWE</h1>
              
            </a>
            <p className="my-3" style={{ width: '250px' }}>
              We are creating High Quality Resources and tools to Aid developers during the
              developement of their projects
            </p>
            <CDBBox display="flex" className="mt-4">
              <CDBBtn flat color="dark">
                <CDBIcon fab icon="facebook-f" />
              </CDBBtn>
              <CDBBtn flat color="dark" className="mx-3">
                <CDBIcon fab icon="twitter" />
              </CDBBtn>
              <CDBBtn flat color="dark" className="p-2">
                <CDBIcon fab icon="instagram" />
              </CDBBtn>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4 " style={{ fontWeight: '600' , width: '200px' }} >
              Yogwe
            </p>
            <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
              <CDBFooterLink href="/about">About Us</CDBFooterLink>
              <CDBFooterLink href="/signin">Sign in</CDBFooterLink>
              <CDBFooterLink href="/signup">Sign up</CDBFooterLink>
              <CDBFooterLink href="/">Blog</CDBFooterLink>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              Contact Us
            </p>
            <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
              <p>2021ed, Bhakt Vallabh Dhola Marg, Yash Vijay Society,<br/> Kankaria, Ahmedabad, Gujarat 380002</p>
              <div href="/"><FaPhoneAlt/>+91 8769543245</div>
              <div ><AiTwotoneMail/> yogwelife@gmail.com</div>
            </CDBBox>
          </CDBBox>
        </CDBBox>
        <small className="text-center mt-5">&copy; Yogwe, 2023. All rights reserved.</small>
      </CDBBox>
    </CDBFooter>
  );
};

export default Footer;