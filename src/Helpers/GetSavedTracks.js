import { useEffect, useState } from "react";

const GetSavedTracks = (accessToken, userId) => {
  const [data, updateData] = useState("");

  useEffect(() => {
    async function getTracks() {
      console.log(userId);
      const url = `https://api.spotify.com/v1/users/${userId}/tracks?offset=3000&limit=50`;
      console.log(url);
      const options = {
        headers: {
          Authorization: "Bearer " + accessToken,
        },
      };
      const response = await fetch(url, options);
      updateData(await response.json());
    }

    getTracks();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return data.total;
};
export default GetSavedTracks;
