import React, { Component } from "react";
import { Table } from "reactstrap";

import ConfirmRemovalModal from "./ConfirmRemovalModal";
import NewMlrModelModal from "./NewMlrModelModal";

class MlrModelList extends Component {
  render() {
    const mlr_models = this.props.mlr_model;
    return (
      <Table dark>
        <thead>
          <tr>
            <th>Name</th>
            <th>new_model_file_path</th>
            <th>fitted_model_file_path</th>
            <th>created</th>
            <th>updated</th>
            <th></th>
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

export default MlrModelList;