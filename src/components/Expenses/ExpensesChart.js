import React from "react";

import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
    const chartDataPoints = [   
        {
            label: "January",
            value: 0,
        },
        {
            label: "February",
            value: 0,
        },
        {
            label: "Mars",
            value: 0,
        },
        {
            label: "April",
            value: 0,
        },
        {
            label: "May",
            value: 0,
        },
        {
            label: "Jun",
            value: 0,
        },
        {
            label: "July",
            value: 0,
        },
        {
            label: "Agustus",
            value: 0,
        },
        {
            label: "September",
            value: 0,
        },
        {
            label: "Oktober",
            value: 0,
        },
        {
            label: "November",
            value: 0,
        },
        {
            label: "December",
            value: 0,
        },
    ];

    props.expenses.forEach(expense => {
        let month = expense.date.getMonth();
        chartDataPoints[month].value += expense.amount
    });
    
    return <Chart dataPoints={chartDataPoints}/>
}

export default ExpensesChart;