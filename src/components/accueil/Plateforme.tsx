import {Link} from "react-router-dom";
import styled from "styled-components";

interface PlateformeProps {
    id: number;
    name: string;
    logo: string;
}

export const Plateforme = ({id, name, logo}: PlateformeProps) => {
    const ImagePlateforme = styled.img`
        height: 250px;
        margin-top: 50px;
        transition: 0.5s ease-in-out;
        
        &:hover {
            transform: scale(1.2);
            cursor: pointer;
        }
    `;
    return (
        <Link to={`/plateforme/${id}`}>
            <div>
                <ImagePlateforme src={logo} alt={name}/>
            </div>
        </Link>
    )
}