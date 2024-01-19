import React, { useState } from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  AppBar, Toolbar, IconButton
} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import equipaData from './equipaData';

const useStyles = makeStyles(theme => ({
  appBar: {
    background: 'linear-gradient(to bottom, #0077be, #00c6ff)',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  root: {
    padding: theme.spacing(3),
    background: 'linear-gradient(to bottom, #0077be, #00c6ff)',
    '& .MuiTableCell-root': {
      fontWeight: 'bold'
    },
    '& .MuiTableCell-head': {
      backgroundColor: theme.palette.warning.main,
      color: theme.palette.common.white,
    },
  },
  table: {
    margin: 'auto',
    minWidth: 650,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
}));

const Dashboard = () => {
  const classes = useStyles();
  const [showTable, setShowTable] = useState(false);

  const toggleTable = () => {
    setShowTable(!showTable);
  }

  return (
    <>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleTable}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      {showTable && (
        <Paper className={classes.root}>
          <Typography variant="h5" component="h3">Dashboard</Typography>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Points</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {equipaData.map((equipa) => (
                <TableRow key={equipa.id}>
                  <TableCell>{equipa.id}</TableCell>
                  <TableCell>{equipa.nome}</TableCell>
                  <TableCell>{equipa.id_temporada}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      )}
    </>
  );
}

export default Dashboard;