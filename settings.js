const {
  DEFAULT_SETTINGS,
  json,
  loadDb,
  saveDb,
  normalizeUser,
  createPasswordHash,
  signToken,
  publicUser,
  parseBody,
} = require('./lib/common');

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') return json(405, { error: 'Método no permitido.' });
  const body = parseBody(event);
  const username = normalizeUser(body.username);
  const password = String(body.password || '');

  if (!/^[a-z0-9_\-.]{3,24}$/.test(username)) {
    return json(400, { error: 'Usuario inválido. Usa 3 a 24 caracteres.' });
  }
  if (password.length < 4) {
    return json(400, { error: 'La contraseña es muy corta.' });
  }

  const db = await loadDb();
  if (db.users.some((u) => u.username === username)) {
    return json(409, { error: 'Ese usuario ya existe.' });
  }

  const { salt, hash } = createPasswordHash(password);
  const user = {
    username,
    displayName: username,
    salt,
    hash,
    settings: { ...DEFAULT_SETTINGS },
    createdAt: new Date().toISOString(),
  };

  db.users.push(user);
  await saveDb(db);

  const token = signToken({ u: user.username, exp: Date.now() + 1000 * 60 * 60 * 24 * 7 });
  return json(201, { ok: true, token, user: publicUser(user) });
};
