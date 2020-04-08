import {makeStyles} from "@material-ui/core";

export default makeStyles((theme) => ({
        headerLink: {
            color: theme.palette.background.default,
            display: 'flex',
            justifyContent: "flex-start",
            textDecoration: 'none'
        },
        headerIcon: {
            fontSize: '2.25em'
        },
        headerLogo: {
            marginLeft: '0.15em'
        },
        toolbar: {
            display: 'flex',
            justifyContent: "flex-start",
            padding: "0 4em"
        },
        cartButton: {
            color: "white",
            padding: "10px"
        }
    })
);
