export const columnsData = [
  {
    header: 'ID Mapa',
    accessorKey: 'idMapa',
    size: 160
  },
  {
    header: 'Net-BIOS',
    accessorKey: 'netBIOS',
    size: 240
  },
  {
    header: 'Dirección IP',
    accessorKey: 'IP',
    size: 200
  },
  {
    header: 'Dirección Física',
    accessorKey: 'mac',
    size: 240
  },
  {
    header: 'Área',
    accessorKey: 'area',
    size: 220,
    filterFn: 'equalsString',
    // add the following options when it is an select input
    meta: {
      filterVariant: 'select',
      options: []
    }
  },
  {
    header: 'Empleado',
    accessorKey: 'staff',
    size: 300,
  },
  {
    header: 'Extensión SIP',
    accessorKey: 'ext',
    size: 160
  },
  {
    header: 'Nodo',
    accessorKey: 'nodo',
    size: 180
  },
  {
    header: 'VLAN',
    accessorKey: 'vlan',
    size: 140
  },
  {
    header: 'Licencia Siphone',
    accessorKey: 'license',
    size: 300,
    filterFn: 'equalsString',
    // add the following options when it is an select input
    meta: {
      filterVariant: 'select',
      options: []
    }
  },
  {
    header: 'Modelo de Equipo',
    accessorKey: 'model',
    size: 240,
    filterFn: 'equalsString',
    // add the following options when it is an select input
    meta: {
      filterVariant: 'select',
      options: []
    }
  },
  {
    header: 'Etiqueta de Servicio',
    accessorKey: 'serviceTag',
    size: 200
  },
  {
    header: 'KC Monitor',
    accessorKey: 'kc_monitor',
    size: 160
  },
  {
    header: 'KC CPU',
    accessorKey: 'kc_cpu',
    size: 160
  },
  {
    header: 'Hash',
    accessorKey: 'hash',
    size: 420
  },
]