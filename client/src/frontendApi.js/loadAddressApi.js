import API from "../API/API";
const api = new API();
const endPoints = "address/get";
export const loadAddressApi = async ( userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      console.log("this is post call in API---->",endPoints);
      const response = await api.get(`${endPoints}?userId=${userId}`);
      console.log("fetched user in loadAddressApi", response);
      console.log("fetched user in loadAddressApi", response.data);
      resolve(response);
   
    } catch (error) {
      console.error("Error in loadAddressApi:", error);
      reject(error);
    }
  });
};
