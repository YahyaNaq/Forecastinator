import { Line } from 'react-chartjs-2';
import {setChartData} from '../Chart/ChartData.js';

function Forecast({ info }) {
	return (
		<div className="text-lg bg-cyan-200 p-4 rounded-lg w-[60vw]">
			<h1>5 day Forecast (every 6 hour)</h1>
			<div className="">
				<Line data={ setChartData(info) }/>
			</div>
		</div>
		);
}

export default Forecast;