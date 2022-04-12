import Header from "../src/common/components/Header";
import ItemList from "../src/common/components/ItemList";

export default function Home(props) {
  return (
    <div>
      <Header />
      <ItemList 
         title="Bolo 1"
      />
      <ItemList 
         title="Bolo 2"
      />
      <ItemList 
         title="Bolo 3"
      />
    </div>
  )
}
