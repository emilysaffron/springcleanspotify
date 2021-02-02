import icon from "../icon.png";
import styled from "@emotion/styled";
import AuthUrl from "../Helpers/AuthUrl";
import GetData from "../Helpers/GetData";

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
  let url = window.location.hash;

  if (url.length > 0) {
    const urlParams = new URLSearchParams(url);
    let accessToken = urlParams.get("#access_token");
    if (accessToken) {
      GetData(accessToken);
    }
  }
  return (
    <StyledPage>
      <Icon onClick={() => clicked()} src={icon} alt="icon" />
    </StyledPage>
  );
};

export default LandingPage;
