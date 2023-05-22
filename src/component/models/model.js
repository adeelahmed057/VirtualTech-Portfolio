
import React from "react";
// import { Modal } from 'react-bootstrap'
import Modal from "react-bootstrap/Modal";
import "./model.css"

function Models(props) {
  return (
    <>
      <Modal
        size="lg"
        aria-labelledby="example-modal-sizes-title-lg"
        {...props}
      >
        <Modal.Header className="modal_bg" closeButton></Modal.Header>
        <Modal.Body className="modal_bg">
          <div className="col-lg-12 col-md-12 col-sm-12 mt-5">
            <div>
              <h1 className="Text-heading">Reach Out To Us!</h1>
              <div>
                {/* <img src={Line} className="img-fluid" width={"50%"} /> */}
              </div>
              <p className="text-detail mt-3">
                We are present 24*7 for our clients; get in touch with us and
                scale your business with flooding revenues!
              </p>
            </div>
            <div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Full Name"
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Email"
                />
              </div>
              <div className="mb-3">
                <input
                  type="no"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Mobile Number with Country Code"
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows={3}
                  defaultValue={""}
                  placeholder="Your Project Description"
                />
              </div>
              <div className="mb-3">
                <button className="btn-submit p-3">Submit</button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Models;
