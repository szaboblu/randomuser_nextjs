import { Pagination, PaginationItem } from "@mui/material";
import { IFilter } from "../ts";

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
        <PaginationItem
          sx={{ margin: "1rem", borderColor: "white", color: "white" }}
          {...props}
        />
      )}
    />
  );
}
