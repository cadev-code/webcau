// components imports
import { useEffect, useState } from 'react'
import {
  AddButton,
  LicensesContainer,
  OfficeContainer,
  TitleContainer
} from './styled'
import { 
  AddAccount,
  License, 
  LicenseCard, 
  SearchUserOffice
} from '../../components'
import { BackgroundOpacity } from '../../../components'

// icons imports
import { LibraryBooks } from '@mui/icons-material'

// methods api imports
import { getLicenses } from '../../api/office.api'

export const Office = ({ userData }) => {
  
  const { permissions } = userData
  const [showWindow, setShowWindow] = useState('')

  // dataStates
  const [licenses, setLicenses] = useState([])
  const [licenseToShow, setLicenseToShow] = useState()

  // actions
  const licenseCardAction = (license) => {
    setLicenseToShow(license)
    setShowWindow('license')
  }

  // loads data
  const loadLicenses = async() => {
    const response = await getLicenses()
    const licenses = response.data
    setLicenses(licenses)
  }

  useEffect(() => {
    loadLicenses()
  }, [])

  // refresh license
  const refreshLicense = (licensID) => {
    const licenseExtraction = licenses.filter(license => license.licensID === licensID)
    setLicenseToShow(licenseExtraction[0])
  }

  // update license to show every time the licenses change
  useEffect(() => {
    if(licenseToShow) {
      refreshLicense(licenseToShow.licensID)
    }
  }, [licenses])
  

  return (
    <OfficeContainer>
      <TitleContainer>
        <h1>Licencias Office</h1>
        <LibraryBooks sx={{ fontSize: '56px' }} />
      </TitleContainer>
      <LicensesContainer>
        {
          licenses.map(license => (
            <LicenseCard 
              key={license.licensID}
              license={ license }
              action={ () => licenseCardAction(license) }
            />
          ))
        }
      </LicensesContainer>

      {
        permissions.includes('office') &&
        <AddButton
          onClick={ () => setShowWindow('add') }
        >
          <span>+</span>
        </AddButton>
      }

      {
        showWindow === 'add' &&
        <BackgroundOpacity>
          <AddAccount
            title="Agregar Cuenta"
            closeWindow={ setShowWindow }
            loadLicenses={ loadLicenses }
          />
        </BackgroundOpacity>
      }

      {
        showWindow === 'license' &&
        <BackgroundOpacity>
          <License
            setShowWindow={ setShowWindow }
            licenseData={ licenseToShow }
            setLicenseToShow={ setLicenseToShow }
            loadLicenses={ loadLicenses }
            refreshLicense={ refreshLicense }
            permissions={ permissions }
          />
        </BackgroundOpacity>
      }
      <SearchUserOffice 
        setShowWindow={ setShowWindow }
        setLicenseToShow={ setLicenseToShow }
      />
    </OfficeContainer>
  )
}
