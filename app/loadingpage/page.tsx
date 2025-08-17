"use client";

import { useEffect, useState } from "react";
//import Image from "next/image";
import produto from "../image/produto.jpg"; // iPhone image
import {
  LoadingWrapper,
  Spinner,
  Title,
  Subtitle,
  Container,
  ProductImage,
  Heading,
  Description,
  BuyButton,
} from "../../styles/styled"; // Importa os estilos

export default function Home() {
  const [hasMounted, setHasMounted] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setHasMounted(true);
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!hasMounted) return null;

  if (loading) {
    return (
      <LoadingWrapper>
        <div className="text-center space-y-6">
          <Spinner />
          <Title>Carregando o futuro...</Title>
          <Subtitle>O novo iPhone está chegando até você 🚀</Subtitle>
        </div>
      </LoadingWrapper>
    );
  }

  return (
    <Container>
      <ProductImage
        src={produto}
        alt="iPhone"
        width={350}
        height={350}
      />
      <div className="max-w-2xl w-full text-center">
        <Heading>iPhone 15 Pro Max</Heading>
        <Description>
          Design elegante. Desempenho incomparável. Câmera cinematográfica.
          Tudo isso em suas mãos agora. Não perca a chance de ter o melhor
          iPhone já feito.
        </Description>
        <BuyButton
          href="https://checkout.exemplo.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Comprar agora 📱
        </BuyButton>
      </div>
    </Container>
  );
}
