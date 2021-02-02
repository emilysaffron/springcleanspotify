import FetchRoutes from "./Helpers/FetchRoutes";
import { Global, css } from "@emotion/react";

function App() {
  return (
    <>
      <Global
        styles={css`
          * {
            background-color: #191414;
          }
        `}
      />
      {FetchRoutes()}
    </>
  );
}

export default App;
