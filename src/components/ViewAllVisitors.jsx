import React from 'react'
import NavBar from './NavBar'

const ViewAllVisitors = () => {
    return (
        <div>
            <NavBar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">First Name</th>
                                    <th scope="col">Last Name</th>
                                    <th scope="col">purpose</th>
                                    <th scope="col">Whom to Meet</th>
                                    <th scope="col">Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>Enquiry</td>
                                    <td>Principal</td>
                                    <td>13-01-2024</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>Enquiry</td>
                                    <td>HOD</td>
                                    <td>31-01-2024</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>Enquiry</td>
                                    <td>Class Teacher</td>
                                    <td>21-08-2024</td>
                                </tr>
                               
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>


        </div>
    )
}

export default ViewAllVisitors