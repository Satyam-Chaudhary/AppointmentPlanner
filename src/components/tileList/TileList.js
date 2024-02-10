import React from "react";

const style = {
  border: "1px solid black",
  padding: "10px",
  margin: "5px",
  width: "180px",
  borderRadius: "5px",
};



export const TileList = ({ property }) => {
  return (
    <div>
      {property.map((element, index) => {
        return (
          <div key={index}  style={style}>
            {Object.keys(element).map((key, index) => {
              return <p key={index}>{element[key]}</p>;
            })}
          </div>
        );
      })}
    </div>
  );
};
