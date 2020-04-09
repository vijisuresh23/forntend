import {when} from "jest-when";
import showService from './ShowService'
import ShowModel from '../models/ShowModel'
import apiService from "../../../helpers/apiService";

jest.mock('../../../helpers/apiService');

describe('Show Service', () => {

    it('should return all shows', async () => {
        const data = [{
            id: 1,
            name: "n1",
            description: "d1",
            price: 1
        },
            {
                id: 2,
                name: "n2",
                description: "d2",
                price: 4
            }];

        apiService.get.mockResolvedValue({data: data});
        const shows = await showService.fetchAll();

        expect(shows).toHaveLength(2);

        expect(shows).toEqual([new ShowModel({
            id: 1,
            name: "n1",
            description: "d1",
            price: 1
        }), new ShowModel({
            id: 2,
            name: "n2",
            description: "d2",
            price: 4
        })]);
    });

    it('should create a show', async () => {
        const payload = {
            name: "Movie Name",
            description: "Movie Description",
            price: 100
        };

        const response = {
            id: 1,
            ...payload
        };

        when(apiService.post)
            .calledWith(expect.any(String), payload)
            .mockResolvedValue({data: response});

        const createdShow = await showService.create(payload);

        expect(createdShow).toEqual({
            id: 1,
            name: "Movie Name",
            description: "Movie Description",
            price: 100
        });
    });
});
