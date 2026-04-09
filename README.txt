AURA ORBIT BROWSER — VERSIÓN PARA NETLIFY CON FUNCTIONS

Qué incluye
- Interfaz del navegador en /public
- Búsqueda real por Netlify Function
- Proxy interno por Netlify Function
- Cuentas con usuario y contraseña
- Ajustes guardados por cuenta
- Historial y favoritos solo en sesión del navegador
- Guardado persistente de cuentas y ajustes con Netlify Blobs

Cómo subirlo a Netlify
OPCIÓN RECOMENDADA
1. Sube esta carpeta a GitHub.
2. En Netlify usa "Import an existing project".
3. Conecta el repositorio.
4. Netlify leerá netlify.toml, public y netlify/functions.
5. En Site configuration > Environment variables agrega:
   APP_SECRET = una_clave_larga_y_privada
6. Haz deploy.

OPCIÓN MANUAL CON CLI
1. npm install
2. npm install -g netlify-cli
3. netlify login
4. netlify init
5. netlify deploy --build
6. netlify deploy --prod --build

Desarrollo local
1. npm install
2. npx netlify dev

Rutas importantes
- /api/auth/register
- /api/auth/login
- /api/auth/me
- /api/settings
- /api/search
- /api/proxy

Notas reales
- La carga de páginas externas depende del sitio de destino. Algunas páginas complejas o con login pueden verse mal o abrirse mejor por fuera.
- Esta versión está pensada para Netlify con Functions. No uses solo drag and drop del output si quieres cuentas persistentes y búsqueda server-side.
