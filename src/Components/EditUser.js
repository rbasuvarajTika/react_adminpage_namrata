import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import PagingTabs from './PagingTabs';



export default function EditUser() {
  const [alignment, setAlignment] = React.useState('web');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <PagingTabs/>
      <Container>
      <ToggleButtonGroup
        color="primary"
        value={alignment}
        exclusive
        onChange={handleChange}
        size='small'
        aria-label="Platform"
        sx={{float:"left", borderRadius:'10px'}}
      >
        <ToggleButton value="Standard">Standard</ToggleButton>
        <ToggleButton value="SAML">SAML</ToggleButton>
      </ToggleButtonGroup>
        <Box sx={{ }}>
        <Button variant="contained" sx={{backgroundColor:"#9e9e9e", color:"black"}}>Edit User - Admin Page</Button>
        <Stack spacing={4} direction="row" sx={{marginTop:'20px'}}>
        <div>
             <p className='fieldLabel'>*User Id</p>
             <TextField
              margin="normal"
              name="Search User"
            //   label="Serach User"
              type="text"
              id="outlined-size-small"
              size='small'
              sx={{marginTop:0}}
            />
        </div>
        
        <div>
        <p className='fieldLabel'>*First Name</p>
             <TextField
              margin="normal"
              name="Search User"
            //   label="Serach User"
              type="text"
              id="outlined-size-small"
              size='small'
              sx={{marginTop:0}}
            />
        </div><div>
        <p className='fieldLabel'>*Last Name</p>
             <TextField
              margin="normal"
              name="Search User"
            //   label="Serach User"
              type="text"
              id="outlined-size-small"
              size='small'
              sx={{marginTop:0}}
            />
        </div>
        <div>
        <p className='fieldLabel'>Phone</p>
             <TextField
              margin="normal"
              name="Search User"
            //   label="Serach User"
              type="text"
              id="outlined-size-small"
              size='small'
              sx={{marginTop:0}}
            />
        </div>
        </Stack>
        <Stack spacing={4} direction="row" >
        <div>
             <p className='fieldLabel'>Address</p>
             <TextField
              margin="normal"
              name="Address"
              type="text"
              id="outlined-size-small"
              size='small'
              sx={{marginTop:0}}
            />
        </div>

        <div>
          <p>Enter New Password:</p>
          </div>
          <div>
            <p></p>
            <TextField
            margin="normal"
            name="Search User"
            type="password"
            id="outlined-size-small"
            size='small'
            sx={{marginTop:0}}
          />
        </div>
        </Stack>
        </Box>
        <Divider light />
        <Stack spacing={4} direction="row" sx={{marginTop:'20px'}}>
            <p>Current Status</p>
            <Button
              type="button"
              variant="outlined"
              className='border'
              sx={{ mt: 3, mb: 2 , backgroundColor:'#8bc34a',color:'black'}}
            >
              Active
            </Button>
            <Button
              type="button"
              variant="outlined"
              className='border'
              sx={{ mt: 3, mb: 2 , backgroundColor:'red',color:'#fff'}}
            >
              User Locked
            </Button>
        </Stack>
        <Stack spacing={4} direction="row" sx={{marginTop:'20px'}}>
            <p>Change Status To:</p>
            <Button
              type="button"
              variant="outlined"
              className='border'
              sx={{ mt: 3, mb: 2 , backgroundColor:'#bf360c ',color:'black'}}
            >
              Deactivated
            </Button>
            <Button
              type="button"
              variant="outlined"
              className='border'
              sx={{ mt: 3, mb: 2 , backgroundColor:'#00b0ff',color:'#000'}}
            >
              Unlock User
            </Button>
        </Stack>
            <Button
              type="submit"
              variant="outlined"
              className='border'
              sx={{ mt: 3, mb: 2 , backgroundColor:'blue',color:'black'}}
            >
              Submit
            </Button>
      </Container>
    </React.Fragment>
  );
}