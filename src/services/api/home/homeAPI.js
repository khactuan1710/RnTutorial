import endpoints from "./endpoints";
import { BASE_URL } from "../../../configs/Config";

export const homeApi = {
    getInfoCustomer : async ()  => {
        console.log("hi3");
            const res = await fetch('https://reactnative.dev/movies.json')
            .then((res) => res.json())
            .catch ((err) => {
                console.log(err);
            })
            return  res
    },

    getInfo: async () => {
        const res = await fetch(`${BASE_URL + endpoints.v1.getInfoEndpoint()}`)
        .then((response) => {
            return response.json()
        })
        .catch((error) => {
          console.error(error);
        });
        return res;
    }
}