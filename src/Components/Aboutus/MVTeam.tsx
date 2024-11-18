import styled from "styled-components";
import Chief3 from "../../assets/unsplash_MTZTGvDsHFY.png";
import Chief2 from "../../assets/unsplash_WNoLnJo7tS8.png";
import Chief1 from "../../assets/unsplash_tidSLv-UaNs.png";

const MissionVisionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  padding: 4rem;
`;

const MissionVision = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  text-align: center;
`;

const OurTeamCard = styled.div<{
    id: number;
    Image: string;
    Title: string;
    Rank: string;
  }>`
  display: flex;
  flex-direction: column;
  width: auto;
  gap: 0.5rem;
`;

const HeadText = styled.h1`
  text-align: center;
  color: #0093dd;
  font-family: Poppins;
  font-size: 40px;
  font-weight: 700;
  line-height: 73px;
  margin-top: 5rem;
`;

const TeamWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 2rem;
  gap: 2rem;
  margin-bottom: 8rem;
`;

const TeamMembersWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;
`;

const TeamImage = styled.img`
  width: 23rem;
  height: 15rem;
`;

const TeamTitle = styled.h2`
  text-align: left;
  padding-left: 1rem;
  font-family: Poppins;
  font-size: 24px;
  font-weight: 400;
  line-height: 34px;
`;

const TeamRank = styled.h4`
  text-align: left;
  padding-left: 1rem;
  font-family: Poppins;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
`;

const items = [
  {
    id: 1,
    Image: Chief1,
    Title: "Aminu Bilal",
    Rank: "Chief Technical Officer",
  },
  {
    id: 2,
    Image: Chief2,
    Title: "Muhammad Shuaibu",
    Rank: "Chief Technical Officer",
  },
  {
    id: 3,
    Image: Chief3,
    Title: "Aminu Bilal",
    Rank: "Chief Technical Officer",
  },
];

const MVTeam = () => {
  return (
    <>
      <div>
        <HeadText>About Jonafoon</HeadText>
        <MissionVisionWrapper>
          <MissionVision>
            <h2
              style={{
                textAlign: "center",
                fontSize: "3rem",
                fontWeight: "500",
              }}
            >
              Mission
            </h2>
            <p
              style={{
                textAlign: "center",
                fontSize: "2rem",
                fontWeight: "400",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto minus sed voluptatum molestias illum vel reprehenderit.
              Assumenda veniam, itaque ab dolorum nihil maxime tenetur laborum
              blanditiis dolore aspernatur at excepturi cumque nam illo
              veritatis eaque?
            </p>
          </MissionVision>
          <MissionVision>
            <h2
              style={{
                textAlign: "center",
                fontSize: "3rem",
                fontWeight: "500",
              }}
            >
              Vision
            </h2>
            <p
              style={{
                textAlign: "center",
                fontSize: "2rem",
                fontWeight: "400",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto minus sed voluptatum molestias illum vel reprehenderit.
              Assumenda veniam, itaque ab dolorum nihil maxime tenetur laborum
              blanditiis dolore aspernatur at excepturi cumque nam illo
              veritatis eaque?
            </p>
          </MissionVision>
        </MissionVisionWrapper>
        <TeamWrapper>
          <HeadText style={{margin: "0px"}}>Our Team</HeadText>
          <TeamMembersWrap>
            {items.map((item) => (
              <OurTeamCard
                id={item.id}
                Image={item.Image}
                Title={item.Title}
                Rank={item.Rank}
                key={item.id}
              >
                <TeamImage src={item.Image} />
                <TeamTitle>{item.Title}</TeamTitle>
                <TeamRank>{item.Rank}</TeamRank>
              </OurTeamCard>
            ))}
          </TeamMembersWrap>
        </TeamWrapper>
      </div>
    </>
  );
};

export default MVTeam;
