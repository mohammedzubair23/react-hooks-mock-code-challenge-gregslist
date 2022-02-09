import React from "react";

function ListingCard({ id, description, image, location, removeListing}) {

  const [isStarred, setIsStarred] = React.useState(false);
  const toggleIsStarred = () => setIsStarred((isStarred) => !isStarred);

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={'description'} />
      </div>
      <div className="details">
        {isStarred ? (
          <button onClick={toggleIsStarred} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={toggleIsStarred} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={() => removeListing(id)} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
