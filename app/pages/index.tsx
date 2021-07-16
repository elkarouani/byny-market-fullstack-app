import { Header } from 'sections';
import { ProductCard } from 'components';

export default function Home() {
  return (
    <div>
      <Header />
      <div className="flex space-x-4">
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  )
}
