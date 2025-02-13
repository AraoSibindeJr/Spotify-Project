import React from "react";
import ItemList from "./itemList";

const Main = () => {
  return (
    <div className="main">
      {/* Item List de Artistas */}
      <ItemList title="Artistas" items={5} />

      {/* Item List de Artistas */}
      <ItemList title="Musicas" items={10} />
    </div>
  );
};

export default Main;
