import Home from "../Components/Home/home";
import ProjectsContainer from "../Components/Home/Projects";
import Wework from "../Components/Home/work";

const HomePage = () => {
  return (
    <>
      <div>
        <Home />
        <ProjectsContainer />
        <Wework />
      </div>
    </>
  );
};

export default HomePage;
