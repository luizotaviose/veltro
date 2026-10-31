(() => {
'use strict';

/* ---------- i18n ---------- */
const PT = {
  'skip':'Pular para o conteúdo',
  'nav.services':'Serviços','nav.route':'Como funciona','nav.ports':'Portos','nav.faq':'Dúvidas',
  'cta':'Pedir cotação',
  'hero.kicker':'Porto de Montreal',
  'hero.b1':'Sua carga tem lugar a bordo.',
  'hero.b2':'Cada taxa dita antes de zarpar.',
  'hero.h1':'Exporte do Canadá. Saiba onde está o tempo todo.',
  'hero.sub':'Exportação marítima FCL e LCL saindo de Montreal, Halifax, Vancouver e Prince Rupert. Uma cotação, um contato, um aviso a cada etapa.',
  'hero.how':'Veja como funciona','hero.cue':'Role',
  'why.tag':'Por que exportadores trocam',
  'why.title':'Três coisas que exportadores cansaram de aguentar.',
  'why.q1':'“Sumiram no meio do envio.”',
  'why.fix':'Nossa solução',
  'why.l1':'Um aviso a cada etapa.','why.a1':'Se a saída do navio mudar, você fica sabendo por nós primeiro, no mesmo dia.',
  'why.q2':'“A conta final não era a cotação.”',
  'why.l2':'Cotação item por item.','why.a2':'Cada taxa aparece antes de você fechar, então a fatura bate com o combinado.',
  'why.q3':'“Primeira exportação. Não sabemos o que precisa.”',
  'why.l3':'Cada documento, listado.','why.a3':'Dizemos o que o seu envio precisa e preparamos a maioria junto com você.',
  'svc.tag':'Serviços','svc.title':'Da sua porta até o navio, resolvido.',
  'svc.fcl.t':'Container cheio','svc.fcl.d':'Um container de 20 ou 40 pés só para a sua carga, lacrado na coleta e aberto no destino.',
  'svc.lcl.t':'Container compartilhado','svc.lcl.d':'Não enche um container? Pague só o espaço que usar, dividindo com outros exportadores.',
  'svc.doc.t':'Documentação de exportação','svc.doc.d':'Conhecimento de embarque, fatura comercial, packing list e declaração de exportação, conferidos antes de qualquer coisa sair.',
  'svc.cus.t':'Desembaraço aduaneiro','svc.cus.d':'Registramos na alfândega canadense e trabalhamos com despachantes no destino para a carga liberar sem surpresa.',
  'route.tag':'Como funciona','route.title':'Quatro paradas. Você recebe notícia em cada uma.',
  'route.s1.t':'Coleta','route.s1.d':'Buscamos sua carga ou seu container no seu armazém, numa janela de horário que você aprova.',
  'route.s2.t':'Documentos','route.s2.d':'Declaração de exportação e papelada registradas e conferidas antes de qualquer coisa sair.',
  'route.s3.t':'Embarque','route.s3.d':'Seu container vai a bordo, lacrado para a travessia.',
  'route.s4.t':'Entrega','route.s4.d':'Chegada, liberação no destino e entrega ao seu comprador.',
  'route.status':'Rotas no mapa','route.get':'Você recebe',
  'route.s1.r1':'Janela de coleta confirmada','route.s1.r2':'Dados do caminhão e do motorista',
  'route.s2.r1':'Declaração de exportação registrada','route.s2.r2':'Rascunho do conhecimento de embarque para revisar',
  'route.s3.r1':'Nome do navio e da viagem','route.s3.r2':'Data de saída e previsão de chegada',
  'route.s4.r1':'Aviso de chegada','route.s4.r2':'Comprovante de entrega',
  'route.d1':'Portos de saída','route.d1s':'duas costas','route.d2':'Destinos','route.d3':'Continentes','route.d4':'Avisos enviados',
  'route.note':'Destinos de exemplo. Diga para onde vai a sua carga e cotamos essa rota.','route.lanek':'Canadá','route.lane':'Para o mundo',
  'ports.tag':'Portos','ports.title':'Quatro portas de saída do Canadá. Nas duas costas.',
  'ports.mtl':'Para quem está em Quebec e Ontário. Direto para a Europa.',
  'ports.hal':'Águas profundas no Atlântico. O ano todo.',
  'ports.van':'O maior porto do Canadá. Porta para a Ásia.',
  'ports.w.stl':'Rio São Lourenço','ports.w.atl':'Atlântico','ports.w.pac':'Pacífico',
  'ports.east':'Costa leste','ports.west':'Costa oeste','ports.lanes':'Rotas principais',
  'ports.mtl.l':'Norte da Europa, Mediterrâneo','ports.hal.l':'Europa, Ásia via Suez','ports.van.l':'Ásia, Oceania','ports.prr.l':'Norte da Ásia',
  'ports.prr':'A travessia mais curta da América do Norte para a Ásia.',
  'pro.tag':'Nossa palavra','pro.title':'O que você pode cobrar da gente.',
  'pro.1':'pessoa com nome cuida do seu envio, do começo ao fim.',
  'pro.2':'avisos, no mínimo, em cada envio. Um a cada parada.',
  'pro.3':'taxas somadas depois de fechar que não estavam na cotação.',
  'pro.1d':'Um telefone e um email da cotação até a entrega. Sem fila de chamados.',
  'pro.2d':'Coleta, documentos, embarque e entrega. Mais, se algo mudar.',
  'pro.3d':'Se a taxa não está na cotação, você não paga. Por escrito.',
  'pro.cta':'Quer essas três por escrito no seu próximo envio?',
  'faq.k':'Ainda na dúvida?','faq.t':'Pergunte a uma pessoa, não a uma fila de chamados.',
  'faq.d':'Escreva sua dúvida no formulário de cotação. A resposta volta junto com a cotação, da mesma pessoa que vai cuidar do seu envio.',
  'faq.btn':'Perguntar na cotação',
  'faq.title':'As dúvidas que ouvimos primeiro.',
  'faq.q1':'FCL ou LCL: qual eu preciso?','faq.a1':'Se a sua carga enche quase um container de 20 pés, FCL costuma sair mais barato e mais rápido. Cargas menores vão em LCL. Mande o volume e dizemos qual custa menos.',
  'faq.q2':'O que preciso para começar a exportar?','faq.a2':'Um Business Number da Canada Revenue Agency, uma fatura comercial e um packing list. Alguns produtos também pedem licença. Conferimos o seu produto e dizemos exatamente o que vale para ele.',
  'faq.q3':'O que entra na cotação?','faq.a3':'Cada linha, com nome: coleta, taxas de porto, frete marítimo, documentação e registro na alfândega. Se não está na cotação, você não paga.',
  'faq.q4':'Quanto tempo leva um envio?','faq.a4':'Depende da rota e da agenda dos navios. A cotação traz a data de saída prevista e a chegada estimada, e avisamos na hora se alguma das duas mudar.',
  'faq.q5':'Vocês enviam carga restrita?','faq.a5':'Alguns produtos precisam de licença de exportação ou manuseio especial. Diga o que vai enviar e confirmamos o que é exigido antes de você fechar.',
  'q.tag':'Cotação','q.title':'Diga o que vai embarcar. Receba cada taxa por escrito.',
  'q.lede':'Segure para lacrar o container e abrir o pedido de cotação.',
  'q.unlock':'Segure o lacre para abrir, ou clique aqui',
  'q.hold':'Segure para lacrar','q.hint':'Ou aperte Enter para abrir o formulário.',
  'f.name':'Seu nome','f.company':'Empresa','f.email':'E-mail','f.port':'Saindo de','f.dest':'Indo para (país)','f.type':'Carga',
  'f.unsure':'Ainda não sei','f.cargo':'O que você vai enviar?','f.cargo.ph':'Produto, peso ou volume aproximado, data em que fica pronto',
  'f.send':'Pedir minha cotação','f.note':'Formulário de prévia. Os pedidos começam quando a Transcont abrir.',
  'f.ok.t':'Lacrado.','f.ok.d':'Obrigado. Este formulário é uma prévia, então nada foi enviado ainda. Ele começa a funcionar quando a Transcont abrir.',
  'foot.line':'Exportação de containers saindo do Canadá.','foot.img':'Imagens ilustrativas.',
  'foot.sub':'Exportação marítima FCL e LCL por quatro portos canadenses, com uma pessoa no seu processo da cotação à entrega.',
  'foot.nav':'Site','foot.ports':'Portos','foot.contact':'Contato','foot.top':'Voltar ao topo',
  /* texto de negociadora (2026-10-31) */
  'svc.c1':'VENDA','svc.c2':'COMPRA','svc.c3':'ACORDO','svc.c4':'ENVIO',
  'nav.services':'Serviços',
  'cta':'Começar negócio',
  'hero.kicker':'Negócio fechado',
  'hero.b1':'Seu produto tem um comprador esperando.',
  'hero.b2':'Nós negociamos. Você aprova cada condição.',
  'hero.h1':'O Canadá vende. O mundo compra. Nós fechamos o negócio.',
  'hero.sub':'A Transcont conecta quem vende no Canadá a compradores do mundo todo, e compradores de fora a fornecedores canadenses. Negociamos as condições, fechamos o contrato e acompanhamos o container até a entrega.',
  'hero.how':'Veja como funciona',
  'why.tag':'Por que nos procuram',
  'why.title':'Três coisas que compradores e vendedores cansaram de aguentar.',
  'why.q1':'“Temos o produto. Não temos comprador.”',
  'why.l1':'Compradores, encontrados para você.',
  'why.a1':'Buscamos na nossa rede e nos mercados certos para o seu produto, e trazemos compradores prontos para pedir.',
  'why.q2':'“O negócio caiu nos detalhes.”',
  'why.l2':'Condições negociadas por você.',
  'why.a2':'Preço, volume, pagamento e prazo de entrega, combinados por escrito antes de qualquer embarque.',
  'why.q3':'“Não dava para confiar num fornecedor que nunca vimos.”',
  'why.l3':'Os dois lados conferidos.',
  'why.a3':'Conferimos a empresa, o produto e a documentação dos dois lados antes de alguém assinar.',
  'svc.tag':'Serviços',
  'svc.title':'Do primeiro contato ao negócio fechado, resolvido.',
  'svc.fcl.t':'Achar compradores',
  'svc.fcl.d':'Para quem vende no Canadá. Apresentamos seu produto a compradores lá fora e trazemos propostas sérias.',
  'svc.lcl.t':'Comprar do Canadá',
  'svc.lcl.d':'Para quem compra lá fora. Diga o que precisa e encontramos fornecedores canadenses que entregam.',
  'svc.doc.t':'Negociação e contrato',
  'svc.doc.d':'Preço, volume, pagamento e Incoterms negociados e colocados num contrato que os dois lados assinam.',
  'svc.cus.t':'Acompanhamento do envio',
  'svc.cus.d':'Depois da assinatura, coordenamos o container com transportadoras parceiras e acompanhamos até o comprador receber.',
  'route.title':'Quatro etapas. Você recebe notícia em cada uma.',
  'route.s1.t':'Conexão',
  'route.s1.d':'Encontramos o comprador ou fornecedor certo e apresentamos os dois lados.',
  'route.s1.r1':'Perfil da outra parte',
  'route.s1.r2':'Primeira proposta ou pedido',
  'route.s2.t':'Negociação',
  'route.s2.d':'Negociamos preço, volume, pagamento e prazo de entrega por você.',
  'route.s2.r1':'Cada condição por escrito',
  'route.s2.r2':'Sua aprovação antes de fechar',
  'route.s3.t':'Contrato',
  'route.s3.d':'O negócio é fechado e assinado pelos dois lados.',
  'route.s3.r1':'Contrato assinado',
  'route.s3.r2':'Condições de pagamento confirmadas',
  'route.s4.t':'Entrega',
  'route.s4.d':'Transportadoras parceiras levam o container e nós acompanhamos até o comprador.',
  'route.s4.r1':'Avisos do embarque',
  'route.s4.r2':'Comprovante de entrega',
  'route.status':'Mercados no mapa',
  'route.d2':'Mercados',
  'route.note':'Mercados de exemplo. Diga seu produto ou o que precisa e mostramos onde o negócio pode acontecer.',
  'ports.title':'Quatro portas de saída do Canadá. Nas duas costas.',
  'ports.mtl':'Fornecedores de Quebec e Ontário. Direto para a Europa.',
  'pro.1':'pessoa com nome cuida do seu negócio, do primeiro contato à entrega.',
  'pro.1d':'Um telefone e um email para o negócio inteiro. Sem fila de chamados.',
  'pro.2':'avisos, no mínimo, em cada negócio. Um a cada etapa.',
  'pro.2d':'Conexão, negociação, contrato e entrega. Mais, se algo mudar.',
  'pro.3':'condições no seu contrato que você não aprovou.',
  'pro.3d':'Nada é assinado antes de você ler e aprovar cada linha.',
  'pro.cta':'Quer essas três por escrito no seu próximo negócio?',
  'faq.d':'Escreva sua dúvida no formulário. A resposta vem da mesma pessoa que vai cuidar do seu negócio.',
  'faq.btn':'Fazer uma pergunta',
  'faq.q1':'Como vocês acham compradores e fornecedores?',
  'faq.a1':'Pelos nossos contatos, redes de comércio e busca direta nos mercados certos para o seu produto. Cada contato é conferido antes de chegar a você.',
  'faq.q2':'Vocês trabalham para quem, comprador ou vendedor?',
  'faq.a2':'Para o lado que nos contrata. Deixamos isso claro para o outro lado desde o primeiro contato, e nunca escondemos condições de você.',
  'faq.q3':'Como vocês cobram?',
  'faq.a3':'Nossa taxa é combinada por escrito antes de começar e depende do tipo e do tamanho do negócio. Conte sobre o seu e explicamos.',
  'faq.q4':'Vocês cuidam do transporte também?',
  'faq.a4':'Sim. Depois do contrato assinado, coordenamos o container com transportadoras parceiras e acompanhamos até a entrega.',
  'faq.q5':'Que produtos vocês negociam?',
  'faq.a5':'Produtos que viajam em container, de alimentos e matéria prima a produtos industrializados. Alguns pedem licença, e conferimos isso antes de qualquer proposta.',
  'q.tag':'Começar',
  'q.title':'Diga o que você vende ou o que precisa. Nós achamos o outro lado.',
  'q.lede':'Segure para lacrar o container e abrir o formulário.',
  'f.port':'Eu quero',
  'f.sell':'Vender do Canadá',
  'f.buy':'Comprar do Canadá',
  'f.dest':'Mercado (país)',
  'f.type':'Volume',
  'f.v1':'Um container',
  'f.v2':'Vários containers',
  'f.v3':'Pedidos recorrentes',
  'f.cargo':'Qual produto?',
  'f.send':'Enviar meu pedido',
  'foot.line':'Negócios entre o Canadá e o mundo.',
  'foot.sub':'Conectamos vendedores canadenses e compradores do mundo todo, negociamos o negócio e acompanhamos o container até a entrega.',
  'f.cargo.ph':'Produto, quantidade, especificações e quando precisa'
};
const EN = {};
document.querySelectorAll('[data-i18n]').forEach(el => { EN[el.dataset.i18n] = el.textContent; });
document.querySelectorAll('[data-i18n-ph]').forEach(el => { EN[el.dataset.i18nPh] = el.placeholder; });
let lang = 'en';
try { lang = localStorage.getItem('tc-lang') === 'pt' ? 'pt' : 'en'; } catch(e) {}

function rng(seed){ let s = seed >>> 0; return () => (s = (s * 1664525 + 1013904223) >>> 0) / 4294967296; }

function split(el, text, seed){
  const r = rng(seed);
  const spread = parseFloat(el.dataset.spread || '0.45');
  el.textContent = '';
  const sr = document.createElement('span'); sr.className = 'sr'; sr.textContent = text;
  const vis = document.createElement('span'); vis.setAttribute('aria-hidden','true');
  const words = text.split(' ');
  const total = text.replace(/ /g,'').length;
  let ci = 0;
  words.forEach((w, wi) => {
    const ws = document.createElement('span'); ws.className = 'w';
    ws.style.setProperty('--th', (wi / Math.max(1, words.length)) * 0.55);
    [...w].forEach(ch => {
      const cs = document.createElement('span'); cs.className = 'c'; cs.textContent = ch;
      cs.style.setProperty('--th', (ci / total) * spread + r() * 0.06);
      cs.style.setProperty('--jx', ((r() * 2 - 1) * 60).toFixed(1) + 'px');
      ws.appendChild(cs); ci++;
    });
    vis.appendChild(ws);
    if (wi < words.length - 1) vis.appendChild(document.createTextNode(' '));
  });
  el.append(sr, vis);
}

function applyLang(l){
  lang = l;
  document.documentElement.lang = l === 'pt' ? 'pt-BR' : 'en';
  document.querySelectorAll('[data-i18n]').forEach((el, i) => {
    const key = el.dataset.i18n;
    const t = l === 'pt' ? (PT[key] ?? EN[key]) : EN[key];
    if (el.hasAttribute('data-split')) split(el, t, 7 + i * 31);
    else el.textContent = t;
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.dataset.i18nPh; el.placeholder = l === 'pt' ? (PT[key] ?? EN[key]) : EN[key];
  });
  document.querySelectorAll('.lang button').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.lang === l)));
  try { localStorage.setItem('tc-lang', l); } catch(e) {}
  lastStatus = -1; bands.forEach(b => { b.op = -1; b.k = -1; });
  if (typeof updateCaptions === 'function') updateCaptions(scrubOn ? shown : 1);
  updateRoute();
}
document.querySelectorAll('.lang button').forEach(b => b.addEventListener('click', () => applyLang(b.dataset.lang)));

