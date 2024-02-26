import { mapIcon } from './helpers';

export const Icon = ({ type }) => {
  return (
    // <div>
    <img src={mapIcon(type)} />
    // </div>
  );
};
