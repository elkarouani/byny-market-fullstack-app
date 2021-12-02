import React from 'react';

const CheckoutForm = () => {
    return (
        <form action="#" className="mt-24 px-12 space-y-4">
            <div className="space-y-2">
                <label
                    htmlFor="user_fullname"
                    className="font-medium text-[#122E44]"
                >
                    Full name :
                </label>
                <input
                    id="user_fullname"
                    type="text"
                    className="formInput"
                />
            </div>
            <div className="space-y-2">
                <label
                    htmlFor="credit_card_number"
                    className="font-medium text-[#122E44]"
                >
                    Credit card number :
                </label>
                <input
                    id="credit_card_number"
                    type="text"
                    className="formInput"
                />
            </div>
            <div className="flex space-x-4">
                <div className="w-[95px] space-y-2">
                    <label
                        htmlFor="security_code"
                        className="font-medium text-[#122E44]"
                    >
                        CVC :
                    </label>
                    <input
                        id="security_code"
                        type="text"
                        className={`w-[95px] formInput ${'inputError'}`}
                    />
                </div>
                <div className="w-[138px] space-y-2">
                    <label
                        htmlFor="expiration_date"
                        className="font-medium text-[#122E44]"
                    >
                        Exp. date :
                    </label>
                    <input
                        id="expiration_date"
                        type="text"
                        className="w-[138px] formInput"
                    />
                </div>
            </div>
        </form>
    )
}

export default CheckoutForm;