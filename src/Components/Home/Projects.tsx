import styled from "styled-components";
import AIimage from "../../assets/unsplash_AI.png";
import BagIMage from "../../assets/unsplash_BAG.png";
import CamImage from "../../assets/unsplash_CAM.png";

const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  width: 100%;
  height: 61.25rem;
  background: #eeeeee;
`;

const ProjectHeadText = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #0093dd;
  font-family: Poppins;
  font-size: 40px;
  font-weight: 700;
  line-height: 73px;
`;

const ProjectBodyText = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 53rem;
  color: #07090f;
  font-family: Poppins;
  font-size: 24px;
  font-weight: 400;
  line-height: 34px;
  text-align: center;
`;

const ProjectWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const ProjectBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: auto;
  gap: 6rem;
  padding: 5rem;
`;

const ProjectItemsBox = styled.div<{
  id: number;
  image: string;
  Title: string;
  Details: string;
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  width: 30%;
  padding: 0.2rem;
  background-color: #ffffff;
  text-align: left;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 10rem;
`;

const ProjectTitle = styled.h1`
  display: flex;
  text-align: left;
  align-self: start;
  justify-content: center;
  font-family: Poppins;
  font-size: 24px;
  font-weight: 400;
  color: #07090f;
`;

const ProjectDetails = styled.p`
  display: flex;
  text-align: left;
  justify-content: center;
  align-items: start;
  font-family: Poppins;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  color: #07090f;
`;

const ProjectBTN = styled.button`
  text-align: center;
  align-items: center;
  width: 9.5rem;
  border: 1px solid #0083c4;
  color: #0083c4;
  height: 44px;
  border-radius: 20px;
  font-family: Poppins;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
`;

const items = [
  {
    id: 1,
    image: AIimage,
    Title: "Project Name",
    Details:
      "orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  },
  {
    id: 2,
    image: BagIMage,
    Title: "Project Name",
    Details:
      "orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  },
  {
    id: 3,
    image: CamImage,
    Title: "Project Name",
    Details:
      "orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  },
];

const ProjectsContainer = () => {
  return (
    <>
      <ProjectWrapper>
        <ProjectHeadText>Our Recent Works</ProjectHeadText>
        <ProjectBodyText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </ProjectBodyText>
        <ProjectWrap>
          <ProjectBox>
            {items.map((item) => (
              <ProjectItemsBox
                id={item.id}
                image={item.image}
                Title={item.Title}
                Details={item.Details}
                key={item.id}
              >
                <ProjectImage src={item.image} />
                <ProjectTitle style={{ textAlign: "left" }}>
                  {item.Title}
                </ProjectTitle>
                <ProjectDetails>{item.Details}</ProjectDetails>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0.5rem",
                  }}
                >
                  <ProjectBTN>Explore More</ProjectBTN>
                </div>
              </ProjectItemsBox>
            ))}
          </ProjectBox>
        </ProjectWrap>
      </ProjectWrapper>
    </>
  );
};

export default ProjectsContainer;
