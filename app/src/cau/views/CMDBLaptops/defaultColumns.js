export const laptopsTableColumns = [
  {
    header: 'Área',
    accessorKey: 'area',
    size: 400,
    meta: {
      filterVariant: 'select',
      options: []
    },
    required: true
  },
  {
    header: 'Nombre',
    accessorKey: 'name',
    size: 360,
    require: true
  },
  {
    header: 'Marca',
    accessorKey: 'mark',
    size: 200,
    required: true,
    meta: {
      filterVariant: 'select',
      options: []
    },
  },
  {
    header: 'Modelo',
    accessorKey: 'model',
    size: 240,
    required: true
  },
  {
    header: 'Service Tag / Serial',
    accessorKey: 'st',
    size: 180,
    required: true
  },
  {
    header: 'Dispositivo',
    accessorKey: 'device',
    size: 200,
    required: true
  }
]