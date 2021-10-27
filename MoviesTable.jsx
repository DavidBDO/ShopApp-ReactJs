import React , {Component} from 'react'; 
import TableHeader from './tableHeader';  
import Like from "./like";
import TableBody from './tableBody';
import {Link} from 'react-router-dom';

class MoviesTable extends Component {
  columns = [
    {path:"title" ,label:"Title", content: movie => <Link to={`/movies/${movie._id}`}>{movie.title}</Link>} ,
    {path:"genre.name" ,label:"Genre"},
    {path:"numberInStock" ,label:"Stock"},
    {path:"dailyRentalRate" ,label:"Rate"},
    {key:"Like", content: movie => <Like liked={movie.liked} onClick={() => this.props.onLike(movie)}/>},
    {key:"Delete", content: movie => <button onClick={() => this.props.onDelete(movie)} className="btn btn-danger btn-sm">Delete</button>}
  ];
  render() {
    const { movies, onSort, sortColumn } = this.props;
    return ( 
      <table className="table">

          <TableHeader
           columns={this.columns}
           sortColumn = {sortColumn}
           onSort={onSort}/>

          <TableBody 
           data={movies} 
           columns={this.columns}/>
        </table>
     );
  }
}
export default MoviesTable;