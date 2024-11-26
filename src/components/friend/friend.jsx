import { useState } from 'react';
import css from './friend.module.css';

function Friend(props) {
    let data = props.data;

    let [follow, setFollow] = useState(data.isFollow);

    function changeFollow() {
        setFollow(!follow);
    }

    return (
        <div className={css.friend}>
            <img src={data.ava} alt="" className={css.ava} />
            <div className={css.info}>
                <strong className={css.name}>{data.name}</strong>

                {
                    follow ?
                        <button onClick={changeFollow} className={css.btn}>Отписка</button> :
                        <button onClick={changeFollow} className={css.btn}>Подписаться</button>
                }
            </div>
        </div>
    )
}

export default Friend;