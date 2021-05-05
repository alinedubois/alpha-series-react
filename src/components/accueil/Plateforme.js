import "./Plateforme.css";

export const Plateforme = ({id, name, logo}) => {
    return (
        <div className="plateforme">
            <img className="image-plateforme" src={logo} alt={name}/>

        </div>
    )
}