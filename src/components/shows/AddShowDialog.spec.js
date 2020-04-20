import React from "react";
import {shallow} from "enzyme";
import AddShowDialog from "./AddShowDialog";
import addShowDialogService from "./services/addShowDialogService";
import {when} from "jest-when";
import {Formik} from "formik";
import {Dialog} from "@material-ui/core";

jest.mock("./services/addShowDialogService", () => ({
    __esModule: true,
    default: jest.fn()
}));

describe("Basic rendering", () => {

    it("Should render the form correctly", () => {
        const testHandleAddShow = jest.fn();
        const testLoadShow = jest.fn();
        const testHandleClose = jest.fn();
        const testOpen = true;
        const testInitialValues = "testInitialValues";
        const testFormSchema = "testFormSchema";
        const testHandleCancel = jest.fn();
        const testCreateShow = jest.fn();

        when(addShowDialogService).expectCalledWith(testHandleClose, testLoadShow, testHandleAddShow).mockReturnValue({
            initialValues: testInitialValues,
            formSchema: testFormSchema,
            handleCancel: testHandleCancel,
            createShow: testCreateShow
        });

        const addShowDialogComponent = shallow(<AddShowDialog onAddShow={testHandleAddShow} loadShow={testLoadShow}
                                                     onClose={testHandleClose}
                                                     open={testOpen}/>);

        const dialogComponent = addShowDialogComponent.find(Dialog);
        const formikComponent = addShowDialogComponent.find(Formik);

        expect(dialogComponent.prop("open")).toEqual(testOpen);
        expect(dialogComponent.prop("onClose")).toEqual(testHandleClose);
        expect(formikComponent.prop("initialValues")).toBe(testInitialValues);
        expect(formikComponent.prop("onSubmit")).toBe(testCreateShow);
        expect(formikComponent.prop("validationSchema")).toBe(testFormSchema);
    });
});