/* ---------- nav ---------- */
const nav = document.getElementById('nav');
const heroEl = document.querySelector('.hero');
const stage = document.querySelector('.stage');
let navSolid = null;
function updateNav(){
  const solid = scrollY > heroEl.offsetTop + heroEl.offsetHeight - innerHeight * 0.9;
  if (solid !== navSolid){ navSolid = solid; nav.classList.toggle('solid', solid); }
  const scrolled = scrollY > 40;
  if (scrolled !== stage._sc){ stage._sc = scrolled; stage.classList.toggle('scrolled', scrolled); }
}

/* ---------- hero scrub ---------- */
const video = document.getElementById('hero');
const ring = document.querySelector('.ring');
const posterLayer = document.querySelector('.poster');
const VIDEO_URL = 'assets/hero-scrub.mp4';
const VIDEO_BYTES = 4971416;
const bands = [...document.querySelectorAll('.band')].map((el, i, all) => ({
  el, a: parseFloat(el.dataset.a), b: parseFloat(el.dataset.b),
  first: i === 0, last: i === all.length - 1,
  ramp: el.dataset.ramp ? parseFloat(el.dataset.ramp) : null, op: -1, k: -1, ks: -1, kb: -1
}));
let target = 0, shown = 0, rafId = null, lastTick = 0, heroOnScreen = true, scrubOn = false;
let loadK = 0, loadStart = 0;

