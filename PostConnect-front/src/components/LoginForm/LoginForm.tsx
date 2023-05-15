import React, { useState } from "react"
import { TextField, Button, Box, Typography, Stack, Alert, CircularProgress } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import authService from "../../services/auth.service";

interface LoginFormProp {
    goToHome: () => void
}

const LoginForm = ({ goToHome }: LoginFormProp) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loadingLogin, setLoadingLogin] = useState(false)
    const [loginError, setLoginError] = useState(false)
    const login = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoadingLogin(true)
        const data: any = await authService.logIn({ email, password })
        if (data['acces_token']) {
            goToHome()
        }

        setLoadingLogin(false)
        setLoginError(true)
    }
    return (
        <Box component='form'
            sx={{
                "& .MuiTextField-root": { my: 1 },
                width: 400,
            }}
            onSubmit={(e) => login(e)}
        >
            <Typography variant="h5" sx={{ color: 'primary.main', fontWeight: 'bold', px: 2 }} align="center">PostConnect</Typography>

            <TextField type="email" label="Correo" variant="outlined" fullWidth onChange={(e) => setEmail(e.target.value)} value={email} required />
            <TextField type="password" label="Contraseña" variant="outlined" fullWidth onChange={(e) => setPassword(e.target.value)} value={password} required />
            <Stack direction='row' alignItems='center' justifyContent='center'>
                <Button variant="contained" type="submit" disabled={loadingLogin} endIcon={!loadingLogin ? <ArrowForwardIcon /> : <CircularProgress size={20} />}>
                    Entrar
                </Button>
            </Stack>
            {loginError && <Alert severity="error" sx={{ my: 1 }}>No puede iniciar sesión, por favor revise su correo electrónico y contraseña</Alert>}

        </Box>
    )
}

export default LoginForm