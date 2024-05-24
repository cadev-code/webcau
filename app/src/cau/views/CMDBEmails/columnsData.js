export const columnsData = [
  {
    header: 'Nombre',
    accessorKey: 'name',
    size: 340,
    required: true
  },
  {
    header: 'Correo',
    accessorKey: 'email',
    size: 340,
    required: true
  },
  {
    header: 'Contraseña',
    accessorKey: 'password',
    size: 240,
    required: true
  },
  {
    header: 'Área',
    accessorKey: 'area',
    size: 300,
    required: true,
    filterFn: 'equalsString',
    // add the following options when it is an select input
    meta: {
      filterVariant: 'select',
      options: []
    }
  },
  {
    header: 'Lista de Distribución',
    accessorKey: 'list',
    size: 340,
    // add the following options when it is an select input
    meta: {
      filterVariant: 'select',
      options: []
    }
  },
  {
    header: 'Estatus',
    accessorKey: 'status',
    size: 160,
    required: true,
    meta: {
      filterVariant: 'select',
      options: ['Todo', 'Activo', 'Baja']
    }
  }
]