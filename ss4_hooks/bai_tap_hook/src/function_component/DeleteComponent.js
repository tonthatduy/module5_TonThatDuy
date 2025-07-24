import {deleteById} from "../service/student";
import React from "react";
import {Button, Modal} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const DeleteComponent = ({deleteStudent, isShowModal, handleCloseModal}) => {
    const handleDelete = () => {
        deleteById(deleteStudent.id);
        handleCloseModal();
    }
    return <>
        {console.log("------delete modal-------------")}
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
export default React.memo(DeleteComponent);