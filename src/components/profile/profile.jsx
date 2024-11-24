import css from './profile.module.css'

function Profile() {
    return (
        <div className="profile">
            <img
                src="https://minio.nplus1.ru/app-images/183689/1691622a964837af78f19751238ef2fb.jpg"
                alt=""
                className={css.ava}
            />

            <strong className={css.name}>Кирилл</strong>
            <div className={css.status}>
                Не дрейфь лягуха - болото будет нашим!
            </div>
        </div>
    )
}

export default Profile;