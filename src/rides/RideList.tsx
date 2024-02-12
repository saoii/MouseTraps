import { Ride } from './Ride';
import { RideCard } from './RideCard';

interface RideListProps {
  rides: Ride[];
}

function RideList({ rides }: RideListProps) {
  let elementVariable;

  const items = rides.map((ride) => (
    <div key={ride.id} className="cols-sm">
      <h1>{ride.name}</h1>
      <RideCard ride={ride}></RideCard>
    </div>
  ));

  return (
    <>
      <div className="row">{items}</div>
    </>
  );
}

export default RideList;
