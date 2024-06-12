import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const AddContact = () => {

    const { actions } = useContext(Context)

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")
    const Navigate = useNavigate();

    const createContact = async () => {
        await actions.newContact(name, phone, email, address)
        const newAgenda = await actions.getContacts();
        Navigate("/", { newAgenda });
    }

    return (
        <React.Fragment>
            <div className="container">
                <h1 className="text-center">Add a new contact</h1>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Full Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Full Name"
                        onChange={(event) => {
                            setName(event.target.value)
                        }}
                        value={name}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="text"
                        className="form-control"
                        id="email"
                        placeholder="Enter Email"
                        onChange={(event) => {
                            setEmail(event.target.value)
                        }}
                        value={email}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input
                        type="text"
                        className="form-control"
                        id="phone"
                        placeholder="Enter Phone"
                        onChange={(event) => {
                            setPhone(event.target.value)
                        }}
                        value={phone}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address</label>
                    <input
                        type="text"
                        className="form-control"
                        id="address"
                        placeholder="Enter Address"
                        onChange={(event) => {
                            setAddress(event.target.value)
                        }}
                        value={address}
                    />
                </div>
                <button className="container btn btn-primary"
                    onClick={createContact}>save</button>
                <Link to="/" className="card-link">or get back to contacts</Link>
            </div>
        </React.Fragment>
    )
}