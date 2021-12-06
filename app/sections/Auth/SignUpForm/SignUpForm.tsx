import { MyInput } from "components/UI";

const SignUpForm = () => {
	return (
		<form action="#" className="space-y-8">
			<MyInput
				label="Email address :"
				input_id="email_address"
				label_classes="font-medium text-[#122E44]"
				input_classes={`formInput ${'inputError'}`}
			/>
			<MyInput  
				label="Password :"
				input_id="password"
				label_classes="font-medium text-[#122E44]"
				input_classes="formInput"
			/>
            <MyInput  
				label="Repeat Password :"
				input_id="repeat_password"
				label_classes="font-medium text-[#122E44]"
				input_classes={`formInput ${'inputError'}`}
			/>
		</form>
	);
};

export default SignUpForm;