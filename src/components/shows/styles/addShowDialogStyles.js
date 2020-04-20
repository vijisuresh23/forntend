import {makeStyles} from "@material-ui/core/styles";

export default makeStyles((theme) =>
    ({
        dialogTitle: {
            padding: "16px 24px 0 24px"
        },
        dialogContent: {
            display: "flex",
            flexDirection: "column",
            "&:first-child": {
                paddingTop: "5px"
            }
        },
        dialogFormControl: {
            margin: "8px 0 4px 0",
            width: "36%"
        },
        priceInput: {
            width: "18%"
        }
    })
);
