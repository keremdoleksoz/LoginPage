import React, { useState } from "react";
import { useTranslation } from 'react-i18next'; 
import './LoginSignUp.css';

import emailIcon from '../Assets/email.png';
import passwordIcon from '../Assets/password.png';
import personIcon from '../Assets/user.png';

// Kerem DÖLEKSÖZ

const LoginSignUp = () => {
    const { t, i18n } = useTranslation(); 
    const [action, setAction] = useState("signUp"); 

    return (
        <div className="container">
            <div className="header">
                <div className="text">{t(action)}</div> {}
                <div className="underline"></div>
            </div>

            <div className="inputs">
                {action === "signUp" && (
                    <div className="input">
                        <img src={personIcon} alt="Person Icon" className="person-icon" />
                        <input type="text" placeholder={t('enterYourName')} />
                    </div>
                )}

                <div className="input">
                    <img src={emailIcon} alt="Email Icon" className="mail-icon" />
                    <input type="email" placeholder={t('enterYourEmail')} />
                </div>

                <div className="input">
                    <img src={passwordIcon} alt="Password Icon" className="password-icon" />
                    <input type="password" placeholder={t('enterYourPassword')} />
                </div>
            </div>

            {action === "signUp" ? null : (
                <div className="forgot-password">
                    {t('forgotPassword')} <span>{t('clickHere')}</span>
                </div>
            )}

            <div className="submit-container">
                <div
                    className={action === "login" ? "submit gray" : "submit"}
                    onClick={() => setAction("signUp")}
                >
                    {t('signUp')}
                </div>
                <div
                    className={action === "signUp" ? "submit gray" : "submit"}
                    onClick={() => setAction("login")}
                >
                    {t('login')}
                </div>
            </div>

            <div className="language-switcher">
                <button className="en-button" onClick={() => i18n.changeLanguage('en')} />
                <button className="tr-button" onClick={() => i18n.changeLanguage('tr')} />
            </div>
        </div>
    );
}

export default LoginSignUp;
