import React from "react";
import photo from"../assets/zineb.jpg";

function Picture() {
  return (
    <div className="text-center mb-4">
      <img
        src={photo} // Remplacez par le chemin de votre propre photo de profil
        alt="example"
        className="rounded-circle profile-img"
      />
    </div>
  );
}

export default Picture;
