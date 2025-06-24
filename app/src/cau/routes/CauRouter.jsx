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
import { AssetsEmails } from '../views/AssetsEmails';
import { Hardening } from '../views/Hardening';

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

      <Route
        path="main"
        element={
          <Dashboard userProfile={userData.profile} />
        }>
        <Route
          path="mapas"
          element={
            <AuthorizedRoute
              userProfile={userData.profile}
              allowedProfiles={[
                'cau_oda',
                'cau_viga',
                'ciso',
                'admin',
              ]}>
              <Maps userData={userData} />
            </AuthorizedRoute>
          }
        />
        <Route
          path="impresoras"
          element={
            <AuthorizedRoute
              userProfile={userData.profile}
              allowedProfiles={[
                'cau_oda',
                'ciso',
                'admin',
              ]}>
              <Printers userData={userData} />
            </AuthorizedRoute>
          }
        />
        <Route
          path="catalogo"
          element={
            <AuthorizedRoute
              userProfile={userData.profile}
              allowedProfiles={[
                'cau_oda',
                'ciso',
                'admin',
              ]}>
              <Catalogue userData={userData} />
            </AuthorizedRoute>
          }
        />
        <Route
          path="assets-emails"
          element={
            <AuthorizedRoute
              userProfile={userData.profile}
              allowedProfiles={[
                'cau_oda',
                'si_viga',
                'ciso',
                'admin',
              ]}>
              <AssetsEmails userData={userData} />
            </AuthorizedRoute>
          }
        />
        <Route
          path="office"
          element={
            <AuthorizedRoute
              userProfile={userData.profile}
              allowedProfiles={[
                'cau_oda',
                'ciso',
                'admin',
              ]}>
              <Office userData={userData} />
            </AuthorizedRoute>
          }
        />
        <Route
          path="hardening"
          element={
            <AuthorizedRoute
              userProfile={userData.profile}
              allowedProfiles={[
                'cau_oda',
                'si_viga',
                'admin'
              ]}>
              <Hardening userData={userData} />
            </AuthorizedRoute>
          }
        />

        {/* CMDB */}
        <Route
          path="cmdb"
          element={
            <AuthorizedRoute
              userProfile={userData.profile}
              allowedProfiles={[
                'cau_oda',
                'cau_viga',
                'ciso',
                'admin',
              ]}>
              <CMDB userProfile={userData.profile} />
            </AuthorizedRoute>
          }
        />
        <Route
          path="cmdb/equipos"
          element={
            <AuthorizedRoute
              userProfile={userData.profile}
              allowedProfiles={[
                'cau_oda',
                'cau_viga',
                'ciso',
                'admin',
              ]}>
              <CMDBComputers userData={userData} />
            </AuthorizedRoute>
          }
        />
        <Route
          path="cmdb/correos"
          element={
            <AuthorizedRoute
              userProfile={userData.profile}
              allowedProfiles={[
                'cau_oda',
                'cau_viga',
                'ciso',
                'admin',
              ]}>
              <CMDBEmails userData={userData} />
            </AuthorizedRoute>
          }
        />
        <Route
          path="cmdb/listas"
          element={
            <AuthorizedRoute
              userProfile={userData.profile}
              allowedProfiles={[
                'cau_oda',
                'ciso',
                'admin',
              ]}>
              <CMDBWhitelists userData={userData} />
            </AuthorizedRoute>
          }
        />
        <Route
          path="cmdb/directory"
          element={
            <AuthorizedRoute
              userProfile={userData.profile}
              allowedProfiles={[
                'cau_oda',
                'ciso',
                'admin',
              ]}>
              <CMDBDirectory userData={userData} />
            </AuthorizedRoute>
          }
        />
        <Route
          path="cmdb/recursos"
          element={
            <AuthorizedRoute
              userProfile={userData.profile}
              allowedProfiles={[
                'cau_oda',
                'ciso',
                'admin',
              ]}>
              <CMDBResources userData={userData} />
            </AuthorizedRoute>
          }
        />
        <Route
          path="cmdb/biometricos"
          element={
            <AuthorizedRoute
              userProfile={userData.profile}
              allowedProfiles={[
                'cau_oda',
                'ciso',
                'admin',
              ]}>
              <CMDBBiometrics userData={userData} />
            </AuthorizedRoute>
          }
        />
        <Route
          path="cmdb/laptops"
          element={
            <AuthorizedRoute
              userProfile={userData.profile}
              allowedProfiles={[
                'cau_oda',
                'ciso',
                'admin',
              ]}>
              <CMDBLaptops userData={userData} />
            </AuthorizedRoute>
          }
        />
        <Route
          path="cmdb/extensiones"
          element={
            <AuthorizedRoute
              userProfile={userData.profile}
              allowedProfiles={[
                'cau_oda',
                'ciso',
                'admin',
              ]}>
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
