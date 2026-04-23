import { useRouteError } from 'react-router-dom';

export const ErrorPage = () => {
  const error: any = useRouteError();

  return (
    <div className="d-flex flex-column align-items-center mt-5">
      <h2>Woops! An error occured :(</h2>
      <p>We're so sorry!</p>
      <small className="text-secondary">
        {error.status}: {error.data}
      </small>
    </div>
  );
};
