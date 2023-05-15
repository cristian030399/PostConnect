import React, { useState, useEffect } from "react";
import styles from './LoginPage.module.css'
import loginImg from '../../assets/login-img.png'
import { TextField, Button, Box, Typography, Stack, Alert, CircularProgress } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from "react-router";
import authService from "../../services/auth.service";
import sessionStorageService from "../../services/SessionStorage.service"
import { AccessToken } from "../../types/Login.type";
import AutorenewIcon from '@mui/icons-material/Autorenew';
import { ErrorAPi } from "../../types/Api.type";
import LoginForm from "../../components/LoginForm/LoginForm";

const LoginPage: React.FC = () => {
    const navigate = useNavigate()

    useEffect(() => {
        if(sessionStorageService.isLogged()){
            goToHome()
        }
    }, [])

    const goToHome = () => {
        navigate('/')
    }

    return (
        <main className={styles.loginPage}>
            <div className={styles['form-container']}>
                <LoginForm goToHome={goToHome} />
            </div>
            <div className={styles['img-container']}>
                <img className={styles['login_img']} src={loginImg} />
            </div>

        </main>
    )
}

export default LoginPage