import React from 'react'
import { useAsyncState } from 'core/utils'
import { CommitService } from '../data'
import { formatData, CommitDataFormat } from '../utils'

const { getCommits } = CommitService

export const Commit = () => {
  const { data, isLoading, isError, setError, setSuccess } = useAsyncState<CommitDataFormat[]>({ status: 'loading' })

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

  if (isLoading) return <div>Cargando</div>

  if (isError) return <div>Ocurrió un error al cargar los commits</div>

  return (
    <div>
      {data.map(i => (
        <div>{i.message}</div>
      ))}
    </div>
  )
}
