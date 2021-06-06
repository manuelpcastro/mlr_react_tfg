import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";

import { API_MLRMODEL_URL } from "../constants";

class NewMlrModelForm extends React.Component {
  state = {
    id: 0,
    name: "",
    new_model_file_path: "",
    fitted_model_file_path: "",
    created: "",
    updated: "",
  };

  componentDidMount() {
    if (this.props.mlr_model) {
      const { id, name, new_model_file_path, fitted_model_file_path, created , updated } = this.props.mlr_model;
      this.setState({ id, name, new_model_file_path, fitted_model_file_path, created, updated });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createMlrModel = e => {
    e.preventDefault();
    axios.post(API_MLRMODEL_URL, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  editMlrModel = e => {
    e.preventDefault();
    axios.put(API_MLRMODEL_URL + this.state.id, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  defaultIfEmpty = value => {
    return value === "" ? "" : value;
  };

  render() {
    return (
      <Form onSubmit={this.props.mlr_model ? this.editMlrModel : this.createMlrModel}>
        <FormGroup>
          <Label for="name">Name:</Label>
          <Input
            type="text"
            name="name"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.name)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="new_model_file_path">new_model_file_path:</Label>
          <Input
            type="text"
            name="new_model_file_path"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.new_model_file_path)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="fitted_model_file_path">fitted_model_file_path:</Label>
          <Input
            type="text"
            name="fitted_model_file_path"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.fitted_model_file_path)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="created">Created:</Label>
          <Input
            type="date"
            name="created"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.created)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="updated">Updated:</Label>
          <Input
            type="date"
            name="updated"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.updated)}
          />
        </FormGroup>
        <Button>Send</Button>
      </Form>
    );
  }
}

export default NewMlrModelForm;