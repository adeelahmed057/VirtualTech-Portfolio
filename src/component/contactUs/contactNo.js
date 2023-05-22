import React from "react";
import Phone from "../../assets/contact/phoneEmailAdd-01.svg";
import Email from "../../assets/contact/phoneEmailAdd-03.svg";
import Address from "../../assets/contact/phoneEmailAdd-04.svg";
import Line from "../../assets/Image/UnderLine-01.svg";
const data = [
  {
    title: "Phone",
    icon: Phone,
    no: "+97-150-994-9375",
  },
  {
    title: "Email",
    icon: Email,
    no: "info@virtualtech.org",
  },
  {
    title: "Address",
    icon: Address,
    no: "Office No 13Qasais 3 Speedic center building",
  },
];

function ContactNo() {
  return (
    <div className="container">
      <div className="row justify-content-between mt-5">
        {data.map((data) => {
          return (
            <>
              <div className="col-lg-3 col-md-5 col-sm-10 border-gradient border-gradient-purple mt-3">
                <div className="row justify-content-center mt-4">
                  <div className="col-md-10">
                    <div className="text-center">
                      <img
                        src={data.icon}
                        className="img-fluid"
                        width={"20%"}
                      />
                    </div>
                    <div className="mt-3 mb-3">
                      <h4 className="text-center text-contact">{data.title}</h4>
                      <p className="text-center text-detail">{data.no}</p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}

        <div className="col-lg-6 col-md-12 col-sm-12 mt-5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3607.3926056502296!2d55.40081921501145!3d25.291010183852652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDE3JzI3LjYiTiA1NcKwMjQnMTAuOCJF!5e0!3m2!1sen!2s!4v1684765418673!5m2!1sen!2s"
            width={"100%"}
            height={"490"}
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 mt-5">
          <div>
            <h1 className="Text-heading">Reach Out To Us!</h1>
            <div>
              <img src={Line} className="img-fluid" width={"50%"} />
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
      </div>
    </div>
  );
}

export default ContactNo;
