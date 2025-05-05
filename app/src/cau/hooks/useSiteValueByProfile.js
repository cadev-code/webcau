import { useState } from 'react';

export const useSiteValueByProfile = profile => {
  const [siteValue, setSiteValue] = useState(() => {
    switch (profile) {
      case 'cau_oda':
        return ['oda', 'Ojo de Agua'];

      case 'cau_viga':
        return ['viga', 'Viga'];

      default:
        return ['oda', 'Ojo de Agua'];
    }
  });

  return {
    siteValue,
    setSiteValue,
  };
};
