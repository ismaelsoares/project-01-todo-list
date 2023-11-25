import { useState } from 'react';
import { Item } from '../../Types/Item';
import * as C from './styles';

type Props = {
    item: Item;
}

export const ListItem = ({ item }: Props) => {
    const [isChecked, setIsChecked] = useState(item.done)

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);

    }

    return (
        <C.Container done={isChecked}>
            <input
                type="checkbox"
                checked={isChecked}
                onChange={e => setIsChecked(e.target.checked)}
            />
            <label htmlFor="" className='taskName'>{item.task}</label>
        </C.Container>
    )
}