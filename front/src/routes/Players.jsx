import Grid from "@mui/material/Grid";
import AppLayout from "components/AppLayout";
import PlayerCard from "components/PlayerCard";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadPlayersList } from "store/playersSlice";

const Players = () => {
  const dispatch = useDispatch()
  const playersInfo = useSelector(state => state.players.value)
  const error = useSelector(state => state.players.error)

  useEffect(() => {
    dispatch(loadPlayersList())
  }, [])

  if (error) {
    return (
      <AppLayout>
        <div>Something wrong: {error}</div>
        <div>Please retry again.</div>
      </AppLayout>
    )
  }

  return (
    <>
      <AppLayout>
        <Grid container spacing={2}>
          {playersInfo.map(player => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={`${player.name}-${player.backNumber}`}>
              <PlayerCard player={player} />
            </Grid>
          ))}
        </Grid>
      </AppLayout>
    </>
  );
};

export default Players;
