import Friend from '../friend/friend';
import css from './friends.module.css'



let friendsData = [
    {
        name: "Вася",
        ava: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Vasily_Stalin.jpg",
        isFollow: true,
        key: 1
    },
    {
        name: "Natalie",
        ava: "https://i.pinimg.com/736x/39/34/1a/39341ac32898c0a5d0d3fc189cda0f79.jpg",
        isFollow: false,
        key: 2
    },
    {
        name: "Inga",
        ava: "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/0537c96d-f0c7-4bb4-f928-1b676a277500/width=450/196998.jpeg",
        isFollow: true,
        key: 3
    },
    {
        name: "Fidele",
        ava: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e9479d19288123.562d7db2dce3d.jpg",
        isFollow: false,
        key: 4
    }
];

let friendsArray = [];

friendsData.forEach((itemData) => {
    friendsArray.push(<Friend data={itemData} key={itemData.key} />)
});

function Friends() {
    return (
        <div className={css.friends}>
            <h2 className={css.title}>Друзья</h2>
            <div className={css.list}>
                {friendsArray}
            </div>
        </div>
    )
}

export default Friends;