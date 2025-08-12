import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import type { UserData } from '../types/calendar';

interface DataChartProps {
    data: UserData[];
}

const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip">
                <p className="tooltip-label">{label}</p>
                <p className="tooltip-value">Value: {payload[0].value}</p>
            </div>
        );
    }
    return null;
};

const DataChart = ({ data }: DataChartProps) => {
    const chartData = data.map((item) => {
        const [user, value] = Object.entries(item)[0];
        return {
            user,
            value,
        };
    });

    return (
        <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                        dataKey="user"
                        tick={{ fill: 'var(--text)' }}
                        tickLine={{ stroke: 'var(--text-light)' }}
                    />
                    <YAxis
                        tick={{ fill: 'var(--text)' }}
                        tickLine={{ stroke: 'var(--text-light)' }}
                    />
                    <Tooltip
                        content={<CustomTooltip />}
                        cursor={{ fill: 'rgba(74, 144, 226, 0.1)' }}
                    />
                    <Bar
                        dataKey="value"
                        fill="var(--primary)"
                        radius={[4, 4, 0, 0]}
                        animationBegin={0}
                        animationDuration={1500}
                        animationEasing="ease-out"
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default DataChart;
