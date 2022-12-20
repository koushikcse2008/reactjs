import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

import Button from '@mui/material/Button';

const columns = [
  { id: 'sl', label: 'Sl', minWidth: 40 },
  { id: 'name', label: 'Name', minWidth: 120 },
  { id: 'code', label: 'ISO\u00a0Code', minWidth: 120 },
  {
    id: 'population',
    label: 'Population',
    minWidth: 120,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'size',
    label: 'Size\u00a0(km\u00b2)',
    minWidth: 120,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'density',
    label: 'Density',
    minWidth: 120,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'edit',
    label: 'Edit',
    minWidth: 10,
    align: 'right',
  },
  {
    id: 'del',
    label: 'Delete',
    minWidth: 10,
    align: 'right',
  },
];

function createData(sl, name, code, population, size, edit, del) {
  const density = population / size;
  return { sl, name, code, population, size, density, edit, del };
}

const rows = [
  createData(1, 'India', 'IN', 1324171354, 3287263, <Button variant="contained" color="success">Edit</Button>, <Button variant="contained" color="error">Delete</Button>),
  createData(2, 'China', 'CN', 1403500365, 9596961, <Button variant="contained" color="success">Edit</Button>, <Button variant="contained" color="error">Delete</Button>),
  createData(3, 'Italy', 'IT', 60483973, 301340, <Button variant="contained" color="success">Edit</Button>, <Button variant="contained" color="error">Delete</Button>),
  createData(4, 'United States', 'US', 327167434, 9833520, <Button variant="contained" color="success">Edit</Button>, <Button variant="contained" color="error">Delete</Button>),
  createData(5, 'Canada', 'CA', 37602103, 9984670, <Button variant="contained" color="success">Edit</Button>, <Button variant="contained" color="error">Delete</Button>),
  createData(6, 'Australia', 'AU', 25475400, 7692024, <Button variant="contained" color="success">Edit</Button>, <Button variant="contained" color="error">Delete</Button>),
  createData(7, 'Germany', 'DE', 83019200, 357578, <Button variant="contained" color="success">Edit</Button>, <Button variant="contained" color="error">Delete</Button>),
  createData(8, 'Ireland', 'IE', 4857000, 70273, <Button variant="contained" color="success">Edit</Button>, <Button variant="contained" color="error">Delete</Button>),
  createData(9, 'Mexico', 'MX', 126577691, 1972550, <Button variant="contained" color="success">Edit</Button>, <Button variant="contained" color="error">Delete</Button>),
  createData(10, 'Japan', 'JP', 126317000, 377973, <Button variant="contained" color="success">Edit</Button>, <Button variant="contained" color="error">Delete</Button>),
  createData(11, 'France', 'FR', 67022000, 640679, <Button variant="contained" color="success">Edit</Button>, <Button variant="contained" color="error">Delete</Button>),
  createData(12, 'United Kingdom', 'GB', 67545757, 242495, <Button variant="contained" color="success">Edit</Button>, <Button variant="contained" color="error">Delete</Button>),
  createData(13, 'Russia', 'RU', 146793744, 17098246, <Button variant="contained" color="success">Edit</Button>, <Button variant="contained" color="error">Delete</Button>),
  createData(14, 'Nigeria', 'NG', 200962417, 923768, <Button variant="contained" color="success">Edit</Button>, <Button variant="contained" color="error">Delete</Button>),
  createData(15, 'Brazil', 'BR', 210147125, 8515767, <Button variant="contained" color="success">Edit</Button>, <Button variant="contained" color="error">Delete</Button>),
];

export default function Listing() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
    <h1>Listing</h1>
    <Paper sx={{ width: '100%' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            {/* <TableRow>
              <TableCell align="center" colSpan={2}>
                Country
              </TableCell>
              <TableCell align="center" colSpan={3}>
                Details
              </TableCell>
            </TableRow> */}
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ top: 0, minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100, 200, 300, 400, 500]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    </>
  );
}