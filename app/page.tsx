'use client'

import { useRouter } from 'next/navigation'
import { Buttons } from "./components/Button";
//import { Imput } from './components/Imput';

export default function Page() {
  const router = useRouter()

  const irParaSobre = () => {
    router.push('/sobre')
  }
  const irParaContato = () => {
    router.push('/cursodev')
  }
  const irParaPolitica = () => {
    router.push('/loadingpage')
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-red-500">
      <Buttons bgColor="gray" hoverColor="darkgreen" onClick={irParaSobre} v='Sobre'/>
      <Buttons bgColor="aqua" hoverColor="darkgreen" onClick={irParaContato} v='CusroDev'/>
      <Buttons bgColor="blue" hoverColor="darkgreen" onClick={irParaPolitica} v='Loadingpage'/>
    </main>
  );
}
