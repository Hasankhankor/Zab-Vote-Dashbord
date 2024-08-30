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
    title: "Candidate 2 Votes",
    metric: "45 votes",
    progress: 45,
    target: "75 votes",
    delta: "45%",
    deltaType: "increase",
  },
];

export default function KpiCard2() {
  return (
    <Grid numItemsLg={1} className='mt-6 gap-6'>
      {kpiData.map((item) => (
        <Card key={item.title} className='boxshadow carddark'>
          <Flex alignItems='start'>
            <div className='truncate'>
            <Text className='carddark catch-blue'>{item.title}</Text>
              <Metric className='truncate'>{item.metric}</Metric>
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
