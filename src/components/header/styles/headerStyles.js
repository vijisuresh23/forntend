import {makeStyles} from "@material-ui/core";

export default makeStyles((theme) => ({
        headerLink: {
            color: theme.palette.primary.contrastText,
            display: 'flex',
            justifyContent: "flex-start",
            textDecoration: 'none'
        },
        logoutLink: {
            display: 'flex',
            // justifyContent: "flex-start",
            alignItems: "center",
            cursor: "pointer",
            marginright: "20px"
        },
        cinemaLogoIcon: {
            fontSize: '2.25em'
        },
        personIcon: {
            fontSize: '3.25em',
            marginright:'2em'
        },
        headerLogo: {
            marginLeft: '0.15em'
        },
        toolbar: {
            display: 'flex',
            justifyContent: "space-between",
            padding: "0 4em"
        },
        cartButton: {
            color: "white",
            padding: "10px"
        }
    })
);
