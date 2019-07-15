import React from "react";

class SearchBar extends React.Component {
  state = {
    searchTerm: '',
  };

  onInputChange = e => {
    this.setState({ searchTerm: e.target.value });
  }

  onFormSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.searchTerm);
  }

  render() {
    const { searchTerm } = this.state;

    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input type="text" value={searchTerm} onChange={this.onInputChange} />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
