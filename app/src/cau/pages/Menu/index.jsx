// components imports
import { ButtonMenu, ButtonLogout } from '../../components';
import {
  AutoStories,
  Computer,
  Grass,
  LibraryBooks,
  LocationOn,
  Print,
  VerifiedUser,
} from '@mui/icons-material';
import { Box, Typography } from '@mui/material';

// styles imports
import { MenuContainer, ToolsContainer } from './styles';
import { blue } from '@mui/material/colors';
import { toolsData } from './toolsData';

export const Menu = ({ userData }) => {
  const { profile } = userData;

  return (
    <MenuContainer>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <>
          <Typography
            variant="h1"
            sx={{
              fontSize: 34,
              fontWeight: 600,
              textAlign: 'center',
            }}>
            Seguridad de la Información
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: 42,
              fontWeight: 600,
              textAlign: 'center',
              color: blue[400],
            }}>
            ODA
          </Typography>
        </>
        <Box
          sx={{
            maxWidth: 1200,
            mt: 5,
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 3,
          }}>
          {profile === 'cau_oda' && (
            <>
              <ButtonMenu
                text="Mapas"
                icon={
                  <LocationOn sx={{ fontSize: 80, mb: 1 }} />
                }
                link="mapas"
              />
              <ButtonMenu
                text="Catálogo de configuraciones"
                icon={
                  <AutoStories
                    sx={{ fontSize: 80, mb: 1 }}
                  />
                }
                link="catalogo"
              />
              <ButtonMenu
                text="Impresoras"
                icon={
                  <Print sx={{ fontSize: 80, mb: 1 }} />
                }
                link="impresoras"
              />
              <ButtonMenu
                text="Licencias Office"
                icon={
                  <LibraryBooks
                    sx={{ fontSize: 80, mb: 1 }}
                  />
                }
                link="office"
              />
              <ButtonMenu
                text="CMDB"
                icon={
                  <Computer sx={{ fontSize: 80, mb: 1 }} />
                }
                link="cmdb"
              />
            </>
          )}
          <ButtonMenu
            text="Hardening"
            icon={
              <VerifiedUser sx={{ fontSize: 80, mb: 1 }} />
            }
            link="hardening"
          />
        </Box>
        {profile === 'cau_oda' && (
          <Box>
            <ToolsContainer>
              {toolsData.map((list, i) => (
                <div key={i}>
                  {list.map(({ text, url, subText }, i) => (
                    <button
                      key={i}
                      onClick={() =>
                        window.open(url, '_blank')
                      }>
                      {text}
                      {subText && <span>{subText}</span>}
                    </button>
                  ))}
                </div>
              ))}
            </ToolsContainer>
          </Box>
        )}
      </Box>
      <Box sx={{ position: 'fixed', top: 30, right: 30 }}>
        <ButtonLogout />
      </Box>
    </MenuContainer>
  );
};
