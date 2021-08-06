import { CommitData } from '../data'

export interface CommitDataFormat {
  id: string
  message: string
  date: string
  url: string
  author: Author
}

export interface Author {
  name: string
  user: string
  avatar: string
  profileUrl: string
}

export const formatData = ({ sha, commit, html_url, author }: CommitData): CommitDataFormat => {
  const { message, committer } = commit
  const { date, name } = committer
  const { login, avatar_url, html_url: html_url_author } = author

  const authorPayload = {
    name,
    user: login,
    avatar: avatar_url,
    profileUrl: html_url_author,
  }

  return { id: sha, message, date, url: html_url, author: authorPayload }
}
