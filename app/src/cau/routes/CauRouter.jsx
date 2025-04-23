// react tools imports
import { Navigate, Route, Routes } from 'react-router-dom';

// components imports
import { AuthorizedRoute } from './AuthorizedRoute';
import { Menu, Dashboard } from '../pages';
import {
  Catalogue,
  CMDB,
  CMDBBiometrics,
  CMDBComputers,
  CMDBDirectory,
  CMDBEmails,
  CMDBLaptops,
  CMDBResources,
  CMDBWhitelists,
  Maps,
  Office,
  Printers,
} from '../views';
import { useSelector } from 'react-redux';
import { CMDBExtensions } from '../views/CMDBExtensions';

export const CauRouter = () => {
  // User login data
  const { user } = useSelector(state => state.user);
  const userData = user[0];

  return (
    <Routes>
      <Route
        path="menu"
        element={<Menu userData={userData} />}
      />

      <Route path="main" element={<Dashboard />}>
        <Route
          path="mapas"
          element={<Maps userData={userData} />}
        />

        <Route
          path="impresoras"
          element={
            <AuthorizedRoute
              userData={userData}
              allowedProfile="cau_oda">
              <Printers userData={userData} />
            </AuthorizedRoute>
          }
        />
        <Route
          path="catalogo"
          element={
            <AuthorizedRoute
              userData={userData}
              allowedProfile="cau_oda">
              <Catalogue userData={userData} />
            </AuthorizedRoute>
          }
        />
        <Route
          path="office"
          element={
            <AuthorizedRoute
              userData={userData}
              allowedProfile="cau_oda">
              <Office userData={userData} />
            </AuthorizedRoute>
          }
        />

        {/* CMDB */}
        <Route
          path="cmdb"
          element={
            <AuthorizedRoute
              userData={userData}
              allowedProfile="cau_oda">
              <CMDB />
            </AuthorizedRoute>
          }
        />
        <Route
          path="cmdb/equipos"
          element={
            <AuthorizedRoute
              userData={userData}
              allowedProfile="cau_oda">
              <CMDBComputers userData={userData} />
            </AuthorizedRoute>
          }
        />
        <Route
          path="cmdb/correos"
          element={
            <AuthorizedRoute
              userData={userData}
              allowedProfile="cau_oda">
              <CMDBEmails userData={userData} />
            </AuthorizedRoute>
          }
        />
        <Route
          path="cmdb/listas"
          element={
            <AuthorizedRoute
              userData={userData}
              allowedProfile="cau_oda">
              <CMDBWhitelists userData={userData} />
            </AuthorizedRoute>
          }
        />
        <Route
          path="cmdb/directory"
          element={
            <AuthorizedRoute
              userData={userData}
              allowedProfile="cau_oda">
              <CMDBDirectory userData={userData} />
            </AuthorizedRoute>
          }
        />
        <Route
          path="cmdb/recursos"
          element={
            <AuthorizedRoute
              userData={userData}
              allowedProfile="cau_oda">
              <CMDBResources userData={userData} />
            </AuthorizedRoute>
          }
        />
        <Route
          path="cmdb/biometricos"
          element={
            <AuthorizedRoute
              userData={userData}
              allowedProfile="cau_oda">
              <CMDBBiometrics userData={userData} />
            </AuthorizedRoute>
          }
        />
        <Route
          path="cmdb/laptops"
          element={
            <AuthorizedRoute
              userData={userData}
              allowedProfile="cau_oda">
              <CMDBLaptops userData={userData} />
            </AuthorizedRoute>
          }
        />
        <Route
          path="cmdb/extensiones"
          element={
            <AuthorizedRoute
              userData={userData}
              allowedProfile="cau_oda">
              <CMDBExtensions userData={userData} />
            </AuthorizedRoute>
          }
        />
      </Route>

      <Route
        path="main/"
        element={<Navigate to="menu" />}
      />
      <Route path="/*" element={<Navigate to="menu" />} />
    </Routes>
  );
};
