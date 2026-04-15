"use client";
import { createContext, useState } from "react";
import allData from "../../public/data.json"
import { toast } from 'react-toastify';

export const DataContext = createContext()

const DataProvider = ({ children }) => {

    const [list, setList] = useState([]);
    const [sort, setSort] = useState(false);
    const [sortList, setSortList] = useState([]);

    const handleList = (id, type) => {
        const listData = allData.find(call => call.id === +id);
        setList(oldData => [...oldData, { ...listData, type }]);
        toast.success(type.toUpperCase() + " with " + listData.name);
    }

    const handleSort = (type) => {
        const sortData = list.filter(item => item.type === type);
        setSort(true);
        setSortList(sortData);
    }

    const data = {
        list,
        handleList,
        sort,
        sortList,
        handleSort
    }

    return (
        <DataContext.Provider value={data}>{children}</DataContext.Provider>
    );
};

export default DataProvider;