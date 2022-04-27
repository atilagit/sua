import './styles.css'

type Props = {
    title: string;
    content: string;
}

const FieldDetailCard = ( {title, content} : Props) => {
    return (
        <div className='container'>
            <h2>{title}</h2>
            <div className='base-card field'>
                <p>{content}</p>
            </div>
        </div>
    );
}

export default FieldDetailCard;