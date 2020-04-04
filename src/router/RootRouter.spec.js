import {shallow} from "enzyme/build";
import React from "react";
import RootRouter from './RootRouter'
import Shows from "../components/Shows/Shows";

describe("Root Router", () => {
    it("Should render root router without crashing", () => {
        let wrapper = shallow(<RootRouter/>);
        expect(wrapper).toHaveLength(1);
    });

    it("should redirect to the shows page by default", () => {
        let wrapper = shallow(<RootRouter/>);
        expect(wrapper.find('Route[exact=true][path="/shows"]').first().prop('component')).toBe(Shows);
    })
});