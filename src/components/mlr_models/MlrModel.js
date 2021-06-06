import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { deleteMlrModel, updateMlrModel } from "./MlrModelsActions";
import { Button } from "react-bootstrap";


class MlrModel extends Component {
  onDeleteClick = () => {
    const { mlr_model } = this.props;
    this.props.deleteMlrModel(mlr_model.id);
  };
  render() {
    const { mlr_model } = this.props;
    return (
      <div>
        <p>{mlr_model.content}</p>
        <Button variant="danger" size="sm" onClick={this.onDeleteClick}>
          Delete
        </Button>
      </div>
    );
  }
}

MlrModel.propTypes = {
  mlr_model: PropTypes.object.isRequired
};

const mapStateToProps = state => ({});

export default connect(mapStateToProps, { deleteMlrModel, updateMlrModel })(
  withRouter(MlrModel)
);