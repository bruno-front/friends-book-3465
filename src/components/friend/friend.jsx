import css from './friend.module.css'

function Friend(props) {
    let data = props.data;

    return (
        <div className={css.friend}>
            <img src={data.ava} alt="" className={css.ava} />
            <div className={css.info}>
                <strong className={css.name}>{data.name}</strong>

                {
                    data.isFollow ?
                        <button className={css.btn}>Отписка</button> :
                        <button className={css.btn}>Подписаться</button>
                }
            </div>
        </div>
    )
}

export default Friend;