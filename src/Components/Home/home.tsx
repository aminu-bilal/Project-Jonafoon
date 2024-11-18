import styled from "styled-components";
import HomeIMG from "../../assets/unsplash_top.png";

const HomeAbout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${HomeIMG});
`;

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  gap: 3rem;
  margin-top: 8.5rem;
  margin-left: 3rem;
`;

export const HeadText = styled.h1`
  display: flex;
  font-family: Poppins;
  font-size: 64px;
  font-weight: 700;
  line-height: 70px;
  text-align: left;
  color: #ffffff;
  width: 50rem;
`;

const HomeParagraph = styled.p`
  display: flex;
  font-family: Poppins;
  font-size: 30px;
  font-weight: 500;
  line-height: 44px;
  text-align: left;
  color: #ffffff;
  width: 60rem;
`;

const BTNWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2.5rem;
`;

const BlueBTN = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0093dd;
  border-radius: 20px;
  font-family: Poppins;
  font-size: 24px;
  font-weight: 500;
  line-height: 34px;
  height: 4rem;
  width: 13rem;
  color: #ffffff;
`;

const WhiteBTN = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  border-radius: 20px;
  font-family: Poppins;
  font-size: 24px;
  font-weight: 500;
  line-height: 34px;
  height: 4rem;
  width: 14rem;
  color: #07090f;
`;

const home = () => {
  return (
    <>
      <HomeAbout>
        <HomeWrapper>
          <HeadText>Provide Effective World Class Solutions!</HeadText>
          <HomeParagraph>
            We are a group of companies with over 35 years of track records in
            Construction, ICT, Consultancy and Project management. Established
            in 1982, we have developed an enviable reputation for customer
            service and satisfaction
          </HomeParagraph>
          <BTNWrapper>
            <BlueBTN>Our Services</BlueBTN>
            <WhiteBTN>Recent Projects</WhiteBTN>
          </BTNWrapper>
        </HomeWrapper>
      </HomeAbout>
    </>
  );
};

export default home;
