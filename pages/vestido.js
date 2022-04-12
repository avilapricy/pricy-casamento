import Footer from "../src/common/components/Footer";
import Header from "../src/common/components/Header";
import ItemList from "../src/common/components/ItemList";
import { ContainerList } from "../src/common/components/ItemList/style";
import vestidos from '../public/vestidos.json';

export default function Home(props) {

  return (
    <div>
      <Header />

      <ContainerList>

        {
          vestidos.map((vestido, index) => {
            const { img, info, title } = vestido;
            return (
              <ItemList
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
