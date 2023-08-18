import styled from 'styled-components';


export const Wrapper = styled.div`
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: 0.02em;
    max-width: 250px;
    margin-left: auto;
    margin-right: auto;
`;

export const DescriptionDiv = styled.div`
    display: flex;
    gap: 5px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #EDF6F4;
    padding: 10px;
    border-bottom: 1px solid #434455;
`;

export const Name = styled.p`
    font-weight: bold;
`;

export const ListData = styled.ul`
    width: 250px;
    display: flex;
    flex-wrap: nowrap;
    margin: 0 auto;
    padding: 0;
    align-items: center;
    justify-content: center;
    list-style: none;
    background-color: #EDF6F4;

`;

export const ListItem = styled.li`
    width: 100%;
    display: flex;
    flex-basis: calc((100% - 2 * 8px) / 3);
    flex-direction: column;
    align-items: center;  
    padding: 5px;
`;

export const LabelSpan = styled.span`
    display: flex;
    font-size: 16px;
    line-height: 1.62;
    /* font-weight: bold; */
    text-align: center; 
    justify-content: center 
`;

export const QuantitySpan = styled.span`
    text-align: center;
    font-size: 16px;
    line-height: 1.58;
    font-weight: bold;
    margin: 10px auto; 
`;