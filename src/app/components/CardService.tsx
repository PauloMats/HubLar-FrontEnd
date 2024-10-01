import Image from "next/image";
import React from "react";
interface CardServiceProps {
    title: string;
    description: string;
    imageUrl: string;
  }
  
  const CardService: React.FC<CardServiceProps> = ({ title, description, imageUrl }) => {
    return (
      <div className="card" style={{ width: '18rem' }}>
        <Image src={imageUrl} alt="HubLar" width={100} height={100} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
    );
  };
  
  export default CardService;
  