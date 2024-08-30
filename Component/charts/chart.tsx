import React from "react";
import { Card, Title, AreaChart } from "@tremor/react";

const chartdata = [
  {
    date: "Jan 22",
    SemiAnalysis: 2890,
    "The Pragmatic Engineer": 2338,
    Hasan: 1500,  // Votes for Hasan
  },
  {
    date: "Feb 22",
    SemiAnalysis: 2756,
    "The Pragmatic Engineer": 2103,
    Hasan: 1600,  // Votes for Hasan
  },
  {
    date: "Mar 22",
    SemiAnalysis: 3322,
    "The Pragmatic Engineer": 2194,
    Hasan: 1700,  // Votes for Hasan
  },
  {
    date: "Apr 22",
    SemiAnalysis: 3470,
    "The Pragmatic Engineer": 2108,
    Hasan: 1800,  // Votes for Hasan
  },
  {
    date: "May 22",
    SemiAnalysis: 3475,
    "The Pragmatic Engineer": 1812,
    Hasan: 1900,  // Votes for Hasan
  },
  {
    date: "Jun 22",
    SemiAnalysis: 3129,
    "The Pragmatic Engineer": 1726,
    Hasan: 2000,  // Votes for Hasan
  },
];

const dataFormatter = (number: number) => {
  return Intl.NumberFormat("us").format(number).toString() + " votes";
};

export default function AreaCharts() {
  return (
    <Card className='carddark boxshadow'>
      <Title className='carddark'>Votes Scored by Candidates</Title>
      <AreaChart
        style={{ color: "white" }}
        data={chartdata}
        index='date'
        categories={["SemiAnalysis", "The Pragmatic Engineer", "Hasan"]}
        colors={["indigo", "cyan", "red"]}  // Assign red color to Hasan
        valueFormatter={dataFormatter}
      />
    </Card>
  );
}
