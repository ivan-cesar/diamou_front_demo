import React, {useState} from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
const Listing = () => {

    const margin = {
        marginLeft: "180px",
        width: "70%"
    };

    const [formData, setFormData] = useState({ intituleFacture: "", montant: "", descriptionFacture: "", nomClient:""  });
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Validation: Check if form fields are empty
        if (!formData.intituleFacture || !formData.montant) {
            setErrorMessage("Veuillez remplir tous les champs.");
            setSuccessMessage(""); // Reset any previous success message if present
            return;
        }

        try {
            const response = await axios.post(
                "https://cooing-cup-production.up.railway.app/api/v1/addFacture",
                formData
            );
            console.log("Données envoyées avec succès !", response.data);
            setSuccessMessage("Données envoyées avec succès !");
            setErrorMessage(""); // Reset any previous error message if present
            setFormData({ intituleFacture: "", montant: "", nomClient: "", descriptionFacture: "" }); // Clear the form fields on successful submission
        } catch (error) {
            console.error("Erreur lors de l'envoi des données :", error);
            setErrorMessage("Erreur lors de l'envoi des données. Veuillez réessayer.");
            setSuccessMessage(""); // Reset any previous success message if present
        }
    };

    return (
        <div>
            <Sidebar/>
            <div style={margin}>
                <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6"
                     data-sidebartype="full"
                     data-sidebar-position="fixed" data-header-position="fixed">
                    <div className="position-relative overflow-hidden radial-gradient min-vh-100 min-vw-100 d-flex align-items-center justify-content-center">
                        <div className="d-flex align-items-center justify-content-center w-100">
                            <div className="row justify-content-center w-100">
                                <div className="col-md-8 col-lg-6 col-xxl-4">
                                    <div className="card mb-0">
                                        <div className="card-body">
                                            {successMessage && (
                                                <div className="alert alert-success" role="alert">{successMessage}</div>
                                            )}
                                            {errorMessage && (
                                                <div className="alert alert-danger" role="alert">{errorMessage}</div>
                                            )}
                                            {/*
                                            <a href="./index.html"
                                               className="text-nowrap logo-img text-center d-block py-3 w-100">
                                                <img src={logo} width="180" alt=""/>
                                            </a>
                                            */}
                                            <h2 className="text-center text-primary">
                                                DIAMOU SARL
                                            </h2>
                                            <h3 className="text-center mb-3">Ajouter une facture</h3>
                                            <form onSubmit={handleSubmit}>
                                                <div className="mb-3">
                                                    <label htmlFor="exampleInputEmail1"
                                                           className="form-label">Nom et prénoms client</label>
                                                    <input type="text" name="nomClient" className="form-control" id="nomClient"
                                                           aria-describedby="exampleInputName" value={formData.nomClient} onChange={handleInputChange} />
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="intituleDescription"
                                                           className="form-label">Description de la facture</label>
                                                    <input type="text" name="descriptionFacture" className="form-control" id="descriptionFacture"
                                                           aria-describedby="intituleDescription" value={formData.descriptionFacture} onChange={handleInputChange} />
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="exampleInputEmail1"
                                                           className="form-label">Intitulé de la facture</label>
                                                    <input type="text" name="intituleFacture" className="form-control" id="intituleFacture"
                                                           aria-describedby="emailHelp" value={formData.intituleFacture} onChange={handleInputChange}/>
                                                </div>
                                                <div className="mb-4">
                                                    <label htmlFor="exampleInputPassword1"
                                                           className="form-label">Montant</label>
                                                    <input type="text" name="montant" className="form-control"
                                                           id="montant" value={formData.montant} onChange={handleInputChange} />
                                                </div>
                                                <button type="submit" className="btn btn-primary w-100 py-8 fs-4 mb-4 rounded-2">
                                                    Ajouter la facture
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Listing;