function heroProgress(){
  const total = heroEl.offsetHeight - innerHeight;
  return Math.min(1, Math.max(0, (scrollY - heroEl.offsetTop) / total));
}
const smooth = (p, e0, e1) => { const t = Math.min(1, Math.max(0, (p - e0) / (e1 - e0))); return t * t * (3 - 2 * t); };
const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));

function updateCaptions(p){
  for (const b of bands){
    const f = Math.min(0.02, (b.b - b.a) / 3);
    let op = (b.first ? 1 : smooth(p, b.a, b.a + f)) * (b.last ? 1 : 1 - smooth(p, b.b - f, b.b));
    if (p < b.a || p > b.b) op = (b.first && p <= b.a) ? 1 : (b.last && p >= b.b ? 1 : 0);
    let k = clamp((p - b.a) / (b.ramp || Math.min(0.025, (b.b - b.a) * 0.35)), 0, 1);
    if (b.first) k = Math.max(k, loadK);
    if (b.first) op = Math.max(op * 1, 0) ;
    op = Math.round(op * 1000) / 1000;
    if (op !== b.op){ b.op = op; b.el.style.opacity = op; }
    if (Math.abs(k - b.k) > 0.008 || (k === 1 && b.k !== 1) || (k === 0 && b.k !== 0)){ b.k = k; b.el.style.setProperty('--k', k.toFixed(3)); }
    if (b.last){
      const ks = clamp((k - 0.5) * 3, 0, 1), kb = clamp((k - 0.7) * 3.4, 0, 1);
      if (Math.abs(ks - b.ks) > 0.008 || ks === 1 && b.ks !== 1){ b.ks = ks; b.el.style.setProperty('--ks', ks.toFixed(3)); }
      if (Math.abs(kb - b.kb) > 0.008 || kb === 1 && b.kb !== 1){ b.kb = kb; b.el.style.setProperty('--kb', kb.toFixed(3)); }
    }
  }
}
window.updateCaptions = updateCaptions;

