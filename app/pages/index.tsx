import { Header, NewProducts, PopularProducts } from 'sections';

export default function Home() {
  return (
    <div className="w-max">
      <Header />
      <NewProducts />
      <PopularProducts />
    </div>
  )
}
