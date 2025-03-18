//import { CardBody } from "./components/Card";
import Card /*, { CardBody }*/ from "./components/Card";
// import List from "./components/List";

import { useState } from "react";
import List from "./components/List";
import Button from "./components/Button/index";

// import { useState } from "react";
function App() {
  const [data, setData] = useState(["Coshi", "Pejelagarto", "Cabaio"]);
  // const [isLoading, setIsLoading] = useState(false);
  // const handleClick = () => setIsLoading(!isLoading);

  // const list: string[] = ["Coshi", "Pejelagarto", "Cabaio"];
  // const handleSelect = (elemento: string) => {
  //   console.log("imprimiendo", elemento);
  // };
  // return (
  //   <Card>
  //     <CardBody title="Holas" text="aqui va el texto" />
  //     {list.length !== 0 ? (
  //       <List data={list} onSelect={handleSelect} />
  //     ) : (
  //       "No hay contenido"
  //     )}
  //     <Button isLoading={isLoading} onClick={handleClick}>
  //       Hola mundo
  //     </Button>
  //   </Card>
  // );
  const addMinion = () => setData([...data, "Minion"]);
  const delMinion = () => setData(data.slice(0, -1));

  return (
    <Card>
      <Button isLoading={true} onClick={addMinion}>
        {" "}
        Agregar{" "}
      </Button>
      <Button isLoading={false} onClick={delMinion}>
        {" "}
        Eliminar{" "}
      </Button>
      <List data={data} />
    </Card>
  );
}

export default App;
