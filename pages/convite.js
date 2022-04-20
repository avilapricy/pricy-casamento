import Footer from "../src/common/components/Footer";
import Header from "../src/common/components/Header";
import ItemList from "../src/common/components/ItemList";
import { ContainerList } from "../src/common/components/ItemList/style";
import convite from '../public/convite/convite.json';

export default function Home(props) {

  return (
    <div>
      <Header />

      <ContainerList>

        {
          convite.map((convite, index) => {
            const { img, info, title } = convite;
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
