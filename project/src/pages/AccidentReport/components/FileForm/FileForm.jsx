import { PrimaryIcon } from "../../../../components/Icon"
import { fileContainer, fileTitle, fileInfo } from "./FileForm.module.css"

export const FileForm = ({ children, label }) => {
  return (
    <div>
      <span>{label}</span>
      <div className={fileContainer}>
        <PrimaryIcon>
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-camera-fill" viewBox="0 0 16 16">
            <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
            <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0" />
          </svg>
        </PrimaryIcon>
        <h4 className={fileTitle}>Subir Fotografía</h4>
        <p className={fileInfo}>Adjunte imágenes del accidente para documentar los datos de la escena. Formatos aceptados: JPG, PNG.</p>
        {children}
      </div>
    </div>
  )
}
