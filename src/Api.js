import axios from "axios";

export const getData = async () => {
  const options = {
    method: "GET",
    url: "https://quiz26.p.rapidapi.com/questions",
    headers: {
      "X-RapidAPI-Key": "0a8bbc4472msha8d77ff6422def1p1216bdjsna631f39b09ad",
      "X-RapidAPI-Host": "quiz26.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
