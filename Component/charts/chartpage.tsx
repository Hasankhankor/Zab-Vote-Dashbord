import React from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "Total Votes",
    candidate1: 2000,
    candidate2: 1500,
    candidate3: 1800,
  },
];

export default function Chartpage() {
  return (
    <ResponsiveContainer width='100%' height={300}>
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='name' />
        <YAxis />
        <Tooltip />
        <Line type='monotone' dataKey='candidate1' stroke='#8884d8' strokeWidth={2} />
        <Line type='monotone' dataKey='candidate2' stroke='#82ca9d' strokeWidth={2} />
        <Line type='monotone' dataKey='candidate3' stroke='#ffc658' strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  );
}