let seekBusy = false, pendingTime = null;
function requestSeek(t){
  if (!video.duration) return;
  if (seekBusy){ pendingTime = t; return; }
  seekBusy = true;
  video.currentTime = t;
}
video.addEventListener('seeked', () => {
  seekBusy = false;
  if (pendingTime !== null){ const t = pendingTime; pendingTime = null; requestSeek(t); }
});
video.addEventListener('error', () => { seekBusy = false; pendingTime = null; failVideo(); });

function tick(now){
  const dt = Math.min(100, now - (lastTick || now));
  lastTick = now;
  if (loadK < 1){ loadK = Math.min(1, (now - loadStart) / 1100); }
  shown += (target - shown) * (1 - Math.pow(1 - 0.16, dt / 16.667));
  const settled = Math.abs(target - shown) < 0.0005 && loadK >= 1;
  if (settled){ shown = target; rafId = null; lastTick = 0; }
  else rafId = requestAnimationFrame(tick);
  if (video.duration) requestSeek(shown * (video.duration - 0.05));
  updateCaptions(shown);
}
function onScroll(){
  target = heroProgress();
  if (rafId === null && heroOnScreen) rafId = requestAnimationFrame(tick);
}
new IntersectionObserver(es => { heroOnScreen = es[0].isIntersecting; if (heroOnScreen && scrubOn) onScroll(); }).observe(heroEl);

