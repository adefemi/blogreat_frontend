import axios from "axios";

const baseUrl = "http://blogreat-adefemigreat.api.djuix.io/blog-path/";

export const getData = async <T>(endpoint: string): Promise<T | null> => {
  const req = await axios.get(`${baseUrl}${endpoint}`).catch((e) => {
    console.log(e);
  });
  if (req) {
    return req.data as T;
  }
  return null;
};

export const postData = async (
  endpoint: string,
  data: any
): Promise<boolean> => {
  const res = await axios.post(`${baseUrl}${endpoint}`, data).catch((e) => {
    console.log(e);
  });
  if (res) {
    return true;
  }
  return false;
};
