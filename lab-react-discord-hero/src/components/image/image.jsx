import "./image.css";

function Image(props){
    const {img} = props;

    return( 
        <img className="BottomImage" src={img} />
    );
}

export default Image;