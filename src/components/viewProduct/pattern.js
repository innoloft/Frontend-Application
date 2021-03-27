import styled from 'styled-components';

export default styled.div`
    width: 30%;
    height: 250px;
    --bg: #d9e4f1;
    background-color: transparent;
    background-image: radial-gradient(var(--bg) 10%, transparent 1%),
    radial-gradient(var(--bg) 20%, transparent 05%);
    background-size: 10px 10px;;
    position: absolute;
    margin: 40px`;
