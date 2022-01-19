import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  useMediaQuery,
} from "@mui/material";
import goalpostImg from "imgs/goalpost.png";

const StatNumber = (matches, position, stats, a, b, c) => (
  <Typography 
    gutterBottom
    variant={matches ? "h4" : "h5"}
    component="div"
    sx={{ marginBottom: 0 }}
  >
    {
      position === "GoalKeeper" ? a
      : position === "Forward" && stats.totalShots >= 1 ? b
      : c
    }
  </Typography>
)
const StatLabel = (position, stats, a, b, c) => (
  <Typography component="span">
    {
      position === "GoalKeeper" ? a
      : position === "Forward" && stats.totalShots >= 1 ? b
      : c
    }
  </Typography>
)

const DetailStatCard = ({ player }) => {
  const { position, stats } = player
  const matches = useMediaQuery((theme) => theme.breakpoints.up("md"));

  return (
    <Card sx={{ borderBottom: "3px solid #001487" }}>
      <CardHeader
        subheader={
          position === "GoalKeeper" ? "Clean Sheet Statistics"
          : position === "Forward" && stats.totalShots >= 1 ? "Goal Statistics"
          : "Assistance Statistics"
        }
      />
      <CardContent
        sx={{
          textAlign: "center",
          height: "120px",
          paddingTop: "30px",
          backgroundImage: `url(${goalpostImg})`,
          backgroundPosition: "center center",
          backgroundSize: "200px 80px",
          backgroundRepeat: "no-repeat",
        }}
      >
        {StatNumber(matches, position, stats, stats.goalsConceded, stats.goalsFromInsideBox, stats.assists)}
        {StatLabel(position, stats, "Goals Conceded", "Goals From Inside Box", "Assists")}
      </CardContent>
      <CardContent sx={{ textAlign: "center", display: "flex" }}>
        <div style={{ flex: 1, borderRight: "1px solid #DBDEEF" }}>
          {StatNumber(matches, position, stats, stats.cleanSheets, stats.goalsFromOutsideBox, stats.crosses)}
          {StatLabel(position, stats, "Clean Sheets", "Goals From Outside Box", "Crosses")}
        </div>
        <div style={{ flex: 1 }}>
          {StatNumber(matches, position, stats, stats.minsPerGoalConceded, stats.goalsFormSetPieces, stats.chancesCreated)}
          {StatLabel(position, stats, "Mins Per Goal Conceded", "Goals From Set Pieces", "Chances Created")}
        </div>
      </CardContent>
    </Card>
  );
};

export default DetailStatCard;
