import { Link } from '@inertiajs/react'
import Layout from "../Layout/Layout";
import DataTable from "../Component/DataTable";
import '../../../bootstrap/css/dataTables.bootstrap5.min.css'
import { router } from '@inertiajs/react'
import {useState} from 'react'
import axios from 'axios';


function Show({events}){

    const [rows,setRows] = useState(events)

    function handlePage(pageNo){
        axios.get('/events/list/'+pageNo)
        .then(function (response) {
            setRows(response.data)
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    return(
        <>
        <Layout>            
            <table className="table table-striped">
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Place</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                {
                    rows.map((event)=>
                    <tr key={event.id+"-events"}>
                        {
                            <>
                                <td>{event.name}</td>
                                <td>{event.place}</td>
                                <td>
                                    <Link href={'/events/edit/'+event.id}>Edit</Link>
                                    &nbsp;| Delete</td>
                            </>
                        }
                    </tr>
                )}
                </tbody>
            </table>

          


            <div className="row">                
                <div className="col-sm-12 col-md-7">
                    <div className="dataTables_paginate paging_simple_numbers" id="example_paginate">
                        <ul className="pagination">
                            <li key={1} className="paginate_button page-item" onClick={()=>handlePage(1)}>
                                <a href="#" aria-controls="example" role="link" data-dt-idx="0" tabIndex="0" className="page-link">1</a>
                            </li>
                            <li key={2} className="paginate_button page-item " onClick={()=>handlePage(2)}>
                                <a href="#" aria-controls="example" role="link" data-dt-idx="1" tabIndex="0" className="page-link">2</a>
                            </li>
                        </ul>
                    </div></div></div>
        </Layout>
        </>
    );
}

export default Show;