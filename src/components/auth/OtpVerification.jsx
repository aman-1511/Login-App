import { useState, useRef, useEffect } from 'react';
import './Auth.css';

const OtpVerification = ({ email, onVerify, onChangeEmail }) => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef([]);

  useEffect(() => {
    // Focus on the first input when component mounts
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleOtpChange = (index, value) => {
    if (value.length > 1) {
      // If user pastes a multi-digit number, distribute it
      const digits = value.split('').slice(0, 6);
      const newOtp = [...otp];
      
      digits.forEach((digit, i) => {
        if (index + i < 6) {
          newOtp[index + i] = digit;
        }
      });
      
      setOtp(newOtp);
      
      // Focus on the appropriate field
      const nextIndex = Math.min(index + digits.length, 5);
      if (inputRefs.current[nextIndex]) {
        inputRefs.current[nextIndex].focus();
      }
    } else {
      // Handle single digit input
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      
      // Auto-focus next input after entering a digit
      if (value && index < 5) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    // Handle backspace to move to previous input
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleResendOtp = () => {
    // Implement resend OTP logic here
    console.log('Resending OTP to:', email);
  };

  const handleVerify = () => {
    const otpValue = otp.join('');
    if (otpValue.length === 6) {
      onVerify(otpValue);
    }
  };

  return (
    <div className="auth-card">
      <h2 className="auth-title">We need to verify it's you</h2>
      <div className="divider"></div>
      
      <p className="verification-text">
        We have sent an OTP to the email id<br />
        <span className="email-highlight">{email}</span>
      </p>
      
      <div className="otp-container">
        {otp.map((digit, index) => (
          <input
            key={index}
            ref={el => inputRefs.current[index] = el}
            type="text"
            inputMode="numeric"
            maxLength={6}
            value={digit}
            onChange={(e) => handleOtpChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            className="otp-input"
            aria-label={`OTP digit ${index + 1}`}
          />
        ))}
      </div>
      
      <button 
        type="button" 
        className="resend-button"
        onClick={handleResendOtp}
      >
        Resend OTP
      </button>
      
      <button 
        type="button" 
        className="auth-button"
        onClick={handleVerify}
      >
        Verify OTP
      </button>
      
      <div className="divider"></div>
      
      <p className="auth-footer">
        Wrong email id? <button onClick={onChangeEmail} className="text-link">Change email id</button>
      </p>
    </div>
  );
};

export default OtpVerification; 