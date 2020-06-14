import React from "react";
import {fireEvent, render} from "@testing-library/react";
import SeatSelection from "./SeatSelection";

jest.mock("./CustomerDetail", () => {
    return () => <div>Customer Detail</div>;
});

describe("Basic rendering and functionality", () => {
    const selectedShow = {
        id: 1,
        cost: 150,
        movie: {
            name: "Movie 1",
            plot: "Suspense movie",
            duration: "1hr 30m"
        },
        slot: {startTime: "start time 1"}
    };

    it("Should display the show info", () => {
        const {queryByText, queryByDisplayValue} = render(<SeatSelection selectedShow={selectedShow}/>);

        expect(queryByText(selectedShow.movie.name)).toBeTruthy();
        expect(queryByText(selectedShow.movie.plot)).toBeTruthy();
        expect(queryByText(selectedShow.movie.duration)).toBeTruthy();
        expect(queryByText("Seats")).toBeTruthy();
        expect(queryByDisplayValue("1")).toBeTruthy();
    });

    it("Should display total cost when number of seats is selected", () => {
        const {queryByText, getByDisplayValue} = render(<SeatSelection selectedShow={selectedShow}/>);

        expect(queryByText("₹150.00")).toBeTruthy();
        fireEvent.change(getByDisplayValue("1"), { target: { value: '2' } });

        expect(queryByText("₹300.00")).toBeTruthy();
    });

    it("Should display customer details input on next", () => {
        const {getByText, queryByText} = render(<SeatSelection selectedShow={selectedShow}/>);

        expect(queryByText("Customer Detail")).toBeNull();

        fireEvent.click(getByText("NEXT"));

        expect(getByText("Customer Detail")).toBeTruthy();
    });
});
