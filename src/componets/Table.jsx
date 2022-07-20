import React from "react";
import Delete from "./Delete";

const Table = ({id, data}) => {
    const {name, description, structure, dataTable} = data

    return(
        <div id={id} className="table-wrap">
            <h2>{name}</h2>
            <p>{description}</p>
            <div className="table">
                <div className="table-head">
                    {structure.map(item => <div 
                    style={{
                        width: `${100 / structure.length}%`
                    }}
                    key={item.id} 
                    className="table-head__col">{item.title}</div>)}
                </div>
                <div className="table-body">
                    {dataTable.map(item =>  <div 
                    key={item.id} 
                    className="table-body__row">
                        {item.data.map((el, index) => {
                            return (<div 
                                style={{
                                   width: `${100 / item.data.length}%`
                               }}
                               key={index}
                               className="table-body__col">{el}</div>)
                        })}
                       <Delete id={item.id}/>
                    </div>)}
                </div>
            </div>
        </div>
    )
}

export default Table