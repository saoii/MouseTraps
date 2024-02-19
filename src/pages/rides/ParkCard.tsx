import { useState } from 'react';
import LandList from './LandList';
import { Park } from './Park';

interface ParkCardProps {
  park: Park;
}

function ParkCard(props: ParkCardProps) {
  const [parkBeingViewed, setParkBeingViewed] = useState({});

  const handleView = (park: Park) => {
    setParkBeingViewed(park);
  };

  const cancelView = () => {
    setParkBeingViewed({});
  };

  const { park } = props;

  return (
    <div className="row">
      <div className="card">
        <section className="section dark">
          <h5 className="strong">
            <strong>{park.name}</strong>
          </h5>
          <button
            className="bordered"
            onClick={() => {
              handleView(park);
            }}
          >
            <span className="icon-info"></span>
            Wait times
          </button>
          {park === parkBeingViewed ? (
            <LandList parkid={park.id} onCancel={cancelView} />
          ) : (
            <></>
          )}
        </section>
      </div>
    </div>
  );
}

export { ParkCard };
