import { Component } from "react";
import styled from "styled-components";

const Form = styled.form`
  margin-bottom: 20px;

  input {
    height: 28px;
    width: 200px;
    margin-right: 10px;
  }

  button {
    align-items: center;
    outline: none;
    border-radius: 4px;
    min-width: 28px;
    height: 25px;
    padding: 5px;
    background-color: honeydew;
    color: black;
    font-weight: 500;
    font-size: 12px;
  }
`;

class Searchbox extends Component {
  state = {
    value: "",
  };

  handleChange = (evt) => {
    this.setState({
      value: evt.target.value,
    });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();

    this.props.onSubmit(this.state.value);
    this.setState({ value: "" });
  };

  render() {
    const { value } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <input
          name="search"
          type="text"
          value={value}
          required
          placeholder="Search movie..."
          onChange={this.handleChange}
        />
        <button type="submit">Search</button>
      </Form>
    );
  }
}

export default Searchbox;
