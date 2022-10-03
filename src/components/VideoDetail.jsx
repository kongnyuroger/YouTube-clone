import React, {  useEffect } from 'react'
import { useParams,  } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Typography, Box, Stack} from "@mui/material";


/*import { Videos } from './';*/
/*import { fetchFromAPI } from '../utils/fetchFromAPI';*/


const VideoDetail = () => {
  /*const [videoDetail, setVideoDetail] = useState(null);*/
 /* const [videos, setVideos] = useState(null);*/
 
  const { id } = useParams();

  useEffect(() =>{
  /*fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) => setVideoDetail(data.items[0]));*/

 /* fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setVideos(data.items))*/
  }, [id])

  const styles = {
    player: {
      width: '300px',
      height: '90vh'
    },
  }

  /*const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail;*/

  return (
    <Box minHeight='95vh'>
      <Stack direction={{ xs: 'column', md: 'row'}}>
        <Box flex={1}>
        <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer width={styles.player} height={styles.player.height} url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls/>
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
            
            </Typography>
          </Box>
        </Box>
        <Box px={2} py={{ md: 1, xs: 5 }} justifyContent="center" alignItems="center" >
         
        </Box>
      </Stack> 
    </Box>
  )
}

export default VideoDetail