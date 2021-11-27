import { useState } from "react";
import axios, { AxiosRequestConfig } from "axios";

export type IUser = {
  backgroundImageUrl: string;
  profilePictureUrl: string;
  name: string;
  title: string;
  metrics: {
    followers: number;
    following: number;
  };
};

export type FetchProps = {
  responses: IUser | null;
  serverError: Error | null | string;
  isLoading: boolean;
  fetchData(): void;
};

const baseURL = "http://localhost:3000/api";

function useFetch(url: string): FetchProps {
  const [isLoading, setIsLoading] = useState(false);
  const [responses, setApiData] = useState(null);
  const [serverError, setServerError] = useState<Error | null | string>(null);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const resp: AxiosRequestConfig = await axios({
        method: "GET",
        url: `${baseURL}/${url}`,
      });
      const data = await resp?.data;

      setApiData(data);
      setIsLoading(false);
    } catch (error) {
      setServerError("something went wrong");
      setIsLoading(false);
    }
  };
  return { isLoading, responses, serverError, fetchData };
}

export default useFetch;
