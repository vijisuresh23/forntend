import {makeStyles} from "@material-ui/core/styles";

export default makeStyles((theme) =>
    ({
        cardHeader: {
            display: "flex",
            justifyContent: "space-between"
        },
        showsHeader: {
            padding: "15px 0 0 15px",
            display: "flex",
            fontWeight: "bold",
            alignSelf: "center"
        },
        backdrop: {
            zIndex: theme.zIndex.drawer + 1,
            color: '#fff',
        },
        listRoot: {
            width: '100%',
            backgroundColor: theme.palette.background.paper
        },
        price: {
            display: 'flex',
            justifyContent: 'flex-end',
        },
        slotTime: {
            color: theme.palette.primary.main,
            fontWeight: "bold"
        },
        buttons: {
            display: "flex",
            justifyContent: 'space-between'
        },
        navigationButton: {
            margin: "20px"
        }
    })
);
