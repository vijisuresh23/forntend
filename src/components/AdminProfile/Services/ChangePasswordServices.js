import  React from "react";
import { useFormik } from "formik";
import {FormControl, InputLabel, Input} from "@material-ui/core";
import Button from "@material-ui/core/Button"
import styles from '../Styles/ProfileStyles';
import axios from "axios";



const validateForm=(formData)=>{ 
  const errors={};

  const mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{8,})");
if(!formData.OldPassword){
  errors.OldPassword='Please Enter Your Old Password';
  }
if(!formData.NewPassword){
      errors.NewPassword='Please Enter New Password';
}
if(!mediumRegex.test(formData.NewPassword)){
    errors.NewPassword='Password must contain a special character, digits, a capital letter, and minimum 8 characters';
}
if(!formData.ConfirmPassword && !formData.NewPassword){
  errors.ConfirmPassword='Please Re-Enter Password';
}

if (typeof formData.NewPassword !== "undefined" && typeof formData.ConfirmPassword !== "undefined" && formData.ConfirmPassword && formData.NewPassword) {
          
  if ( formData.NewPassword !== formData.ConfirmPassword) {
    errors.ConfirmPassword = "Passwords don't match.";
  }
  else{
   errors.ConfirmPassword = "Passwords match!!";
   
} 

}
return errors
}

const FormOfPasswordChange=()=>{

  const classes=styles();
const formik=useFormik({
  initialValues:{
    OldPassword: '',
    NewPassword: '',
    ConfirmPassword:''
},
validate:validateForm
})
 

const changepassowrd=()=>{
  const passwordData={
    op:formik.values.OldPassword,
    np:formik.values.NewPassword
  };
  console.log(passwordData);
  axios.put("http://localhost:8080/changepassword",passwordData)
     .then(response=>{
       if(response.data != null) {
       alert("Password changed successfully");
     }
 });
}
    return (
      <div>
        <form onSubmit={changepassowrd} className={classes.loginForm}>
        <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
        <InputLabel htmlFor="oldpassword"> Old Password</InputLabel>
         <Input id="OldPassword" type="password" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.OldPassword} ></Input>
         {formik.touched.OldPassword && formik.errors.OldPassword ? <span style={{color:'red'}}><br/>{formik.errors.OldPassword}</span>:null}
        </FormControl>
        <br/>
        <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
        <InputLabel htmlFor="newpassword"> New Password</InputLabel>
        <Input type="password"  id="NewPassword" onChange={formik.handleChange} value={formik.values.NewPassword} onBlur={formik.handleBlur}></Input>
        {formik.touched.NewPassword && formik.errors.NewPassword ? <span style={{color:'red'}}><br/>{formik.errors.NewPassword}</span>:null}
        </FormControl>
        <br/>
        <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
        <InputLabel htmlFor="confirmpassword"> Confirm Password</InputLabel>
        <Input type="password"  id="ConfirmPassword" onChange={formik.handleChange} value={formik.values.ConfirmPassword} onBlur={formik.handleBlur}></Input>
        {formik.touched.ConfirmPassword && formik.errors.ConfirmPassword ? (<span style={{color:'red'}}><br/>{formik.errors.ConfirmPassword}</span>):null}
        </FormControl>
        <br/><br/>
        <FormControl>
        <Button type="submit" className={classes.loginButton} variant="contained">change password</Button>
        </FormControl>
        </form>
      </div>
    );
  

}

export default FormOfPasswordChange