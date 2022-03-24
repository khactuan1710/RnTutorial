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
    const goToConversation = (navigation) => {
        navigation.navigate('Conversation')
    }
    const goToUserInfo = (navigation) => {
        navigation.navigate('UserInfo')
    }
    return {
        getInfoCustomer,
        getInfo,
        goToConversation,
        goToUserInfo,
    }
}
export default HomeController