import { AxiosError } from "axios";
import api from "./api";
export async function profileService() {
  try {
    const { data } = await api.get("/profile");
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response.data) {
        throw new Error(error.response.data);
      } else {
        throw new Error(
          "Erro ao obter dados do perfil. Tente novamente mais tarde."
        );
      }
    }
  }
}
