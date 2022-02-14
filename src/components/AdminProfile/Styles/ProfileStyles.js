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
            marginTop: "35px"
        },
        nameDiv:{
            display:"flex", 
            flexDirection: "row", 
            alignItems: "center"
        }
    })
);