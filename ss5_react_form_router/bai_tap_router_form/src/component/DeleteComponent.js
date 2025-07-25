import {Button, Modal} from "react-bootstrap";
import {deleteById} from "../service/studentService";
import React from "react";

const DeleteComponent = ({isShowModal, handleCloseModal, deleteStudent}) => {

    const handleDelete = () => {
        deleteById(deleteStudent.id);
        handleCloseModal();
    }
    return <>
        <Modal show={isShowModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Bạn có muốn xoá sinh viên {deleteStudent.name}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseModal}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleDelete}>
                    Delete
                </Button>
            </Modal.Footer>
        </Modal>
    </>
}
export default DeleteComponent;