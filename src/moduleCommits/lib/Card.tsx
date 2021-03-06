import React from 'react'
import { formatDistanceToNow, parseISO } from 'date-fns'
import { useDateFormat, useDateLocale } from 'core/hooks'
import { useCommitLocales } from '../i18n'
import { CommitDataFormat } from '../utils'
import { Container, ImgGit } from './CardItems'

import gitImg from 'img/gitHubLogo.png'

const getDate = date => {
  if (!date) {
    return null
  }

  try {
    return parseISO(date)
  } catch (err) {
    console.warn(err)
    return null
  }
}

export const Card: React.FC<CommitDataFormat> = ({ id, message, date, url, author }) => {
  const { author: authorTranslate, date: dateTranslate } = useCommitLocales()
  const { format } = useDateFormat()
  const dateLocale = useDateLocale()

  return (
    <Container>
      <ImgGit src={gitImg} alt="GitHub Logo" />

      <a href={url} className="font-semibold text-xl" target="_blank" rel="noreferrer">
        {message}
      </a>

      <div className="flex items-center my-4">
        <img className="w-10 h-10 rounded-full mr-4" src={author.avatar} alt="Avatar author" />
        <div className="font-semibold">
          {authorTranslate}:{' '}
          <a href={author.profileUrl} target="_blank" rel="noreferrer">
            <span className="font-light italic" style={{ color: '#293462' }}>
              {author.name} - {author.user}
            </span>
          </a>
        </div>
      </div>

      <div>
        <span className="font-semibold">{dateTranslate}:</span> {format(getDate(date), 'P')} {format(getDate(date), 'hh:mm aaa')}
      </div>

      <div className="flex justify-between items-end" style={{ color: '#293462' }}>
        <span>({formatDistanceToNow(new Date(date), { includeSeconds: true, locale: dateLocale })})</span>
        <a href={url} className="italic" target="_blank" rel="noreferrer">
          {id.substring(0, 7)}
        </a>
      </div>
    </Container>
  )
}
