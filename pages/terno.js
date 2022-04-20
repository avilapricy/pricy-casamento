import Footer from "../src/common/components/Footer";
import Header from "../src/common/components/Header";
import ItemList from "../src/common/components/ItemList";
import { ContainerList } from "../src/common/components/ItemList/style";
import terno from '../public/ternos.json';
export default function Home(props) {

  return (
    <div>
      <Header />

      <ContainerList>

        {
          terno.map((terno, index) => {
            const { img, info, title } = terno;
            return (
              <ItemList 
                key={index}
                title={title}
                info={info} 
                img={img} 
                
              />
            )
          })
        }

      </ContainerList>


      <Footer />

    </div>
  )
}
