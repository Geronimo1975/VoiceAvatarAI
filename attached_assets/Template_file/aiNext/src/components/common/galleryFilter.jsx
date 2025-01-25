import React, { useEffect } from "react";

const filterData = [
    {
        id: 1,
        filter: "All",
        group: "all"
    },
    {
        id: 2,
        filter: "Brand",
        group: "brand"
    },
    {
        id: 3,
        filter: "Design",
        group: "design"
    },
    {
        id: 4,
        filter: "Motion",
        group: "motion"
    },
    {
        id: 5,
        filter: "Printing",
        group: "printing"
    },
]

const GalleryFilter = ({ setActiveGroup, activeGroup, setFiltered, galleryData }) => {
    useEffect(() => {
        if (activeGroup === 'all') {
            setFiltered(galleryData);
            return;
        }
        const filtered = galleryData.filter(({ group }) =>
            group.includes(activeGroup)
        );

        setFiltered(filtered);
    }, [activeGroup]);

    return (

        <div className="filter-container">
            <ul className="">
                {
                    filterData.map(({ filter, group, id }) => <li key={id} onClick={() => setActiveGroup(group)} className={`item-list ${activeGroup === group ? "on":""} `}>{filter}</li>)
                }

            </ul>
        </div>
    );
};

export default GalleryFilter;
