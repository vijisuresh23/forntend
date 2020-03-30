import axios from "axios";
import showService from './ShowService'
import ShowModel from './ShowModel'

jest.mock('axios');

describe('Show Service', () => {

    it('should return all transactions', async () => {
        const data = [{
            id:1,
            name: "n1",
            description: "d1",
            price: 1
        },
        {
            id:2,
            name: "n2",
            description: "d2",
            price: 4
        }]

        axios.get.mockResolvedValue({data: data});
        const shows = await showService.fetchAll();

        expect(shows).toHaveLength(2);

        expect(JSON.stringify(shows)).toBe(JSON.stringify([new ShowModel({
            id:1,
            name: "n1",
            description: "d1",
            price: 1
        }), new ShowModel({
            id:2,
            name: "n2",
            description: "d2",
            price: 4
        })]))
    });
});
