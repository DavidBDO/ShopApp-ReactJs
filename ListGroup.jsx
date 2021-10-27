import React, { Component } from 'react';
const ListGroup = (props) =>
{
    const  {items , onItemSelect , textProperty , valuePropery , selectedItem} = props;
    return (
    <ul className="list-proup">
        {items.map(item => <li key={item[valuePropery]} 
        onClick={()=>onItemSelect(item)} 
        className={selectedItem === item ? "list-group-item active" : "list-group-item"} >{item[textProperty]}</li>)}
    </ul>
    );
}
ListGroup.defaultProps ={

    textProperty:'name',
    valuePropery:'_id'
};
export default ListGroup;