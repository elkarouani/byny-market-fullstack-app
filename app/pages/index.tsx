import { Header, NewProducts, PopularProducts, Services } from 'sections';

export default function Home() {
  return (
    <div className="w-max">
      <Header />
      <NewProducts />
      <PopularProducts />
      <Services />
    </div>
  )
}
