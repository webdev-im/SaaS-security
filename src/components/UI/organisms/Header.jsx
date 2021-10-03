import Navbar from "../molecules/Navbar";
import styled from "styled-components";
import logo from "../../../assets/images/logo.png";
import logoNew from "../../../assets/images/logoNew.png";

const StyledHeader = styled.header`
  height: 5vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
  background-color: rgba(48, 48, 48, 0.2);
  width: 100%;
  section {
    width: 60rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    div {
      width: 5rem;
      color: white;
      img {
        height: 2rem;
      }
    }
  }
`;
const Header = () => {
  return (
    <StyledHeader>
      <section>
        <div>
          <img src={logoNew} alt="" />
        </div>
        <Navbar />
      </section>
    </StyledHeader>
  );
};

export default Header;
