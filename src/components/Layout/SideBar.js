import React from 'react';
import {Link} from "react-router-dom";

const SideBar = () => {
    return (
        <Link to="/clients/add" className="btn btn-success btn-block">
            <i className="fa fa-plus"></i>  New
        </Link>
    );
};

export default SideBar;