import {object, string} from "yup";

export const initialValues = {
    oldpassword: '',
    newpassword: '',
    confirmpassword:''
};

export const formSchema = object({
    oldpassword: string("Enter old password")
        .required("password is required"),
    newpassword: string("Enter New password")
        .required("Password is required"),
    confirmpassword: string("Re-enter new password to confirm")
        .required("Password confirmation is required")
});