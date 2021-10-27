import React, { Component } from "react";
import Pagination from "./common/pagination";
import { getMovies } from "../services/fakeMovieService";
import { paginate } from '../utils/paginate';
import ListGroup from './common/ListGroup';
import { getGenres } from './../services/fakeGenreService';
import MoviesTable from './common/MoviesTable';
import _ from "lodash";
class Movies extends Component {
  state = {
    movies: [],
    genres: [],   
    pageSize : 4,
    currentPage : 1,
    sortColumn:{path:"title", order:"asc"},
  };
  componentDidMount() {
    const genres = [{_id:'', name:'all Genres'}, ...getGenres()];
    this.setState({movies : getMovies() , genres : genres});
  }
  handleSort = newColumn => 
  {
    this.setState({sortColumn:newColumn});
  }
  handleDelete = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies });
  };

  handleLike = movie => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };
  handlePagechange = page =>  {
    this.setState({currentPage : page});
  }
  handleGenreSelect = genre => {
    this.setState({selectedGenre: genre , currentPage: 1});
  }
  render() {
    const { currentPage, pageSize, selectedGenre, movies: allMovies, sortColumn } = this.state;
    const { length: count } = allMovies;
    if (count === 0) return <p>There are no movies in the database.</p>;

    const filterMovies = selectedGenre && selectedGenre._id ? allMovies.filter(m=> m.genre._id === selectedGenre._id) : allMovies;
    const sortedMovies = _.orderBy(filterMovies,[sortColumn.path],[sortColumn.order]);
    const movies = paginate(sortedMovies, currentPage, pageSize);

    return (
      <div className="row">

        <div className="col-3"> 
        <ListGroup items={this.state.genres} onItemSelect={this.handleGenreSelect} selectedItem = {this.state.selectedGenre} />
        </div>

        <div className="col">
        <p>Showing {count} movies in the database.</p>
        <MoviesTable 
        movies={movies} 
        sortColumn={sortColumn}
        onDelete={this.handleDelete} 
        onLike={this.handleLike} 
        onSort={this.handleSort} 
        />
        <Pagination itemsCount={filterMovies.length} pageSize={pageSize} currentPage={currentPage} onPageChange={this.handlePagechange} />
        </div>

      </div>
    );
  }
}

export default Movies;
