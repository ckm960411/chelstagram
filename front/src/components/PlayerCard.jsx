import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { FavoriteBorder as LikeIcon, Favorite as LikedIcon } from "@mui/icons-material";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PlayerCard({ player }) {
  const { backNumber, name, position, profileImg, birthDate, birthPlace } = player
  const [like, setLike] = useState(false)
  const navigate = useNavigate()

  const onLike = useCallback(() => {
    setLike(prev => !prev)
  }, [])

  const onLoadPlayerDetail = useCallback(() => {
    navigate(`/players/${backNumber}`)
  }, [])

  return (
    <Card sx={{ minWidth: '230px', maxWidth: '350px', borderRadius: '8px', margin: '0 auto' }}>
      <CardMedia 
        component="img"
        width="100%"
        src={profileImg}
        alt={name}
        sx={{ padding: '4px' }}
      />
      <CardContent>
        <Typography gutterBottm variant="h6" component="div" sx={{ color: '#001487' }}>
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {backNumber}, {position}
          <br />
          {birthDate}, {birthPlace}
        </Typography>
      </CardContent>
      <CardActions>
        <Button 
          size="middle" 
          sx={{ color: '#001487' }} 
          startIcon={ like ? <LikedIcon /> : <LikeIcon />}
          onClick={onLike}
        >
          Like
        </Button>
        <Button 
          size="middle" 
          sx={{ color: '#001487' }} 
          onClick={onLoadPlayerDetail}
        >
          See More
        </Button>
      </CardActions>
    </Card>
  )
}
