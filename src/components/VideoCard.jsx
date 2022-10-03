import React from 'react'
import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {  demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/constants";
/*import { CheckBox } from '@mui/icons-material';*/

const VideoCard = ({video: {id: {videoId}, snippet}}) => {
  return (
    <Card sx={{ width: { xs: '100%', sm: '320px',  }, boxShadow: "none", borderRadius: 0 }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl }>
        <CardMedia  image={snippet.thumbnails.high.url} 
        alt={snippet.title}
        sx={{ width: { xs: '100%', sm: '320px',}, height: 180 }}
        /> 
        </Link>
        <CardContent sx={{backgroundColor: '#1e1e1e', height: 106}}>
          <Link to={videoId ? `/video/${videoId}` : demoVideoUrl }
          style={{ textDecoration: 'none'}}>
            <Typography variant='subtitle1' fontWeight='bold' color="#fff">
              {snippet.title.slice(0, 60) || demoVideoTitle.slice(0, 60)} 
            </Typography>
          </Link>
          <Link to={snippet.channelId ? `/channel/${snippet.channelId}` : demoChannelUrl }
          style={{ textDecoration: 'none'}}>
            <Typography variant='subtitle3' fontWeight='bold' color="gray">
              {snippet.channelTitle.slice(0, 60) || demoChannelTitle.slice(0, 60)}
              <CheckCircleIcon sx={{ fontSize: '14px', color: 'gray', ml: '5px' }} />
            </Typography>
          </Link>
        </CardContent>
    </Card>
  )
}

export default VideoCard