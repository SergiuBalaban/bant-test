import './AdminEmails.css';
import { useHistory } from "react-router-dom";
import React, { useMemo, useState, useEffect } from "react";
import axios from "axios";
import Table from "../../../components/table/Table";

function AdminEmails() {
    const history = useHistory();
    const [data, setData] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await axios("https://api.tvmaze.com/search/shows?q=snow");
            setData(result.data);
            console.log(result.data);
        })();
    }, []);

    const columns = useMemo(
        () => [
            {
                // Second group - Details
                Header: "Emails",
                // Second group columns
                columns: [
                    {
                        Header: "Name",
                        accessor: "show.name"
                    },
                    {
                        Header: "Type",
                        accessor: "show.type"
                    },
                    {
                        Header: "Language",
                        accessor: "show.language"
                    },
                    {
                        Header: "Genre(s)",
                        accessor: "show.genres"
                    },
                    {
                        Header: "Runtime",
                        accessor: "show.runtime"
                    },
                    {
                        Header: "Status",
                        accessor: "show.status"
                    }
                ]
            }
        ],
        []
    );

    function checkIfHavePermission() {
        if(localStorage.getItem('role') !== 'user') {
            logout();
            return false;
        }
        return true;
    }

    function logout() {
        localStorage.clear();
        history.push('');
    }

    return (
        <section>
            <div className="menu">
                <p>Email: {localStorage.getItem('email')}</p>
                <button type="button" id="b1" onClick={logout}>Log out</button>
            </div>
            <div className="emailTableContent">
                <Table columns={columns} data={data}/>
            </div>
        </section>
    );
}

export default AdminEmails;
