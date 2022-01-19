import { Button, Checkbox, Grid, Tab, Tabs, Typography } from "@mui/material";
import { Box } from "@mui/system";
import AppLayout from "components/AppLayout";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { loadPlayerInfo } from "store/playerSlice";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const PlayerDetail = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const playerId = Number(params.id);
  const playerInfo = useSelector((state) => state.player.value)[0];
  const error = useSelector((state) => state.player.error);
  // const { name, backNumber, position, profileImg, bgImg, birthDate, birthPlace } = playerInfo;
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log("useEffect");
    dispatch(loadPlayerInfo(playerId))
      .then((res) => console.log("success"))
      .catch((error) => console.log(error));
  }, [playerId]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  if (error) {
    return (
      <AppLayout>
        <div>Something wrong: {error}</div>
        <div>Please retry again.</div>
      </AppLayout>
    );
  }
  if (!playerInfo) {
    return (
      <AppLayout>
        <div>Loading...</div>
      </AppLayout>
    );
  }
  return (
    <AppLayout>
      <Grid container spacing={0.5}>
        <Grid item xs={12} order={{ sm: 1 }}>
          <img src={playerInfo.bgImg} alt="gg" style={{ width: "100%" }} />
        </Grid>
        <Grid item xs={12} sm={12} md={8} order={{ xs: 3, sm: 3, md: 2 }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Item One" {...a11yProps(0)} />
              <Tab label="Item Two" {...a11yProps(1)} />
              <Tab label="Item Three" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            Item One
          </TabPanel>
          <TabPanel value={value} index={1}>
            Item Two
          </TabPanel>
          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel>
        </Grid>
        <Grid item xs={12} sm={12} md={4} order={{ xs: 2, sm: 2, md: 3 }}>
          
        </Grid>
      </Grid>
    </AppLayout>
  );
};

export default PlayerDetail;
