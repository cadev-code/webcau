export const directoryTableColumns = [
  {
    header: 'Nombre',
    accessorKey: 'name',
    size: 340,
    required: true
  },
  {
    header: 'Usuario',
    accessorKey: 'user',
    size: 200,
    required: true
  },
  {
    header: 'X-Usuario',
    accessorKey: 'user_x',
    size: 160,
    required: true
  },
  {
    header: 'Unidad Organizacional',
    accessorKey: 'uo',
    meta: {
      filterVariant: 'select',
      options: []
    },
    size: 300,
    required: true
  },
  {
    header: 'Dominio',
    accessorKey: 'domain',
    meta: {
      filterVariant: 'select',
      options: []
    },
    size: 220,
    required: true
  },
  {
    header: 'Área',
    accessorKey: 'area',
    meta: {
      filterVariant: 'select',
      options: []
    },
    size: 300,
    required: true
  },
  {
    header: 'Puesto',
    accessorKey: 'position',
    meta: {
      filterVariant: 'select',
      options: []
    },
    size: 300,
    required: true
  },
  {
    header: 'Estatus',
    accessorKey: 'status',
    meta: {
      filterVariant: 'select',
      options: ['Todo', 'Activo', 'Baja']
    },
    size: 140,
    required: true
  },
]