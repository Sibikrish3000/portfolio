import styled from 'styled-components';

export const ContainerSucces = styled.div`
  margin-top: 10rem;
  text-align: center;

  button {
    border-radius: 0.6rem;
    padding: 1rem;
    margin: 0 auto; /* Changed to properly center the button */
    font-size: 0.938rem;
    text-transform: uppercase;
    text-align: center;
    color: #fbfbfb;
    background-color: hsl(224, 89%, 60%);
    border: none;
    cursor: pointer;
    display: block; /* Centers the button */
  }

  button:disabled {
    filter: brightness(0.8);
    cursor: not-allowed;
  }
`;
