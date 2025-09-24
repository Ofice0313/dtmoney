import { Container } from "./styles";

export function TransactionsTable() {
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Desenvolvimento de Website</td>
                        <td className="deposit">MTN22000.00</td>
                        <td>Venda</td>
                        <td>17/09/2025</td>
                    </tr>

                    <tr>
                        <td>Hamburguer</td>
                        <td className="withdraw">- MTN220</td>
                        <td>Alimentação</td>
                        <td>17/09/2025</td>
                    </tr>

                    <tr>
                        <td>Aluguel do Apartamento</td>
                        <td className="withdraw">- MTN2200.00</td>
                        <td>Casa</td>
                        <td>17/09/2025</td>
                    </tr>

                    <tr>
                        <td>Computador</td>
                        <td className="deposit">MTN33000.00</td>
                        <td>Venda</td>
                        <td>17/09/2025</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
}