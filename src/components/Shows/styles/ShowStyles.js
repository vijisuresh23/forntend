import {makeStyles} from "@material-ui/core/styles";

export default makeStyles((theme) =>
    ({
        cardHeader: {
            padding: "15px 0 0 15px"
        },
        showsContent: {
            padding: "0 15px 15px 15px"
        },
        backdrop: {
            zIndex: theme.zIndex.drawer + 1,
            color: '#fff',
        }
    })
);
