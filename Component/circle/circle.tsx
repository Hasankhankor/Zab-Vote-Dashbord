import React from "react";
import { Card, Title, DonutChart } from "@tremor/react";

const votingData = [
  {
    status: "Voted",
    count: 75,
  },
  {
    status: "Not Voted",
    count: 25,
  },
];

const valueFormatter = (number: number) => `${Intl.NumberFormat("us").format(number).toString()} students`;

export default function Circle() {
  return (
    <Card className='max-w-lg outline-none mt-4 carddark boxshadow'>
      <Title className='carddark'>Student Voting Status</Title>
      <DonutChart
        className='mt-6 outline-none circlech carddark'
        data={votingData}
        category='count'
        index='status'
        valueFormatter={valueFormatter}
        colors={[ "red" ,"green"]}
      />

      <ul className='flex justify-between items-center mt-2 px-4 flex-wrap flex-col'>
        {votingData.map(status => (
          <li key={status.status} className='marks hoverblue'>
            {status.status}: {status.count} students
          </li>
        ))}
      </ul>
    </Card>
  );
}
