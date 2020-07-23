import styled from 'styled-components';
import {} from 'styled-icons'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    cursor: pointer;
    padding: 5px 3px;
    border-radius: 5px;

    background-color: transparent;

    transition: background-color 0.2s;

    &:hover, &.active {
        background-color: var(--quinary);
    }

    > div {
        display: flex;
        align-items: centerr;
    }

    > div span {
        margin-left: 5px;
        color: var(--senary);
    }
`;

export const HashtagIcon = styled()``;

export const InviteIcon = styled()``;

export const SettingsIcon = styled()``;
