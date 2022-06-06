import React from 'react';

const Photo = ({
  urls: { regular },
  alt_description,
  likes,
  user: {
    name,
    portfolio_url,
    profile_image: { medium },
  },
}) => {
  return (
    <div className="photo">
      <div className="photo-image">
        <img src={regular} alt={alt_description} />
      </div>
      <div className="photo-info">
        <div className="user-info">
          <h4>{name}</h4>
          <p>{likes}</p>
        </div>
        <a href={portfolio_url} className="user-info-img">
          <img src={medium} alt={name} />
        </a>
      </div>
    </div>
  );
};

export default Photo;
