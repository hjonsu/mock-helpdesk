const Pagination = ({ items, pageSize, currentPage, onPageChange }) => {
  const pagesCount = Math.ceil(items / pageSize); // 100/10

  if (pagesCount === 1) return null;
  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);

  return (
    <div>
      <ul className="flex justify-center items-center list-none">
        {pages.map((page) => (
          <li
            key={page}
            className={
              page === currentPage
                ? `flex justify-center items-center border-2 w-8 rounded cursor-pointer bg-primary border-slate-950 text-white`
                : `flex justify-center items-center w-8 border-2 border-slate-500 rounded cursor-pointer text-black`
            }
          >
            <a className="cursor-pointer" onClick={() => onPageChange(page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
