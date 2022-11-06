import { getUserDetails } from "../../../api";
import Constants from "../../../constants/Constants";

const inf = JSON.parse(localStorage.getItem(Constants.userInfo));

export const userDetails = (setterFunction) =>{
    getUserDetails(inf._id).then((res) => {
        const { data } = res.data
        setterFunction(data)
    });
}

