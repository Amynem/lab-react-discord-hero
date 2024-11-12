import "./paragraph.css";

function Paragraph(props){
    const {text} = props;

    return( 
        <p className="paragraph">
            {text}
        </p>
    );
}

export default Paragraph;