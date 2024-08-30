export const biometricsTableColumns = [
  {
    header: 'Asignación',
    accessorKey: 'assignment',
    size: 200,
    meta: {
      filterVariant: 'select',
      options: []
    },
    required: true,
    filterFn: 'equalsString'
  },
  {
    header: 'Campaña',
    accessorKey: 'campaign',
    size: 200,
    meta: {
      filterVariant: 'select',
      options: []
    },
    required: true,
    filterFn: 'equalsString'
  },
  {
    header: 'Marca',
    accessorKey: 'mark',
    size: 200,
    meta: {
      filterVariant: 'select',
      options: []
    },
    required: true,
    filterFn: 'equalsString'
  },
  {
    header: 'Modelo',
    accessorKey: 'model',
    size: 200,
    meta: {
      filterVariant: 'select',
      options: []
    },
    required: true,
    filterFn: 'equalsString'
  },
  {
    header: 'Número de Serie',
    accessorKey: 'serial_number',
    size: 200,
    required: true
  },
  {
    header: 'IP',
    accessorKey: 'ip',
    size: 200,
    required: true
  },
  {
    header: 'MAC',
    accessorKey: 'mac',
    size: 200,
    required: true
  },
  {
    header: 'Usuario',
    accessorKey: 'user',
    size: 200,
    required: true
  },
  {
    header: 'Contraseña',
    accessorKey: 'password',
    size: 200,
    required: true
  },
] 