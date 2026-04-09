const { json, loadDb, authUser, publicUser } = require('./lib/common');

exports.handler = async (event) => {
  if (event.httpMethod !== 'GET') return json(405, { error: 'Método no permitido.' });
  const payload = authUser(event);
  if (!payload) return json(401, { error: 'No autorizado.' });

  const db = await loadDb();
  const user = db.users.find((u) => u.username === payload.u);
  if (!user) return json(404, { error: 'Usuario no encontrado.' });

  return json(200, { ok: true, user: publicUser(user) });
};