let heroInit = false, blobStarted = false;
function initHeroOnce(){
  if (heroInit) return; heroInit = true;
  posterLayer.style.backgroundImage = "url('assets/hero-poster.jpg')";
  const img = new Image();
  img.onload = startBlobFetch; img.onerror = startBlobFetch;
  img.src = 'assets/hero-poster.jpg';
  setTimeout(startBlobFetch, 4000);
}
function startBlobFetch(){ if (blobStarted) return; blobStarted = true; loadHeroBlob().catch(failVideo); }
async function loadHeroBlob(){
  if (location.protocol === 'file:') throw new Error('file');
  const ctrl = new AbortController();
  let watchdog = setTimeout(() => ctrl.abort(), 20000);
  const res = await fetch(VIDEO_URL, { priority: 'low', signal: ctrl.signal });
  if (!res.ok) throw new Error('http');
  const total = Number(res.headers.get('Content-Length')) || VIDEO_BYTES;
  const reader = res.body.getReader();
  const chunks = []; let got = 0, lastRing = 0;
  for (;;){
    const { done, value } = await reader.read();
    if (done) break;
    clearTimeout(watchdog); watchdog = setTimeout(() => ctrl.abort(), 20000);
    chunks.push(value); got += value.length;
    const frac = Math.min(1, got / total), now = performance.now();
    if (now - lastRing > 100 || frac === 1){ lastRing = now; ring.style.setProperty('--ld', Math.round(126 * (1 - frac))); }
  }
  clearTimeout(watchdog);
  ring.style.setProperty('--ld', 0);
  video.src = URL.createObjectURL(new Blob(chunks, { type: 'video/mp4' }));
  video.load();
  video.addEventListener('canplay', () => {
    requestSeek(heroProgress() * (video.duration - 0.05));
    stage.classList.add('video-ready');
  }, { once: true });
}
function failVideo(){
  ring.style.display = 'none';
  posterLayer.style.backgroundImage = "url('assets/hero-ending.jpg')";
  stage.classList.add('video-failed');
  video.style.display = 'none';
}

