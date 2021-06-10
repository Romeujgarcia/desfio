import React from "react";
import "./Posts.css";

const Posts = ({ itens, loading }) => {
  

  

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <p className=" lista-do-itens">
      {itens.map((itens) => (
         <div key={itens.id} className="item">
          <img className="images" src={itens.photo_url} />
          <p>{itens.name}</p>
          <p>{itens.email}</p>
          <p>{itens.phone}</p>
          <p>{" R$ " + itens.amount}</p>
        </div>
      ))}
    </p>
  );
};

export default Posts;
