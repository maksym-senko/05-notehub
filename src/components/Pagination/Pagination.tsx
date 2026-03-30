import ReactPaginate from "react-paginate";
import css from "./Pagination.module.css";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onChange: (selectedItem: { selected: number }) => void;
}

const Pagination = ({ totalPages, currentPage, onChange }: PaginationProps) => {
  const PaginateComponent =
    (ReactPaginate as unknown as { default: typeof ReactPaginate }).default ||
    ReactPaginate;
  return (
    <PaginateComponent
      previousLabel={"<"}
      nextLabel={">"}
      breakLabel={"..."}
      pageCount={totalPages}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      onPageChange={onChange}
      containerClassName={css.pagination}
      activeClassName={css.active}
      forcePage={currentPage - 1}
    />
  );
};

export default Pagination;
