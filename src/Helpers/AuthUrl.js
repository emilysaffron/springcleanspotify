const AuthUrl = () => {
  let AuthUrl =
    "https://accounts.spotify.com/authorize?client_id=2ff6acb69e284959a01b41cab45891a6&redirect_uri=http://localhost:3000/&response_type=token&scope=user-library-read&show_dialog=true";
  return AuthUrl;
};

export default AuthUrl;