const GATES = [
  '(max-width: 720px)',
  '(orientation: portrait) and (max-width: 1024px)',
  '(orientation: portrait) and (pointer: coarse)',
  '(orientation: landscape) and (pointer: coarse) and (max-height: 560px)',
  '(prefers-reduced-motion: reduce)'
];
function enableScrub(){
  if (scrubOn) return; scrubOn = true;
  initHeroOnce();
  addEventListener('scroll', onScroll, { passive: true });
  bands.forEach(b => { b.op = -1; b.k = -1; b.ks = -1; b.kb = -1; b.el.style.removeProperty('opacity'); });
  unpinFinalStates();
  loadStart = performance.now(); loadK = 0;
  updateCaptions(heroProgress());
  onScroll();
}
function disableScrub(){
  if (!scrubOn) return; scrubOn = false;
  removeEventListener('scroll', onScroll);
  if (rafId !== null){ cancelAnimationFrame(rafId); rafId = null; }
  bands.forEach(b => { b.el.style.opacity = ''; b.el.style.setProperty('--k', 1); b.el.style.setProperty('--ks', 1); b.el.style.setProperty('--kb', 1); });
}
function applyHeroMode(){
  if (GATES.some(q => matchMedia(q).matches)) disableScrub(); else enableScrub();
}
const MQLS = GATES.map(q => matchMedia(q));
MQLS.forEach(m => m.addEventListener('change', applyHeroMode));

