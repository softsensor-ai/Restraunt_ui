import React from 'react'
import { Link } from 'react-router-dom'

const Pagination = () => {
    const total_page = [2,3,4,5]
    const handleChange = (e) =>{
        (e.target.text)
    }
    return (
        <ul class="pagination has-gap">
            <li class="paginate_button page-item previous disabled" id="data-table-5_previous">
                <Link href="#" aria-controls="data-table-5" data-dt-idx="0" tabindex="0" class="page-link" >Previous</Link>
            </li>
            <li class="paginate_button page-item active"  onClick={handleChange}>
                <Link href="#" aria-controls="data-table-5" data-dt-idx="1" tabindex="0" class="page-link">1</Link>
            </li>
            {total_page.map(item => <li class="paginate_button page-item">
                <Link href="#" aria-controls="data-table-5" data-dt-idx="1" tabindex="0" class="page-link" onClick={handleChange}>{item}</Link>
            </li>)}
            
            
            <li class="paginate_button page-item next" id="data-table-5_next">
                <Link href="#" aria-controls="data-table-5" data-dt-idx="5" tabindex="0" class="page-link">Next</Link>
            </li>
        </ul>
    )
}

export default Pagination
