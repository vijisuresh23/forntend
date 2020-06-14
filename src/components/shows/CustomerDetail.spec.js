import React from "react";
import {fireEvent, render} from "@testing-library/react";
import CustomerDetail from "./CustomerDetail";
import bookingService from "./services/bookingService";
import {when} from "jest-when";

jest.mock("./services/bookingService", () => ({
    create: jest.fn()
}));


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
        const {queryByText} = render(<CustomerDetail seats={2}/>);

        expect(queryByText("Enter Customer Details")).toBeTruthy();
        expect(queryByText("Name")).toBeTruthy();
        expect(queryByText("Phone Number")).toBeTruthy();
    });

    it("Should call booking service api to create booking on submit", () => {
        const {getByText} = render(<CustomerDetail seats={2} show={selectedShow} />);

        when(bookingService.create).calledWith(expect.any(Object)).mockResolvedValue();
        fireEvent.click(getByText("Book"));

        let expectedPayload = {
            "customer": {"name": "", "phoneNumber": ""},
            "date": "2020-06-14",
            "noOfSeats": 2,
            "showId": 1
        };
        expect(bookingService.create).toHaveBeenCalledWith(expectedPayload);
    });
});
