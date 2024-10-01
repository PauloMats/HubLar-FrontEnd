interface CardServiceProps {
    title: string;
    description: string;
    imageUrl: string;
  }
  
  const CardService: React.FC<CardServiceProps> = ({ title, description, imageUrl }) => {
    return (
      <div className="card" style={{ width: '18rem' }}>
        <img src={imageUrl} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
    );
  };
  
  export default CardService;
  