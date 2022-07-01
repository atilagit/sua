import { formatPrice } from 'util/formatters';
import './styles.css';

type Props = {
    text: string;
    total: number;
}

const ResumeBadge = ({ text, total }: Props) => {
    return (
        <div className='resumo-container'>
            {`${text} ${formatPrice(total)}`}
        </div>
    )
}

export default ResumeBadge;