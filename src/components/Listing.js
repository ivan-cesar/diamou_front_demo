import React, {useEffect, useState, useCallback} from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
const Listing = () => {

    const margin = {
        marginLeft: "400px",
        width: "70%"
    };

    const point = 8;

    const [data, setData] = useState({
            "content": [],
        }
    ); // Modifier ici pour initialiser à un tableau vide
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
                console.log(response.data['content']);

                //setLoading(false);
            } catch (error) {
                console.error("Erreur lors de la récupération des données :", error);
            //setLoading(false);
            }
        };

        fetchData();

    }, []);

    const renderEllipsis = () => <span>...</span>;

    const [searchTerm, setSearchTerm] = useState("");
    const [filteredData, setFilteredData] = useState([]); // État pour les données filtrées

  // Utilisez useCallback pour envelopper la fonction filterData
  const filterData = useCallback(() => {
    const filtered = data.content.filter(
      (item) => item.nomClient.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return filtered;
  }, [data.content, searchTerm]);

    // Mettre à jour les données filtrées à chaque changement du terme de recherche
    useEffect(() => {
        const filteredData = filterData();
        setFilteredData(filteredData);
        setCurrentPage(1); // Réinitialiser la page courante lorsqu'une nouvelle recherche est effectuée
      }, [searchTerm, filterData]);


    const itemsPerPage = 10; // Nombre d'éléments par page

    const [currentPage, setCurrentPage] = useState(1);

    // Calculer l'index de début et de fin pour les éléments à afficher sur la page actuelle
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // Récupérer les éléments de la page actuelle
    //const currentData = data.content.slice(startIndex, endIndex);
    const currentData = filteredData.slice(startIndex, endIndex);

    // Calculer le nombre total de pages
    //const totalPages = Math.ceil(data.content.length / itemsPerPage);
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);

    // Créer un tableau de numéros de page de 1 à totalPages
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    // Fonction pour aller à la page suivante
    const nextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    // Fonction pour aller à la page précédente
    const prevPage = () => {
        setCurrentPage((prevPage) => prevPage - 1);
    };

    // Gestionnaire de saisie de l'input pour la recherche instantanée
    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };


    // Gestionnaire de saisie de l'input pour la recherche instantanée


    const handlePostRequest = async (id) => {

        const reference = "DIAMOU_SERVICE";
        const currency = "XOF";
        const return_url = "http://www.notif_merchant.com/bizao";
        const cancel_url = "https://google.lk";
        const state = "test";

        try{
        // Récupérer les données spécifiques de la ligne en fonction de l'ID
        const rowData = data['content'].find((item) => item.id === id);

        // Créer l'objet de données à envoyer dans la requête POST
        const postData = {
            orderId: rowData.orderId,
            reference: reference,
            montant: rowData.montant,
            currency: currency,
            return_url: return_url,
            cancel_url: cancel_url,
            state: state,
            // Autres données si nécessaire
        };

        // Définir les en-têtes de la requête
        const headers = {
            'Content-Type': 'application/json', // Définir le type de contenu comme JSON
            "Authorization": "Bearer 4ef286af-830f-37a8-b151-30e0075bccb0",
            "country-code": "ci",
            "category": "BIZAO",
            "lang":"fr"
            // Ajouter d'autres en-têtes si nécessaire
            // 'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
        };

        //console.log("POSTDATA", postData);


        // Effectuer la requête POST vers le serveur en utilisant axios avec les en-têtes
       const response = axios.post('https://preproduction-gateway.bizao.com/debitCard/v2', postData, { headers });
            //.then((response) => {
                // Traiter la réponse du serveur si nécessaire
                console.log("HEADDD"+response.headers);
                console.log("COOOORPS"+response.data);
                //return response.data.return_url;
           /// })
    }catch(error){
                // Gérer les erreurs de requête
                console.error('Erreur de requête POST:', error);
            }
    };


    return (
        <div>
            <Sidebar/>
            <div style={margin}>
                <h1>Listes des factures</h1>
                <form className="d-flex align-items-start">
                    <div className="mb-3 flex-grow-1">
                        <input
                            type="text"
                            placeholder="Rechercher de facture par nom"
                            name="nomClient"
                            className="form-control"
                            id="nomClient"
                            aria-describedby="exampleInputName"
                            value={searchTerm}
                            onChange={handleInputChange}
                        />
                    </div>
                    <button className="btn btn-primary ms-2">Rechercher</button>
                </form>
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
                                                    <h6 className="fw-semibold mb-0">Order ID</h6>
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
                                            {currentData.length > 0 ? (
                                                currentData
                                                    .map((item) => (
                                                        <tr key={item.id}>
                                                            <td className="border-bottom-0">
                                                                <p className="mb-0 fw-normal">{item.nomClient}</p>
                                                            </td>
                                                            <td className="border-bottom-0">
                                                                <h6 className="fw-semibold mb-1">{item.intituleFacture}</h6>
                                                                <span className="fw-normal">{formatDate(item.dateAdded)}</span>
                                                            </td>
                                                            <td className="border-bottom-0">
                                                                <p className="mb-0 fw-normal">{item.orderId}</p>
                                                            </td>
                                                            <td className="border-bottom-0">
                                                                <h6 className="fw-semibold mb-0 fs-4">{item.montant} FCFA</h6>
                                                            </td>
                                                            <td className="border-bottom-0">
                                                                <div className="d-flex align-items-center gap-2">
                                                                    <button onClick={() => handlePostRequest(item.id)} className="btn btn-primary" target="_blank">Payer</button>
                                                                </div>
                                                            </td>
                                                        </tr>

                                                    ))) : (
                                                // Afficher un message si currentData est vide
                                                <tr>
                                                    <td colSpan="5" className="text-center">
                                                        Aucune donnée disponible.
                                                    </td>
                                                </tr>
                                                )
                                            }
                                            </tbody>
                                        </table>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <button className="btn btn-primary m-2" onClick={prevPage} disabled={currentPage === 1}>
                        Page précédente
                    </button>
                    {/*
                    {pageNumbers.map((pageNumber) => (
                        <button
                            key={pageNumber}
                            onClick={() => setCurrentPage(pageNumber)}
                            className={`btn btn-${currentPage === pageNumber ? "primary" : "light"} m-2`}
                        >
                            {pageNumber}
                        </button>
                    ))}
                    */}

                    {pageNumbers.map((pageNumber, index) => (
                        <React.Fragment key={pageNumber}>
                            {index > 0 && index !== 1 && index !== pageNumbers.length && index !== currentPage - 1 && totalPages > point && renderEllipsis()}
                            <button
                                onClick={() => setCurrentPage(pageNumber)}
                                className={`btn btn-${currentPage === pageNumber ? "primary" : "light"} m-2`}
                            >
                                {pageNumber}
                            </button>
                        </React.Fragment>
                    ))}
                    <button className="btn btn-primary m-2" onClick={nextPage} disabled={currentPage === Math.ceil(data.content.length / itemsPerPage)}>
                        Page suivante
                    </button>
                </div>
            </div>
        </div>
    );

}

export default Listing;