import {makeStyles} from "@material-ui/core/styles";

export default makeStyles((theme) =>
    ({
        sectionHeader: {
            padding: "15px 0 5px 0"
        },
        listRoot: {
            width: '100%',
            backgroundColor: theme.palette.background.paper
        },
        price: {
            display: 'flex',
            justifyContent: 'flex-end',
        }
    })
);
