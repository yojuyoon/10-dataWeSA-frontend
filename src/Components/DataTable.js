import React, { useState, Children } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
// import clsx from "clsx";
import { lighten, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
// import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
// import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";
// import IconButton from "@material-ui/core/IconButton";
// import Tooltip from "@material-ui/core/Tooltip";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Switch from "@material-ui/core/Switch";
// import DeleteIcon from "@material-ui/icons/Delete";
// import FilterListIcon from "@material-ui/icons/FilterList";
// import { red } from "@material-ui/core/colors";

function createData(
  name,
  trend_graph,
  trend_color,
  new_cases,
  new_cases_per_capita,
  confirmed_cases,
  confirmed_per_capita,
  confirmed_deaths,
  positive_tests,
  total_tests,
  gap_graph,
) {
  return {
    name,
    trend_graph,
    trend_color,
    new_cases,
    new_cases_per_capita,
    confirmed_cases,
    confirmed_per_capita,
    confirmed_deaths,
    positive_tests,
    total_tests,
    gap_graph,
  };
}

// const rows = [
//   createData("Cupcake", 305, 3.7, 67, 4.3, 1, 1, 1, 1, 1, 1),
//   createData("Donut", 452, 25.0, 51, 4.9, 1, 1, 1, 1, 1, 1),
//   createData("Eclair", 262, 16.0, 24, 6.0, 1, 1, 1, 1, 1, 1),
//   createData("Frozen yoghurt", 159, 6.0, 24, 4.0, 1, 1, 1, 1, 1, 1),
//   createData("Gingerbread", 356, 16.0, 49, 3.9, 1, 1, 1, 1, 1, 1),
//   createData("Honeycomb", 408, 3.2, 87, 6.5, 1, 1, 1, 1, 1, 1),
//   createData("Ice cream sandwich", 237, 9.0, 37, 4.3, 1, 1, 1, 1, 1, 1),
//   createData("Jelly Bean", 375, 0.0, 94, 0.0, 1, 1, 1, 1, 1, 1),
//   createData("KitKat", 518, 26.0, 65, 7.0, 1, 1, 1, 1, 1, 1),
//   createData("Lollipop", 392, 0.2, 98, 0.0, 1, 1, 1, 1, 1, 1),
//   createData("Marshmallow", 318, 0, 81, 2.0, 1, 1, 1, 1, 1, 1),
//   createData("Nougat", 360, 19.0, 9, 37.0, 1, 1, 1, 1, 1, 1),
//   createData("Oreo", 437, 18.0, 63, 4.0, 1, 1, 1, 1, 1, 1),
//   createData("A", 437, 18.0, 63, 4.0, 1, 1, 1, 1, 1, 1),
//   createData("B", 437, 18.0, 63, 4.0, 1, 1, 1, 1, 1, 1),
//   createData("C", 437, 18.0, 63, 4.0, 1, 1, 1, 1, 1, 1),
//   createData("D", 437, 18.0, 63, 4.0, 1, 1, 1, 1, 1, 1),
//   createData("E", 437, 18.0, 63, 4.0, 1, 1, 1, 1, 1, 1),
//   createData("F", 437, 18.0, 63, 4.0, 1, 1, 1, 1, 1, 1),
//   createData("G", 437, 18.0, 63, 4.0, 1, 1, 1, 1, 1, 1),
// ];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  { id: "name", numeric: false, disablePadding: true, label: "STATE" },
  { id: "trend_graph", numeric: true, disablePadding: true, label: "14-DAY TREND OF NEW CASES" },
  { id: "new_cases", numeric: true, disablePadding: true, label: "14-DAY NEW CASES" },
  {
    id: "new_cases_per_capita",
    numeric: true,
    disablePadding: true,
    label: "14-DAY NEW CASES PER 100,000",
  },
  { id: "confirmed_cases", numeric: true, disablePadding: true, label: "CONFIRMED CASES" },
  { id: "confirmed_per_capita", numeric: true, disablePadding: true, label: "CASES PER 100,000" },
  { id: "confirmed_deaths", numeric: true, disablePadding: true, label: "CONFIRMED DEATHS" },
  { id: "positive_tests", numeric: true, disablePadding: true, label: "% POSITIVE TESTS" },
  { id: "total_tests", numeric: true, disablePadding: true, label: "TOTAL TESTS" },
  { id: "total_hospitalized", numeric: true, disablePadding: true, label: "TOTAL HOSPITALIZED" },
  { id: "total_vs_new_cases", numeric: true, disablePadding: true, label: "TOTAL VS NEW CASES" },
];

