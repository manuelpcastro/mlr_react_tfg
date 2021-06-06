import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getMlrModels } from "./MlrModelsActions";

import MlrModel from "./MlrModel";
import {Table} from "reactstrap";
import NewMlrModelModal from "../NewMlrModelModal";
import ConfirmRemovalModal from "../ConfirmRemovalModal";

class MlrModelsList extends Component {
  componentDidMount() {
    this.props.getMlrModels();
  }

  render() {
    const { mlr_models } = this.props.mlr_models;

    return (
      <Table dark>
        <thead>
          <tr>
            <th>Name</th>
            <th>New model file path</th>
            <th>Fitted model file path</th>
            <th>Created</th>
            <th>Updated</th>
          </tr>
        </thead>
        <tbody>
          {!mlr_models || mlr_models.length <= 0 ? (
            <tr>
              <td colSpan="6" align="center">
                <b>Ops, no one here yet</b>
              </td>
            </tr>
          ) : (
            mlr_models.map(mlr_model => (
              <tr key={mlr_model.id}>
                <td>{mlr_model.name}</td>
                <td>{mlr_model.new_model_file_path}</td>
                <td>{mlr_model.fitted_model_file_path}</td>
                <td>{mlr_model.created}</td>
                <td>{mlr_model.updated}</td>
                <td align="center">
                  <NewMlrModelModal
                    create={false}
                    mlr_model={mlr_model}
                    resetState={this.props.resetState}
                  />
                  &nbsp;&nbsp;
                  <ConfirmRemovalModal
                    id={mlr_model.id}
                    resetState={this.props.resetState}
                  />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    );
  }
}

MlrModelsList.propTypes = {
  getMlrModels: PropTypes.func.isRequired,
  MlrModels: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  mlr_models: state.mlr_models
});

export default connect(mapStateToProps, {
  getMlrModels
})(withRouter(MlrModelsList));