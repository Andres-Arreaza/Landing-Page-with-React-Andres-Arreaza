import React from 'react';
import rigoImage from '../../img/rigo-baby.jpg';

export const Card = () => {
  return (
    <div className="col-3 p-1">
      <div className="card text-center border rounded">
        <img src={rigoImage} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <div className="border-top pt-3">
            <a href="#" className="btn btn-primary">Find Out More!</a>
          </div>
        </div>
      </div>
    </div>
  );
};