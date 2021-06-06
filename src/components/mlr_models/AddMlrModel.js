import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { addMlrModel } from "./MlrModelsActions";

class AddMlrModel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ""
    };
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onAddClick = () => {
    const note = {
      content: this.state.content
    };
    this.props.addMlrModel(note);
  };

  render() {
    return (
      <div>
        <h2>Add new model</h2>
        <Form>
          <Form.Group controlId="contentId">
            <Form.Label>Model</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="content"
              placeholder="Enter note"
              value={this.content}
              onChange={this.onChange}
            />
          </Form.Group>
        </Form>
        <Button variant="success" onClick={this.onAddClick}>
          Add model
        </Button>
      </div>
    );
  }
}

AddMlrModel.propTypes = {
  addMlrModel: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

export default connect(mapStateToProps, { addMlrModel })(withRouter(AddMlrModel));