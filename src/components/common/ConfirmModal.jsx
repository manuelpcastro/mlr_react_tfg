import React from "react"
import PropTypes from "prop-types"
import {
  Button, Modal, ModalBody, ModalFooter,
} from "reactstrap"

const ConfirmModal = ({
  children, confirm, cancel, danger,
}) => {
  const handleConfirm = () => {
    confirm()
    cancel()
  }

  return (
    <Modal isOpen toggle={cancel}>
      <ModalBody>
        {children}
      </ModalBody>
      <ModalFooter>
        <Button
          color={danger ? "primary" : "white"}
          onClick={cancel}
        >
          No, cancel
        </Button>
        <Button
          color={danger ? "danger" : "primary"}
          onClick={handleConfirm}
        >
          Yes, go ahead
        </Button>
      </ModalFooter>
    </Modal>
  )
}

ConfirmModal.propTypes = {
  children: PropTypes.node.isRequired,
  confirm: PropTypes.func.isRequired,
  cancel: PropTypes.func.isRequired,
  danger: PropTypes.bool,
}

ConfirmModal.defaultProps = {
  danger: false,
}

export default ConfirmModal
