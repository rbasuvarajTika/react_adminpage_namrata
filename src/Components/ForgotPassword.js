import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import PagingTabs from './PagingTabs';


export default function ForgotPassword() {
  return (
    <React.Fragment>
      <CssBaseline />
      <PagingTabs/>
      <Container>
        <Box sx={{ }}>
        <Button variant="contained" sx={{backgroundColor:"#8bc34a", color:"black", marginBottom: '30px'}}>Welcome</Button>
        <Stack spacing={4} direction="row" sx={{marginBottom:'30px'}}>    
        <div>
          <p style={{marginTop:'20px'}}>Enter New Password</p>
          </div>
          <div>
            <p></p>
            <TextField
            margin="normal"
            name="Search User"
            type="password"
            id="outlined-size-small"
            size='small'
            sx={{marginTop:0, border: '1px solid black'}}
          />
        </div>
        <div>
          <p style={{marginTop:'20px'}}>Confirm Password</p>
          </div>
          <div>
            <p></p>
            <TextField
            margin="normal"
            name="Search User"
            type="password"
            id="outlined-size-small"
            size='small'
            sx={{marginTop:0, border: '1px solid black'}}
          />
        </div>
        </Stack>
        </Box>
        <Divider light />
            <Button
              type="submit"
              variant="outlined"
              className='border'
              sx={{ mt: 3, mb: 2 , backgroundColor:'#ba000d',color:'black'}}
            >
              Submit
            </Button>
      </Container>
    </React.Fragment>
  );
}