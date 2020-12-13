import styles from 'styled-components';

export const GameCardStyles = styles.div`
    display: flex;
    flex-direction: column;
    background-color: purple;
    border: 4px solid red;
    justify-content: center;
`;

export const GameCardButton = styles.button`
    background-color: green;
    padding: 15px 32px;
`;