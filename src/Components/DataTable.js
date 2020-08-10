import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";
import theme from "../Styles/Theme";

function createData(
  id,
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
  total_hospitalized,
  gap_graph,
) {
  return {
    id,
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
    total_hospitalized,
    gap_graph,
  };
}

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
  const { classes, order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <CustomRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            className={classes.thead}
            align="left"
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
  const selected = props.selected;
  const setSelected = props.setSelected;
  const data = props.data;

  const rows = data.map((datas) =>
    createData(
      datas.id,
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
      datas.total_hospitalized,
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

  const isSelected = (state) => selected.indexOf(state) !== -1;

  return (
    <DataTableContainer>
      <Title>CONFIRMED CASES BY STATE</Title>
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <TableContainer className={classes.container}>
            <Table
              className={classes.table}
              aria-labelledby="tableTitle"
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
                {stableSort(rows, getComparator(order, orderBy)).map((row, index) => {
                  const isItemSelected = isSelected(row.id);
                  const labelId = `enhanced-table-checkbox-${index}`;
                  return (
                    <TableRow
                      className={classes.tableRow}
                      hover
                      onClick={() => props.handleClick(row.id)}
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
                      <TableCell className={classes.tableCell} align="left" padding="none">
                        {Number(row.total_hospitalized).toLocaleString()}
                      </TableCell>
                      <TableCell className={classes.tableCell} align="left" padding="none">
                        <div dangerouslySetInnerHTML={{ __html: row.gap_graph }} />
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </div>
    </DataTableContainer>
  );
}

const DataTableContainer = styled.div`
  width: 100%;
  height: 110%;
  padding: 0 4%;
  background-color: ${theme.midgrey};
  div {
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const Title = styled.h1`
  padding-top: 50px;
  margin-bottom: 50px;
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
