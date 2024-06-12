import React, { useContext } from "react";
import MiguelImage from "../../img/Miguel.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";

export const Contact = ({ id, name, address, phone, email }) => {
    const { actions } = useContext(Context)
    const navigate = useNavigate()

    const handleDelete = async () => {
        actions.deleteContact(id)
    }

    const handleEdit = async () => {
        let url = "/EditContact/" + id
        navigate(url)
    }
    return (

        <div className="card container">
            <div className="row m-2">
                <div className="col-2 container d-flex align-items-center">
                    <img src={MiguelImage} className="img-fluid rounded-circle" alt="Contact Image" />
                </div>
                <div className="col-6 card-body m-0 px-5">
                    <h4 className="card-title mx-2">{name}</h4>
                    <h6 className="card-text text-muted">
                        <i className="fa-solid fa-location-dot mx-2"></i>{address}</h6>
                    <p className="card-text text-muted mb-1">
                        <i className="fa-solid fa-phone-flip mx-2"></i>{phone}</p>
                    <p className="card-text text-muted">
                        <i className="fa-solid fa-envelope mx-2"></i>{email}</p>

                </div>
                <div className="col-3 d-flex mt-2 py-2 justify-content-end">
                    <span className="fa-solid fa-pencil mx-2"
                        onClick={handleEdit}
                    ></span>
                    <span className="fa-solid fa-trash-can mx-2"
                        onClick={handleDelete}
                    ></span>
                </div>
            </div>
        </div>

    )
}