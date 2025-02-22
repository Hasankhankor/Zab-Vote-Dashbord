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
    title: "Candidate 3 Votes",
    metric: "78 votes",
    progress: 52.5,
    target: "150 votes",
    delta: "52.5%",
    deltaType: "moderateIncrease",
  },
];

export default function KpiCard3() {
  return (
    <Grid numItemsLg={1} className='mt-4 gap-6'>
      {kpiData.map((item) => (
        <Card key={item.title} className='boxshadow carddark'>
          <Flex alignItems='start'>
            <div className='truncate'>
              <Text className='carddark'>{item.title}</Text>
              <Metric className='truncate hoverblue catch-blue'>{item.metric}</Metric>
            </div>
            <BadgeDelta deltaType={item.deltaType} className=''>
              {item.delta}
            </BadgeDelta>
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
