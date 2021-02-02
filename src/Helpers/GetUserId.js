import { useEffect, useState } from "react";
const GetUserId = (accessToken) => {
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
    }
    getId();
  }, [accessToken]);

  return data.id;
};
export default GetUserId;
