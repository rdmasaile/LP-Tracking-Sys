import axios from "axios";

const getNotifications = async (fun)=>{
   try {
      const res = await axios.get(`/api/Notification`);
      const data = res.data;
      fun(data.length)
      console.log(data);
      return data
   } catch (error) {
      console.log(error);
   }
   
}
export default getNotifications;