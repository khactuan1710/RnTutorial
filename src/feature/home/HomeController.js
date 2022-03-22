import { homeApi } from "../../services/api/home/homeAPI"

const HomeController = () => {
    const getInfoCustomer = async  () => {
        console.log("hi");
        const res = await homeApi.getInfoCustomer()
        console.log("hi2");
        return res
    }
    return {
        getInfoCustomer,
    }
}
export default HomeController