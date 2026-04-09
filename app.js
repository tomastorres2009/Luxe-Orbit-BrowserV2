:root{
  --bg:#08101d;
  --bg2:#0e1730;
  --panel:rgba(12,21,40,.72);
  --panel-strong:rgba(17,26,47,.88);
  --stroke:rgba(255,255,255,.12);
  --text:#f7fbff;
  --muted:#aab6d0;
  --shadow:0 25px 80px rgba(0,0,0,.32);
  --accent:#8b5cf6;
  --accent2:#22d3ee;
  --danger:#fb7185;
  --success:#10b981;
  --warn:#f59e0b;
  --radius:24px;
  --transition:.28s ease;
  --hero-shift:0px;
}
*{box-sizing:border-box}
html,body{height:100%}
body{
  margin:0;
  font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;
  background:radial-gradient(circle at top left, rgba(139,92,246,.18), transparent 32%),radial-gradient(circle at bottom right, rgba(34,211,238,.16), transparent 34%),linear-gradient(180deg,var(--bg),var(--bg2));
  color:var(--text);
  overflow:hidden;
}
body.reduce-motion *{animation:none!important;transition:none!important;scroll-behavior:auto!important}
body.theme-graphite{--bg:#0f1117;--bg2:#1a1f2c;--panel:rgba(22,26,34,.72);--panel-strong:rgba(28,33,44,.9)}
body.theme-sunset{--bg:#150e1e;--bg2:#27122c;--panel:rgba(34,18,40,.72);--panel-strong:rgba(43,23,51,.9)}
body.accent-cyan{--accent:#06b6d4;--accent2:#67e8f9}
body.accent-rose{--accent:#f43f5e;--accent2:#fda4af}
body.accent-amber{--accent:#f59e0b;--accent2:#fcd34d}
button,input,select{font:inherit}
button{border:0;cursor:pointer}
input,select{outline:none}
.hidden{display:none!important}
.glass,.glass-strong{
  backdrop-filter:blur(18px);
  -webkit-backdrop-filter:blur(18px);
  border:1px solid var(--stroke);
  box-shadow:var(--shadow);
}
.glass{background:var(--panel)}
.glass-strong{background:var(--panel-strong)}
.bg-orb{position:fixed;inset:auto;filter:blur(42px);opacity:.55;pointer-events:none}
.orb-a{width:360px;height:360px;border-radius:999px;background:color-mix(in srgb, var(--accent) 76%, transparent);top:-80px;right:-90px}
.orb-b{width:320px;height:320px;border-radius:999px;background:color-mix(in srgb, var(--accent2) 72%, transparent);bottom:-100px;left:-60px}
.bg-grid{position:fixed;inset:0;background-image:linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px);background-size:28px 28px;mask-image:radial-gradient(circle at center, #000 45%, transparent 95%);pointer-events:none;opacity:.35}
.shell{display:flex;flex-direction:column;height:100%;padding:14px;gap:14px}
.topbar{display:grid;grid-template-columns:auto 1fr auto;align-items:center;gap:14px;border-radius:28px;padding:14px 16px;min-height:88px}
.brand-lockup{display:flex;align-items:center;gap:14px}
.menu-btn{width:46px;height:46px;border-radius:16px;background:rgba(255,255,255,.08);display:grid;gap:5px;place-content:center;color:#fff;border:1px solid rgba(255,255,255,.1)}
.menu-btn span{width:18px;height:2px;background:#fff;border-radius:999px;display:block}
.brand-logo{position:relative;width:48px;height:48px;border-radius:18px;background:linear-gradient(145deg, rgba(255,255,255,.06), rgba(255,255,255,.02));display:grid;place-items:center;border:1px solid rgba(255,255,255,.12)}
.brand-ring{width:28px;height:28px;border-radius:999px;border:4px solid var(--accent);box-shadow:0 0 18px color-mix(in srgb, var(--accent) 55%, transparent)}
.brand-dot{position:absolute;width:8px;height:8px;border-radius:999px;background:#fff;right:11px;top:12px}
.brand-copy strong{display:block;font-size:15px}
.brand-copy small{color:var(--muted)}
.toolbar{display:flex;align-items:center;gap:12px;transform:translateY(var(--hero-shift));transition:transform .45s ease, opacity .35s ease}
.nav-buttons{display:flex;align-items:center;gap:8px}
.nav-btn,.mini-icon,.tiny-btn,.action-btn{
  border-radius:14px;background:rgba(255,255,255,.08);color:var(--text);border:1px solid rgba(255,255,255,.08)
}
.nav-btn,.mini-icon{width:42px;height:42px;display:grid;place-items:center}
.nav-btn:disabled{opacity:.35;cursor:not-allowed}
.action-btn{height:42px;padding:0 14px}
.action-btn.primary,.go-btn{background:linear-gradient(135deg,var(--accent),var(--accent2));color:#07101c;font-weight:700}
.action-btn:hover,.nav-btn:hover,.tiny-btn:hover,.mini-icon:hover,.go-btn:hover,.drawer-btn:hover,.profile-pill:hover,.menu-btn:hover{filter:brightness(1.08);transform:translateY(-1px)}
.omnibox{display:grid;grid-template-columns:auto 1fr auto auto auto;align-items:center;gap:10px;padding:8px;border-radius:22px;min-height:58px;flex:1}
.engine-pill{display:flex;align-items:center;gap:10px;padding:0 12px;height:42px;border-radius:14px;background:rgba(255,255,255,.08);min-width:150px}
.engine-icon{width:24px;height:24px;border-radius:999px;background:linear-gradient(135deg,var(--accent),var(--accent2));color:#07101c;display:grid;place-items:center;font-weight:900;font-size:12px}
.engine-icon.big{width:38px;height:38px;font-size:18px}
#navInput,#heroInput{width:100%;background:transparent;border:0;color:var(--text);font-size:16px}
#navInput::placeholder,#heroInput::placeholder{color:var(--muted)}
.go-btn{height:42px;padding:0 18px;border-radius:14px}
.top-right{display:flex;align-items:center;gap:12px}
.status-pill,.profile-pill{height:44px;border-radius:16px;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.1);display:flex;align-items:center}
.status-pill{padding:0 14px;color:#dbe8ff}
.profile-pill{padding:0 10px 0 8px;gap:10px;color:var(--text)}
.avatar{width:28px;height:28px;border-radius:999px;background:linear-gradient(135deg,var(--accent),var(--accent2));color:#07101c;display:grid;place-items:center;font-weight:900}
.avatar.large{width:56px;height:56px;font-size:20px}
.main-layout{display:grid;grid-template-columns:320px 1fr;gap:14px;min-height:0;flex:1}
.sidebar{border-radius:28px;padding:14px;display:flex;flex-direction:column;gap:14px;overflow:auto}
.side-block{border-radius:22px;padding:16px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08)}
.side-block.premium{background:linear-gradient(180deg, rgba(255,255,255,.08), rgba(255,255,255,.04))}
.side-head,.section-head{display:flex;justify-content:space-between;gap:10px;align-items:center;margin-bottom:12px}
.side-head h3,.section-head h2{margin:0;font-size:16px}
.side-head p,.section-head p{margin:2px 0 0;color:var(--muted)}
.tiny-btn{height:34px;padding:0 12px}
.account-card{display:flex;gap:12px;align-items:center;margin-bottom:12px}
.account-card p{margin:4px 0 0;color:var(--muted);font-size:13px;line-height:1.4}
.side-actions{display:flex;gap:10px;flex-wrap:wrap}
.stats-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:10px}
.stat{border-radius:18px;padding:12px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.08)}
.stat span{display:block;font-size:12px;color:var(--muted);margin-bottom:6px}
.stat strong{font-size:15px}
.list-box{display:flex;flex-direction:column;gap:10px;max-height:220px;overflow:auto}
.list-item{padding:10px 12px;border-radius:16px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.08);display:flex;flex-direction:column;gap:4px}
.list-item button{background:none;color:var(--text);text-align:left;padding:0}
.list-item small{color:var(--muted);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.workspace{display:flex;flex-direction:column;gap:14px;min-width:0;min-height:0}
.hero{border-radius:30px;padding:24px;display:grid;grid-template-columns:1.2fr .9fr;gap:24px;transition:transform .45s ease, opacity .35s ease, max-height .45s ease, padding .45s ease;overflow:hidden}
body.search-mode .hero{max-height:0;padding-top:0;padding-bottom:0;opacity:0;pointer-events:none;transform:translateY(-16px)}
.hero-badges{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:12px}
.hero-badges span{padding:8px 12px;border-radius:999px;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.08);font-size:13px;color:#e8f2ff}
.hero h1{font-size:clamp(32px, 4vw, 58px);line-height:1;margin:0 0 14px}
.hero p{margin:0 0 22px;color:#c2d0e7;max-width:700px;font-size:16px}
.hero-search{display:grid;grid-template-columns:auto 1fr auto auto;gap:10px;align-items:center;border-radius:26px;padding:10px;margin-bottom:18px}
.hero-engine{display:flex;align-items:center;gap:10px;padding:0 12px;height:50px;border-radius:16px;background:rgba(255,255,255,.08)}
.hero-actions{display:flex;gap:10px;flex-wrap:wrap}
.mock-window{border-radius:26px;overflow:hidden;background:rgba(6,10,18,.7);border:1px solid rgba(255,255,255,.1);min-height:320px;box-shadow:0 30px 90px rgba(0,0,0,.32)}
.mock-top{height:48px;display:flex;align-items:center;gap:8px;padding:0 14px;background:rgba(255,255,255,.05)}
.mock-top span{width:12px;height:12px;border-radius:999px;background:#ff6b6b}
.mock-top span:nth-child(2){background:#f6c453}
.mock-top span:nth-child(3){background:#54d49d}
.mock-bar{margin-left:8px;padding:8px 12px;border-radius:12px;background:rgba(255,255,255,.06);color:#cbd5e1;font-size:13px;flex:1}
.mock-body{padding:18px;display:grid;gap:12px}
.mock-row{height:14px;border-radius:999px;background:linear-gradient(90deg, rgba(255,255,255,.18), rgba(255,255,255,.06));animation:slideGlow 2.2s infinite linear}
.mock-row.short{width:58%}
.mock-card{height:66px;border-radius:18px;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.08)}
.mock-card.tall{height:120px}
.content-grid{display:grid;grid-template-columns:minmax(360px, .9fr) minmax(360px, 1.1fr);gap:14px;min-height:0;flex:1}
.results-panel,.viewer-panel{border-radius:28px;padding:18px;display:flex;flex-direction:column;min-height:0;overflow:hidden}
.results-list{display:flex;flex-direction:column;gap:12px;overflow:auto;padding-right:4px}
.result-card{padding:16px;border-radius:22px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.09);display:flex;gap:14px;justify-content:space-between;align-items:flex-start;transition:var(--transition)}
.result-card:hover{transform:translateY(-2px);background:rgba(255,255,255,.08)}
.result-main{min-width:0}
.result-main h4{margin:0 0 6px;font-size:17px}
.result-main p{margin:0 0 8px;color:#d7e1f3;font-size:14px;line-height:1.45}
.result-main small{display:block;color:var(--muted);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.result-actions{display:flex;flex-direction:column;gap:8px;flex:0 0 auto}
.result-actions button{min-width:108px}
.viewer-head{margin-bottom:10px}
.viewer-status{padding:12px 14px;border-radius:18px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.08);color:#d7e1f3;margin-bottom:12px}
.viewer-frame-wrap{position:relative;flex:1;border-radius:22px;overflow:hidden;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);min-height:380px}
#viewerFrame{width:100%;height:100%;border:0;background:#fff}
.alert{padding:12px 14px;border-radius:18px;background:rgba(245,158,11,.15);border:1px solid rgba(245,158,11,.34);color:#fff2c5;margin-bottom:12px}
body.open-external .viewer-panel{display:none}
body.open-external .content-grid{grid-template-columns:1fr}
body.open-internal .content-grid{grid-template-columns:1fr}
body.open-internal .results-panel{display:none}
.drawer,.modal{position:fixed;inset:0;background:rgba(3,7,18,.58);display:grid;place-items:center;padding:20px;z-index:20}
.drawer-card,.modal-card{width:min(760px, 100%);border-radius:28px;padding:20px}
.drawer-card{width:min(560px,100%)}
.drawer-head,.modal-head{display:flex;justify-content:space-between;align-items:center;gap:12px;margin-bottom:18px}
.drawer-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}
.drawer-btn{height:62px;border-radius:18px;background:rgba(255,255,255,.08);color:#fff;border:1px solid rgba(255,255,255,.08)}
.tabs{display:flex;gap:10px;margin-bottom:14px}
.tab{flex:1;height:42px;border-radius:16px;background:rgba(255,255,255,.06);color:#fff;border:1px solid rgba(255,255,255,.08)}
.tab.active{background:linear-gradient(135deg,var(--accent),var(--accent2));color:#07101c;font-weight:800}
.auth-body{display:grid;gap:10px}
.auth-body input,.settings-grid input,.settings-grid select{height:46px;border-radius:14px;border:1px solid rgba(255,255,255,.12);background:rgba(255,255,255,.06);color:#fff;padding:0 14px}
.auth-body label,.settings-grid label{display:grid;gap:8px;color:#dbe6f7;font-size:14px}
.go-btn.wide{width:100%}
.settings-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px}
.modal-card.large{width:min(860px,100%)}
.toggle-row{grid-template-columns:auto 1fr;align-items:center;padding-top:16px}
.modal-actions{display:flex;justify-content:flex-end;gap:10px;margin-top:16px}
.modal-note{margin-top:14px;color:var(--muted);font-size:14px}
.toast-wrap{position:fixed;right:16px;bottom:16px;display:flex;flex-direction:column;gap:10px;z-index:30}
.toast{padding:14px 16px;border-radius:18px;min-width:260px;max-width:360px;background:rgba(14,22,38,.92);border:1px solid rgba(255,255,255,.1);box-shadow:var(--shadow)}
.toast strong{display:block;margin-bottom:4px}
.toast.success{border-color:rgba(16,185,129,.4)}
.toast.error{border-color:rgba(251,113,133,.4)}
.toast.warn{border-color:rgba(245,158,11,.4)}
@keyframes slideGlow{0%{opacity:.42}50%{opacity:1}100%{opacity:.42}}
@media (max-width: 1180px){
  .topbar{grid-template-columns:1fr;gap:12px}
  .toolbar{order:3}
  .main-layout{grid-template-columns:1fr}
  .sidebar{display:none}
  .hero{grid-template-columns:1fr}
  .content-grid{grid-template-columns:1fr}
}
@media (max-width: 760px){
  .shell{padding:10px;gap:10px}
  .topbar,.results-panel,.viewer-panel,.hero,.sidebar{border-radius:22px}
  .omnibox{grid-template-columns:auto 1fr auto auto}
  .engine-pill{min-width:unset;padding:0 10px}
  .engine-pill span:last-child{display:none}
  .right-pack{display:none}
  .hero-search{grid-template-columns:1fr auto auto}
  .hero-engine{grid-column:1/-1}
  .settings-grid{grid-template-columns:1fr}
  .drawer-grid{grid-template-columns:1fr}
}
