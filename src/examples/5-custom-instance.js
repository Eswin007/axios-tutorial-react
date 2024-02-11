import axios from "axios";
import { useEffect } from "react";
import authFetch from "../axios/custom";

const randomUserUrl = "https://randomuser.me/api";

const CustomInstance = () => {
  console.log(`${authFetch}/api`);
  const fetchData = async () => {
    try {
      // const resp1 = await axios(`${authFetch.baseURL}/api`);
      const resp1 = await authFetch("/react-store-products");
      console.log(resp1);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className="text-center">custom instance</h2>;
};
export default CustomInstance;
