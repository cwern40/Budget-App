import styled from 'styled-components';
import { Link } from 'react-router-dom';

const PageContainer = styled.div`
    max-width: 800px;
    margin: 20px auto;
`
const H2Title = styled.h2`
    display: block;
    width: 100%;
    margin: 15px auto;
    color: #fff;
`

const BudgetLink = styled(Link)`
    color: #000000;
    text-decoration: none;
    display: grid;
    grid-template-columns: 90px 475px;
    grid-column: 2;

    &:hover {
        text-decoration: none;
        color: #000000;
    }
`

const BudgetContainer = styled.div`
    display: grid;
    grid-template-columns: 90px 475px auto 20px;
    grid-column: 1 / span 4;
`
const BudgetName = styled.p`
    grid-column: 2;
    text-align: left;

    &:hover {
        text-shadow: 0 0 15px rgba(0, 0, 0, 0.8);
        font-weight: 600;
        text-decoration: none;
        color: #000000;
    }
`
const BudgetSavings = styled.p`
    grid-column: 3
`
const NoBudget = styled.p`
    grid-column: 2 / span 2;
`

const IconContainer = styled.div`
    grid-column: 3;
    text-align: left;
`

const SelectBudgetContainer = styled.div`
    background: #fff;
    border-radius: 5px;
`

const ComponentHeader = styled.h4`
    padding: 15px 0px;
    width: 100%;
`

const BudgetInfoContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    background: #fff;
    border-radius: 5px;
`

const IncomeExpenseContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 380px;
    margin: 10px auto;
`

const PieChartContainer = styled.div`
    width: 380px;
    margin: 10px auto;
`

const Message = styled.p.attrs(props => ({
    color: props.color || "black",
}))`
    color: ${props => props.color};
    width: 100%;
`

const Container = styled.div`
    width: 100%;
`

export {
    PageContainer,
    H2Title,
    BudgetContainer,
    BudgetLink,
    BudgetName,
    BudgetSavings,
    NoBudget,
    IconContainer,
    SelectBudgetContainer,
    ComponentHeader,
    BudgetInfoContainer,
    IncomeExpenseContainer,
    PieChartContainer,
    Message,
    Container,
}