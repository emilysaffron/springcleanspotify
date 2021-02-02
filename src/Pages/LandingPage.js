import icon from "../icon.png";
import styled from "@emotion/styled";
import AuthUrl from "../Helpers/AuthUrl";
import GetUserId from "../Helpers/GetUserId";

const StyledPage = styled.div`
  display: flex;
  justify-content: center;
  padding: 100px;
`;
const Icon = styled.img`
  cursor: pointer;
`;
const Name = styled.div`
  color: white;
`;
const LandingPage = () => {
  let userId = "";
  const clicked = () => {
    window.location.href = AuthUrl();
  };
  let url = window.location.hash;

  if (url.length > 0) {
    const urlParams = new URLSearchParams(url);
    let accessToken = urlParams.get("#access_token");
    if (accessToken) {
      userId = GetUserId(accessToken);
    }
  }
  return (
    <StyledPage>
      <Icon onClick={() => clicked()} src={icon} alt="icon" />
      <Name>{userId}</Name>
    </StyledPage>
  );
};

export default LandingPage;
