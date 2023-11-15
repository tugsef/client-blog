import axios from "axios";

export const fetchGetAllPosts = async (): Promise<any> => {
  
  const { data } = await axios.get(
        "http://localhost:3333/posts"  
  );
  return data;
};
