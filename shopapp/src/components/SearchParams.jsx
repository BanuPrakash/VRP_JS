import axios from 'axios';
import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom';

// example of passing QueryParameter / RequestParamter
// http://localhost:3000/paginate?size=3&page=5
export default function SearchParams() {
    const [searchParams, setSearchParams] = useSearchParams();
    useEffect(() => {
        console.log(searchParams.get('page'));
        console.log(searchParams.get('size'));

    }, []);
    return (
        <div>
            Paginate...
        </div>
    )
}
