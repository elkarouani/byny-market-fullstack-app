import PropTypes from 'prop-types';

const MyInput = (props) => {
	return (
		<div className="flex flex-col space-y-2">
			<label
				htmlFor={props.input_id}
				className={props.label_classes}
			>
				{props.label}
			</label>
			<input
				id={props.input_id}
				type={props.input_type}
				className={props.input_classes}
			/>
		</div>
	)
}

MyInput.propTypes = {
	label: PropTypes.string,
	input_id: PropTypes.string,
	input_type: PropTypes.string,
	label_classes: PropTypes.string,
	input_classes: PropTypes.string,
}

MyInput.defaultProps = {
	label: "New input",
	input_id: "new_input",
	input_type: "text",
	label_classes: "",
	input_classes: ""
}

export default MyInput