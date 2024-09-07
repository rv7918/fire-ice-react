const Paginate = (props) => {
  const { page, setPage } = props;

  return (
    <>
      <button
        className="btn btn-secondary paginate-btn"
        onClick={() => setPage(() => 1)}
        disabled={page === 1}
      >
        First
      </button>
      <button
        className="btn btn-secondary paginate-btn"
        onClick={() => setPage((prev) => prev - 1)}
        disabled={page === 1}
      >
        Prev
      </button>
      <button
        className="btn btn-secondary paginate-btn"
        onClick={() => setPage((prev) => prev + 1)}
        disabled={page === 56}
      >
        Next
      </button>
      <button
        className="btn btn-secondary paginate-btn"
        onClick={() => setPage(() => 56)}
        disabled={page === 56}
      >
        Last
      </button>
      Page {page} of 56
    </>
  );
};

export default Paginate;
