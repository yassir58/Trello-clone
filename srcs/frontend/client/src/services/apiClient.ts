import axios, { AxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5002/api/v1/",
});

class apiClient<T> {
  endPoint: string;
  constructor(endPoint: string) {
    this.endPoint = endPoint;
  }

  postData = (data: T) => {
    return axiosInstance.post(this.endPoint, data, { withCredentials: true });
  };

  updateData = (data: T, headers: any | undefined) => {
    return axiosInstance.put(this.endPoint, data, {
      headers,
      withCredentials: true
    });
  };

  deleteData = () => {
    return axiosInstance.delete(this.endPoint, {
      withCredentials: true
    });
  }

  getData = (params: AxiosRequestConfig | null) => {
    return axiosInstance.get<T>(this.endPoint, { params, withCredentials: true });
  };
}

export default apiClient;
