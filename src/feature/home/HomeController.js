import { homeApi } from "../../services/api/home/homeAPI"

const HomeController = () => {
    const getInfoCustomer = async  () => {
        const res = await homeApi.getInfoCustomer()
        return res
    }
    const getInfo = async () => {
        const res = await homeApi.getInfo();
        return res;
    }
    return {
        getInfoCustomer,
        getInfo,
    }
}
export default HomeController