import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import TimeSelector from "./TimeSelector";
import Map from "./Map";
import "./body.scss";

function Body() {
	return (
		<Tabs
			defaultActiveKey="now"
			id="fill-tab-example"
			className="mb-3"
			fill
		>
			<Tab eventKey="now" title="Now">
				<TimeSelector id="now" /> <Map />
			</Tab>
			<Tab eventKey="forecast" title="Forecast">
				<TimeSelector id="forecast" /> <Map />
			</Tab>
		</Tabs>
	);
}

export default Body;
