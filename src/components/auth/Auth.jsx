import { useState } from 'react';
import CreateAccount from './CreateAccount';
import OtpVerification from './OtpVerification';
import './Auth.css';

const AUTH_STEPS = {
  CREATE_ACCOUNT: 'CREATE_ACCOUNT',
  OTP_VERIFICATION: 'OTP_VERIFICATION',
  LOGIN: 'LOGIN'
};

const Auth = () => {
  const [currentStep, setCurrentStep] = useState(AUTH_STEPS.CREATE_ACCOUNT);
  const [userData, setUserData] = useState({
    email: '',
    phoneNumber: '',
    firstName: '',
    lastName: '',
    password: ''
  });

  const handleCreateAccount = (formData) => {
    setUserData(formData);
    setCurrentStep(AUTH_STEPS.OTP_VERIFICATION);
  };

  const handleVerifyOtp = (otp) => {
    console.log('Verified OTP:', otp);
    // Here you would typically make an API call to verify the OTP
    // If successful, redirect to dashboard or home page
    alert('Account created successfully!');
  };

  const handleSwitchToLogin = () => {
    setCurrentStep(AUTH_STEPS.LOGIN);
    // In a real application, you would have a login component
    console.log('Switching to login');
  };

  const handleChangeEmail = () => {
    setCurrentStep(AUTH_STEPS.CREATE_ACCOUNT);
  };

  return (
    <div className="auth-container">
      {currentStep === AUTH_STEPS.CREATE_ACCOUNT && (
        <CreateAccount 
          onSubmit={handleCreateAccount} 
          switchToLogin={handleSwitchToLogin} 
        />
      )}
      
      {currentStep === AUTH_STEPS.OTP_VERIFICATION && (
        <OtpVerification 
          email={userData.email} 
          onVerify={handleVerifyOtp} 
          onChangeEmail={handleChangeEmail} 
        />
      )}
      
      {currentStep === AUTH_STEPS.LOGIN && (
        <div className="auth-card">
          <h2>Login functionality would be implemented here</h2>
          <button 
            onClick={() => setCurrentStep(AUTH_STEPS.CREATE_ACCOUNT)}
            className="auth-button"
          >
            Back to Sign Up
          </button>
        </div>
      )}
    </div>
  );
};

export default Auth;