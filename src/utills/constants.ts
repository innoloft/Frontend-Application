export const ImagesPath = {
  Logo: `${process.env.PUBLIC_URL}/logo.png`,
  DefaultProfilePic: `${process.env.PUBLIC_URL}/user.png`
};
export const Regex = {
  passwordRegx: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
}

export const Messages = {
  Validation: {
    Required: "This field is required",
    NotValidNumber: "Not valid number",
    PasswordMismatch: "Password mismatch",
    NotValidEmail: "Email is not valid"
  },
  FillRequiredFill: "Please first save record then submit",
  ProfileSuccess: "Profile submitted successfully"
}