import { ListMenu } from '../../components/DashboardWhitelist'
import { Container, Dashboard } from './styled'

export const CMDBWhitelists = ({ userData }) => {


  
  return (
    <Container>
      <Dashboard>
        <ListMenu 
          listData={[]}
        />
      </Dashboard>
    </Container>
  )
}
