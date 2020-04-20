import {renderHook, act} from "@testing-library/react-hooks";
import useAddShowDialog from "./useAddShowDialog";

describe("Basic hook logic", () => {
    let result;
    let handleClickOpen;
    let handleClose;

    beforeEach(async () => {
        const renderHookResult = renderHook(() => useAddShowDialog());
        result = renderHookResult.result;
        handleClickOpen = result.current.handleClickOpen;
        handleClose = result.current.handleClose;
    });

    it("Should handle click open", () => {
        act(() => handleClickOpen());

        const {openDialog} = result.current;
        expect(openDialog).toBe(true);
    });

    it("Should handle dialog close", () => {
        act(() => handleClose());

        const {openDialog} = result.current;
        expect(openDialog).toBe(false);
    });
});
