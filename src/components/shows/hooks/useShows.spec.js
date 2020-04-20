import showsService from "../services/showsService";
import {act, renderHook} from '@testing-library/react-hooks';
import useShows from "./useShows";

jest.mock("../services/showsService");

describe("Basic logic", () => {
    let testSetShowsLoading;
    let result;
    let waitForNextUpdate;

    beforeEach(async () => {
        testSetShowsLoading = jest.fn();
        showsService.fetchAll = jest.fn();
        showsService.fetchAll.mockResolvedValue([
            {
                name: "Movie 1",
                description: "Movie 1",
                price: 100,
                status: "RUNNING"
            },
            {
                name: "Movie 2",
                description: "Movie 2",
                price: 200,
                status: "UPCOMING"
            }
        ]);

        const renderHookResult = renderHook(() => useShows(testSetShowsLoading));
        result = renderHookResult.result;
        waitForNextUpdate = renderHookResult.waitForNextUpdate;
        await waitForNextUpdate();
    });

    it("Should stop loading once component updates", () => {
        const {runningShows, upcomingShows} = result.current;
        expect(testSetShowsLoading).toHaveBeenCalledTimes(1);
        expect(testSetShowsLoading).toHaveBeenCalledWith(false);
        expect(runningShows).toEqual([{
            name: "Movie 1",
            description: "Movie 1",
            price: 100,
            status: "RUNNING"
        }]);
        expect(upcomingShows).toEqual([{
            name: "Movie 2",
            description: "Movie 2",
            price: 200,
            status: "UPCOMING"
        }]);
    });

    it("Should add a new running show", () => {
        const testShowData = {
            name: "New Running Movie",
            description: "New Running Movie Description",
            price: 150,
            status: "RUNNING"
        };

        const {handleAddShow} = result.current;

        act(() => handleAddShow(testShowData));

        const {runningShows} = result.current;

        expect(runningShows).toEqual([
            {
                name: "Movie 1",
                description: "Movie 1",
                price: 100,
                status: "RUNNING"
            },
            {
                name: "New Running Movie",
                description: "New Running Movie Description",
                price: 150,
                status: "RUNNING"
            },
        ]);
    });

    it("Should add a new upcoming show", () => {
        const testShowData = {
            name: "New Upcoming Movie",
            description: "New Upcoming Movie Description",
            price: 250,
            status: "UPCOMING"
        };

        const {handleAddShow} = result.current;

        act(() => handleAddShow(testShowData));

        const {upcomingShows} = result.current;

        expect(upcomingShows).toEqual([
            {
                name: "Movie 2",
                description: "Movie 2",
                price: 200,
                status: "UPCOMING"
            },
            {
                name: "New Upcoming Movie",
                description: "New Upcoming Movie Description",
                price: 250,
                status: "UPCOMING"
            },
        ]);
    });
});
