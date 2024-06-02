import BigButton from '../BigButton/BigButton';
import Filter from '../Filter/Filter';
import classes from './TableHeader.module.scss';

type TableHeaderProps = {
    onOpen: () => void;
};

const TableHeader = ({onOpen}: TableHeaderProps) => {
    return (
        <div className={classes.container}>
            <Filter></Filter>
            <BigButton onClick={onOpen}>Добавить</BigButton>
        </div>
    )
}

export default TableHeader;