import { renderHook, waitFor } from '@testing-library/react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import useFetch from '../hooks/useFetch'
import { Buffer } from 'buffer'
import { log, error } from 'console'

const server = setupServer(
  rest.post('/api/generatorss', (req, res, ctx) => {
    log('ctx', ctx)
    const svgBuffer = Buffer.from(
      `<svg fill="none" viewBox="0 0 4000px 100%" width="100%" height="4000px" xmlns="http://www.w3.org/2000/svg" style="max-width: 846px; min-height:4000px"></svg>`
    )
    console.log('svgBuffer', svgBuffer)
    return res(
      /*ctx.set('Content-Disposition', 'attachment; filename=profile.svg'),
      ctx.set('Content-Type', 'application/svg'),*/
      // Respond with the "ArrayBuffer".
      ctx.body(JSON.stringify({ test1: 'test1' }))
    )
  })
)
beforeAll(() =>
  server.listen({
    onUnhandledRequest(req) {
      error('Found an unhandled %s request to %s', req.method, req.url.href)
    },
  })
)
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('should increment', async () => {
  const { result } = renderHook(() => useFetch())

  await waitFor(() => {
    result.current.callApi('/api/generators', true, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ test: 'test' }),
    })
  }).then(() => log('data', result.current.data))
})
