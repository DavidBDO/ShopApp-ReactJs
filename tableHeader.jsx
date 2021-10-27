import React, { Component } from 'react';
class TableHeader extends Component { 
    raisSort = path => 
    {
        var newColumn = {...this.props.sortColumn};
        if(newColumn.path === path)
        {
        newColumn.order === "asc" ? newColumn.order = "desc": newColumn.order = "asc";
        }
        else{
        newColumn.path = path;
        newColumn.order = "asc";
        }
        this.props.onSort(newColumn);

    }
    raisSortIcon = (col) =>
    {
        if(col.path !== this.props.sortColumn.path) return null;
        if(this.props.sortColumn.order === "asc") return <i className="fa fa-sort-asc"></i>
        return <i className="fa fa-sort-desc"></i>

    }
    render() { 
        return ( 
            <thead>
                <tr>
                    {this.props.columns.map(col => (
                        <th key={col.label || col.key} onClick={()=>this.raisSort(col.path)}>{col.label}{this.raisSortIcon(col)}</th>
                    ))}
                </tr>
            </thead>
         );
    }
}
 
export default TableHeader;