import { TitleActionBar } from '../../components'

export const CMDBResources = ({ userData }) => {
  return (
    <>
      <TitleActionBar 
        title="CMDB Recursos Compartidos"
        buttons={
          <>
            {
              // agregar permisos de admin
              true &&
                <button className="blue"
                  onClick={() => {}}
                >
                  Agregar Recurso
                </button>
            }
          </>
        }
      />
    </>
  )
}
