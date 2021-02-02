import icon from "../icon.png";
import styled from "@emotion/styled";
import AuthUrl from "../Helpers/AuthUrl";
const StyledPage = styled.div`
  display: flex;
  justify-content: center;
  padding: 100px;
`;
const Icon = styled.img`
  cursor: pointer;
`;
const LandingPage = () => {
  const clicked = () => {
    window.location.href = AuthUrl();
  };
  let accessToken = window.location.hash;
  console.log(accessToken);
  return (
    <StyledPage>
      <Icon onClick={() => clicked()} src={icon} alt="icon" />
    </StyledPage>
  );
};

export default LandingPage;
