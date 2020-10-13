import styled, { css } from "styled-components";
import FilteredPropsInputField from "./FilteredPropsInputField";

export const Input = styled(FilteredPropsInputField)`
  width: 50rem;
  height: 1.5rem;
  padding: 0 1rem;
  background-color: transparent;
  border: 1px solid white;
  color: white;
  font-size: 0.9rem;

  ${({ error }) =>
    error &&
    css`
      height: 1.5rem;
      border: 1px solid rgb(0, 0, 0);
      outline: none;
      font-size: 0.9rem;
      padding-left: 1rem;
    `}
`;

export const StyledInlineErrorMessage = styled.div`
  margin: .2rem 0 0 .5rem;
  padding-left: 0.7rem;
  display: block;
  background-color: transparent;
  color: black;
  text-align: center;
  text-transform: uppercase;
  font-size: .7rem;
  white-space: pre-line;
`;