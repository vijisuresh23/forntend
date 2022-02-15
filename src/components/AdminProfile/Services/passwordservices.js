import * as Yup from "yup";

export const initialValues = {
    OldPassword: '',
    NewPassword: '',
    ConfirmPassword:''
};

export const formSchema = Yup.object({
    OldPassword: Yup.string("Enter username")
        .required("Username is required"),
    NewPassword: Yup.string("Enter password")
        .required("Password is required").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
          ),
    ConfirmPassword: Yup.string()
          .required('Confirm Password is required')
          .oneOf([Yup.ref('NewPassword')], 'Passwords must and should match')
});
