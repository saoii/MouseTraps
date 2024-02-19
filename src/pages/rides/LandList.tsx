import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';

import RideList from './RideList';
import { LandRoot } from './LandRoot';
import { waitTimeAPI } from './waitTimeAPI';
import { Land } from './Land';

interface LandListProps {
  parkid: number | any;
  onCancel: () => void;
}

function LandList({ parkid, onCancel }: LandListProps) {
  const [lands, setLands] = useState<Land[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);

  // Approach 2: using async/await
  useEffect(() => {
    async function loadWaitTimes() {
      setLoading(true);
      try {
        const data = await waitTimeAPI.get(parkid);
        setError('');
        setLands(data.lands);
      } catch (e) {
        if (e instanceof Error) {
          setError(e.message);
        }
      } finally {
        setLoading(false);
      }
    }
    loadWaitTimes();
  }, []);

  const items = lands.map((land) => (
    <div key={land.id} className="cols-sm">
      <h5>{land.name}</h5>
      <RideList rides={land.rides}></RideList>
    </div>
  ));

  return (
    <Fragment>
      <div className="row">{items}</div>
      {loading && (
        <div className="center-page">
          <span className="spinner primary"></span>
          <p>Loading...</p>
        </div>
      )}
      <button type="button" className="bordered medium" onClick={onCancel}>
        Close
      </button>
    </Fragment>
  );
}
export default LandList;
