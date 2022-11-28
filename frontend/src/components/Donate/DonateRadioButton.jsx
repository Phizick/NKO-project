const DonateRadioButton = ({ value, onChange, donateAmount, checked }) => {
	const handeleRadio = () => {
		onChange(value)
	}
	return (
		<label htmlFor={value} className="donate__form-label-radio">
			<input
				type="radio"
				name="donate"
				id={value}
				className="donate__form-radio"
				onChange={handeleRadio}
				checked={value === +donateAmount}
			/>
			<span className="donate__form-donation">{value + '₽'}</span>
		</label>
	);
}
export default DonateRadioButton;