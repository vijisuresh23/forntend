import React from "react";
import {shallow} from "enzyme";
import Header from "./Header";
import {Typography} from "@material-ui/core";

describe("Basic rendering", () => {
    it("Should render the website header", () => {
        const headerComponent = shallow(<Header/>);
        const typographyComponent = headerComponent.find(Typography);
        expect(typographyComponent.length).toBe(1);
        expect(typographyComponent.text()).toBe("SkyFox Cinema");
    });
});
