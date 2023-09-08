import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link} from 'react-router-dom'


const defaultTheme = createTheme();

export default function LoginPage() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            p: 2, border: '1px solid black' ,
            borderRadius: '10px'
          }}
        >
        
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <div style={{width:"100%"}}>
            <div style={{width:"30%", float:"left", lineHeight:"85px"}}>
             <label>UserId</label>
            </div>
            <TextField
              margin="normal"
              required
              fullWidth
              id="outlined-size-small"
            //   label="UserId"
              name="email"
              autoComplete="email"
              autoFocus
              sx={{width:"70%", float:"right",borderRadius:'10px'}}
            />
            </div>
            <div style={{width:"100%", clear:"both"}}>
                <div style={{width:"30%", float:"left", lineHeight:"85px"}}>
                 <label>Password</label>
                </div>
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
            //   label="Password"
              type="password"
              id="outlined-size-small"
              autoComplete="current-password"
              sx={{width:"70%", float:"right", borderRadius:'10px'}}
            />
            </div>
            
            <Grid container>
              <Grid item>
                <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
                />
              </Grid>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot UserId/Password
                </Link>
              </Grid>
            </Grid>
            <Link className=" link" to="/AdminPage"> 
            <Button
              type="submit"
              variant="outlined"
              className='border'
              sx={{ mt: 3, mb: 2 , float:'right'}}
            >
              Login
            </Button>
            </Link>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}