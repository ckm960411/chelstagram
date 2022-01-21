import { Close as CloseIcon } from "@mui/icons-material";
import { Button, Divider, Drawer, FormControl, FormHelperText, IconButton, Input, InputLabel, OutlinedInput, TextField, Typography, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import logoImg from "imgs/chellogo.png"
import styled from "styled-components";
import InputForm from "./InputForm";

const CustomTypo = styled(Typography)`
  color: #001487;
  font-weight: 600;
  margin: 20px 0;
`
const CustomInput = (label, type, value, handler) => (
  <FormControl sx={{ margin: '10px 0' }}>
    <InputLabel htmlFor={type} sx={{ marginLeft: '-16px' }}>{label}</InputLabel>
    <Input
      id={type}
      type={type}
      // value={value}
      // onChange={handler}
      aria-describedby={`${type}-helper-text`}
      sx={{ width: '500px' }}
    />
    <FormHelperText id={`${type}-helper-text`} sx={{ marginLeft: 0 }}>
      your {type} here
    </FormHelperText>
  </FormControl>
)

const LoginDrawer = () => {
  const [loginOpen, setLoginOpen] = useState(false)
  const [toggle, setToggle] = useState(false)
  const downLg = useMediaQuery(theme => theme.breakpoints.down("lg"))
  const downMd = useMediaQuery(theme => theme.breakpoints.down("md"))

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setLoginOpen(open);
  };

  return (
    <span>
      <Button onClick={toggleDrawer(true)} sx={{ color: '#fff' }}>login</Button>
      <Drawer
        anchor={'right'}
        open={loginOpen}
        onClose={toggleDrawer(false)}
      >
        <Box
          sx={
            downMd ? { width: '100vw', padding: '80px 20px' } 
            : downLg ? { width: '100vw', padding: '80px 20px' } 
            : { width: 600, padding: '80px 20px' }}
          role="presentation"
        >
          <div style={{ textAlign: 'end', marginBottom: '30px' }}>
            <IconButton onClick={toggleDrawer(false)}>
              <CloseIcon />
            </IconButton>
          </div>
          { toggle ? (
              <>
                {/** JOIN */}
                <div style={{ textAlign: 'center' }}>
                  <img src={logoImg} alt="chelsea" />
                  <CustomTypo variant="h4">Sign Up With Email</CustomTypo>
                  <InputForm label="name" type="text" >Name</InputForm>
                  <InputForm label="nickname" type="text" >Nickname</InputForm>
                  <InputForm label="email" type="email" >Email</InputForm>
                  <InputForm label="password" type="password" >Password</InputForm>
                  <InputForm label="password" type="password" >Confirm Password</InputForm>
                  <Button variant="outlined" sx={{ width: '500px', margin: '20px 0' }} size="large">JOIN US</Button>
                  <Typography>
                    Already with us?
                    {' '}
                    <span onClick={() => setToggle(prev => !prev)} style={{ cursor: "pointer", textDecoration: "underline" }}>Log in</span>
                  </Typography>
                </div>
              </>
            ) : (
              <>
                {/** LOG IN */}
                <div style={{ textAlign: 'center' }}>
                  <img src={logoImg} alt="chelsea" />
                  <CustomTypo variant="h4">Log In With Email</CustomTypo>
                  <InputForm label="email" type="email" >Email</InputForm>
                  <InputForm label="password" type="password" >Password</InputForm>
                  <Button variant="outlined" sx={{ width: '500px', margin: '20px 0' }} size="large">LOG IN</Button>
                  <Typography>
                    Don't have an account yet?
                    {' '}
                    <span onClick={() => setToggle(prev => !prev)} style={{ cursor: "pointer", textDecoration: "underline" }}>Join Us</span>
                  </Typography>
                </div>
              </>
            )
          }
        </Box>
      </Drawer>
    </span>
  );
}

export default LoginDrawer