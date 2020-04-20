import showsService from "./showsService";
import addShowDialogService from "./addShowDialogService";
import {when} from "jest-when";

jest.mock("./showsService", () => ({
    __esModule: true,
    default: {
        create: jest.fn()
    }
}));

describe("Basic logic", () => {
    let onClose;
    let loadShow;
    let onAddShow;

    beforeEach(() => {
        onClose = jest.fn();
        loadShow = jest.fn();
        onAddShow = jest.fn();
    });

    it("Should handle cancel correctly", () => {
        const {handleCancel} = addShowDialogService(onClose, loadShow, onAddShow);

        handleCancel();

        expect(onClose).toHaveBeenCalledTimes(1);
    });

    it("Should create show correctly", () => {
        const testValues = "testValues";
        const testData = "testData";
        const testThen = jest.fn();
        const {createShow} = addShowDialogService(onClose, loadShow, onAddShow);
        when(showsService.create).calledWith(testValues).mockReturnValue({then: testThen});

        createShow(testValues);
        const callBack = testThen.mock.calls[0][0];
        callBack(testData);

        expect(loadShow).toBeCalledTimes(2);
        expect(loadShow).nthCalledWith(1, true);
        expect(loadShow).nthCalledWith(2, false);
        expect(onAddShow).toBeCalledTimes(1);
        expect(onAddShow).nthCalledWith(1, testData);
        expect(onClose).toBeCalledTimes(1);
    });
});
