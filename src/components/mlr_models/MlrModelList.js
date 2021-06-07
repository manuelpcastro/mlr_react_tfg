import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getMlrModels } from "./MlrModelsActions";

import MlrModel from "./MlrModel";

class MlrModelsList extends Component {
  componentDidMount() {
    this.props.getMlrModels();
  }

  render() {
    const { mlr_models } = this.props.mlr_models;

    if (mlr_models.length === 0) {
      return <h2>Please add your first note</h2>;
    }

    let items = mlr_models.map(model => {
      return <MlrModel key={model.id} mlr_model={model} />;
    });

    return (
      <div>
        <h2>Models</h2>
        {items}
      </div>
    );
  }
}

MlrModelsList.propTypes = {
  getMlrModels: PropTypes.func.isRequired,
  mlr_models: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  mlr_models: state.mlr_models
});

export default connect(mapStateToProps, {
  getMlrModels
})(withRouter(MlrModelsList));