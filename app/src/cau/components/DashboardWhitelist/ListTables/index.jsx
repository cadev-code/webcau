import { ListTableData } from '../ListTableData'
import { Container } from './styled'

export const ListTables = () => {
  const tables = [
    {
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
      data: [
        {netbios: 'net-bios-1', email: 'net-bios1@gmail.com'},
        {netbios: 'net-bios-2', email: 'net-bios2@gmail.com'},
        {netbios: 'net-bios-3', email: 'net-bios3@gmail.com'},
        {netbios: 'net-bios-4', email: 'net-bios4@gmail.com'},
        {netbios: 'net-bios-5', email: 'net-bios5@gmail.com'},
        {netbios: 'net-bios-5', email: 'net-bios5@gmail.com'},
        {netbios: 'net-bios-5', email: 'net-bios5@gmail.com'},
        {netbios: 'net-bios-5', email: 'net-bios5@gmail.com'},
        {netbios: 'net-bios-5', email: 'net-bios5@gmail.com'},
        {netbios: 'net-bios-5', email: 'net-bios5@gmail.com'},
        {netbios: 'net-bios-5', email: 'net-bios5@gmail.com'},
        {netbios: 'net-bios-5', email: 'net-bios5@gmail.com'},
        {netbios: 'net-bios-5', email: 'net-bios5@gmail.com'},
        {netbios: 'net-bios-5', email: 'net-bios5@gmail.com'},
        {netbios: 'net-bios-5', email: 'net-bios5@gmail.com'},
        {netbios: 'net-bios-5', email: 'net-bios5@gmail.com'},
        {netbios: 'net-bios-5', email: 'net-bios5@gmail.com'},
        {netbios: 'net-bios-5', email: 'net-bios5@gmail.com'},
        {netbios: 'net-bios-5', email: 'net-bios5@gmail.com'},
      ]
    },
    {
      columns: [
        {
          header: 'Correos Smart permitidos',
          accessorKey: 'email'
        }
      ],
      data: [
        {email: 'smart1@gmail.com'},
        {email: 'smart2@gmail.com'},
        {email: 'smart3@gmail.com'},
        {email: 'smart4@gmail.com'},
        {email: 'smart4@gmail.com'},
        {email: 'smart4@gmail.com'},
        {email: 'smart4@gmail.com'},
        {email: 'smart4@gmail.com'},
        {email: 'smart4@gmail.com'},
        {email: 'smart4@gmail.com'},
        {email: 'smart4@gmail.com'},
        {email: 'smart4@gmail.com'},
        {email: 'smart4@gmail.com'},
        {email: 'smart4@gmail.com'},
        {email: 'smart4@gmail.com'},
        {email: 'smart4@gmail.com'},
        {email: 'smart4@gmail.com'},
        {email: 'smart4@gmail.com'},
        {email: 'smart4@gmail.com'},
        {email: 'smart4@gmail.com'},
        {email: 'smart4@gmail.com'},
        {email: 'smart4@gmail.com'},
        {email: 'smart4@gmail.com'},
        {email: 'smart5@gmail.com'}
      ]
    },
    {
      columns: [
        {
          header: 'Correos cliente permitidos',
          accessorKey: 'email'
        }
      ],
      data: [
        {email: 'cliente1@gmail.com'},
        {email: 'cliente2@gmail.com'},
        {email: 'cliente3@gmail.com'},
        {email: 'cliente4@gmail.com'},
        {email: 'cliente4@gmail.com'},
        {email: 'cliente4@gmail.com'},
        {email: 'cliente4@gmail.com'},
        {email: 'cliente4@gmail.com'},
        {email: 'cliente4@gmail.com'},
        {email: 'cliente4@gmail.com'},
        {email: 'cliente4@gmail.com'},
        {email: 'cliente4@gmail.com'},
        {email: 'cliente4@gmail.com'},
        {email: 'cliente4@gmail.com'},
        {email: 'cliente4@gmail.com'},
        {email: 'cliente4@gmail.com'},
        {email: 'cliente4@gmail.com'},
        {email: 'cliente4@gmail.com'},
        {email: 'cliente4@gmail.com'},
        {email: 'cliente4@gmail.com'},
        {email: 'cliente4@gmail.com'},
        {email: 'cliente4@gmail.com'},
        {email: 'cliente5@gmail.com'}
      ]
    }
  ]

  return (
    <Container>
      {
        tables.map((table, i) => (
          <ListTableData
            key={i}
            tableData={table}
          />
        ))
      }
    </Container>
  )
}
