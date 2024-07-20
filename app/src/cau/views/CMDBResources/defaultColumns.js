export const resourcesTableColumns = [
  {
    header: 'Recurso Compartido',
    accessorKey: 'resource_name',
    size: 340,
    required: true
  },
  {
    header: 'Capacidad (GB)',
    accessorKey: 'capacity',
    size: 160,
    required: true
  },
  {
    header: 'Área',
    accessorKey: 'area',
    size: 300,
    meta: {
      filterVariant: 'select',
      options: []
    },
    required: true
  }
]