
import {Wrapper, DescriptionDiv, ListData, ListItem, LabelSpan, QuantitySpan, Name} from "./Profile.styled"


export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Wrapper>
      <DescriptionDiv>
        <img
          src={avatar} width='100'
          alt={username}
          className="avatar"
        />
        <Name>{username}</Name>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </DescriptionDiv>

      <ListData>
        <ListItem>
          <LabelSpan>Followers</LabelSpan>
          <QuantitySpan>{stats.followers}</QuantitySpan>
        </ListItem>
        <ListItem>
          <LabelSpan>Views</LabelSpan>
          <QuantitySpan>{stats.views}</QuantitySpan>
        </ListItem>
        <ListItem>
          <LabelSpan>Likes</LabelSpan>
          <QuantitySpan>{stats.likes}</QuantitySpan>
        </ListItem>
      </ListData>
    </Wrapper>
  )
};
