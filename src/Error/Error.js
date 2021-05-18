import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
    return (
    <main class="body-content ms-error-404">
    <div class="ms-content-wrapper text-center">
        <i class="flaticon-computer"></i>
        <h1>Error 404</h1>
        <h3>Oops! Page Not Found!</h3>
        <p>The link you followed may be broken, or the page has been removed</p>
        <Link to="/admin" class="btn btn-white"> <i class="material-icons">arrow_back</i> Back Dashboard</Link>
    </div>
    </main>
    )
}

export default Error
