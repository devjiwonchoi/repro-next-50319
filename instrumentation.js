export async function register() {
  console.log('Registering instrumentation hook')
  const res = await import('@/server-only')
  console.log(res.main())
}
