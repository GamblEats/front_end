import React from 'react';
import {
    ResponsiveContainer,
    BarChart,
    CartesianGrid,
    Tooltip,
    Legend,
    XAxis,
    YAxis,
    Bar,
    Line,
    ComposedChart,
} from 'recharts';
import { OrdersCountContainer } from './styles';

interface Props {
    ordersCount: any;
}

export const CustomizedAxisTick = (props: any) => {
    return (
        <g transform={`translate(${props.x},${props.y})`}>
            {console.log(props)}

            <text x={0} y={0} dy={16} textAnchor="end" fill="#666" transform="rotate(-45)">
                {props.payload.value.slice(5)}
            </text>
        </g>
    );
};

const OrdersCount = ({ ordersCount }: Props) => {
    return (
        <OrdersCountContainer>
            <ResponsiveContainer width="100%" height="100%">
                <ComposedChart
                    width={500}
                    height={250}
                    data={ordersCount}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 40,
                    }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" interval={0} tick={<CustomizedAxisTick />} />
                    <YAxis yAxisId="left" orientation="left" stroke="#E5BF00" interval={0} allowDecimals={false} />
                    <YAxis yAxisId="right" orientation="right" stroke="#143642" />
                    <Tooltip />
                    <Legend wrapperStyle={{ position: 'relative' }} />
                    <Bar yAxisId="left" dataKey="nbOrders" name="Orders count" fill="#E5BF00" />
                    <Line
                        type="monotone"
                        yAxisId="right"
                        dataKey="total"
                        name="Turnover"
                        stroke="#143642"
                        strokeWidth={2}
                        dot={false}
                    />
                </ComposedChart>
            </ResponsiveContainer>
        </OrdersCountContainer>
    );
};

export default OrdersCount;
