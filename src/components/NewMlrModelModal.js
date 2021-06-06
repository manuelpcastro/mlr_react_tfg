import React, { Component, Fragment } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";

import NewMlrModelForm from "./NewMlrModelForm";

class NewMlrModelModal extends Component {
  state = {
    modal: false
  };

  toggle = () => {
    this.setState(previous => ({
      modal: !previous.modal
    }));
  };

  render() {
    const create = this.props.create;

    var title = "Editing Mlr-Model";
    var button = <Button onClick={this.toggle}>Edit</Button>;
    if (create) {
      title = "Creating Mlr-Model";

      button = (
        <Button
          color="primary"
          className="float-right"
          onClick={this.toggle}
          style={{ minWidth: "500px" }}
        >
          Create New
        </Button>
      );
    }

    return (
      <Fragment>
        {button}
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>{title}</ModalHeader>

          <ModalBody>
            <NewMlrModelForm
              resetState={this.props.resetState}
              toggle={this.toggle}
              mlr_model={this.props.mlr_model}
            />
          </ModalBody>
        </Modal>
      </Fragment>
    );
  }
}

export default NewMlrModelModal;