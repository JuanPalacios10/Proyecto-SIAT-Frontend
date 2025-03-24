import { z } from "zod"
import { ACCIDENTS_ENUM } from "../constants/accident"

export const schema = z.object({
  accidentDate: z.string().date("Formato inválido, se requiere (YYYY-MM-DD)"),
  accidentTime: z.string().time("Formato inválido, se requiere (HH:MM:SS)"),
  trafficControls: z.enum(ACCIDENTS_ENUM.trafficControls, { errorMap: () => ({ message: "Seleccione una opción válida" }) }),
  accidentType: z.enum(ACCIDENTS_ENUM.accidentType, { errorMap: () => ({ message: "Seleccione una opción válida" }) }),
  serviceType: z.enum(ACCIDENTS_ENUM.serviceType, { errorMap: () => ({ message: "Seleccione una opción válida" }) }),
  accidentSeverity: z.enum(ACCIDENTS_ENUM.accidentSeverity, { errorMap: () => ({ message: "Seleccione una opción válida" }) }),
  vehicleType: z.enum(ACCIDENTS_ENUM.vehicleType, { errorMap: () => ({ message: "Seleccione una opción válida" }) }),
  accidentArea: z.enum(ACCIDENTS_ENUM.accidentArea, { errorMap: () => ({ message: "Seleccione una opción válida" }) }),
  // accidentAddress: z.string().min(1, "Se requiere la dirección del accidente"),
  accidentImage: z
    .instanceof(File)
    .refine((file) => file.size > 0, { message: "El archivo no puede estar vació" })
    .refine((file) => ["image/jpeg", "image/png"].includes(file.type), { message: "El archivo debe ser una imagen en formato jpeg o png" })
    .optional(),
})
