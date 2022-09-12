import React from 'react';
import { Typography, Box, CardContent, CardMedia } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Link } from 'react-router-dom';
import { demoProfilePicture } from '../utils/constants';
import ChannelDetail from './ChannelDetail';

const ChannelCard = ({channelDetail}) => (
    <Box 
      sx={{
        boxShadow: 'none',
        borderRadius: '20px'
      }}>

        
    <Link to={`/channel/${channelDetail.id.channelId}`} style={{textDecoration: 'none'}}>
          <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: '#fff' }}>
          <CardMedia
            image={channelDetail.snippet.thumbnails.high.url || demoProfilePicture}
            alt={channelDetail.snippet.title}
           sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: 2, border: '1px solid #e3e3e3' }}
            />
            <Typography variant="h6" >
              {channelDetail.snippet.title}{' '}
              <CheckCircleIcon sx={{ fontSize: '14px', color: 'gray', ml: '5px' }} />
            </Typography>
          </CardContent>
        </Link>
    </Box>
  )


export default ChannelCard