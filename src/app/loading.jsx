import React from 'react'
import { Spin } from 'antd'


export default function Loading() {
  return (
    <main>
      <Spin size='large' />
      <p>Carregando Página... </p>
    </main>
  )
}
