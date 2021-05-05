import "./Serie.css";

export const Serie = ({poster, title, id}) => {
    return (
        <div className="serie">
            <img className="image-serie" src={poster} alt={title}/>
        </div>
    )
}