import BeatLoader from 'react-spinners/BeatLoader';

import './Loader.scss';

export const Loader = ({ isLoading }) => (
  <BeatLoader
    className="BeatLoader"
    color="#313237"
    loading={isLoading}
    speedMultiplier={0.1}
    size={150}
  />
);
