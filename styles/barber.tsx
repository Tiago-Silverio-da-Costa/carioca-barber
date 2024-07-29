"use client";
import styled from "styled-components";

export const JobImage = styled.div<{
    $bg: string;
}>`
    background-image: url(${({ $bg }) => $bg});
    background-size: cover;
    background-position: center;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: end;
    border-radius: 1rem;

    height: 20rem;
    width: 16rem;

`;
