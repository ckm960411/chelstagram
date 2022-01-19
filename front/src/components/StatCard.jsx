import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, useMediaQuery } from "@mui/material";

const StatCard = ({ name, img, stats }) => {
  const matches = useMediaQuery((theme) => theme.breakpoints.up("md"));

  return (
    <Card sx={{ minWidth: '145px', maxWidth: '500px', borderBottom: '3px solid #001487', margin: '0 auto 14px'}}>
      <CardActionArea>
        <CardContent sx={{ textAlign: "center" }}>
          <div style={matches ? { height: "80px" } : { height: '50px' }}>
            <img src={img} alt={name} style={{ height: "100%" }} />
          </div>
          <Typography
            gutterBottom
            variant={ matches ? "h4" : "h5" }
            component="div"
            sx={{ marginBottom: 0 }}
          >
            {name === "Appearnces"
              ? stats.appearances
              : name === "Minutes Played"
              ? stats.minutesPlayed
              : name === "Games Started"
              ? stats.gamesStarted
              : stats.goals}
          </Typography>
          <Typography component="span">{name}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default StatCard;
