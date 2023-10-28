'use client';

import { Card, CardFooter } from '@ui/components/ui/card';
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';

interface ChartProps {
  data: {
    name: string;
    total: number;
  }[];
}

export const Chart = ({ data }: ChartProps) => {
  return (
    <Card className="py-4">
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data}>
          <XAxis
            dataKey="name"
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `$${value}`}
          />
          <Bar dataKey="total" fill="#6847c2" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
      <CardFooter className="text-xs lg:text-sm justify-center text-muted-foreground py-4">
        Updated every couple of minutes.
      </CardFooter>
    </Card>
  );
};