/* ---------- reveals ---------- */
const io = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return;
  const el = e.target; el.classList.add('in'); io.unobserve(el);
  setTimeout(() => el.classList.add('done'), 1300);
  if (el.classList.contains('pro')) runCount(el.querySelector('.count'));
}), { threshold: 0.18, rootMargin: '0px 0px -8% 0px' });
document.querySelectorAll('.reveal,.pain,.svc,.port,.pro').forEach(el => io.observe(el));

/* ---------- services: o fundo vira a imagem do card ---------- */
(() => {
  const sec = document.getElementById('services');
  const bgs = [...sec.querySelectorAll('.svc-bg')], cards = [...sec.querySelectorAll('.svc')];
  // carrega as imagens só quando a seção se aproxima
  const lo = new IntersectionObserver(es => {
    if (!es[0].isIntersecting) return;
    bgs.forEach(b => { b.style.backgroundImage = `url(assets/svc-${b.dataset.bg}.jpg)`; });
    lo.disconnect();
  }, { rootMargin: '600px 0px' });
  lo.observe(sec);
  let cur = null;
  const show = key => {
    if (key === cur) return; cur = key;
    sec.classList.toggle('has-bg', !!key);
    bgs.forEach(b => b.classList.toggle('on', b.dataset.bg === key));
    cards.forEach(c => c.classList.toggle('active', c.dataset.bg === key));
  };
  const fine = matchMedia('(hover: hover) and (pointer: fine)');
  cards.forEach(c => {
    c.addEventListener('pointerenter', () => { if (fine.matches) show(c.dataset.bg); });
    c.addEventListener('click', () => { if (!fine.matches) show(cur === c.dataset.bg ? null : c.dataset.bg); });
    c.addEventListener('focus', () => show(c.dataset.bg));
  });
  sec.querySelector('.svc-grid').addEventListener('pointerleave', () => { if (fine.matches) show(null); });
  sec.addEventListener('focusout', e => { if (!sec.contains(e.relatedTarget)) show(null); });
})();

