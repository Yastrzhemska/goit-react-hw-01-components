import {ItemFriends, StatusFriend, AvatarFriend, NameFriend, } from "./FrienList.styled"

export const FriendListItem = ({ friend }) => {
    return (
        <ItemFriends>
            <StatusFriend $status={friend.isOnline}></StatusFriend>
            <AvatarFriend
                src={friend.avatar}
                alt={friend.name} />
            <NameFriend>{friend.name}</NameFriend>
            
        </ItemFriends>
    );
};