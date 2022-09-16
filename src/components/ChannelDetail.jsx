
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([])
 console.log(channelDetail, videos);
 console.log(videos)
  const { id } = useParams;

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) => setChannelDetail(data));

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date&q=music`).then((data) => setVideos(data))
    
  },[id])
  return (
    <div>{id}</div>
  )
}

export default ChannelDetail