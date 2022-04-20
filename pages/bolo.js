import Footer from "../src/common/components/Footer";
import Header from "../src/common/components/Header";
import ItemList from "../src/common/components/ItemList";
import { ContainerList } from "../src/common/components/ItemList/style";
import bolo from '../public/bolo.json';

export default function Home(props) {

  return (
    <div>
      <Header />

      <ContainerList>

        {
          bolo.map((bolo, index) => {
            const { img, info, title } = bolo;
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
