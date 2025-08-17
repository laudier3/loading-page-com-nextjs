'use client'
import styled, { keyframes } from "styled-components";
import Image from "next/image";

// === Animações ===
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const gradientX = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// === Loading Page ===
export const LoadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
  color: white;
  background: linear-gradient(to bottom right, #111827, #1f2937, #000000);
  background-size: 200% 200%;
  animation: ${gradientX} 6s ease infinite;
`;

export const Spinner = styled.div`
  width: 80px;
  height: 80px;
  border: 6px solid rgba(255, 255, 255, 0.2);
  border-top-color: #fff;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
  margin: 0 auto 1.5rem;
  box-shadow: 0 0 25px rgba(255, 255, 255, 0.4);
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  //drop-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
`;

export const Subtitle = styled.p`
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
`;

// === Landing Page ===
export const Container = styled.div`
  min-height: 100vh;
  background: #000;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem 1rem;
  text-align: center;
  flex-direction: column;
`;

export const ProductImage = styled(Image)`
  border-radius: 1rem;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
  border: 1px solid #444;
  margin-bottom: 2rem;
`;

export const Heading = styled.h1`
  font-size: 3rem;
  font-weight: 900;
  margin-bottom: 1rem;
`;

export const Description = styled.p`
  font-size: 1.125rem;
  color: #d1d5db;
  margin-bottom: 2rem;
`;

export const BuyButton = styled.a`
  display: inline-block;
  padding: 1rem 2rem;
  font-size: 1.125rem;
  font-weight: 600;
  color: white;
  background: linear-gradient(to right, #3b82f6, #8b5cf6);
  border-radius: 0.75rem;
  box-shadow: 0 4px 14px rgba(139, 92, 246, 0.3);
  transition: background 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    background: linear-gradient(to right, #8b5cf6, #ec4899);
    box-shadow: 0 6px 20px rgba(236, 72, 153, 0.4);
  }
`;

interface ButtonProps {
  $bgColor?: string
  $hoverColor?: string
}

interface InputProps {
  $borderColor?: string
  $focusColor?: string
}

export const Button = styled.button<ButtonProps>`
  background-color: ${(props) => props.$bgColor || '#0070f3'};
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.2s ease;
  margin: 5px;

  &:hover {
    background-color: ${(props) => props.$hoverColor || 'green'};
  }
`

export const Inputs = styled.input<InputProps>`
   padding: 10px 16px 10px 40px; /* espaço para a lupa */
  border: 2px solid ${(props) => props.$borderColor || '#ccc'};
  border-radius: 6px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.2s ease;

  background-image: url('data:image/svg+xml;utf8,<svg fill="gray" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10,2A8,8 0 0,1 18,10C18,12.21 17.12,14.21 15.66,15.66L20.71,20.71L19.29,22.12L14.24,17.07C12.79,18.53 10.79,19.41 8.58,19.41A8,8 0 0,1 0.58,11.41A8,8 0 0,1 10,2M10,4A6,6 0 0,0 4,10A6,6 0 0,0 10,16A6,6 0 0,0 16,10A6,6 0 0,0 10,4Z" /></svg>');
  background-repeat: no-repeat;
  background-position: 12px center;
  background-size: 18px;

  &::placeholder {
    color: #aaa;
  }

  &:focus {
    border-color: ${(props) => props.$focusColor || '#0070f3'};
  }
`
