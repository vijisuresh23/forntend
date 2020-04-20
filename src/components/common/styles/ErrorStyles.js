import {makeStyles} from "@material-ui/core/styles";

export default makeStyles((theme) =>
    ({
        errorContent: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
        },
        errorIcon: {
            color: theme.palette.error.main,
            height: '400px',
            width: '400px',
            opacity: '0.75'
        }
    })
);
