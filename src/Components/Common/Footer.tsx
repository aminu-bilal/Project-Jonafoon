import styled from "styled-components";
import Facebook from "../../assets/Facebook.png";
import Twitter from "../../assets/Twitter.png";
import LinkedIn from "../../assets/LinkedIn.png";
import Instagram from "../../assets/Instagram.png";
import BackgroundIMG from "../../assets/unsplash_foot.png";

const FooterWrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: start;
  width: 100%;
  height: 45vh;
  gap: 6rem;
  background-image: url(${BackgroundIMG});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 0.5rem;
  opacity: 70;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  width: auto;
  color: #1491ff;
  font-size: 24px;
  font-weight: 400;
  font-family: poppins;
  margin-top: 2.5rem;
`;

const Socials = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

const QLinks = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: start;
  list-style: none;
  font-family: poppins;
  color: #ffffff;
  font-size: 14px;
`;

const ContactLines = styled.address`
  display: flex;
  flex-direction: column;
  align-items: start;
  color: #ffffff;
  font-size: 14px;
`;
const Footer = () => {
  return (
    <>
      <FooterWrapper>
        <Wrapper>
          <p
            style={{
              fontSize: "28px",
              fontWeight: "500",
              fontFamily: "poppins",
              marginBottom: "1rem",
            }}
          >
            Follow Us
          </p>
          <Socials>
            <img src={Facebook} alt="Facebook" />
            <img src={Twitter} alt="Twitter" />
            <img src={Instagram} alt="Instagram" />
            <img src={LinkedIn} alt="LinkedIn" />
          </Socials>
        </Wrapper>
        <Wrapper>
          <p
            style={{
              fontSize: "28px",
              fontWeight: "500",
              fontFamily: "poppins",
              marginBottom: "1rem",
            }}
          >
            Quick Links
          </p>
          <QLinks>
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Contact Us</li>
          </QLinks>
        </Wrapper>
        <Wrapper>
          <p
            style={{
              fontSize: "28px",
              fontWeight: "500",
              fontFamily: "poppins",
              marginBottom: "1rem",
            }}
          >
            Contacts
          </p>
          <ContactLines>
            <p>
              +234 (0) 803 628 7842, <br />
              +234 (0) 812 376 0225, <br />
              +234 (0) 818 054 6425 <br />
              <br />
              Info@jonafoon.com
            </p>
          </ContactLines>
        </Wrapper>
        <Wrapper>
          <p
            style={{
              fontSize: "28px",
              fontWeight: "500",
              fontFamily: "poppins",
              marginBottom: "1rem",
            }}
          >
            Office
          </p>
          <ContactLines>
            <p>
              Abuja Office: 12B Excel Estate Apo, <br /> FCT-Abuja, Nigeria.
            </p>
            <br />
            <p>
              Lagos Office: 16, Allbu Street, <br />
              Surelere Off Vode Thomas, Lagos State
            </p>
          </ContactLines>
        </Wrapper>
      </FooterWrapper>
      <p
        style={{
          textAlign: "center",
          fontSize: "24px",
          fontFamily: "poppins",
          color: "#07090f",
          fontWeight: "400",
          margin: "2rem",
        }}
      >
        Copyright &copy; 2021 Jonafoon. All rights reserved.
      </p>
    </>
  );
};

export default Footer;
