import { Pagination, PaginationItem } from "@mui/material";
import { IFilter } from "../ts";
import styles from "../styles/Paginator.module.css";
export function Paginator({
  filter,
  onPageChange,
}: {
  filter: IFilter;
  onPageChange: (pageNumber: number) => void;
}) {
  return (
    <Pagination
      count={10}
      variant="outlined"
      size="large"
      color="primary"
      page={filter.page}
      onChange={(_, pageNumber) => onPageChange(pageNumber)}
      renderItem={(props) => (
        <PaginationItem className={styles.paginatorItem} {...props} />
      )}
    />
  );
}
