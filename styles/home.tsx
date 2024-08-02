"use client";
import styled from "styled-components";

export const Section = styled.section<{
    $bg: string;
}>`
    background-image: url(${({ $bg }) => $bg});
    background-size: cover;
    background-position: center;
    position: relative;
    box-shadow: 0px -164px 50px 132px rgba(0,0,0,0.75) inset;
    -webkit-box-shadow: 0px -164px 50px 132px rgba(0,0,0,0.75) inset;
    -moz-box-shadow: 0px -164px 50px 132px rgba(0,0,0,0.75) inset;

        @media (min-width: 768px) {
        box-shadow: 0px -49px 53px 146px rgba(0,0,0,0.75) inset;
        -webkit-box-shadow: 0px -49px 53px 146px rgba(0,0,0,0.75) inset;
        -moz-box-shadow: 0px -49px 53px 146px rgba(0,0,0,0.75) inset;
      
    }

`;


export const TextDecorator = styled.div`
    box-shadow: -1px 1px 124px 91px rgba(0,0,0,0.75) inset;
    -webkit-box-shadow: -1px 1px 124px 91px rgba(0,0,0,0.75) inset;
    -moz-box-shadow: -1px 1px 124px 91px rgba(0,0,0,0.75) inset;
    display: flex;
    flex-direction: column;
    border-radius: 0.75rem;
    padding: 3rem 2rem;
    width: fit-content;
`;

