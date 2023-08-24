import { Component } from 'react';
import {
  StyledButton,
  StyledForm,
  StyledInput,
  StyledSearch,
} from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    searchRequest: '',
  };

  handleChange = e => {
    this.setState({ searchRequest: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSearch(this.state.searchRequest);
  };

  render() {
    return (
      <StyledForm onSubmit={this.handleSubmit}>
        <StyledSearch>
          <StyledInput
            type="text"
            value={this.state.searchRequest}
            onChange={this.handleChange}
            placeholder="Enter request and recieve images."
          />

          <StyledButton type="submit">Search</StyledButton>
        </StyledSearch>
      </StyledForm>
    );
  }
}