function EnhancedTableHead(props) {
  const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <CustomRow>
        {/* <TableCell className={classes.thead} padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ "aria-label": "select all desserts" }}
          />
        </TableCell> */}
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            className={classes.thead}
            // align={headCell.numeric ? "right" : "left"}
            align="left"
            // padding={headCell.disablePadding ? "none" : "default"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </CustomRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

// const useToolbarStyles = makeStyles((theme) => ({
//   root: {
//     paddingLeft: theme.spacing(2),
//     paddingRight: theme.spacing(1),
//   },
//   highlight:
//     theme.palette.type === "light"
//       ? {
//           color: theme.palette.secondary.main,
//           backgroundColor: lighten(theme.palette.secondary.light, 0.85),
//         }
//       : {
//           color: theme.palette.text.primary,
//           backgroundColor: theme.palette.secondary.dark,
//         },
//   title: {
//     flex: "1 1 100%",
//   },
// }));

// const EnhancedTableToolbar = (props) => {
//   const classes = useToolbarStyles();
//   const { numSelected } = props;

//   return (
//     <Toolbar
//       className={clsx(classes.root, {
//         [classes.highlight]: numSelected > 0,
//       })}
//     >
//       {numSelected > 0 ? (
//         <Typography className={classes.title} color="inherit" variant="subtitle1" component="div">
//           {numSelected} selected
//         </Typography>
//       ) : (
//         <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
//           Nutrition
//         </Typography>
//       )}

//       {numSelected > 0 ? (
//         <Tooltip title="Delete">
//           <IconButton aria-label="delete">
//             <DeleteIcon />
//           </IconButton>
//         </Tooltip>
//       ) : (
//         <Tooltip title="Filter list">
//           <IconButton aria-label="filter list">
//             <FilterListIcon />
//           </IconButton>
//         </Tooltip>
//       )}
//     </Toolbar>
//   );
// };

// EnhancedTableToolbar.propTypes = {
//   numSelected: PropTypes.number.isRequired,
// };

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  paper: {
    width: "100%",
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  container: {
    maxHeight: "95vh",
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1,
  },
  thead: {
    fontFamily: "Pathway Gothic One, sans-serif",
    fontSize: "16px",
    fontWeight: "bold",
    color: "white",
    backgroundColor: "#141B2E",
    padding: "0.5% 0",
    fill: "white",
  },
  tableRow: {
    backgroundColor: "#EFEFEF",
  },
  tableCell: {
    fontFamily: "Palanquin,sans-serif",
  },
}));

