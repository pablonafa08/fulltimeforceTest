import React from 'react'
import { CommitDataFormat } from '../utils'
import { Container } from './CardItems'

export const Card: React.FC<CommitDataFormat> = ({ id, message, date, url, author }) => {
  return (
    <Container>
      <div>Mensaje: {message}</div>
      <div className="flex">
        <img src={author.avatar} alt="Avatar author" />
        <div>
          Autor: {author.name} - {author.user}
        </div>
      </div>
    </Container>
  )
}
