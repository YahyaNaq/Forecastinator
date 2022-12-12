import YahyaN from '../Assets/YahyaN.png'

function Weather({ info }) {

	return (
		<div className="text-lg bg-cyan-200 p-4 rounded-lg">
			<div>Today at {info.time}</div>
			<div className="flex items-center justify-center">
				<img
				src={`http://openweathermap.org/img/wn/${info.icon}@2x.png`}
				alt="weather-icon"
				className="w-24"
				/>
				<span className="text-4xl"><strong>{info.temp}</strong>°C</span>
			</div>
			<div className="text-2xl capitalize mb-4">{info.desc}</div>
			<div className="flex gap-4">
				<div>
					<h1 className="font-semibold">Feels like</h1>
					<span>{info.feels_like}°C</span>
				</div>
				<div>
					<h1 className="font-semibold">humidity</h1>
					<span>{info.humidity}%</span>
				</div>
				<div>
					<h1 className="font-semibold">Wind speed</h1>
					<span>{info.speed}m/s</span>
				</div>
			</div>
			<div className="flex flex-col justify-center items-center mt-10">
				<p className="text-xl font-semibold">Developed by</p>
				<img src={YahyaN} alt="YahyaN" className="w-36 mt-2"/>
			</div>
		</div>
		);
}


export default Weather;