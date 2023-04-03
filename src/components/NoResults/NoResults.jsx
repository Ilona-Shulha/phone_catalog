import './NoResults.scss';

export const NoResults = ({ category }) => (
  <>
    <p className="NoResults">
      {`${category} not found`}
    </p>
  </>
);
