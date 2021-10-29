import axios from "axios";
const KEY = "AIzaSyApioWjGl_JxjNWpR1_8mwyg7euxBmn49o";
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
