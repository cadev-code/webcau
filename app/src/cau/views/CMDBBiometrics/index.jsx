import { TitleActionBar } from '../../components'

export const CMDBBiometrics = () => {
  return (
    <>
      <TitleActionBar 
        title="CMDB Biométricos"
        buttons={
          <>
            <button onClick={() => console.log('campañas')}>
              Campañas
            </button>
          </>
        }
      />
    </>
  )
}
