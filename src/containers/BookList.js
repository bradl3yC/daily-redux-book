import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook }  from '../actions/index';
//make sure action created flows through all reducers
import { bindActionCreators } from 'redux';
import map from 'lodash/map'


class BookList extends Component {
  render() {
    return (
      <ul className="list-group col-sm-4">
        {map(this.props.books, (book) => (
          <li
            key={book.id}
            onClick={() => this.props.selectBook(book)}
            className="list-group-item"
            >
            {book.title}
          </li>
        ))}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    books: state.books,
  };
}

function mapDispatchToProps(dispatch) {
  //whenever selectBook is called, result should be passed to
  //all of the reducers. (flows through dispatch function -- like a funnel)
  return bindActionCreators({ selectBook: selectBook }, dispatch)
}

//connect all functions to container component
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
