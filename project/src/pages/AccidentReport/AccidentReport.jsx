import { zodResolver } from "@hookform/resolvers/zod"
import { FormProvider, useForm } from "react-hook-form"
import { schema } from "./schemas/accident.model"
import { AccidentForm } from "./components/AccidentForm"
import { useFetchData } from "../../hooks"
import { report } from "../../services"
import { formatData } from "../../utilities"
import { ACCIDENT_FIELDS } from "../../constants"
import { Loader } from "../../components/Loader"

export const AccidentReport = () => {
  const { loading, fetch } = useFetchData(report)
  const {
    control,
    register,
    setValue,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      accidentDate: "",
      accidentTime: "",
      trafficControls: "",
      accidentType: "",
      serviceType: "",
      accidentSeverity: "",
      vehicleType: "",
      accidentArea: "",
      accidentNeighbor: "",
      accidentAddress: "",
      accidentImage: undefined,
      accidentGeo: "",
    },
  })

  const onSubmit = handleSubmit((data) => {
    const formatedData = formatData(data, ACCIDENT_FIELDS)

    const formData = new FormData()

    Object.keys(data).forEach((key) => {
      formData.append(key, data[key])
    })

    fetch(formatedData)
    reset()
  })

  if (loading) return <Loader />

  return (
    <FormProvider register={register} setValue={setValue}>
      <h2>Registrar Accidente</h2>
      <AccidentForm control={control} register={register} handleSubmit={onSubmit} errors={errors} />
    </FormProvider>
  )
}
