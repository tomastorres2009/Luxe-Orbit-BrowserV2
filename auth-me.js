const crypto = require('crypto');
const fs = require('fs/promises');
const path = require('path');

let getStore = null;
try {
  ({ getStore } = require('@netlify/blobs'));
} catch {}

const DEFAULT_SETTINGS = {
  theme: 'midnight',
  accent: 'violet',
  openMode: 'split',
  motion: 'rich',
  sounds: true,
  provider1: 'duckduckgo',
  provider2: 'searx',
  provider3: 'wikipedia',
  resultAutoload: true,
  timeoutMs: 6000,
};

const SECRET = process.env.APP_SECRET || 'aura-orbit-netlify-secret-change-me';
const LOCAL_DATA_FILE = path.join(process.cwd(), '.local-netlify-accounts.json');
const STORE_NAME = 'aura-orbit-browser-accounts';
const STORE_KEY = 'users.json';

function json(statusCode, data, extraHeaders = {}) {
  return {
    statusCode,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'no-store',
      ...extraHeaders,
    },
    body: JSON.stringify(data),
  };
}

function html(statusCode, body, extraHeaders = {}) {
  return {
    statusCode,
    headers: {
      'content-type': 'text/html; charset=utf-8',
      'cache-control': 'no-store',
      ...extraHeaders,
    },
    body,
  };
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

async function loadDb() {
  if (getStore && process.env.NETLIFY) {
    const store = getStore(STORE_NAME);
    const raw = await store.get(STORE_KEY, { type: 'text' });
    if (!raw) return { users: [] };
    try {
      const parsed = JSON.parse(raw);
      return { users: Array.isArray(parsed.users) ? parsed.users : [] };
    } catch {
      return { users: [] };
    }
  }

  try {
    const raw = await fs.readFile(LOCAL_DATA_FILE, 'utf8');
    const parsed = JSON.parse(raw);
    return { users: Array.isArray(parsed.users) ? parsed.users : [] };
  } catch {
    return { users: [] };
  }
}

async function saveDb(data) {
  const safe = JSON.stringify({ users: Array.isArray(data.users) ? data.users : [] }, null, 2);
  if (getStore && process.env.NETLIFY) {
    const store = getStore(STORE_NAME);
    await store.set(STORE_KEY, safe);
    return;
  }
  await fs.writeFile(LOCAL_DATA_FILE, safe, 'utf8');
}

function normalizeUser(username) {
  return String(username || '').trim().toLowerCase();
}

function createPasswordHash(password, salt = crypto.randomBytes(16).toString('hex')) {
  const hash = crypto.scryptSync(String(password), salt, 64).toString('hex');
  return { salt, hash };
}

function verifyPassword(password, salt, hash) {
  const test = crypto.scryptSync(String(password), salt, 64).toString('hex');
  try {
    return crypto.timingSafeEqual(Buffer.from(test, 'hex'), Buffer.from(hash, 'hex'));
  } catch {
    return false;
  }
}

function base64url(input) {
  return Buffer.from(input).toString('base64url');
}

function signToken(payload) {
  const data = base64url(JSON.stringify(payload));
  const sig = crypto.createHmac('sha256', SECRET).update(data).digest('base64url');
  return `${data}.${sig}`;
}

function verifyToken(token) {
  if (!token || !token.includes('.')) return null;
  const [data, sig] = token.split('.');
  const expected = crypto.createHmac('sha256', SECRET).update(data).digest('base64url');
  if (sig !== expected) return null;
  try {
    const payload = JSON.parse(Buffer.from(data, 'base64url').toString('utf8'));
    if (!payload?.u || !payload?.exp || Date.now() > payload.exp) return null;
    return payload;
  } catch {
    return null;
  }
}

function authUser(event) {
  const auth = event.headers?.authorization || event.headers?.Authorization || '';
  const token = auth.startsWith('Bearer ') ? auth.slice(7) : '';
  return verifyToken(token);
}

function sanitizeSettings(input = {}) {
  const out = { ...DEFAULT_SETTINGS };
  for (const key of Object.keys(DEFAULT_SETTINGS)) {
    if (key in input) out[key] = input[key];
  }
  out.theme = ['midnight', 'graphite', 'sunset'].includes(out.theme) ? out.theme : DEFAULT_SETTINGS.theme;
  out.accent = ['violet', 'cyan', 'rose', 'amber'].includes(out.accent) ? out.accent : DEFAULT_SETTINGS.accent;
  out.openMode = ['internal', 'split', 'external'].includes(out.openMode) ? out.openMode : DEFAULT_SETTINGS.openMode;
  out.motion = ['rich', 'reduced'].includes(out.motion) ? out.motion : DEFAULT_SETTINGS.motion;
  out.provider1 = ['duckduckgo', 'searx', 'wikipedia'].includes(out.provider1) ? out.provider1 : DEFAULT_SETTINGS.provider1;
  out.provider2 = ['duckduckgo', 'searx', 'wikipedia'].includes(out.provider2) ? out.provider2 : DEFAULT_SETTINGS.provider2;
  out.provider3 = ['duckduckgo', 'searx', 'wikipedia'].includes(out.provider3) ? out.provider3 : DEFAULT_SETTINGS.provider3;
  out.sounds = !!out.sounds;
  out.resultAutoload = !!out.resultAutoload;
  out.timeoutMs = Math.max(2500, Math.min(12000, Number(out.timeoutMs) || DEFAULT_SETTINGS.timeoutMs));
  return out;
}

function publicUser(user) {
  return {
    username: user.username,
    displayName: user.displayName || user.username,
    settings: sanitizeSettings(user.settings || {}),
  };
}

function parseBody(event) {
  try {
    return event.body ? JSON.parse(event.body) : {};
  } catch {
    return {};
  }
}

module.exports = {
  DEFAULT_SETTINGS,
  json,
  html,
  escapeHtml,
  loadDb,
  saveDb,
  normalizeUser,
  createPasswordHash,
  verifyPassword,
  signToken,
  verifyToken,
  authUser,
  sanitizeSettings,
  publicUser,
  parseBody,
};
