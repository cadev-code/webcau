// react imports
import { useEffect, useState } from 'react';

// components imports
import { ButtonContainer } from './styled';
import { EditMaps, ListMenu, TitleActionBar } from '../../components';
import {
  ActionButton,
  ActionIconButton,
  Alert,
  SubmitButton,
} from '../../../components';
import {
  deleteMap,
  getMapOrder,
  getMaps,
  updateMap,
  updateMapOrder,
  uploadMap,
} from '../../api/maps.api';
import { alertActions } from '../../helpers';
import { Close } from '@mui/icons-material';
import { useSiteValueByProfile } from '../../hooks';

export const Maps = ({ userData }) => {
  const { permissions, profile } = userData;

  const { siteValue, setSiteValue } = useSiteValueByProfile(profile)

  const [mapsData, setMapsData] = useState([]);
  const [orderMaps, setOrderMaps] = useState([]);

  const loadMaps = async () => {
    const { data: orderData } = await getMapOrder(siteValue[0]);
    const { data } = await getMaps(siteValue[0]);

    const maps = orderData.map(item => data.filter(map => map.id === item)[0]);

    setMapsData(maps);
    setEditMapsData(maps);

    setOrderMaps(orderData);
    setOrderEditMaps(orderData);
  };

  useEffect(() => {
    loadMaps();
  }, [siteValue]);

  const url = `${import.meta.env.VITE_URL_API_WEBCAU_DB}`;
  const itemOnClick = path => {
    window.open(`${url}/uploads/${path}`, '_blank');
  };

  const uploadMapAction = async () => {
    if (addMapData.text !== '' && addMapData.file !== '') {
      const newFileName = `${new Date().getTime()}-${addMapData.path}`;

      const formData = new FormData();
      formData.append('text', addMapData.text);
      formData.append('file', addMapData.file, newFileName);
      formData.append('path', newFileName);
      formData.append('site', siteValue[0]);

      try {
        const { data } = await uploadMap(formData);
        const newOrder = JSON.stringify([...orderMaps, data.insertId]);
        await updateMapOrder({ order: newOrder, site: siteValue[0] });
        await loadMaps();
        setAddMapData({ text: '', path: '', file: '' });
        setAddMap(false);
        setEditMode(false);
        setEditMapsData([]);
        setAlertState({
          message: 'Mapa agregado correctamente.',
          itShow: true,
          severity: 'success',
        });
      } catch (error) {
        setAlertState({
          message: 'Error en el servidor, informa al administrador.',
          itShow: true,
          severity: 'error',
        });
      }

      resetAlertState();
    }
  };

  const updateMapAction = async () => {
    await Promise.all(
      mapChanges.map(async change => {
        const newFileName = `${new Date().getTime()}-${change.path}`;
        const formData = new FormData();

        Object.keys(change).forEach(prop => {
          switch (prop) {
            case 'file':
              formData.append(prop, change[prop], newFileName);
              break;

            case 'path':
              formData.append(prop, newFileName);
              break;
              
            default:
              formData.append(prop, change[prop]);
              break;
          }
        });
        await updateMap(formData);
      })
    );

    await loadMaps();

    setMapChanges([]);
    setEditMode(false);
    setEditMapsData([]);
  };

  const [deleteData, setDeleteData] = useState({
    showDialogConfirm: false,
    id: '',
    path: '',
  });

  const deleteMapAction = async () => {
    const { id, path } = deleteData;
    const newOrder = orderEditMaps.filter(item => item !== id);
    await updateMapOrder({
      order: JSON.stringify(newOrder),
      site: siteValue[0],
    });
    await deleteMap({ id, path });
    setOrderEditMaps([]);
    await loadMaps();
    setDeleteData({
      showDialogConfirm: false,
      id: '',
      path: '',
    });
  };

  // edit mode
  const [editMode, setEditMode] = useState(false);
  const [editMapsData, setEditMapsData] = useState([]);
  const [orderEditMaps, setOrderEditMaps] = useState([]);

  // add data edit mode
  const [addMap, setAddMap] = useState(false);
  const [addMapData, setAddMapData] = useState({
    text: '',
    path: '',
    file: '',
  });

  // update data edit mode
  const [mapChanges, setMapChanges] = useState([]);

  const openEditAction = () => {
    setEditMode(true);
    setEditMapsData(mapsData.slice());
  };

  const closeEditAction = async () => {
    setEditMode(false);
    setEditMapsData([]);
    setAddMap(false);
    setMapChanges([]);
  };

  const { alertState, setAlertState, resetAlertState, changeStateAlert } =
    alertActions();

  return (
    <>
      <TitleActionBar
        title="Mapas"
        siteValue={siteValue}
        setSiteValue={setSiteValue}
        userProfile={userData.profile}
        selectDisabled={editMode}
      />
      {!editMode ? (
        <ListMenu listItems={mapsData} itemOnClick={itemOnClick} />
      ) : (
        <EditMaps
          permissions={permissions}
          title="Editar Mapas"
          mapsData={editMapsData}
          orderMaps={orderEditMaps}
          setOrderMaps={setOrderEditMaps}
          setMapsData={setEditMapsData}
          loadMaps={loadMaps}
          addMap={addMap}
          setAddMap={setAddMap}
          addMapData={addMapData}
          setAddMapData={setAddMapData}
          mapChanges={mapChanges}
          setMapChanges={setMapChanges}
          deleteData={deleteData}
          setDeleteData={setDeleteData}
          deleteMapAction={deleteMapAction}
          site={siteValue[0]}
        />
      )}

      {(permissions.includes('admin') || permissions.includes('maps')) && (
        <ButtonContainer>
          {!editMode ? (
            <ActionButton text="Editar" action={openEditAction} />
          ) : (
            <>
              <SubmitButton
                text={!addMap ? 'Agregar Mapa' : 'Guardar Mapa'}
                action={() => {
                  !addMap ? setAddMap(true) : uploadMapAction();
                }}
              />
              {mapChanges.length !== 0 && !addMap && (
                <ActionButton text="Guardar Cambios" action={updateMapAction} />
              )}
              <ActionIconButton icon={<Close />} action={closeEditAction} />
            </>
          )}
        </ButtonContainer>
      )}

      <Alert
        text={alertState.message}
        showAlert={alertState.itShow}
        setShowAlert={changeStateAlert}
        severity={alertState.severity}
      />
    </>
  );
};
