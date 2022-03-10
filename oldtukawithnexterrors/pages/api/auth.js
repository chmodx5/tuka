import axios from "axios";

const rootUrl = "http://localhost:3000/auth/";
const loginUrl = rootUrl + "login";

export const userLogin = (frmData) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.post(loginUrl, frmData);

      resolve(res.data);

      if (res.data.success === true) {
        console.log("login success");
        localStorage.setItem("token", res.data.token);
      }
    } catch (error) {
      reject(error);
    }
  });
};
