import icon from "../icon.png";
import styled from "@emotion/styled";
import AuthUrl from "../Helpers/AuthUrl";
import GetUserId from "../Helpers/GetUserId";
import GetSavedTracks from "../Helpers/GetSavedTracks";
import { keyframes } from "@emotion/react";
import { useState } from "react";

const typing = keyframes`
  from {width: 0}
`;
const StyledPage = styled.div`
  color: #1db954;
  font: bold 100% Consolas, Monaco, monospace;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Icon = styled.img`
  cursor: pointer;
  height: auto;
`;

const Name = styled.span`
  color: white;
  font: bold 200% Consolas, Monaco, monospace;
  width: 100%;
  margin: 30px;
  white-space: nowrap;
  overflow: hidden;
  display: inline-block;
  text-align: center;
  animation: ${typing} 3s steps(21, end);
`;

const LandingPage = () => {
  const [foundUsername, updateFoundUsername] = useState(false);
  let userId = "";
  let accessToken = "";
  let tracks = "";
  let url = window.location.hash;

  const clicked = () => {
    window.location.href = AuthUrl();
  };

  if (url.length > 0) {
    const urlParams = new URLSearchParams(url);
    accessToken = urlParams.get("#access_token");
    if (accessToken) {
      userId = GetUserId(accessToken, updateFoundUsername);
    }
    if (!tracks) {
      tracks = GetSavedTracks(accessToken, userId);
    }
  }

  return (
    <StyledPage>
      <Icon onClick={() => clicked()} src={icon} alt="icon" />
      {foundUsername ? (
        <>
          <h1>Hello</h1>

          <Name>{userId}</Name>
          {tracks ? <>you have {tracks} tracks saved!</> : null}
        </>
      ) : (
        <h2>click the icon to log in</h2>
      )}
    </StyledPage>
  );
};

export default LandingPage;
