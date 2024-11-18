
import styled from "styled-components";
import TopOthers from "../../assets/unsplash_OTHERS.png"


const HeroAppel = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${TopOthers});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 65vh;
  gap: 3rem;
  padding-left: 5rem;
  padding-top: 10rem;
`;

const HeroButton = styled.button`
  color: #ffffff;
  text-align: center;
  background-color: #0083c4;
  border-radius: 20px;
  height: 4rem;
  width: 10rem;
  cursor: pointer;

  :hover {
    color: #84d4fc;
  }
`;

const HeadText = styled.h1`
  display: flex;
  font-family: Poppins;
  font-size: 64px;
  font-weight: 700;
  line-height: 70px;
  text-align: left;
  color: #ffffff;
  width: 50rem;
`;

const HeroSecContactus = () => {
  return (
    <>
      <HeroAppel>
        <HeadText>Contact Us</HeadText>
        <HeroButton>Send Message</HeroButton>
      </HeroAppel>
    </>
  );
};

export default HeroSecContactus;
