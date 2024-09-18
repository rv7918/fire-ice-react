const Paginate = (props) => {
  const { page, setPage } = props;

  return (
    <>
      <button
        className="btn btn-secondary paginate-btn"
        onClick={() => setPage(() => 1)}
        disabled={page === 1}
        data-testid="first-btn"
      >
        First
      </button>
      <button
        className="btn btn-secondary paginate-btn"
        onClick={() => setPage((prev) => prev - 1)}
        disabled={page === 1}
        data-testid="prev-btn"
      >
        Prev
      </button>
      <button
        className="btn btn-secondary paginate-btn"
        onClick={() => setPage((prev) => prev + 1)}
        disabled={page === 56}
        data-testid="next-btn"
      >
        Next
      </button>
      <button
        className="btn btn-secondary paginate-btn"
        onClick={() => setPage(() => 56)}
        disabled={page === 56}
        data-testid="last-btn"
      >
        Last
      </button>
      Page {page} of 56
    </>
  );
};

export default Paginate;
