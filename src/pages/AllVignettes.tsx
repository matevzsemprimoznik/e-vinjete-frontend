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
import { DataTableRowClickEventParams } from 'primereact/datatable';
import { useNavigate } from 'react-router-dom';
import { Paths } from '../routes';

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

const AllVignettes = () => {
  let navigate = useNavigate();
  const { vignettes } = useSelector(vignettesSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getVignettesAsync());
  }, []);

  const onRowClick = (event: DataTableRowClickEventParams) => {
    navigate(`${Paths.VIGNETTE}/${event.data.id}`);
  };

  console.log(vignettes);

  return (
    <div>
      <CustomDataTable
        data={vignettes}
        headers={headers}
        onRowClick={onRowClick}
      />
    </div>
  );
};

export default AllVignettes;
