import {useState} from "react";
import LifeComponents from "./Life";

const TestArrow = ({firstName, lastName}) => {
	console.log("TestArrow");
	const [count, setCount] = useState(0);

	return (
		<div>
			Privet ot {firstName}
			{count ? <> {count}</> : ""}
			<button
				onClick={() => {
					setCount(count + 1);
				}}
			>
				+
			</button>
			<button
				onClick={() => {
					count && setCount(count - 1);
				}}
			>
				-
			</button>
			<LifeComponents setCount={setCount} count={count} />
		</div>
	);
};

TestArrow.defaultProps = {
	firstName: "XXXX",
	lastName: "YYYY",
};
export default TestArrow;
