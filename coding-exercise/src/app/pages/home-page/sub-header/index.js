import React, { useContext } from "react";

import cn from "./index.module.css";
import Dropdown from "../../../../common/components/dropdown";

import {
  sortByPriceOptions,
  filterByStoreOptions,
} from "../../../../common/constants";

import sortByPriceContext from "../../../../context/sort-by-price-context";
import filterByStoreContext from "../../../../context/filter-by-store-context";

function SubHeader() {
  const { sortByPriceValue, setSortByPriceValue } =
    useContext(sortByPriceContext);
  const { filterByStoreValue, setFilterByStoreValue } = useContext(filterByStoreContext);

  return (
    <div className={cn.subHeader}>
      <Dropdown
        dropDownKey="SORT_BY_PRICE"
        dropdownTitle={"SORT BY"}
        dropdownOptions={sortByPriceOptions}
        dropDownField={sortByPriceValue}
        setDropDownField={setSortByPriceValue}
      />
      <Dropdown
        dropDownKey="FILTER_BY_STORE"
        dropdownTitle={"FILTER BY"}
        dropdownOptions={filterByStoreOptions}
        dropDownField={filterByStoreValue}
        setDropDownField={setFilterByStoreValue}
      />
    </div>
  );
}

export default SubHeader;
