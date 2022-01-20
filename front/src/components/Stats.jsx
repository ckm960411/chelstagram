import StatCard from "./StatCard";
import { Grid } from "@mui/material";
import appearancesImg from "imgs/appearances.png"
import minutesPlayedImg from "imgs/minutesPlayed.png"
import gamesStartedImg from "imgs/gamesStarted.png"
import goalsImg from "imgs/goals.png"
import DetailStatCard from "./DetailStatCard";
import StatisticsCard from "./StatisticsCard";

const stats = [
  {
    name: 'Appearnces',
    img: appearancesImg,
  },
  {
    name: 'Minutes Played',
    img: minutesPlayedImg,
  },
  {
    name: 'Games Started',
    img: gamesStartedImg,
  },
  {
    name: 'Goals',
    img: goalsImg,
  },
]

const Stats = ({ player }) => {
  return (
    <>
      <Grid container spacing={2}>
        {stats.map(stat => (
          <Grid item xs={12} sm={6} md={3}>
            <StatCard name={stat.name} img={stat.img} stats={player.stats} />
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6}>
          <DetailStatCard player={player} />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <StatisticsCard player={player} />
        </Grid>
      </Grid>
    </>
  );
}

export default Stats