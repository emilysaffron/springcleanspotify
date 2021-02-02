import icon from "./icon.png";
function App() {
  const clicked = () => {
    window.location.href =
      "https://accounts.spotify.com/authorize?client_id=2ff6acb69e284959a01b41cab45891a6&redirect_uri=http://localhost:3000/&response_type=token";
  };
  return (
    <div>
      <img onClick={() => clicked()} src={icon} alt="icon" />
    </div>
  );
}

export default App;
