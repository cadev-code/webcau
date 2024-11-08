export const extensionsTableColumns = [
  {
    header: 'Nombre',
    accessorKey: 'name',
    size: 360,
    required: true
  },
  {
    header: 'Área o Departamento',
    accessorKey: 'area',
    size: '360',
    meta: {
      filterVariant: 'select',
      options: []
    },
    required: true
  },
  {
    header: 'Tipo de Extensión',
    accessorKey: 'type',
    size: 200,
    meta: {
      filterVariant: 'select',
      options: []
    },
    required: true
  },
  {
    header: 'Número de Extensión',
    accessorKey: 'extension_number',
    size: 200,
    required: true
  },
  {
    header: 'Authcodes',
    accessorKey: 'authcode',
    size: 200,
    required: true
  },
  {
    header: 'Edificio',
    accessorKey: 'site',
    size: 200,
    meta: {
      filterVariant: 'select',
      options: []
    },
    required: 'true'
  },
  {
    header: 'Ticket',
    accessorKey: 'ticket',
    size: 200,
    required: true
  }
]