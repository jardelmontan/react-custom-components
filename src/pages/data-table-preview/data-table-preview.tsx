import DataTable from '../../components/data-table/data-table';
import { nameof } from '../../utils/nameof';
import { getPersons, Person } from './data';

const dataTablePreview: React.FC = () => {
  return (
    <DataTable
      id="data-table-id"
      rows={getPersons(100)}
      rowId={nameof<Person>('id')}
      fixedHeader
      columns={[
        {
          key: nameof<Person>('id'),
          name: 'Id',
        },
        {
          key: nameof<Person>('name'),
          name: 'Nome',
        },
        {
          key: nameof<Person>('age'),
          name: 'Idade',
        },
        {
          key: nameof<Person>('address'),
          name: 'Endereço',
        },
        {
          key: nameof<Person>('balance'),
          name: 'Saldo',
        },
        {
          key: 'actions',
          name: '',
          width: '100px',
          align: 'right',
          customRender: () => {
            return <button>Editar</button>;
          },
        },
      ]}
      isRowDisable={(row: Person) => {
        return row.id == 2;
      }}
    />
  );
};

export default dataTablePreview;
