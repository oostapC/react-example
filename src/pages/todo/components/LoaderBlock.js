import React from 'react';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import './LoaderBlock.css';


export default function LoaderBlock(){
    return (
        <div className="loader">
            <Loader 
                type="Oval"
                color="rgba(207, 125, 255, 0.9)"
            />
        </div>
    )
}