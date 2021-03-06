import React from 'react'
import { useAsyncState } from 'core/hooks'
import { CommitService } from '../data'
import { formatData, CommitDataFormat } from '../utils'
import { MainContainer, Card, SkeletonList, ErrorMessage } from '../lib'

const { getCommits } = CommitService

export const Commits = () => {
  const { data, isLoading, isError, setSuccess, setError } = useAsyncState<CommitDataFormat[]>({ status: 'loading' })

  React.useEffect(() => {
    const getCommitsOfRepository = async () => {
      try {
        const res = await getCommits()
        const commits: CommitDataFormat[] = res.map(i => formatData(i))

        setSuccess(commits)
      } catch (error) {
        setError(error)
        console.error(error)
      }
    }

    getCommitsOfRepository()
  }, [setSuccess, setError])

  if (isLoading) return <SkeletonList />

  if (isError) return <ErrorMessage>Ocurrió un error al cargar los commits</ErrorMessage>

  return (
    <MainContainer>
      {data.map(item => (
        <Card key={item.id} {...item} />
      ))}
    </MainContainer>
  )
}
