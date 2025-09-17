import IncomeImg from '../../assets/Entradas.svg'
import OutcomeImg from '../../assets/Saídas.svg'
import TotalImg from '../../assets/Total.svg'

import { Container } from "./styles";

export function Summary(){
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={IncomeImg} alt="Etradas" />
                </header>
                <strong>MTN10000.00</strong>
            </div>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={OutcomeImg} alt="Saídas" />
                </header>
                <strong>-MTN5000.00</strong>
            </div>
            <div className='highlight-background'>
                <header>
                    <p>Entradas</p>
                    <img src={TotalImg} alt="Total" />
                </header>
                <strong>MTN5000.00</strong>
            </div>
        </Container>
    );
}