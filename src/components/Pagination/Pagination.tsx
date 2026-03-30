import type { ComponentType } from "react";
import ReactPaginateModule from "react-paginate";
import type { ReactPaginateProps } from "react-paginate";
import css from './Pagination.module.css';

type ModuleWithDefault<T> = { default: T };

const ReactPaginate = (
  ReactPaginateModule as unknown as ModuleWithDefault<ComponentType<ReactPaginateProps>>
).default;

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onChange: (selectedItem: { selected: number }) => void;
}

const Pagination = ({ totalPages, currentPage, onChange }: PaginationProps) => {
  return (
    <ReactPaginate
      previousLabel={'<'}
      nextLabel={'>'}
      pageCount={totalPages}
      onPageChange={onChange}
      containerClassName={css.pagination}
      activeClassName={css.active}
      forcePage={currentPage - 1}
    />
  );
};

export default Pagination;