import { DataTableRowClickEventParams } from 'primereact/datatable';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CustomDataTable, {
  CustomDataTableHeader,
} from '../components/CustomDataTable';
import { Paths } from '../routes';
import { getPurchasesAsync } from '../services/PurchasesService';
import { purchasesSelector } from '../store/features/purchaseSlice';
import { vignettesSelector } from '../store/features/vignetteSlice';
import { useAppDispatch } from '../store/hooks';
import { Purchase } from '../store/models/Purchase';

const headers: CustomDataTableHeader<Purchase>[] = [
  {
    accessor: 'registrskaOznaka',
    label: 'Registrska oznaka',
  },
  {
    accessor: 'datumNakupa',
    label: 'Datum nakupa',
  },
  {
    accessor: 'datumZacetkaVeljavnosti',
    label: 'Datum zacetka veljavnosti',
  },
  {
    accessor: 'prodajalec',
    label: 'Prodajalec',
  },
];

const AllPurchases = () => {
  let navigate = useNavigate();
  const { purchases } = useSelector(purchasesSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPurchasesAsync());
  }, []);

  const onRowClick = (event: DataTableRowClickEventParams) => {
    navigate(`${Paths.PURCHASE}/${event.data.id}`);
  };

  console.log(purchases);

  return (
    <div>
      <CustomDataTable
        data={purchases}
        headers={headers}
        onRowClick={onRowClick}
      />
    </div>
  );
};

export default AllPurchases;
