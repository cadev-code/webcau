import { Select } from '../../../components/Select';
import { ActionBar, Container } from './styled';

export const TitleActionBar = ({
  title,
  buttons,
  siteValue,
  setSiteValue,
  userProfile = 'cau_oda'
}) => {
  const siteOnChange = ({ target }) =>
    target.value === 'Ojo de Agua' ? setSiteValue(['oda', target.value]) : setSiteValue(['viga', target.value]);

  return (
    <Container>
      <div className="title">
        <h2>{title}</h2>
        <Select
          text="Sitio"
          id="site"
          options={['Ojo de Agua', 'Viga']}
          inputFormOnChange={siteOnChange}
          value={siteValue[1]}
          width="160px"
          disabled={userProfile !== 'admin' && userProfile !== 'ciso'}
        />
      </div>
      <ActionBar>{buttons}</ActionBar>
    </Container>
  );
};
