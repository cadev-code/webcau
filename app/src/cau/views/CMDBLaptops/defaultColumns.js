export const laptopsTableColumns = [
  {
    header: 'Área',
    accessorKey: 'area',
    size: 220,
    meta: {
      filterVariant: 'select',
      options: []
    },
    required: true
  },
  {
    header: 'Nombre',
    accessorKey: 'name',
    size: 340,
    require: true
  },
  {
    header: 'Marca',
    accessorKey: 'mark',
    size: 180,
    required: true,
    meta: {
      filterVariant: 'select',
      options: []
    },
  },
  {
    header: 'Modelo',
    accessorKey: 'model',
    size: 180,
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
    size: 180,
    required: true
  }
]