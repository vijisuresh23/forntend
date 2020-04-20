import React from "react";
import {shallow} from "enzyme";
import ShowsSection from "./ShowsSection";
import {Divider, ListItemText, Typography} from "@material-ui/core";
import {EmptyShows} from "../common";

describe("Basic rendering", () => {
    const testEmptyMessage = "Test Empty Message";
    const testSection = "Test Section";

    const expectSectionHeading = (showsSectionComponent) => {
        const typographyComponent = showsSectionComponent.find(Typography);
        expect(typographyComponent.length).toBe(1);
        expect(typographyComponent.text()).toBe(testSection);
    };

    it("Should render the component with no shows", () => {
        const showsSectionComponent = shallow(<ShowsSection emptyMessage={testEmptyMessage} name={testSection}
                                                            shows={[]}/>);

        const emptyShowsComponent = showsSectionComponent.find(EmptyShows);
        const missingDivComponent = showsSectionComponent.find("div");

        expectSectionHeading(showsSectionComponent);
        expect(emptyShowsComponent.length).toBe(1);
        expect(emptyShowsComponent.prop("emptyShowsMessage")).toBe(testEmptyMessage);
        expect(missingDivComponent.length).toBe(0);
    });

    it("Should render the component with shows present", () => {
        const testShows = [
            {
                id: 1,
                name: "Show 1",
                description: "Show Description 1",
                price: 100
            },
            {
                id: 2,
                name: "Show 2",
                description: "Show Description 2",
                price: 200
            },
        ];

        const showsSectionComponent = shallow(<ShowsSection emptyMessage={testEmptyMessage} name={testSection}
                                                            shows={testShows}/>);

        const missingEmptyShowsComponent = showsSectionComponent.find(EmptyShows);
        const divTags = showsSectionComponent.find("div");
        const firstShowDiv = divTags.at(0);
        const firstShowTextComponents = firstShowDiv.find(ListItemText);
        const firstShowNameAndDescription = firstShowTextComponents.at(0);
        const firstShowPrice = firstShowTextComponents.at(1);
        const firstShowDivider = firstShowDiv.find(Divider);
        const secondShowDiv = divTags.at(1);
        const secondShowTextComponents = secondShowDiv.find(ListItemText);
        const secondShowNameAndDescription = secondShowTextComponents.at(0);
        const secondShowPrice = secondShowTextComponents.at(1);
        const missingSecondShowDivider = secondShowDiv.find(Divider);

        expectSectionHeading(showsSectionComponent);
        expect(missingEmptyShowsComponent.length).toBe(0);
        expect(divTags.length).toBe(2);
        expect(firstShowTextComponents.length).toBe(2);
        expect(firstShowNameAndDescription.props()).toEqual({
            primary: "Show 1",
            secondary: "Show Description 1"
        });
        expect(firstShowPrice.prop('primary')).toBe("₹100");
        expect(firstShowDivider.length).toBe(1);
        expect(firstShowDivider.prop('variant')).toBe("middle");
        expect(secondShowTextComponents.length).toBe(2);
        expect(secondShowNameAndDescription.props()).toEqual({
            primary: "Show 2",
            secondary: "Show Description 2"
        });
        expect(secondShowPrice.prop('primary')).toBe("₹200");
        expect(missingSecondShowDivider.length).toBe(0);
    });
});
