import styled from "styled-components";
import { HeadText } from "../Home/home";
import TopOthers from "../../assets/unsplash_OTHERS.png";

const HeroAppel = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${TopOthers});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 70vh;
  gap: 3rem;
  padding-left: 5rem;
  padding-top: 8rem;
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

const HeroSection = () => {
  return (
    <>
      <HeroAppel>
        <HeadText style={{ color: "white", width: "21rem" }}>
          About The Comapny
        </HeadText>
        <HeroButton>View Our Work</HeroButton>
      </HeroAppel>
    </>
  );
};

export default HeroSection;
