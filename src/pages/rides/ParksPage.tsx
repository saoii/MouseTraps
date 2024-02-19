import { mockParks } from './MockParks';
import ParkList from './ParkList';

function ParksPage() {
  return (
    <>
      <h1>Parks</h1>
      <ParkList myParks={mockParks} />
    </>
  );
}

export default ParksPage;
