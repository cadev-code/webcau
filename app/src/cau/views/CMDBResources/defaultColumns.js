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
    header: 'Permisos',
    accessorKey: 'permissions',
    size: 300,
    meta: {
      filterVariant: 'select',
      options: ['Todo', 'Control Total', 'Lectura', 'Escritura', 'Lectura y Escritura']
    },
    required: true
  },
]