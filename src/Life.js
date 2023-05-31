function LifeComponents(props) {
	console.log("LifeComponents");
	return (
		<div>
			LiveComponents
			<button
				onClick={() => {
					props.setCount(props.count + 1);
				}}
			>
				+
			</button>
		</div>
	);
}

export default LifeComponents;
