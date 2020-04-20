import React from "react";
import {shallow} from "enzyme";
import Layout from "./Layout";


describe('Layout', function () {
    it("Should render layout without crashing", () => {
        let wrapper = shallow(<Layout/>);
        expect(wrapper.length).toBe(1);
    })
});