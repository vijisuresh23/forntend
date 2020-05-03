import React from "react";
import AddIcon from "@material-ui/icons/Add";
import useAddShowDialog from "./hooks/useAddShowDialog";
import {shallow} from "enzyme";
import AddShow from "./AddShow";
import {Button} from "@material-ui/core";
import AddShowDialog from "./AddShowDialog";

jest.mock("./hooks/useAddShowDialog", () => ({
    __esModule: true,
    default: jest.fn()
}));

describe("Basic rendering", () => {
    const testOpenDialog = true;
    const testHandleClickOpen = jest.fn();
    const testHandleClose = jest.fn();
    const testLoadShow = jest.fn();
    const testHandleAddShow = jest.fn();

    beforeEach(() => {
        useAddShowDialog.mockReturnValue({
            openDialog: testOpenDialog,
            handleClickOpen: testHandleClickOpen,
            handleClose: testHandleClose
        });
    });

    it("Should render correctly", () => {
        const testProp = "testProp";
        const addShowComponent = shallow(<AddShow loadShow={testLoadShow} onAddShow={testHandleAddShow}
                                                  testProp={testProp}/>);
        const buttonComponent = addShowComponent.find(Button);
        const addShowDialogComponent = addShowComponent.find(AddShowDialog);

        expect(buttonComponent.length).toBe(1);
        expect(buttonComponent.prop("variant")).toBe("contained");
        expect(buttonComponent.prop("color")).toBe("primary");
        expect(buttonComponent.prop("startIcon")).toEqual(<AddIcon/>);
        expect(buttonComponent.prop("onClick")).toEqual(testHandleClickOpen);
        expect(addShowDialogComponent.length).toBe(1);
        expect(addShowDialogComponent.props()).toEqual({
            open: testOpenDialog,
            onClose: testHandleClose,
            loadShow: testLoadShow,
            onAddShow: testHandleAddShow,
            testProp: testProp
        });
    });
});
