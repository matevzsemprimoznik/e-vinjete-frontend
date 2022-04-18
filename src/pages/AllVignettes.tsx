import { ColumnBodyType } from 'primereact/column';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import CustomDataTable, {
  CustomDataTableHeader,
} from '../components/CustomDataTable';
import { getVignettesAsync } from '../services/VignettesService';
import { vignettesSelector } from '../store/features/vignetteSlice';
import { useAppDispatch } from '../store/hooks';
import { Vignette } from '../store/models/Vignette';
import { Button } from 'primereact/button';

const headers: CustomDataTableHeader<Vignette>[] = [
  {
    accessor: 'naziv',
    label: 'Naziv',
  },
  {
    accessor: 'tipVozila',
    label: 'Tip vozila',
  },
  {
    accessor: 'veljavnost',
    label: 'Veljavnost',
  },
];

const additionalColumns: ColumnBodyType[] = [
  <Button label='Podrobnosti' className='p-button-info p-button-outlined' />,
  <Button label='Uredi' className='p-button-info' />,
  <Button label='Izbrisi' className='p-button-danger' />,
];

const AllVignettes = () => {
  const { vignettes } = useSelector(vignettesSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getVignettesAsync());
  }, []);

  console.log(vignettes);

  return (
    <div>
      <CustomDataTable
        data={vignettes}
        headers={headers}
        additionalColumns={additionalColumns}
      />
    </div>
  );
};

export default AllVignettes;
