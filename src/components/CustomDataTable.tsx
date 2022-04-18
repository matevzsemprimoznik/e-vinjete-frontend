import React, { FC } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column, ColumnBodyType } from 'primereact/column';

export interface CustomDataTableHeader<T> {
  label: string;
  accessor: keyof T;
}

interface CustomDataTableProps<T> {
  headers: CustomDataTableHeader<T>[];
  data: T[];
  additionalColumns: ColumnBodyType[];
}

const CustomDataTable = <T extends unknown>({
  data,
  headers,
  additionalColumns,
}: CustomDataTableProps<T>) => {
  return (
    <DataTable value={data}>
      {headers.map((header: CustomDataTableHeader<T>) => (
        <Column
          key={`${header.accessor}`}
          field={`${header.accessor}`}
          header={header.label}
        />
      ))}
      {additionalColumns.map((column) => (
        <Column field='' header='' key={0} body={column} />
      ))}
    </DataTable>
  );
};

export default CustomDataTable;
