"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

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
} from "../../styles/styled";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <LoadingWrapper>
        <div className="text-center space-y-6">
          <Spinner />
          <Title>Carregando conhecimento...</Title>
          <Subtitle>Seu futuro na programação começa aqui 👨‍💻</Subtitle>
        </div>
      </LoadingWrapper>
    );
  }

  return (
    <Container>
      <ProductImage
        src="/curso.jpg"
        alt="Curso de Programação"
        width={350}
        height={350}
      />
      <div className="max-w-2xl w-full text-center">
        <Heading>Curso Online de Programação</Heading>
        <Description>
          Aprenda do zero ao avançado com o nosso curso completo de
          desenvolvimento web. HTML, CSS, JavaScript, React e muito mais — no
          seu ritmo, com certificado e suporte exclusivo.
        </Description>
        <BuyButton
          href="https://checkout.exemplo.com/curso"
          target="_blank"
          rel="noopener noreferrer"
        >
          Garantir minha vaga agora 💻
        </BuyButton>
      </div>
    </Container>
  );
}
