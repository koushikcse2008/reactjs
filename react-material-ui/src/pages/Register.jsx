import React, { useState } from 'react';

/* MUI imports */
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

/* Radio Group */
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

/* Select Box */
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
// import TextField from '@mui/material/TextField';

const theme = createTheme();

const Register = () => {

  const [value, setValue] = useState('male');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // const data = new FormData(event.currentTarget);
    // console.log({
    //   email: data.get('email'),
    //   password: data.get('password'),
    // });
  };

  return (
    <>
      <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="md">
        {/* <CssBaseline /> */}
        <Box
          sx={{
            marginTop: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            bgcolor: '#c1c1c1',
            padding: '20px',
            borderRadius: "4px"
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h4">
            Register
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>


              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>


              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>


              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>


              <Grid item xs={12} sm={6}>
              <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  value={value}
                  onChange={handleChange}
                >
                  <FormControlLabel value="male" control={<Radio />} label="Male" />
                  <FormControlLabel value="female" control={<Radio />} label="Female" />
                  <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
              </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Age</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Age"
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              </Grid>


              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="repassword"
                  label="Confirm Password"
                  type="password"
                  id="repassword"
                  autoComplete="new-password"
                />
              </Grid>

              <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="outlined-multiline-flexible"
                label="User Comment"
                multiline
                minRows={4}
              />
              </Grid>


              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>


            </Grid>
            <Grid container justifyContent="flex-start">
            <Button
              type="submit"
              
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              endIcon={<SendIcon />}
            >
              Sign Up
            </Button>
            </Grid>
            <Grid container justifyContent="flex-start">
              <Grid item>
                <Link href="#" variant="body2" sx={{ pt: 3 }}>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    </>
  )
}

export default Register;