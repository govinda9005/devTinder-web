import axios from "axios";
import { useEffect } from "react";
import { API_BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import UserrCard from "./UserrCard";
import { addFeed } from "../utils/feedSlice";

const Feed = () => {
  const feed = useSelector((store) => store.feed);
  const dispatch = useDispatch();

  const getFeed = async () => {
    if (feed) return;
    try {
      const response = await axios(API_BASE_URL + "/feed", {
        method: "GET",
        withCredentials: true, // Important for sending cookies
      });

      const data = await response.data;
      dispatch(addFeed(data)); // Assuming you have a setFeed action in your feedSlice
      return data;
    } catch (error) {
      console.error("Failed to fetch feed:", error);
      throw error;
    }
  };

  useEffect(() => {
    getFeed();
  }, []);

  return (
    feed?.data?.length > 0 && (
      <div className="flex flex-col items-center gap-4 mt-6">
        <UserrCard user={feed.data[0]} />
      </div>
    )
  );
  // return <>{feed ? JSON.stringify(feed) : "Loading feed..."}<;
};

export default Feed;
