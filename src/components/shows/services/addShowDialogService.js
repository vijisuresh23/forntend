import {CURRENCY_SYMBOL} from "../../../Constants";
import {number, object, string} from "yup";
import showService from "./showsService";

export default (onClose, loadShow, onAddShow) => {
    const initialValues = {
        name: "",
        description: "",
        price: "",
        status: "RUNNING"
    };

    const nameValidationMessage = "Name must be 1 to 30 characters";
    const descriptionValidationMessage = "Description must be 5 to 200 characters";
    const priceValidationMessage = `Price must be at least ${CURRENCY_SYMBOL}0.1`;

    const formSchema = object({
        name: string("Enter a name")
            .required("Name is required")
            .min(1, nameValidationMessage)
            .max(30, nameValidationMessage),
        description: string("Enter a description")
            .required("Description is required")
            .min(5, descriptionValidationMessage)
            .max(200, descriptionValidationMessage),
        price: number("Enter a price")
            .required("Price is required")
            .min(0.1, priceValidationMessage)
    });

    const handleCancel = () => {
        onClose();
    };

    const createShow = (values) => {
        loadShow(true);
        showService.create(values)
            .then(data => {
                loadShow(false);
                onAddShow(data);
            });
        onClose();
    };

    return {
        initialValues: initialValues,
        formSchema: formSchema,
        handleCancel: handleCancel,
        createShow: createShow
    };
};