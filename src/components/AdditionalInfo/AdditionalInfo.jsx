/* eslint-disable react/jsx-filename-extension */
import './AdditionalInfo.scss';

export const AdditionalInfo = ({ screen, capacity, ram }) => {
  return (
    <div className="AdditionalInfo">
      <div className="AdditionalInfo__Feature">
        <p className="AdditionalInfo__FeatureKey">
          Screen
        </p>
        <p className="AdditionalInfo__FeatureValue">
          {screen.split(' ').join('" ')}
        </p>
      </div>
      <div className="AdditionalInfo__Feature">
        <p className="AdditionalInfo__FeatureKey">
          Capacity
        </p>
        <p className="AdditionalInfo__FeatureValue">
          {`${capacity.slice(0, -2)} ${capacity.slice(-2)}`}
        </p>
      </div>
      <div className="AdditionalInfo__Feature">
        <p
          className="AdditionalInfo__FeatureKey
          AdditionalInfo__FeatureKey--uppercase"
        >
          ram
        </p>
        <p className="AdditionalInfo__FeatureValue">
          {`${ram.slice(0, -2)} ${ram.slice(-2)}`}
        </p>
      </div>
    </div>
  );
};
