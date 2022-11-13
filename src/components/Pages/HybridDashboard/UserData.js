import { getUserDetails, getSession, getSlots } from "../../../api";
import Constants from "../../../constants/Constants";

const inf = JSON.parse(localStorage.getItem(Constants.userInfo));

export const userDetails = (setterFunction) => {
  getUserDetails(inf._id).then((res) => {
    const { data } = res.data;
    setterFunction(data);
  });
};

export const sessionDetails = (setterFunction) => {
  getSession(inf._id).then((res) => {
    const { data } = res.data;
    setterFunction(data);
  });
};

export const slotsDetails = (setterFunction) => {
  getSlots(inf._id).then((res) => {
    const { data } = res.data;
    setterFunction(data);
  });
};
