import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { FavoriteBorder as LikeIcon, Favorite as LikedIcon } from "@mui/icons-material";
import { useCallback, useState } from "react";
import playerImg from 'imgs/Kepa-Arrizabalaga.png'

export default function PlayerCard() {
  const [like, setLike] = useState(false)

  const onLike = useCallback(() => {
    setLike(prev => !prev)
  }, [])

  return (
    <Card sx={{ minWidth: '260px', maxWidth: '350px', borderRadius: '8px', margin: '0 auto' }}>
      <CardMedia 
        component="img"
        width="100%"
        src={playerImg}
        alt="Kepa-Arrizabalaga"
        sx={{ padding: '4px' }}
      />
      <CardContent>
        <Typography gutterBottm variant="h5" component="div" sx={{ color: '#001487' }}>
          Kepa Arrizabalaga
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet, voluptatum?
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="middle" sx={{ color: '#001487' }} onClick={onLike}>
          {like ? <LikedIcon sx={{ marginRight: '5px' }} /> : <LikeIcon sx={{ marginRight: '5px' }} />}
          Like
        </Button>
        <Button size="middle" sx={{ color: '#001487' }}>See More</Button>
      </CardActions>
    </Card>
  )
}
