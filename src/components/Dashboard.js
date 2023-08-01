import React, {useEffect, useState} from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
const Dashboard = () => {

    const margin = {
        marginLeft: "400px",
        width: "70%",
    };

    const center = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "space-between"
    };

    const [data, setData] = useState([]); // Modifier ici pour initialiser à un tableau vide
    //const [loading, setLoading] = useState(true);
    // Fonction pour formater la date
    const formatDate = (dateString) => {
        const dateObj = new Date(dateString);
        const day = String(dateObj.getDate()).padStart(2, "0");
        const month = String(dateObj.getMonth() + 1).padStart(2, "0");
        const year = dateObj.getFullYear();
        return `${day}-${month}-${year}`;
    };
    useEffect(() => {
        // Fonction pour charger les données depuis l'API
        const fetchData = async () => {
            try {
                const response = await axios.get("https://cooing-cup-production.up.railway.app/api/v1/findAllFactures");

                // Remplacez l'URL par l'adresse de votre API
                setData(response.data);
                //setLoading(false);
            } catch (error) {
                console.error("Erreur lors de la récupération des données :", error);
                //setLoading(false);
            }
        };

        fetchData();

    }, []);

    return (
        <div>
            <Sidebar/>
            <div style={margin}>
                <h1>Dashboard</h1>
                <div className="col-lg-12" style={center}>
                    <div className="row" style={{marginTop: "30px"}}>
                        <div className="col-lg-4">
                            <div className="card overflow-hidden" style={{width: "350px"}}>
                                <div className="card-body p-4">
                                    <h1 className="card-title mb-9 fw-semibold">Total de factures</h1>
                                    <div className="row align-items-center">
                                        <div className="col-8">
                                            <h4 className="fw-semibold mb-3">55</h4>
                                            {/*<div className="d-flex align-items-center mb-3">
                                                  <span
                                                      className="me-1 rounded-circle bg-light-success round-20 d-flex align-items-center justify-content-center">
                                                    <i className="ti ti-arrow-up-left text-success"></i>
                                                  </span>
                                                <p className="text-dark me-1 fs-3 mb-0">+9%</p>
                                                <p className="fs-3 mb-0">last year</p>
                                            </div>*/}
                                            <div className="d-flex align-items-center">
                                                <div className="me-4">
                                            <span
                                                className="round-8 bg-primary rounded-circle me-2 d-inline-block"></span>
                                                    <span className="fs-2">2023</span>
                                                </div>
                                                <div>
                                            <span
                                                className="round-8 bg-light-primary rounded-circle me-2 d-inline-block"></span>
                                                    <span className="fs-2">2023</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="d-flex justify-content-center">
                                                <div id="breakup"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card overflow-hidden" style={{width: "350px"}}>
                                <div className="card-body p-4">
                                    <h5 className="card-title mb-9 fw-semibold">Total des factures payées</h5>
                                    <div className="row align-items-center">
                                        <div className="col-8">
                                            <h4 className="fw-semibold mb-3">55</h4>
                                            {/*<div className="d-flex align-items-center mb-3">
                                          <span
                                              className="me-1 rounded-circle bg-light-success round-20 d-flex align-items-center justify-content-center">
                                            <i className="ti ti-arrow-up-left text-success"></i>
                                          </span>
                                                <p className="text-dark me-1 fs-3 mb-0">+9%</p>
                                                <p className="fs-3 mb-0">last year</p>
                                            </div>*/}
                                            <div className="d-flex align-items-center">
                                                <div className="me-4">
                                            <span
                                                className="round-8 bg-primary rounded-circle me-2 d-inline-block"></span>
                                                    <span className="fs-2">2023</span>
                                                </div>
                                                <div>
                                            <span
                                                className="round-8 bg-light-primary rounded-circle me-2 d-inline-block"></span>
                                                    <span className="fs-2">2023</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="d-flex justify-content-center">
                                                <div id="breakup"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card overflow-hidden" style={{width: "350px"}}>
                                <div className="card-body p-4">
                                    <h5 className="card-title mb-9 fw-semibold">Total des factures en attente</h5>
                                    <div className="row align-items-center">
                                        <div className="col-8">
                                            <h4 className="fw-semibold mb-3">55</h4>
                                            {/*<div className="d-flex align-items-center mb-3">
                                          <span
                                              className="me-1 rounded-circle bg-light-success round-20 d-flex align-items-center justify-content-center">
                                            <i className="ti ti-arrow-up-left text-success"></i>
                                          </span>
                                                <p className="text-dark me-1 fs-3 mb-0">+9%</p>
                                                <p className="fs-3 mb-0">last year</p>
                                            </div>*/}
                                            <div className="d-flex align-items-center">
                                                <div className="me-4">
                                            <span
                                                className="round-8 bg-primary rounded-circle me-2 d-inline-block"></span>
                                                    <span className="fs-2">2023</span>
                                                </div>
                                                <div>
                                            <span
                                                className="round-8 bg-light-primary rounded-circle me-2 d-inline-block"></span>
                                                    <span className="fs-2">2023</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="d-flex justify-content-center">
                                                <div id="breakup"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="row">
                        <div className="col-lg-12 d-flex align-items-stretch">
                            <div className="card w-100">
                                <div className="card-body p-4">
                                    <h5 className="card-title fw-semibold mb-4">Factures récemment ajoutées</h5>
                                    <div className="table-responsive">
                                        <table className="table text-nowrap mb-0 align-middle">
                                            <thead className="text-dark fs-4">
                                            <tr>
                                                <th className="border-bottom-0">
                                                    <h6 className="fw-semibold mb-0">Nom Client</h6>
                                                </th>
                                                <th className="border-bottom-0">
                                                    <h6 className="fw-semibold mb-0">Description</h6>
                                                </th>
                                                <th className="border-bottom-0">
                                                    <h6 className="fw-semibold mb-0">Montant</h6>
                                                </th>
                                                <th className="border-bottom-0">
                                                    <h6 className="fw-semibold mb-0">Status</h6>
                                                </th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                                {data && data['content'] && Array.isArray(data['content']) ? (
                                                    data['content']
                                                        .slice()
                                                        .reverse()
                                                        .map((item) => (
                                                            <tr key={item.id}>
                                                                <td className="border-bottom-0">
                                                                    <p className="mb-0 fw-normal">Azoua mary Astride</p>
                                                                </td>
                                                                <td className="border-bottom-0">
                                                                    <h6 className="fw-semibold mb-1">{item.intituleFacture}</h6>
                                                                    <span className="fw-normal">{formatDate(item.dateAdded)}</span>
                                                                </td>
                                                                <td className="border-bottom-0">
                                                                    <h6 className="fw-semibold mb-0 fs-4">{item.montant} FCFA</h6>
                                                                </td>
                                                                <td className="border-bottom-0">
                                                                    <div className="d-flex align-items-center gap-2">
                                                                        <span className="badge bg-primary rounded-3 fw-semibold">Low</span>
                                                                        
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        ))
                                                ) : (
                                                            <tr>
                                                                <td colSpan="4" className="text-center">
                                                                    Pas de données disponibles.
                                                                </td>
                                                            </tr>
                                                    )}
                                            </tbody>
                                        </table>
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

export default Dashboard;