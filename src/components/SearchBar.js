import { Component } from 'react';

export class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
    };

    this.onSearchChange = this.onSearchChange.bind(this);
  }

  onSearchChange(e) {
    this.props.onSearch(e.target.value);

    this.setState({
      search: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <input
          type='text'
          name='search'
          placeholder='Search note'
          value={this.state.search}
          onChange={this.onSearchChange}
        />
      </div>
    );
  }
}

export default SearchBar;
