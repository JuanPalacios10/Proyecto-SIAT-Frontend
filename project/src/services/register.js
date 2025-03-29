import { BACK_URL } from "../constants"
import { REGISTER_FIELDS } from "../constants"
import { formatData } from "../utilities/formatData"
import { loadAbort } from "../utilities"
import { axiosService } from "./axios.service"

export const register = (data) => {
  const controller = loadAbort()
  const axios = axiosService.getAxios()
  return { call: axios.post(`${BACK_URL}/api/registro/`, formatData(data, REGISTER_FIELDS), { signal: controller.signal }), controller }
}
