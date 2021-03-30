import React from 'react'
import Data from "./data.json";
import Search from './Search';
import JobCard from './JobCard';


const Main = () => {
    const jobList = Data;



    function getLanguages(lang) {
        return lang;
    }

    return (
        <div className="main-container">
            <Search getLanguages={getLanguages} />
            {jobList.map((card, index) => (
                <JobCard key={index} item={card} />
            ))}
        </div>
    );
};

export default Main;