function runCount(el){
  if (!el) return;
  const to = +el.dataset.to;
  if (reduced() || to === 0){ el.textContent = to; return; }
  const t0 = performance.now(), dur = 900;
  const step = now => {
    const p = Math.min(1, (now - t0) / dur);
    el.textContent = Math.round(to * (1 - Math.pow(1 - p, 3)));
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

/* ---------- route (signature) ---------- */
const route = document.getElementById('route');
const statusEl = document.getElementById('routeStatus');
const stops = [...document.querySelectorAll('.stop')];
const lanes = [...document.querySelectorAll('.lane')];
const dests = [...document.querySelectorAll('.dest')];
const N = lanes.length, LANE_SPAN = 0.14;
let lastRP = -1, lastStatus = -1, routeVisible = false, lastCur = -1;
const dFill = document.querySelector('.dash-fill'), dDest = document.getElementById('dDest'), dCont = document.getElementById('dCont'), dUpd = document.getElementById('dUpd');
function routeProgress(){
  if (reduced() || innerWidth <= 900) return 1;
  const r = route.getBoundingClientRect();
  const total = route.offsetHeight - innerHeight;
  return clamp(-r.top / total, 0, 1);
}
function updateRoute(){
  const p = routeProgress();
  if (Math.abs(p - lastRP) < 0.002 && lastStatus !== -1) return;
  lastRP = p;
  // cada rota se desenha na sua vez; o destino acende quando a linha chega
  let done = 0; const conts = new Set();
  lanes.forEach((ln, i) => {
    const k = clamp((p - i / N * (1 - LANE_SPAN)) / LANE_SPAN, 0, 1);
    if (k !== ln._k){ ln._k = k; ln.style.setProperty('--k', k.toFixed(3)); }
    const on = k >= 1;
    if (on){ done++; conts.add(ln.dataset.c); }
    if (on !== dests[i]._on){ dests[i]._on = on; dests[i].classList.toggle('on', on); }
  });
  let cur = 0;
  stops.forEach((s, i) => { const on = p >= parseFloat(s.dataset.at) - 0.08; if (on) cur = i; if (on !== s._on){ s._on = on; s.classList.toggle('on', on); } });
  if (cur !== lastCur){ lastCur = cur; stops.forEach((s, i) => s.classList.toggle('cur', i === cur)); dUpd.textContent = cur + 1; }
  dFill.style.transform = `scaleX(${p.toFixed(3)})`;
  if (done !== lastStatus){ lastStatus = done; statusEl.textContent = done; dDest.textContent = done; dCont.textContent = conts.size; }
}
new IntersectionObserver(es => { routeVisible = es[0].isIntersecting; if (routeVisible) updateRoute(); }).observe(route);
let routeRaf = null;
addEventListener('scroll', () => {
  updateNav();
  if (routeVisible && routeRaf === null) routeRaf = requestAnimationFrame(() => { routeRaf = null; updateRoute(); });
}, { passive: true });
addEventListener('resize', () => { lastRP = -1; updateRoute(); });

/* ---------- hold to seal ---------- */
const seal = document.getElementById('seal');
const form = document.getElementById('qform');
let hp = 0, holding = false, sealRaf = null, sealT = 0, sealed = false;
function setHp(v){ hp = v; seal.style.setProperty('--hp', v.toFixed(3)); }
function sealLoop(now){
  const dt = Math.min(50, now - (sealT || now)); sealT = now;
  if (holding) setHp(Math.min(1, hp + dt / 1100));
  else setHp(Math.max(0, hp - dt / 700));
  if (hp >= 1 && !sealed){ completeSeal(); }
  if ((holding && hp < 1) || (!holding && hp > 0 && !sealed)) sealRaf = requestAnimationFrame(sealLoop);
  else { sealRaf = null; sealT = 0; }
}
function startHold(e){ if (sealed) return; e.preventDefault(); holding = true; if (!sealRaf) sealRaf = requestAnimationFrame(sealLoop); }
function endHold(){ holding = false; if (!sealRaf && !sealed) sealRaf = requestAnimationFrame(sealLoop); }
function completeSeal(){
  sealed = true; holding = false; setHp(1);
  seal.classList.add('sealed');
  form.classList.add('open');
  setTimeout(() => form.querySelector('input').focus({ preventScroll: true }), 500);
}
seal.addEventListener('pointerdown', startHold);
['pointerup','pointerleave','pointercancel'].forEach(t => seal.addEventListener(t, endHold));
seal.addEventListener('keydown', e => { if ((e.key === 'Enter' || e.key === ' ') && !sealed){ e.preventDefault(); completeSeal(); } });
seal.addEventListener('contextmenu', e => e.preventDefault());
document.getElementById('qlock').addEventListener('click', () => { if (!sealed) completeSeal(); });

form.addEventListener('submit', e => {
  e.preventDefault();
  let ok = true;
  form.querySelectorAll('[required]').forEach(f => {
    const bad = !f.value.trim() || (f.type === 'email' && !/^\S+@\S+\.\S+$/.test(f.value));
    f.classList.toggle('bad', bad); if (bad && ok){ ok = false; f.focus(); }
  });
  if (!ok) return;
  [...form.children].forEach(c => { if (!c.classList.contains('form-ok')) c.hidden = true; });
  form.querySelector('.form-ok').hidden = false;
});

/* ---------- reduced motion, live ---------- */
function reduced(){ return matchMedia('(prefers-reduced-motion: reduce)').matches; }
function pinToFinalStates(){
  document.body.classList.add('rm');
  document.querySelectorAll('.reveal,.pain,.svc,.port,.pro').forEach(el => el.classList.add('in','done'));
  document.querySelectorAll('.count').forEach(el => el.textContent = el.dataset.to);
  if (!sealed){ setHp(1); seal.classList.add('sealed'); form.classList.add('open'); sealed = true; }
  lastRP = -1; updateRoute();
}
function unpinFinalStates(){
  document.body.classList.remove('rm');
  lastRP = -1; updateRoute();
}
matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', e => {
  if (e.matches) pinToFinalStates(); else applyHeroMode();
});

/* ---------- pause in hidden tabs ---------- */
document.addEventListener('visibilitychange', () => document.body.classList.toggle('paused', document.hidden));

/* ---------- boot ---------- */
applyLang(lang);
if (reduced()) pinToFinalStates();
applyHeroMode();
if (!scrubOn) bands.forEach(b => { b.el.style.setProperty('--k', 1); b.el.style.setProperty('--ks', 1); b.el.style.setProperty('--kb', 1); });
updateNav();
updateRoute();
})();
