import { ApiService } from 'core/http'

export interface CommitData {
  sha: string
  commit: { message: string; committer: CommitterData }
  html_url: string
  author: AuthorData
}

export interface CommitterData {
  date: string
  name: string
}

export interface AuthorData {
  login: string
  avatar_url: string
  html_url: string
}

const getCommits = () => {
  return ApiService.get<CommitData[]>('repos/pablonafa08/fulltimeforceTest/commits')
}

export const CommitService = {
  getCommits,
}
