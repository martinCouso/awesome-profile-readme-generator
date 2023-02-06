export const setupMocks = async () => {
  const { mswServer } = await import('./mswServer')
  mswServer.listen()
}
