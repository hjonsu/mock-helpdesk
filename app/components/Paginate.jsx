const Pagination = ({ items, pageSize, currentPage, onPageChange }) => {
  const pagesCount = Math.ceil(items / pageSize);

  if (pagesCount === 1) return null;
  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);

  return (
    <div>
      <ul className="flex justify-center items-center list-none gap-0.5 mt-2">
        {pages.map((page) => (
          <li
            onClick={() => onPageChange(page)}
            key={page}
            className={
              page === currentPage
                ? `flex justify-center items-center border-2 w-8 rounded cursor-pointer bg-primary border-slate-950 text-white`
                : `flex justify-center items-center w-8 border-2 border-slate-500 rounded cursor-pointer text-black`
            }
          >
            <a className="cursor-pointer">{page}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
