import { 
  Header, 
  NewProducts, 
  PopularProducts, 
  Services,
  Footer 
} from 'sections';

export default function Home() {
  return (
    <div className="w-max">
      <Header />
      <NewProducts />
      <PopularProducts />
      <Services />
      <Footer />
    </div>
  )
}
