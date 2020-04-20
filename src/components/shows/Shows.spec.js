import React, {useState as useStateMock} from "react";
import useShows from "./hooks/useShows";
import {when} from "jest-when";
import {shallow} from "enzyme";
import Shows from "./Shows";
import {Backdrop, Typography} from "@material-ui/core";
import ShowsSection from "./ShowsSection";
import AddShow from "./AddShow";

jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useState: jest.fn(),
}));

jest.mock('./hooks/useShows', () => ({
    __esModule: true,
    default: jest.fn()
}));

describe("Basic Rendering", () => {
    let testSetShowsLoading = jest.fn();
    let testHandleAddShow = jest.fn();

    beforeAll(() => {
        when(useStateMock).calledWith(true).mockReturnValue(["testShowsLoading", testSetShowsLoading]);

        when(useShows).calledWith(testSetShowsLoading).mockReturnValue({
            handleAddShow: testHandleAddShow,
            runningShows: ["testRunningShows"],
            upcomingShows: ["testUpcomingShows"]
        });
    });

    it("Should render the component correctly", () => {
        const showsComponent = shallow(<Shows/>);
        const typographyComponent = showsComponent.find(Typography);
        const showsSectionsComponents = showsComponent.find(ShowsSection);
        const runningShowsSectionComponent = showsSectionsComponents.get(0);
        const upcomingShowsSectionComponent = showsSectionsComponents.get(1);
        const addShowComponent = showsComponent.find(AddShow);
        const backdropComponent = showsComponent.find(Backdrop);

        expect(typographyComponent.length).toBe(1);
        expect(typographyComponent.text()).toBe("Shows");
        expect(showsSectionsComponents.length).toBe(2);
        expect(runningShowsSectionComponent.props).toEqual({
            name: "Screening Now",
            shows: ["testRunningShows"],
            emptyMessage: "No shows screening now"
        });
        expect(upcomingShowsSectionComponent.props).toEqual({
            name: "Coming Soon",
            shows: ["testUpcomingShows"],
            emptyMessage: "No shows coming soon"
        });
        expect(addShowComponent.length).toBe(1);
        expect(addShowComponent.props()).toEqual({
            loadShow: testSetShowsLoading,
            onAddShow: testHandleAddShow
        });
        expect(backdropComponent.length).toBe(1);
        expect(backdropComponent.prop("open")).toBe("testShowsLoading");
    });
});
