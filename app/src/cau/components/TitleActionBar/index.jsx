import { Select } from '../../../components/Select';
import { ActionBar, Container } from './styled';

export const TitleActionBar = ({
  title,
  buttons,
  siteValue = ["oda", "Ojo de Agua"],
  setSiteValue = () => {},
  userProfile = 'cau_oda',
  selectDisabled = false,
  disableChangeSite = false
}) => {
  const siteOnChange = ({ target }) =>
    target.value === 'Ojo de Agua' ? setSiteValue(['oda', target.value]) : setSiteValue(['viga', target.value]);

  return (
    <Container>
      <div className="title">
        <h2>{title}</h2>
        {!disableChangeSite && (
          <Select
            text="Sitio"
            id="site"
            options={['Ojo de Agua', 'Viga']}
            inputFormOnChange={siteOnChange}
            value={siteValue[1]}
            width="160px"
            disabled={(userProfile !== 'admin' && userProfile !== 'ciso') || selectDisabled}
          />
        )}
      </div>
      <ActionBar>{buttons}</ActionBar>
    </Container>
  );
};
