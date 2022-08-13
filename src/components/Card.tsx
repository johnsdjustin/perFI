import React, { FunctionComponent } from "react";
import './Card.css';

interface CardProps {
    children?: React.ReactNode
}

const Card: FunctionComponent<CardProps> = ({children}) => {
    return (
        <div className="Card">
            <div className='CardContainer'>
                {children}
            </div>
        </div>
    )
}

export default Card;