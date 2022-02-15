import {makeStyles} from "@material-ui/core/styles";

export default makeStyles((theme) =>
    ({
        loginContainer: {
            display: "flex",
            padding: "20px 40px",
        },
        form: {
            display: "flex",
            flexDirection: "column"
        },
        loginButton: {
            marginTop: "15px",
            backgroundColor:'#005ce6'
        },
        nameDiv:{
            display:"flex", 
            flexDirection: "row", 
            alignItems: "center"
        },
        loginForm: {
            display: "flex",
            flexDirection: "column"
        },
        loginErrorMessage: {
            marginTop: "8px"
        }
    })
);