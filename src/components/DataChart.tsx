import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import type { UserData } from '../types/calendar';

interface DataChartProps {
    data: UserData[];
}

const DataChart = ({ data }: DataChartProps) => {
    const chartData = data.map((item) => {
        const [user, value] = Object.entries(item)[0];
        return {
            user,
            value,
        };
    });

    return (
        <BarChart width={600} height={300} data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="user" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
    );
};

export default DataChart;
