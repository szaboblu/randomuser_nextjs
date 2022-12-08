//custom hook
import { useMemo, useState } from "react";
import { IFilter, IUser } from "../ts";

export function useFilteredUsers(data: IUser[] | undefined = []) {
  const [filter, setFilter] = useState<IFilter>({
    male: true,
    female: true,
    page: 0,
  });

  const filteredData = useMemo(() => filterData(data), [data, filter]);

  function filterData(data: IUser[] | []) {
    let nextPage: IUser[] = [
      ...data.filter((user: IUser) => {
        const gender = user.gender;
        if (
          (filter.female && gender === "female") ||
          (filter.male && gender === "male")
        )
          return user;
      }),
    ];

    return nextPage.slice(filter.page * 10, filter.page * 10 + 10);
  }

  function onFilterChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, checked } = e.target;
    setFilter({ ...filter, [name]: checked });
  }

  function onPageChange(page: number) {
    setFilter({ ...filter, page: page });
  }

  return { filter, onFilterChange, onPageChange, filteredData };
}
