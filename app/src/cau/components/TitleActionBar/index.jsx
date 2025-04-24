import { Select } from '../../../components/Select';
import { ActionBar, Container } from './styled';

export const TitleActionBar = ({
  title,
  buttons,
  siteValue,
  setSiteValue,
}) => {
  const siteOnChange = ({ target }) =>
    setSiteValue(target.value);

  return (
    <Container>
      <div className="title">
        <h2>{title}</h2>
        <Select
          text="Sitio"
          id="site"
          options={['Ojo de Agua', 'Viga']}
          inputFormOnChange={siteOnChange}
          value={siteValue}
          width="160px"
        />
      </div>
      <ActionBar>{buttons}</ActionBar>
    </Container>
  );
};
