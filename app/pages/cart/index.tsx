import { Header, CartList } from 'sections';

export default function List() {
  return (
    <div className="flex flex-col">
      <Header without_catergories_dropdown />
      <CartList />
      <div className="py-5 flex justify-center">
        <button className="CartCallToAction">
          Checkout
        </button>
      </div>
    </div>
  )
}
