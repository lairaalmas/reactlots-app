import { useRouteError } from 'react-router-dom';

export const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="d-flex flex-column align-items-center">
      <h2>Woops! An error occured :(</h2>
      <p>We're so sorry!</p>
    </div>
  );
};