export default function DataTable(props) {
  const classes = useStyles();
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("calories");
  const [selected, setSelected] = useState([]);
  // const [page, setPage] = useState(0);
  // const [dense, setDense] = useState(false);
  // const [rowsPerPage, setRowsPerPage] = useState(5);
  let selectedState = props.selectedState;
  const setSelectedState = props.setSelectedState;
  const data = props.data;

  const rows = data.map((datas) =>
    createData(
      datas.name,
      datas.trend_graph,
      datas.trend_color,
      datas.new_cases,
      datas.new_cases_per_capita,
      datas.confirmed_cases,
      datas.confirmed_per_capita,
      datas.confirmed_deaths,
      datas.positive_tests,
      datas.total_tests,
      datas.gap_graph,
    ),
  );

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.state);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, state) => {
    const selectedIndex = selected.indexOf(state);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, state);
      selectedState = selectedState.concat(selected, state);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
      selectedState = selectedState.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
      selectedState = selectedState.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
      selectedState = selectedState.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
    setSelectedState(selectedState);
  };

  // const handleChangePage = (event, newPage) => {
  //   setPage(newPage);
  // };

  // const handleChangeRowsPerPage = (event) => {
  //   setRowsPerPage(parseInt(event.target.value, 10));
  //   setPage(0);
  // };

  // const handleChangeDense = (event) => {
  //   setDense(event.target.checked);
  // };

  const isSelected = (state) => selected.indexOf(state) !== -1;

  // const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <DataTableContainer>
      <Title>CONFIRMED CASES BY STATE</Title>
      <div className={classes.root}>
        <Paper className={classes.paper}>
          {/* <EnhancedTableToolbar numSelected={selected.length} /> */}
          <TableContainer className={classes.container}>
            <Table
              className={classes.table}
              aria-labelledby="tableTitle"
              // size={dense ? "small" : "medium"}
              stickyHeader
              aria-label="sticky table"
            >
              <EnhancedTableHead
                classes={classes}
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={rows.length}
              />
              <TableBody classes={classes}>
                {stableSort(rows, getComparator(order, orderBy))
                  // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    const isItemSelected = isSelected(row.name);
                    const labelId = `enhanced-table-checkbox-${index}`;
                    return (
                      <TableRow
                        className={classes.tableRow}
                        hover
                        onClick={(event) => handleClick(event, row.name)}
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row.state}
                        selected={isItemSelected}
                      >
                        <TableCell className={classes.tableCell} padding="checkbox">
                          <Checkbox
                            checked={isItemSelected}
                            inputProps={{ "aria-labelledby": labelId }}
                          />
                          <StateName>{row.name}</StateName>
                        </TableCell>
                        <CustomCell
                          className={classes.tableCell}
                          align="left"
                          padding="none"
                          component="th"
                          id={labelId}
                          scope="row"
                        >
                          <div
                            style={{ color: row.trend_color }}
                            dangerouslySetInnerHTML={{ __html: row.trend_graph }}
                          />
                        </CustomCell>
                        <TableCell className={classes.tableCell} align="left" padding="none">
                          {Number(row.new_cases).toLocaleString()}
                        </TableCell>
                        <TableCell className={classes.tableCell} align="left" padding="none">
                          {Number(row.new_cases_per_capita).toLocaleString()}
                        </TableCell>
                        <TableCell className={classes.tableCell} align="left" padding="none">
                          {Number(row.confirmed_cases).toLocaleString()}
                        </TableCell>
                        <TableCell className={classes.tableCell} align="left" padding="none">
                          {Number(row.confirmed_per_capita).toLocaleString()}
                        </TableCell>
                        <TableCell className={classes.tableCell} align="left" padding="none">
                          {Number(row.confirmed_deaths).toLocaleString()}
                        </TableCell>
                        <TableCell className={classes.tableCell} align="left" padding="none">
                          {Number(row.positive_tests).toLocaleString()}%
                        </TableCell>
                        <TableCell className={classes.tableCell} align="left" padding="none">
                          {Number(row.total_tests).toLocaleString()}
                        </TableCell>
                        <TableCell
                          className={classes.tableCell}
                          align="left"
                          padding="none"
                        ></TableCell>
                        <TableCell className={classes.tableCell} align="left" padding="none">
                          <div dangerouslySetInnerHTML={{ __html: row.gap_graph }} />
                        </TableCell>
                      </TableRow>
                    );
                  })}
                {/* {emptyRows > 0 && (
                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )} */}
              </TableBody>
            </Table>
          </TableContainer>
          {/* <TablePagination
          // rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          // rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          // onChangeRowsPerPage={handleChangeRowsPerPage}
        /> */}
        </Paper>
        {/* <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      /> */}
      </div>
    </DataTableContainer>
  );
}

const DataTableContainer = styled.div`
  margin: 0 5%;

  div {
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const Title = styled.h1`
  margin: 50px 0;
  text-align: center;
  font-size: 40px;
  font-family: ${(props) => props.theme.fontTitle};
`;

const CustomRow = styled(TableRow)`
  th,
  td {
    &:first-child {
      width: 20%;
      padding-left: 5%;
    }

    &:nth-child(2) {
      width: 15%;
    }
  }
`;

const CustomCell = styled(TableCell)`
  span {
    margin-left: 5%;
  }
`;

const StateName = styled.span`
  padding-left: 7%;
`;
