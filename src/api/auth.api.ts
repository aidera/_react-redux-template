import instance from "./index";

type RegisterResponseType = {
  status: number;
  message: string;
  errors?: Array<any>;
};

type LoginResponseType = {
  status: number;
  message: string;
  errors?: Array<any>;
  token?: string;
  userId?: string;
};

const authApi = {
  register(name: string, email: string, password: string) {
    return instance
      .post<RegisterResponseType>("auth/register", { name, email, password })
      .then((response) => {
        return response.data;
      });
  },

  login(email: string, password: string) {
    return instance
      .post<LoginResponseType>("auth/login", { email, password })
      .then((response) => {
        return response.data;
      });
  },
};

export default authApi;
