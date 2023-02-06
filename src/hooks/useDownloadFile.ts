import { useEffect, useRef, useState } from 'react'

function useDownloadFile(
  responseBlob: Blob | undefined,
  filename: string,
  ext: string
): { error: boolean | Error; success: boolean } {
  const [error, setError] = useState<Error | boolean>(false)
  const [success, setSuccess] = useState<boolean>(false)
  const cancel = useRef<boolean>(false)

  useEffect(() => {
    function downloadFile() {
      if (!responseBlob) return
      cancel.current = false

      try {
        const blob = new Blob([responseBlob])
        const url = window.URL.createObjectURL(blob)
        const a = document.createElement('a')
        document.body.appendChild(a)
        a.href = url
        a.download = `${filename}.${ext}`
        a.click()
        window.URL.revokeObjectURL(url)
        setSuccess(true)
      } catch (error) {
        setError(error as Error)
      }
    }
    downloadFile()

    return () => {
      cancel.current = false
    }
  }, [responseBlob, filename, ext])

  return { success, error }
}

export default useDownloadFile
