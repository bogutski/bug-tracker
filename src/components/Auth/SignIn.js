import React from 'react';
import {auth} from "../../dbConnection";
import {signInWithEmailAndPassword} from 'firebase/auth';
import {useNavigate} from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
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
import {UserAuth} from "./AuthContext";
import GoogleButton from 'react-google-button'

const googleBtnStyle = {
    borderRadius: '8px',
    width: '100%',
    color: 'black'
}
function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="/">
                Bug-Tracker
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();
export default function SignIn() {
    const { googleSignIn } = UserAuth();
    const nav = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        signInWithEmailAndPassword(auth, data.get('email'), data.get('password'))
            .then(userCredential => {
                console.log(userCredential);
                nav('/dashboard')
            })
            .catch(err => {
                console.log(err);
            })
    };

    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn();
        } catch (error) {
            console.log(error)
        }
        };

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
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
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
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{ mt: 3, mb: 4 }}
                        >
                            Sign In
                        </Button>
                        <Grid container spacing={1.5}>
                            <Grid item xs={6}>
                                <Link href="/reset-password" variant="body2" underline="none">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item xs={6}>
                                <Link href="/signup" variant="body2" underline="none">
                                    {"Create account"}
                                </Link>
                            </Grid>
                        </Grid>
                        <Box sx={{ mt: 2 }}>
                            <GoogleButton
                              style={googleBtnStyle}
                              type="light"
                              onClick={handleGoogleSignIn}/>
                            <Link href="/" variant="body2" underline="none">
                                {"Back to home"}
                            </Link>
                        </Box>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
    );
}
