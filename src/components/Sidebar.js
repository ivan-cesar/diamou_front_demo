import React from "react";
import { NavLink} from "react-router-dom";
const Sidebar = () => {

    return (
        <div>
            <aside className="left-sidebar">

                <div>
                    <div className="brand-logo d-flex align-items-center justify-content-between">

                        {/*
                        <Link to="/" className="text-nowrap logo-img">
                            <img src={logo} width="180" alt=""/>
                        </Link>
                        */}
                        <h2 className="text-center text-primary">
                            DIAMOU SARL
                        </h2>

                        <div className="close-btn d-xl-none d-block sidebartoggler cursor-pointer" id="sidebarCollapse">
                            <i className="ti ti-x fs-8"></i>
                        </div>
                    </div>

                    <nav className="sidebar-nav scroll-sidebar" data-simplebar="">
                        <ul id="sidebarnav">
                            <li className="nav-small-cap">
                                <i className="ti ti-dots nav-small-cap-icon fs-4"></i>
                                <span className="hide-menu">Acceuil</span>
                            </li>
                            <li className="sidebar-item">
                                <NavLink
                                    exact
                                    to="/"
                                    className="sidebar-link"
                                    activeClassName="active"
                                >
                                    <span>
                                      <i className="ti ti-dashboard"></i>
                                    </span>
                                    <span className="hide-menu">Dashboard</span>
                                </NavLink>
                            </li>
                            <li className="nav-small-cap">
                                <i className="ti ti-dots nav-small-cap-icon fs-4"></i>
                                <span className="hide-menu">Factures</span>
                            </li>
                            <li className="sidebar-item">
                                <NavLink
                                    exact
                                    to="/ajout-facture"
                                    className="sidebar-link"
                                    activeClassName="active"
                                >
                                    <span>
                                      <i className="ti ti-layout-grid-add"></i>
                                    </span>
                                    <span className="hide-menu">Ajouter une facture</span>
                                </NavLink>
                            </li>

                            <li className="sidebar-item">
                                <NavLink
                                    exact
                                    to="/liste-des-factures"
                                    className="sidebar-link"
                                    activeClassName="active"
                                >
                                    <span>
                                      <i className="ti ti-list"></i>
                                    </span>
                                    <span className="hide-menu">Liste des factures</span>
                                </NavLink>
                            </li>

                        </ul>

                        <div className="text-center" style={{marginTop: "600px"}}>
                            <p className="text-muted" style={{fontWeight: "bold"}}>Réaliser par Propulse Group</p>
                        </div>

                    </nav>

                </div>

            </aside>
        </div>
    );

}

export default Sidebar;