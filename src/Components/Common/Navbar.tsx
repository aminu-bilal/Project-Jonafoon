import Styled from "styled-components";
import { Link } from "react-router-dom";
import Jonafoonlogo from "../../assets/Rectangle.png";

const NavWrapper = Styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height": 6rem;
`;

const ULinks = Styled.ul`
    display: flex;
    gap: 1.5rem;
    align-items: center;
    list-style: none;   
    font-style: roboto;
    font-weight: 400;
    font-size: 24px;
    color: #07090f;
    margin: 1rem;
`;

const Button = Styled.button`
    display: flex;
    align-items: center;
    list-style: none;
    border: none;
    background-color: transparent;
    cursor: pointer;
    :hover{
      color:#0093dd
    }
    :active{
      color:#0026ff
    }
`;

const Navbar = () => {
  return (
    <>
      <NavWrapper>
        <img
          src={Jonafoonlogo}
          alt="Jonafoon logo"
          style={{
            width: "150px",
            height: "70px",
            margin: "1rem",
          }}
        />

        <ULinks>
          <Button>
            <Link to="/" style={{ cursor: "pointer" }}>
              Project
            </Link>
          </Button>

          <Button>
            <Link to="/aboutus" style={{ cursor: "pointer" }}>
              About Us
            </Link>
          </Button>

          <Button>
            <Link to="/contactus" style={{ cursor: "pointer" }}>
              Contact Us
            </Link>
          </Button>

          <Button>
            <Link to="/services" style={{ cursor: "pointer" }}>
              Services
            </Link>
          </Button>

          <li>
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              style={{ display: "none" }}
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  fill="#000000"
                  fill-rule="evenodd"
                  d="M19 4a1 1 0 01-1 1H2a1 1 0 010-2h16a1 1 0 011 1zm0 6a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 7a1 1 0 100-2H2a1 1 0 100 2h16z"
                ></path>{" "}
              </g>
            </svg>
          </li>
        </ULinks>
      </NavWrapper>
    </>
  );
};

export default Navbar;
