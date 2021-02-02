import { Router } from "@reach/router";
import LandingPage from "../Pages/LandingPage";
const FetchRoutes = () => {
  return (
    <Router>
      <LandingPage path={"/"} />
    </Router>
  );
};
export default FetchRoutes;
