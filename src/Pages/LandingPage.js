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
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 100px;
  color: #1db954;
  font: bold 100% Consolas, Monaco, monospace;
`;
const Icon = styled.img`
  cursor: pointer;
  width: 200px;
  height: 200px;
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
  animation: ${typing} 2s steps(21, end);
`;

const LandingPage = () => {
  const [foundUsername, updateFoundUsername] = useState(false);
  let userId = "";
  const clicked = () => {
    window.location.href = AuthUrl();
  };

  let url = window.location.hash;

  let accessToken = "";
  let tracks = "";
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
      <h1>Hello</h1>
      {foundUsername ? (
        <>
          <Name>{userId}</Name>
          you have {tracks} tracks saved!
        </>
      ) : (
        <h2>click the icon to log in</h2>
      )}
    </StyledPage>
  );
};

export default LandingPage;
