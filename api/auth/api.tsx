import axios, { AxiosRequestConfig } from "axios";
import { string } from "yup";
import { LoginValues } from "./values/loginValues";
import { LoginData } from "./values/loginData";
import { SignUpValues } from "./values/signUpValues";

const config = axios.interceptors.request.use(
  (config: AxiosRequestConfig): any => {
    // Bearer token'ını localStorage'dan alın
    const token: string | null = localStorage.getItem("account-token");

    // Bearer token'ı ekleyin
    if (token) {
      const axiosConfig: AxiosRequestConfig = {
        // Diğer istek ayarları
        headers: {
          ...config.headers,
          Authorization: `Bearer ${token}`, // Bearer token'ı ekleyin
        },
      };
    }

    return config;
  }
);

export const fetchRegister = async (
  signInFormData: LoginValues
): Promise<LoginData | any> => {
  const { data } = await axios.post(
    `http://localhost:3333/auth/local/signin`,
    signInFormData
  );
  console.log(data);

  return data;
};

export const fetchRefresh = async () => {
  const token: string | null = localStorage.getItem("refresh_token");
  const axiosConfig = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json", // İsteğin içeriği JSON formatında ise
    },
  };

  const { data } = await axios.get(
    "http://localhost:3333/auth/refresh",
    axiosConfig
  );
  return data;
};

export const signUpLocal = async (
  signUpFormData: SignUpValues
): Promise<Boolean | any> => {
  const { data } = await axios.post(
    `http://localhost:3333/auth/local/signup`,
    {
      email:signUpFormData.email,
      password:signUpFormData.password,
      roles:["USER","MODERATOR"]
    }
  );
  console.log(data);

  return data;
};
