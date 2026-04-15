"use client";
import { createContext, useState } from "react";
import allData from "../../public/data.json"

export const DataContext = createContext()

const DataProvider = ({ children }) => {

    const [list, setList] = useState([]);

    const handleList = (id, type) => {
        const listData = allData.find(call => call.id === +id);
        setList(oldData => [...oldData, { ...listData, type }]);
    }

    const data = {
        list,
        handleList
    }

    return (
        <DataContext.Provider value={data}>{children}</DataContext.Provider>
    );
};

export default DataProvider;