import {TableTransactionHistory, TitleTable, DataTable, RowTable} from "./TransactionHistory.styled"

export const TransactionHistory = ({ items }) => {
    return (
        <TableTransactionHistory>
            <thead>
                <tr>
                    <TitleTable>Type</TitleTable>
                    <TitleTable>Amount</TitleTable>
                    <TitleTable>Currency</TitleTable>
                </tr>
            </thead>

            <tbody>
                {items.map(item => (
                <RowTable key={item.id}>
                    <DataTable>{item.type}</DataTable>
                    <DataTable>{item.amount}</DataTable>
                    <DataTable>{item.currency}</DataTable>
                </RowTable>
                ))}
            </tbody>
        </TableTransactionHistory>
    );
};
