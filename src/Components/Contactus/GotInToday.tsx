import styled from "styled-components";
import icon1 from "../../assets/Vector1.svg";
import icon2 from "../../assets/bi_telephone.svg";
import icon3 from "../../assets/Group.svg";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;
  margin-bottom: 3rem;
  gap: 3rem;
`;

const HeadText = styled.h1`
  display: flex;
  font-family: Poppins;
  font-size: 64px;
  font-weight: 700;
  line-height: 70px;
  text-align: center;
  color: #0094dd;
`;

const VCEWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5rem;
`;

const VCMBOX = styled.div<{
  id: number;
  icon: string;
  Title: string;
  Details: string;
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const VCMImage = styled.img`
  width: auto;
  height: auto;
`;

const VCMTitle = styled.h1`
  display: flex;
  text-align: center;
  align-self: center;
  justify-content: center;
  font-family: Poppins;
  font-size: 24px;
  font-weight: 400;
  color: #0094dd;
`;

const VCMDetails = styled.p`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: start;
  font-family: Poppins;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  color: #07090f;
`;

const items = [
  {
    id: 1,
    icon: icon1,
    Title: "Visit Us",
    Details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  },
  {
    id: 2,
    icon: icon2,
    Title: "Call Us",
    Details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  },
  {
    id: 3,
    icon: icon3,
    Title: "Email Us",
    Details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  },
];

const GotInToday = () => {
  return (
    <>
      <Wrapper>
        <HeadText>Get In Touch Today</HeadText>
        <p
          style={{
            width: "70%",
            fontSize: "2rem",
            textAlign: "center",
            fontWeight: "400",
            lineHeight: "44px",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </Wrapper>
      <VCEWrapper>
        {items.map((item) => (
          <VCMBOX
            id={item.id}
            icon={item.icon}
            Title={item.Title}
            Details={item.Details}
          >
            <VCMImage src={item.icon} />
            <VCMTitle>{item.Title}</VCMTitle>
            <VCMDetails>{item.Details}</VCMDetails>
          </VCMBOX>
        ))}
      </VCEWrapper>
    </>
  );
};

export default GotInToday;
