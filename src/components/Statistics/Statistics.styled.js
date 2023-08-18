import styled from 'styled-components';

export const SectionStat  = styled.section`
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: 0.02em;
    max-width: 350px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 30px;
    border: 1px solid #F0F7F6;
`;

export const TitleStat  = styled.h2`
    font-size: 18px;
    /* max-width: 350px; */
    display: flex;
    align-items: center;
    justify-content: center;

`;

export const ListStat  = styled.ul`
    width: 350px;
    display: flex;
    flex-wrap: nowrap;
    margin: 0 auto;
    padding: 0;
    align-items: center;
    justify-content: center;
    list-style: none;

`;

export const ItemStat = styled.li`
    width: 100%;
    display: flex;
    flex-basis: calc((100% - 4 * 2px) / 5);
    flex-direction: column;
    align-items: center;  
    padding: 5px;

`;