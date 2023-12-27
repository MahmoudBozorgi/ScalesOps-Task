import Spinner from "react-bootstrap/Spinner";

function Loading() {
  return (
    <div className="d-flex justify-content-center">
      <Spinner
        animation="border"
        role="status"
        variant="secondary"
        className="my-3"
      >
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
}

export default Loading;
