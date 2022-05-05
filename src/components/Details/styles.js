import { makeStyles } from '@material-ui/core';

export default makeStyles(() => ({
    income: {
        borderBottom: '10px solid rgba(0,255,0,0.5)'
    },
    expense: {
        borderBottom: '10px solid rgba(255,0,0,0.5)'
    }
}));

// npm i react@16.12.0 react-dom@16.12.0 @material-ui/core @material-ui/icons @material-ui/lab @speechly/react-client @speechly/react-ui chart.js react-chartjs-2 uuid 