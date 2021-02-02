import { Router } from "@reach/router";

const FetchRoutes = () => {
  return (
    <Router
      exact
      path="/"
      render={() =>
        (window.location = "https://accounts.spotify.com/authorize")
      }
    />
  );
};
export default FetchRoutes;
