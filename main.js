console.log("welcome to Somya Ayurveda, DO NOT SHARE YOUR OTP WITH ANYONE")

function generateOTP() {
  var digits = '0123456789';
  var otpLength = 6;
  var otp = '';

  for (let i = 0; i < otpLength; i++) {
    otp += digits[Math.floor(Math.random() * 10)];
  }
  
  return otp;
}

console.log(generateOTP()); // prints a random 6-digit OTP code
