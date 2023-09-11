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


export default function CreateNewUser() {
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
        <Button variant="contained" sx={{backgroundColor:"#8bc34a", color:"black"}}>Create New User</Button>
        <p style={{textAlign:'left'}}>Primary Email</p>
        <Stack spacing={4} direction="row">
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
        <p style={{textAlign:'left'}}>Secondary Email</p>
        <Stack spacing={4} direction="row">
        <div>
             <p className='fieldLabel'>Email:</p>
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
        <p className='fieldLabel'>Address:</p>
             <TextField
              margin="normal"
              name="Search User"
            //   label="Serach User"
              type="text"
              id="outlined-size-small"
              size='small'
              sx={{marginTop:0}}
            />
        </div><div></div>

        <div>
          <p>Std Login Pwd:</p>
          </div>
          <div>
            <p></p>
            <TextField
            margin="normal"
            name="Search User"
            type="password"
            id="outlined-size-small"
            size='small'
            sx={{marginTop:0, backgroundColor:"blue", border: '1px solid black'}}
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