import {makeStyles} from "@material-ui/core/styles";

export default makeStyles((theme) =>
    ({
        listRoot: {
            width: '100%',
            backgroundColor: theme.palette.background.paper
        },
        price: {
            display: 'flex',
            justifyContent: 'flex-end',
        },
        backdrop: {
            zIndex: theme.zIndex.drawer + 1,
            color: '#fff',
        }
    })
);




