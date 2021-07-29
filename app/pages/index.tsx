import { 
  Header, 
  NewProducts, 
  PopularProducts, 
  Services,
  Footer 
} from 'sections';

export default function Home() {
  return (
    <div>
      <Header/>
      <NewProducts />
      <PopularProducts />
      <Services />
      <Footer />
    </div>
  )
}
