import Banner from "../src/common/components/Banner";
import Footer from "../src/common/components/Footer";
import Header from "../src/common/components/Header";
import Mariah from "../src/common/components/Mariah";
import Pricy from "../src/common/components/Pricy";

export default function Home(props) {
  return (
    <div>
      <Header />

      <Banner /> 

      <Mariah />

      <Pricy />

      <Footer />
      
    </div>
  )
}
