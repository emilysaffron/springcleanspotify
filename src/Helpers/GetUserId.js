import { useEffect, useState } from "react";
const GetUserId = (accessToken, updateFoundUsername) => {
  const [data, updateData] = useState("");
  useEffect(() => {
    async function getId() {
      console.log(accessToken);
      const url = "https://api.spotify.com/v1/me";
      const options = {
        headers: {
          Authorization: "Bearer " + accessToken,
        },
      };
      const response = await fetch(url, options);
      updateData(await response.json());
      updateFoundUsername(true);
    }
    getId();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accessToken]);
  console.log(data);
  return data.id;
};
export default GetUserId;
