import {useState, useEffect} from 'react';


const ProductListCallback = () => {
    const [data, setData] = useState();


    const fetchData = async() => {
        const response = await fetch('https://dummyjson.com/products');
        const result = await response.json();
        console.log("RESULT = ", result);
        return result;
    }

    useEffect(()=> {
        const data =  fetchData();
        setData(data);
    }, [])
    return data;
}
export default ProductListCallback;