import { CheckoutForm, Header } from 'sections';

export default function Checkout() {
  return (
    <div className="flex flex-col">
      <Header without_catergories_dropdown />
      <CheckoutForm />
      <div className="mt-12 py-5 flex justify-center">
        <button className="CartCallToAction">
          Pay
        </button>
      </div>
    </div>
  )
}
