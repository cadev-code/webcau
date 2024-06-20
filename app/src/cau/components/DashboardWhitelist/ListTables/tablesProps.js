import { addComputer, addCustomersEmail, addLocalEmail, deleteComputer, deleteCustomersEmail, deleteLocalEmail, updateComputer, updateCustomersEmail, updateLocalEmail } from '../../../api/cmdbWhitelists'

export const tablesProps = [
  {
    db: 'computers',
    columns: [
      {
        header: 'Equipos',
        columns: [
          {
            header: 'NetBIOS',
            accessorKey: 'netbios'
          },
          {
            header: 'Correo',
            accessorKey: 'email'
          }
        ]
      }
    ],
    addMethod: addComputer,
    editMethod: updateComputer,
    deleteMethod: deleteComputer
  },
  {
    db: 'localEmails',
    columns: [
      {
        header: 'Correos Smart permitidos',
        accessorKey: 'email'
      }
    ],
    addMethod: addLocalEmail,
    editMethod: updateLocalEmail,
    deleteMethod: deleteLocalEmail
  },
  {
    db: 'customersEmails',
    columns: [
      {
        header: 'Correos cliente permitidos',
        accessorKey: 'email'
      }
    ],
    addMethod: addCustomersEmail,
    editMethod: updateCustomersEmail,
    deleteMethod: deleteCustomersEmail
  }
]