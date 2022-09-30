import React, { useState, useEffect } from 'react'
import { useParams, Links } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Typography, Box, Stack} from "@mui/material";
import { CheckCircle } from '@mui/icons-material';

import Videos from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';


const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
const { id } = useParams();

useEffect(() =>{
  fetchFromAPI(`videos?part=title,statistics&id=${id}`).then((data) => setVideoDetail(data.items[0]))
}, [id])


  return (
    <Box minHeight='95vh'>
      <Stack direction={{ xs: 'column', md: 'row'}}>
        <Box flex={1}>
          <Box sx={{ width: '100px', position: 'sticky', top: '86px' }}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls/>
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              
            </Typography>
          </Box>
        </Box>
      </Stack> 
    </Box>
  )
}

export default VideoDetail