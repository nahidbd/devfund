/* Stores a form submission (post an opportunity, report a problem, Proposal Desk, digest sign-up) for the editor.
   Only the fields each form defines are kept, each trimmed to a safe length. No IP addresses or cookies. */
const FORMS = {
  'submit-opportunity': ['org', 'name', 'email', 'type', 'title', 'url', 'deadline', 'notes'],
  'report-problem': ['listing', 'problem', 'details', 'email'],
  'bid-desk': ['name', 'org', 'email', 'service', 'listing', 'deadline', 'details'],
  'subscribe': ['email', 'interests']
};
export async function onRequestPost({ request, env }) {
  try {
    const b = await request.json();
    const fields = FORMS[b && b['form-name']];
    if (!fields || b['bot-field']) return Response.json({ ok: true });
    const data = {};
    for (const f of fields) data[f] = String(b[f] || '').slice(0, f === 'notes' || f === 'details' ? 4000 : 400);
    if (fields.includes('email') && data.email && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(data.email)) return Response.json({ ok: false, error: 'email' }, { status: 400 });
    await env.DB.prepare('INSERT INTO submissions (ts, form, data) VALUES (?, ?, ?)').bind(Date.now(), b['form-name'], JSON.stringify(data)).run();
    return Response.json({ ok: true });
  } catch (e) {
    return Response.json({ ok: false }, { status: 500 });
  }
}
