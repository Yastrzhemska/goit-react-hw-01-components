import {SectionStat, TitleStat, ListStat, ItemStat } from "./Statistics.styled"


export const Statistics = ({ stats }) => {
    function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
    return (
        <SectionStat>
            <TitleStat>Upload stats</TitleStat>

            <ListStat>
                {stats.map(stat => (
                    <ItemStat key={stat.id} style={{ backgroundColor: getRandomHexColor() }}>
                        <span className="label">{stat.label}</span>
                        <span className="percentage">{stat.percentage}</span>
                    </ItemStat>
                ))}
            </ListStat>
        </SectionStat>
    )
};