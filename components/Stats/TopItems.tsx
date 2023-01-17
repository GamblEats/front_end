import React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { ContainerTitle, ItemsContainer, TableWrapper } from './styles';

const columns: GridColDef[] = [
    { field: 'item', headerName: 'Item', flex: 1.5 },
    { field: 'count', headerName: 'Number of sales', flex: 1 },
];

interface Props {
    itemCount: any;
}

const TopItems = ({ itemCount }: Props) => {
    return (
        <TableWrapper>
            <ContainerTitle>Top items sold</ContainerTitle>
            <ItemsContainer>
                <DataGrid
                    rows={itemCount}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    getRowId={row => row.item}
                    sx={{ border: 0 }}
                />
            </ItemsContainer>
        </TableWrapper>
    );
};

export default TopItems;
