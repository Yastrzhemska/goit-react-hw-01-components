import { FriendListItem } from "./FriendListItem"
import {ListFriends} from "./FrienList.styled"


export const FriendList = ({friends}) => {
    return (
        <ListFriends>
            {friends.map(item => (
                    <FriendListItem friend={item} key={item.id}/>
            ))}
        </ListFriends>
    )
}
