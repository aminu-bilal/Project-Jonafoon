import styled from "styled-components";

const Workwrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 4rem;
  margin-bottom: 5rem;
  margin-top: 5rem;
`;

const WorkTopText = styled.h1`
  display: flex;
  text-align: center;
  color: #0093dd;
  font-family: Poppins;
  font-size: 40px;
  font-weight: 700;
  line-height: 73px;
`;

const WorkParagraph = styled.p`
  display: flex;
  text-align: center;
  color: #07090f;
  width: 50rem;
  font-family: Poppins;
  font-size: 30px;
  font-weight: 400;
  line-height: 44px;
`;

const TalkBTN = styled.button`
  background-color: #0093dd;
  border-radius: 10px;
  height: 6rem;
  width: 22rem;
  font-family: Poppins;
  font-size: 36px;
  font-weight: 600;
  line-height: 44px;
  text-align: center;
  color: #ffffff;
`;

const BlueBGWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3rem;
  justify-content: center;
`;

const BlueBGText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: #ffffff;
  background-color: #0083c4;
  width: 45%;
  padding: 1rem;
  font-family: Poppins;
  line-height: 44px;
  text-align: left;
  font-size: 24px;
  font-weight: 400;
`;
const Wework = () => {
  return (
    <>
      <Workwrap>
        <WorkTopText>How We Work?</WorkTopText>
        <WorkParagraph>
          We listen to you and provide effective solutions that bridges the gap
          between your goals and the need of your customers
        </WorkParagraph>
        <TalkBTN>Talk To Us</TalkBTN>
      </Workwrap>
      <Workwrap>
        <WorkTopText>What We Do</WorkTopText>
        <WorkParagraph style={{ width: "45rem" }}>
          We follow a solution methodology that allows us to build partnerships
          for life with our customers.
        </WorkParagraph>
        <BlueBGWrapper>
          <BlueBGText>
            <h1 style={{ fontSize: "36px", fontWeight: "700" }}>
              Construction and Repairs
            </h1>
            <p
              style={{
                fontWeight: "400",
                fontSize: "36px",
                lineHeight: "44px",
              }}
            >
              We deliver services through providing informed advice and
              consultancy services in our areas of concentration through our
              network of professionals and partners.
            </p>
          </BlueBGText>
          <BlueBGText>
            <h1 style={{ fontSize: "36px", fontWeight: "700" }}>
              Information Technology
            </h1>
            <p
              style={{
                fontWeight: "400",
                fontSize: "36px",
                lineHeight: "44px",
              }}
            >
              We deliver information communication and technology services that
              increases our customers efficiences, enhance productivity and
              optimise costs for their businesses.
            </p>
          </BlueBGText>
        </BlueBGWrapper>
      </Workwrap>
    </>
  );
};

export default Wework;
