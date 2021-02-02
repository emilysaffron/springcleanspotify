const GetData = async (accessToken) => {
  console.log(accessToken);
  const url = "https://api.spotify.com/v1/search?q=random&type=artist";
  const options = {
    headers: {
      Authorization: "Bearer " + accessToken,
    },
  };
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
};
export default GetData;
