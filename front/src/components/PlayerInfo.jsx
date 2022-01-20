import { Card, CardContent, CardHeader, Divider, Grid, Typography, useMediaQuery } from "@mui/material"
import { useSelector } from "react-redux"
import styled from "styled-components"

const StatBox = styled.div`
  background: #F1F3F6;
  min-height: 110px;
  padding: 20px 0 10px;
`
const StyledTypo = styled(Typography)`
  color: #001487;
  font-size: ${props => props.large === true ? '28px' : '12px'};
`
const InfoBox = ({ title, desc }) => (
  <>
    <Typography sx={{ display: 'flex', justifyContent: 'space-between', padding: '14px 0' }}>
      <span>{title}</span>
      <span>{desc}</span>
    </Typography>
    <Divider />
  </>
)

const PlayerInfo = () => {
  const downLg = useMediaQuery((theme) => theme.breakpoints.down("lg"));
  const downSm = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const player = useSelector(state => state.player.value)[0]
  const { name, position, birthDate, birthPlace, backNumber, stats } = player

  console.log(downSm)

  return (
    <>
      <Card sx={downLg ? { boxShadow: 'none' } : { border: '2px solid #001487' }}>
        <CardHeader 
          title={name}
          sx={{ color: '#001487' }}
        />
        <CardContent sx={downSm && { display: 'none' }}>
          <Grid container spacing={1} sx={{ textAlign: 'center' }}>
            <Grid item xs={3} sm={3}>
              <StatBox>
                <StyledTypo large>{stats.appearances}</StyledTypo>
                <StyledTypo>Appearances</StyledTypo>
              </StatBox>
            </Grid >
            <Grid item xs={3} sm={3}> 
            <StatBox>
              <StyledTypo large>
                {position === 'GoalKeeper' ? stats.cleanSheets : stats.goals}
              </StyledTypo>
              <StyledTypo>
                {position === 'GoalKeeper' ? 'Clean Sheets' : 'Goals'}
              </StyledTypo>
              </StatBox>
            </Grid>
            <Grid item xs={3} sm={3}>
            <StatBox>
              <StyledTypo large>
                {position === 'GoalKeeper' ? stats.saves : stats.assists}
              </StyledTypo>
              <StyledTypo>
                {position === 'GoalKeeper' ? 'Saves' : 'Assists'}
              </StyledTypo>
              </StatBox>
            </Grid>
            <Grid item xs={3} sm={3}>
            <StatBox>
              <StyledTypo large>
                {
                  position === 'GoalKeeper' ? stats.shotsSaved :
                  position === 'Defender' ? stats.tackleSuccess :
                  position === 'Forward' && stats.totalShots >= 1 ? stats.shootingAcuuracy
                  : stats.passAccuracy
                }%
              </StyledTypo>
              <StyledTypo>
                {
                  position === 'GoalKeeper' ? 'Shots Saved' :
                  position === 'Defender' ? 'Tackles Success' :
                  position === 'Forward' && stats.totalShots >= 1 ? 'Shooting Accuracy'
                  : 'Pass Accuracy'
                }
              </StyledTypo>
              </StatBox>
            </Grid>
          </Grid>
        </CardContent>
        <Card sx={downLg ? { display: 'none' } : { margin: '0 16px', boxShadow: 'none' }}>
          <CardContent sx={{ padding: '0 0 16px' }}>
            <Typography sx={{ color: '#001487', fontWeight: 600 }}>Personal Information</Typography>
            <Divider sx={{ background: '#001487', height: '3px', marginTop: 2 }} />
            <InfoBox title="Name" desc={name} />
            <InfoBox title="Date of birth" desc={birthDate} />
            <InfoBox title="Birthplace" desc={birthPlace} />
            <InfoBox title="Position" desc={position} />
            <InfoBox title="Number" desc={backNumber} />
          </CardContent>
        </Card>
      </Card>
    </>
  )
}

export default PlayerInfo