import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Button } from "react-bootstrap";
import {removeMlrModel} from "./MlrModelsActions";

class MlrModel extends Component {

  onDeleteClick = () => {
    const { mlr_model } = this.props;
    this.props.removeMlrModel(mlr_model.id);
  };

  render() {
    const { mlr_model } = this.props;
    return (
      <div>
          <h2>{mlr_model.model_name}</h2>
          <div>
              <p>
                  <b>Creation date : </b>
                  {mlr_model.created_at}
              </p>
          </div>
          <Button variant="danger" size="sm" onClick={this.onDeleteClick}>
            Delete
           </Button>
          <hr/> {}
      </div>
    );
  }
}

MlrModel.propTypes = {
  mlr_model: PropTypes.object.isRequired
};

const mapStateToProps = state => ({});

export default connect(mapStateToProps, { removeMlrModel })(
  withRouter(MlrModel)
);