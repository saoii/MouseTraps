import { Ride } from './Ride';

function formatDescription(description: string): string {
  return description.substring(0, 60) + '...';
}

interface RideCardProps {
  ride: Ride;
}

function RideCard(props: RideCardProps) {
  const { ride } = props;
  return (
    <div className="row">
      <div className="card">
        <section className="section dark">
          <h5 className="strong">
            <strong>{ride.name}</strong>
          </h5>
          <p>Is open: {ride.is_open}</p>
          <p>{ride.wait_time}</p>
          <p>{ride.id}</p>
          <p>{ride.imageUrl}</p>
        </section>
      </div>
    </div>
  );
}

export { RideCard };
