'use client'
import React from 'react'
import { Button } from '../../styles/styled'

interface CustomButtonProps {
  v: string
  onClick?: () => void
  bgColor?: string
  hoverColor?: string
}

export const Buttons: React.FC<CustomButtonProps> = ({ v, onClick, bgColor, hoverColor }) => {
  return (
    <Button $bgColor={bgColor} $hoverColor={hoverColor} onClick={onClick}>
      {v}
    </Button>
  )
}
