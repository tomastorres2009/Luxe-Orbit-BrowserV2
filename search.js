const {
  json,
  loadDb,
  normalizeUser,
  verifyPassword,
  signToken,
  publicUser,
  parseBody,
} = require('./lib/common');

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') return json(405, { error: 'Método no permitido.' });
  const body = parseBody(event);
  const username = normalizeUser(body.username);
  const password = String(body.password || '');

  const db = await loadDb();
  const user = db.users.find((u) => u.username === username);
  if (!user || !verifyPassword(password, user.salt, user.hash)) {
    return json(401, { error: 'Usuario o contraseña incorrectos.' });
  }

  const token = signToken({ u: user.username, exp: Date.now() + 1000 * 60 * 60 * 24 * 7 });
  return json(200, { ok: true, token, user: publicUser(user) });
};
