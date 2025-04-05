import styled from 'styled-components'

export const VagaLista = styled.li`
  border: 1px solid ${(props) => props.theme.primary};
  background-color: ${(props) => props.theme.secondary};
  color: ${(props) => props.theme.primary};
  padding: 16px;
  transition: all ease 0.3s;
  border-radius: 8px;

  &:hover {
    background-color: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.secondary};
  }
`

export const Vagah3 = styled.h3`
  font-weight: bold;
  margin-bottom: 16px;
`

export const VagaLink = styled.a`
  border-color: ${(props) => props.theme.secondary};
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.secondary};
  display: inline-block;
  padding: 8px 16px;
  text-decoration: none;
  margin-top: 16px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  text-align: center;

  &:hover {
    background-color: ${(props) => props.theme.secondary};
    color: ${(props) => props.theme.primary};
  }

  @media (max-width: 768px) {
    display: block;
  }
`
