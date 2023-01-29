import React from 'react';
import TextField from "@mui/material/TextField";
import {Button} from "@mui/material";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";

// const resetPasswordSent = () => {
//   const auth = getAuth();
//   sendPasswordResetEmail(auth, email)
// 	.then(() => {
// 	  console.log('Password reset email sent!')
// 	})
// 	.catch((error) => {
// 	  console.log(error)
// 	});
// }

const theme = createTheme();
const ResetPassword = () => {
  return (
	<ThemeProvider theme={theme}>
	  <Container component="main" maxWidth="xs">
		<CssBaseline />
		<Box
		  sx={{
			marginTop: 8,
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
		  }}
		>
		  <Typography component="h1" variant="h5">
			Reset password
		  </Typography>
		  <Box component="form"  noValidate>
			<TextField
			  margin="normal"
			  required
			  fullWidth
			  id="email"
			  label="Email Address"
			  name="email"
			  autoComplete="email"
			  autoFocus
			/>
			<TextField
			  margin="normal"
			  required
			  fullWidth
			  name="password"
			  label="Password"
			  type="password"
			  id="password"
			  autoComplete="current-password"
			/>
			<Button
			  type="submit"
			  size="large"
			  variant="outlined"
			  sx={{ mt: 3, mb: 2 }}
			>
			  Reset Password
			</Button>
			<Grid container>
			  <Grid item xs={6}>
				<Link href="/" variant="body2" underline="none">
				  {"Back to home"}
				</Link>
			  </Grid>
			  <Grid item xs={6}>
				<Link href="/login" variant="body2" underline="none">
				  {"Back to Login"}
				</Link>
			  </Grid>
			</Grid>
		  </Box>
		</Box>
	  </Container>
	</ThemeProvider>
  );
};

export default ResetPassword;
