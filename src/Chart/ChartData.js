import { Chart, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement } from 'chart.js';
// import {callChartData} from './toChartData.js';
Chart.register (
	Title, Tooltip, LineElement, Legend,
	CategoryScale, LinearScale, PointElement
);


export const setChartData = (info) => {
	
	const labels = info.map(item => item.time.slice(0,5));
	const temp = info.map(item => item.temp);
	const humidity = info.map(item => item.humidity);
	const data = {
	  labels: labels,
	  datasets: [{
	    label: 'Temperature',
	    data: temp,
	    backgroundColor: 'rgb(185 28 28)',
	    fill: true,
	    borderColor: 'rgb(185 28 28)',
	    tension: 0.1,
	    xAxisID: 'timeAxis',
      yAxisID: 'tempAxis'
  	},
  	{
  		label: 'Humidity',
	    data: humidity,
	    backgroundColor: 'rgb(245 158 11)',
	    fill: true,
	    borderColor: 'rgb(245 158 11)',
	    tension: 0.1,
	    xAxisID: 'timeAxis',
      yAxisID: 'tempAxis'
  	}]
	};
	return data;
}