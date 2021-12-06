import { MyInput } from "components/UI";

const CheckoutForm = () => {
	return (
		<form action="#" className="mt-24 px-12 space-y-4">
			<MyInput
				label="Full Name :"
				input_id="user_fullname"
				label_classes="font-medium text-[#122E44]"
				input_classes="formInput"
			/>
			<MyInput
				label="Credit card number :"
				input_id="credit_card_number"
				label_classes="font-medium text-[#122E44]"
				input_classes="formInput"
			/>
			<div className="flex space-x-4">
				<div className="w-[95px]">
					<MyInput
						label="CVC :"
						input_id="security_code"
						label_classes="font-medium text-[#122E44]"
						input_classes={`w-[95px] formInput ${'inputError'}`}
					/>
				</div>
				<div className="w-[138px]">
					<MyInput
						label="Exp. date :"
						input_id="expiration_date"
						label_classes="font-medium text-[#122E44]"
						input_classes="w-[138px] formInput"
					/>
				</div>
			</div>
		</form>
	)
}

export default CheckoutForm;