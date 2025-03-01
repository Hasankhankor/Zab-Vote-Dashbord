import React from "react";
import { BadgeDelta, Card, Grid, DeltaType, Flex, Metric, ProgressBar, Text } from "@tremor/react";

type Kpi = {
  title: string;
  metric: string;
  progress: number;
  target: string;
  delta: string;
  deltaType: DeltaType;
};

const kpiData: Kpi[] = [
  {
    title: "Candidate 1 Votes",
    metric: "23 votes",
    progress: 23,
    target: "50 votes",
    delta: "23%",
    deltaType: "moderateIncrease",
  },
];

export default function KpiCardGrid() {
  return (
    <Grid numItemsLg={1} className='gap-1'>
      {kpiData.map((item) => (
        <Card key={item.title} className='carddark boxshadow'>
          <Flex alignItems='start'>
            <div className='truncate'>
              <Text className='carddark catch-blue'>{item.title}</Text>
              <Metric className='truncate catch-blue hoverblue'>{item.metric}</Metric>
            </div>
            <BadgeDelta deltaType={item.deltaType}>{item.delta}</BadgeDelta>
          </Flex>
          <Flex className='mt-4 space-x-2'>
            <Text className='truncate'>{`${item.progress}% (${item.metric})`}</Text>
            <Text>{item.target}</Text>
          </Flex>
          <ProgressBar value={item.progress} className='mt-2' />
        </Card>
      ))}
    </Grid>
  );
}
