import React from "react";
import "../PageNotFound/PageNotFound.scss";
import { Link } from "react-router-dom";

export default function PageNotFound() {
    return (
        <div className="notFound">
            <h1>404 </h1>
            <p>Oups! La Page que vous demandez n'existe pas.</p>
            <Link to="/"> Retourner sur la page d'accueil</Link>
        </div>
    );
}
//
