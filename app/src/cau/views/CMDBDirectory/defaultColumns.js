export const directoryTableColumns = [
  {
    header: 'Nombre',
    accessorKey: 'name',
  },
  {
    header: 'Usuario',
    accessorKey: 'user'
  },
  {
    header: 'X-Usuario',
    accessorKey: 'user_x'
  },
  {
    header: 'Estatus',
    accessorKey: 'status',
    meta: {
      filterVariant: 'select',
      options: ['Todo', 'Activo', 'Baja']
    }
  },
  {
    header: 'Dominio',
    accessorKey: 'domain',
    meta: {
      filterVariant: 'select',
      options: []
    }
  },
  {
    header: 'Unidad Organizacional',
    accessorKey: 'uo',
    size: '200',
    meta: {
      filterVariant: 'select',
      options: []
    }
  },
  {
    header: 'Área',
    accessorKey: 'area',
    meta: {
      filterVariant: 'select',
      options: []
    }
  },
]