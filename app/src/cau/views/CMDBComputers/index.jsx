import { TitleActionBar } from '../../components/TitleActionBar'

// import { dataToExcel } from '../../helpers/dataToExcel'

export const CMDBComputers = ({ userData }) => {

  return (
    <>
      <TitleActionBar
        title="CMDB Equipos"
        buttons={
          <>
            <button>
              Licencias Siphone
            </button>
            <button>
              Áreas
            </button>
            <button className="blue">
              Agregar Equipo
            </button> 
          </>
        }
      />
    </>
  )
}