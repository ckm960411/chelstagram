import { Close as CloseIcon } from "@mui/icons-material";
import { Button, Drawer, IconButton, Typography, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import logoImg from "imgs/chellogo.png"
import styled from "styled-components";
import SignUpForm from "components/SignUpForm";
import LoginForm from "components/LoginForm";

const CustomTypo = styled(Typography)`
  color: #001487;
  font-weight: 600;
  margin: 20px 0;
`

const LoginDrawer = () => {
  const [loginOpen, setLoginOpen] = useState(false)
  const [loginState, setLoginState] = useState(true)
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
      <Button onClick={toggleDrawer(true)} sx={{ color: '#fff', marginLeft: '6px' }}>log in</Button>
      <Drawer
        anchor={'right'}
        open={loginOpen}
        onClose={toggleDrawer(false)}
      >
        <Box
          sx={
            downMd ? { width: '100vw', padding: '80px 20px' } 
            : downLg ? { width: '100vw', padding: '80px 20px' } 
            : { width: 640, padding: '80px 20px' }}
          role="presentation"
        >
          <div style={{ textAlign: 'end', marginBottom: '30px' }}>
            <IconButton onClick={toggleDrawer(false)}>
              <CloseIcon />
            </IconButton>
          </div>
          <div style={{ textAlign: 'center' }}>
            <img src={logoImg} alt="chelsea" />
            { loginState ? (
                <>
                  {/** LOG IN */}
                    <CustomTypo variant="h4">Log In With Email</CustomTypo>
                    <LoginForm />
                </>
              ) : (
                <>
                  {/** JOIN */}
                    <CustomTypo variant="h4">Sign Up With Email</CustomTypo>
                    <SignUpForm />
                </>
              )
            }
            <Typography>
              {loginState ? "Don't have an account yet?" : "Already with us?"}
              {' '}
              <span 
                onClick={() => setLoginState(prev => !prev)} 
                style={{ cursor: "pointer", textDecoration: "underline", color: '#001487' }}
              >
                {loginState ? "Join Us" : "Log in"}
              </span>
            </Typography>
          </div>
        </Box>
      </Drawer>
    </span>
  );
}

export default LoginDrawer