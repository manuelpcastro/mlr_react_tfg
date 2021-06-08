import React, { Component }from "react";

import PropTypes from "prop-types";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import {addMlrModel, updateMlrModel} from "./MlrModelsActions";

class AddMlrModelForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      model_name: "",
      new_model_file_path: "",
      fitted_model_file_path: "",
      created_at: "",
      updated_at: "",
      created_by: "",
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onAddClick = () => {
    const mlr_model = {
      id : this.state.id,
      model_name: this.state.model_name,
      new_model_file_path: this.state.new_model_file_path,
      fitted_model_file_path: this.state.fitted_model_file_path,
      created_at: this.state.created_at,
      updated_at: this.state.updated_at,
      created_by: this.state.created_by,
    };
    this.props.addMlrModel(mlr_model);
  };

  onClick = () => {
    var onclickadd = new Promise(this.onAddClick);
    onclickadd.then(() => {
      this.props.resetState();
      this.props.toggle();
    });

  }


  defaultIfEmpty = value => {
    return value === "" ? "" : value;
  };

  render() {
    return (
      <Form >
        <FormGroup>
          <Label for="model_name">Name:</Label>
          <Input
            type="text"
            name="model_name"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.model_name)}
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
        <Button variant="success" onClick={this.onAddClick}>
          Send
        </Button>
      </Form>
    );
  }
}


AddMlrModelForm.propTypes = {
  addMlrModel: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

export default connect(mapStateToProps, { addMlrModel })(withRouter(AddMlrModelForm));
