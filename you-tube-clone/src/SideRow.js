import React from 'react';
import "./SideRow.css";

function SideRow({title,Icon,selected}) {
    return (
        <div className={`side__row ${selected && "selected"}`}>
        
            <Icon className="sidebarrow__icon"/>
            <h2 className="sidebarrow__title">{title}</h2>
        </div>
    )
}

export default SideRow
