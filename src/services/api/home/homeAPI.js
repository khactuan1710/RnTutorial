import endpoints from "./endpoints";

export const homeApi = {
    getInfoCustomer : async ()  => {
        console.log("hi3");
            const res = await fetch('https://reactnative.dev/movies.json')
            .then((res) => res.json())
            .catch ((err) => {
                console.log(err);
            })
            return  res
        }
}