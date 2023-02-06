import { rest, setupWorker } from 'msw'
//import { Buffer } from 'buffer'

export const mswWorker = setupWorker(
  rest.post('/api/generator', (req, res, ctx) => {
    console.log('ctx', ctx)
    /*const svgBuffer = Buffer.from(
      `<svg fill="none" viewBox="0 0 4000px 100%" width="100%" height="4000px" xmlns="http://www.w3.org/2000/svg" style="max-width: 846px; min-height:4000px"></svg>`
    )*/
    return res(
      /*ctx.set('Content-Disposition', 'attachment; filename=profile.svg'),
          ctx.set('Content-Type', 'application/svg'),*/
      // Respond with the "ArrayBuffer".
      ctx.body(JSON.stringify({ test1: 'test1' }))
    )
  })
)
