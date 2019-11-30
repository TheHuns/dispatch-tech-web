import React from "react";
import TechCard from "./TechCard";

const techs = [
  {
    avatar:
      "https://scontent-den4-1.xx.fbcdn.net/v/t1.0-9/18838828_10211848964677011_4722053334556140350_n.jpg?_nc_cat=105&_nc_ohc=Nm--zKjrH8cAQkdDDy1yeVhTZA0YZWp2YuAEncPNYlzBhccYqSfP0tFBQ&_nc_ht=scontent-den4-1.xx&oh=18a5fe71bbe2e53f088699b40fb7a2dc&oe=5E44F626",
    name: "Dehn",
    skills: "Web stuff, Beer"
  },
  {
    avatar:
      "https://scontent-den4-1.xx.fbcdn.net/v/t1.0-9/13119005_10154173695589771_6277874138158315383_n.jpg?_nc_cat=110&_nc_ohc=-jYsJ_9N764AQkRaY02WfDweyGgwYRE2koCzWZvmWc_o0hZ9GFG_A-VpA&_nc_ht=scontent-den4-1.xx&oh=ee44364988e0e579b4551b5549614787&oe=5E76C788",
    name: "lynette",
    skills: "Health Safety, Margaritas"
  },
  {
    avatar:
      "https://scontent-den4-1.xx.fbcdn.net/v/t1.0-1/p160x160/10403281_10102961152358898_1670587492227835592_n.jpg?_nc_cat=102&_nc_ohc=-eqIhnUewSUAQkpQ8LkZjCA73ZdWTfbKa_Ssur_uP4nzR7SYo5deyUrWQ&_nc_ht=scontent-den4-1.xx&oh=029243754020e5ceada3e89d332ab3a9&oe=5E82433F",
    name: "Brody",
    skills: "Eating, Balls"
  }
];

export default function Techs() {
  return (
    <div className="techs-wrapper">
      <h2>List of Techs on Duty</h2>
      <div className="techs-list">
        {techs.map((tech, index) => {
          return <TechCard tech={tech} key={index} />;
        })}
      </div>
    </div>
  );
}
