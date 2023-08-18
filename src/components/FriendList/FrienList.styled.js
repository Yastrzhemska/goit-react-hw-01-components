import styled from 'styled-components';

export const ListFriends  = styled.ul`
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 350px;
    margin: 30px auto;
    list-style: none;
    padding: 5px;
    background-color: #EDF6F4;
    border-radius: 10px;

`;

export const ItemFriends = styled.li`
    display: flex;
    gap: 10px;
    flex-wrap: nowrap;
    align-items: center;
    padding: 10px;
    margin-bottom: 30px;
    border-radius: 5px;
`;

export const StatusFriend = styled.span`
    display: block; 
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => (props.statusType ? 'green' : 'red')};
`;

export const AvatarFriend = styled.img`
    width: 60px 
`

export const NameFriend= styled.p`
    font-size: 18px;
    line-height: 1.62;
    font-weight: 18px;
    margin-left: 20px;
`