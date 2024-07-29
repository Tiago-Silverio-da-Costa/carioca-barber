"use client";
import styled from "styled-components";

export const Section = styled.section<{
    $bg: string;
}>`
    background-image: url(${({ $bg }) => $bg});
    background-size: cover;
    background-position: 20% 50%; 
    position: relative;
    box-shadow: -29px 1px 124px 59px rgba(0,0,0,0.75) inset;
    -webkit-box-shadow: -29px 1px 124px 59px rgba(0,0,0,0.75) inset;
    -moz-box-shadow: -29px 1px 124px 59px rgba(0,0,0,0.75) inset;

    @media (min-width: 768px) {
    background-position: center;
    }
`;


export const TextDecorator = styled.section`
    box-shadow: -1px 1px 124px 91px rgba(0,0,0,0.75) inset;
    -webkit-box-shadow: -1px 1px 124px 91px rgba(0,0,0,0.75) inset;
    -moz-box-shadow: -1px 1px 124px 91px rgba(0,0,0,0.75) inset;
    display: flex;
    flex-direction: column;
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 0.75rem;
    padding: 3rem 2rem;
    width: fit-content;
`;

