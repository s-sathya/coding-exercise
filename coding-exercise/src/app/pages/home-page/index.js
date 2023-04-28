import React, { useEffect, useState } from "react";

import cn from "./index.module.css";
import SubHeader from "./sub-header";
import MainContent from "./main-content";
import useMainContentWidth from "../../../hooks/use-main-content-width";

import ModalOpenContext from "../../../context/modal-open-context";
import SortByPriceContext from "../../../context/sort-by-price-context";
import FilterByStoreContext from "../../../context/filter-by-store-context";
import useFilteredData from "../../../hooks/use-filtered-data";


const url = 'http://localhost:5000/';

function HomePage() {
  const { mainContentWidth } = useMainContentWidth();
  const [data, SetData] = useState([]);
  const [isModalOpen, setModalOpen] = useState();
  const [sortByPriceValue, setSortByPriceValue] = useState(null);
  const [filterByStoreValue, setFilterByStoreValue] = useState(null);

  const filteredData = useFilteredData({ data, sortByPriceValue, filterByStoreValue });


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        SetData(json.data);
        console.log(json);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <ModalOpenContext.Provider value={{ isModalOpen, setModalOpen }}>
      <SortByPriceContext.Provider
        value={{ sortByPriceValue, setSortByPriceValue }}
      >
        <FilterByStoreContext.Provider
          value={{ filterByStoreValue, setFilterByStoreValue }}
        >
          <div className={cn.homePage} style={{ width: mainContentWidth }}>
            <SubHeader />
            <MainContent data={filteredData} />
          </div>
        </FilterByStoreContext.Provider>
      </SortByPriceContext.Provider>
    </ModalOpenContext.Provider>
  );
}

export default HomePage;
