import styled from 'styled-components';

export const TableTransactionHistory = styled.table`
    border-collapse: collapse;  
    table-layout: auto;
    border: 2px solid silver;
    box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.5);
    width: 400px;
    margin: 60px auto;
    padding: 5px;
    background-color: #EDF6F4;  
`
export const TitleTable = styled.th`
    padding: 8px;
    text-align: center;
    border-bottom: 1px solid #ddd;
    background-color: #bfeef5;  
`
export const DataTable = styled.td`
    padding: 8px;
    text-align: center;
    border-bottom: 1px solid #ddd;
`
export const RowTable = styled.tr`
:hover {
    background-color: #C7DBF4;
}
`