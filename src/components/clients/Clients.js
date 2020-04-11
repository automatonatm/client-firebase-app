import React, {Component} from 'react';

import {Link} from "react-router-dom";

class Clients extends Component {

    render() {
        const clients = [
            {
            id: 'a8gtyhe',
            firstname: 'John',
            lastname: 'Doe',
            email: 'doe@mail.com',
            phone: '444-444-44',
            balance: '30'
        },
            {
                id: 'ejj5',
                firstname: 'Jane',
                lastname: 'Doe',
                email: 'jane@mail.com',
                phone: '450-565-44',
                balance: '453'
            },

        ]
       let  showClients = null

        if(clients) {
            showClients = (
                <div className="row">
                    <div className="col-md-6">
                        <h4><i className="fa fa-users"></i>Clients</h4>
                    </div>

                    <div className="col-md-6">
                    </div>

                    <table className="table table-striped">
                        <thead className="thead-inverse">
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Balance</th>
                            <th />
                        </tr>
                        </thead>
                        <tbody>
                        {clients.map((client) => (
                            <tr key={client.id}>
                               <td>{client.name} {client.lastname}</td>
                               <td>{client.email}</td>
                               <td>$ {parseFloat(client.balance).toFixed(2)}</td>
                                <td><Link to={`/client/${client.id}`} className="btn btn-sm btn-secondary">
                                   <i className="fa fa-arrow-circle-right"></i>  Details
                                </Link></td>
                            </tr>
                        ) )}
                        </tbody>
                    </table>

                </div>
            )
        }else {
            showClients = <h1>Loading...</h1>
        }

        return (
            <div>
                {showClients}
            </div>
        );
    }
}

export default Clients;