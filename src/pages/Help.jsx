export default function Help() {
  return (
    <section className="panel">
      <h1>Help</h1>
      <p>Common issues:</p>
      <ol>
        <li>Routes show 404 on refresh: ensure SPA fallback (serve index.html for unknown routes).</li>
        <li>Assets not loading: keep base set to "./" in Vite config for subpath hosting.</li>
      </ol>
    </section>
  )
}
