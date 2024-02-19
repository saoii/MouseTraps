import { Park } from './Park';
import { ParkCard } from './ParkCard';

interface ParkListProps {
  myParks: Park[];
}

function ParkList({ myParks }: ParkListProps) {
  const items = myParks.map((park) => (
    <div key={park.id} className="cols-sm">
      <ParkCard park={park}></ParkCard>
    </div>
  ));
  return <div className="row">{items}</div>;
}

export default ParkList;
