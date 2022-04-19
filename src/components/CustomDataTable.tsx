import { DataTable, DataTableRowClickEventParams } from 'primereact/datatable';
import { Column, ColumnBodyType } from 'primereact/column';

export interface CustomDataTableHeader<T> {
  label: string;
  accessor: keyof T;
}

interface CustomDataTableProps<T> {
  headers: CustomDataTableHeader<T>[];
  data: T[];
  onRowClick: (event: DataTableRowClickEventParams) => void;
}

const CustomDataTable = <T extends unknown>({
  data,
  headers,
  onRowClick,
}: CustomDataTableProps<T>) => {
  return (
    <DataTable value={data} onRowClick={(event) => onRowClick(event)}>
      {headers.map((header: CustomDataTableHeader<T>) => (
        <Column
          key={`${header.accessor}`}
          field={`${header.accessor}`}
          header={header.label}
        />
      ))}
    </DataTable>
  );
};

export default CustomDataTable;
