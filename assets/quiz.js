const MODULOS = ['Todos', 'Módulo 1', 'Módulo 2', 'Módulo 3', 'Módulo 4', 'Módulo 5', 'Módulo 6'];
const VIDAS_INICIALES = 5;

const pantalla = document.getElementById('pantalla');
const barra = document.getElementById('barra');
const elRacha = document.getElementById('racha');
const elXp = document.getElementById('xp');
const elVidas = document.getElementById('vidas');
const toast = document.getElementById('toast');

const store = {
  get(k, d) {
    try {
      const v = localStorage.getItem('cuadernillo-' + k);
      return v === null ? d : JSON.parse(v);
    } catch (e) { return d; }
  },
  set(k, v) { try { localStorage.setItem('cuadernillo-' + k, JSON.stringify(v)); } catch (e) {} }
};

const estado = {
  mazo: [], i: 0, elegida: -1, comprobado: false,
  aciertos: 0, fallos: 0, xp: 0, racha: 0, rachaMax: 0,
  vidas: VIDAS_INICIALES, filtro: 'Todos', resultados: []
};

function mezclar(a) {
  const c = a.slice();
  for (let i = c.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const t = c[i]; c[i] = c[j]; c[j] = t;
  }
  return c;
}

function avisar(txt) {
  toast.textContent = txt;
  toast.classList.add('visible');
  clearTimeout(avisar.t);
  avisar.t = setTimeout(() => toast.classList.remove('visible'), 2400);
}

function refrescar() {
  elRacha.textContent = estado.racha;
  elXp.textContent = estado.xp;
  elVidas.innerHTML = '';
  for (let v = 0; v < VIDAS_INICIALES; v++) {
    const s = document.createElement('span');
    s.className = 'vida' + (v >= estado.vidas ? ' perdida' : '');
    s.textContent = '♥';
    elVidas.appendChild(s);
  }
  const total = estado.mazo.length || 1;
  barra.style.width = Math.round((estado.i / total) * 100) + '%';
}

function pantallaInicio() {
  estado.mazo = [];
  barra.style.width = '0%';
  const record = store.get('record', 0);
  const totalXp = store.get('xp', 0);
  const chips = MODULOS.map((m) =>
    '<button class="chip' + (estado.filtro === m ? ' activo' : '') + '" data-mod="' + m + '">' + m + '</button>'
  ).join('');
  pantalla.innerHTML =
    '<div class="pantalla-card">' +
      '<span class="quiz-tipo">Autoevaluación tipo Duolingo</span>' +
      '<h1>Vivienda Accesible</h1>' +
      '<p>Preguntas extraídas del cuadernillo. Elegí un módulo o hacé la ronda completa: feedback con explicación en cada respuesta.</p>' +
      '<div class="modulos-alternar">' + chips + '</div>' +
      '<div class="resumen">' +
        '<div><b>' + PREGUNTAS.length + '</b><span>Preguntas</span></div>' +
        '<div><b>' + record + '%</b><span>Mejor puntaje</span></div>' +
        '<div><b>' + totalXp + '</b><span>XP acumulada</span></div>' +
      '</div>' +
      '<div class="acciones"><button class="btn btn-solido" id="empezar">Empezar ahora</button>' +
      '<a class="btn btn-linea" href="index.html#indice">Repasar módulos</a></div>' +
    '</div>';
  pantalla.querySelectorAll('.chip').forEach((c) => {
    c.addEventListener('click', () => {
      estado.filtro = c.dataset.mod;
      pantalla.querySelectorAll('.chip').forEach((x) => x.classList.toggle('activo', x === c));
    });
  });
  pantalla.querySelector('#empezar').addEventListener('click', empezar);
  refrescar();
}

function empezar() {
  const base = estado.filtro === 'Todos' ? PREGUNTAS : PREGUNTAS.filter((p) => p.m === estado.filtro);
  if (!base.length) { avisar('Este módulo todavía no tiene preguntas'); return; }
  estado.mazo = mezclar(base);
  estado.i = 0; estado.aciertos = 0; estado.fallos = 0;
  estado.xp = 0; estado.racha = 0; estado.rachaMax = 0;
  estado.vidas = VIDAS_INICIALES;
  estado.resultados = [];
  refrescar();
  renderPregunta();
}

function renderPregunta() {
  const p = estado.mazo[estado.i];
  estado.elegida = -1;
  estado.comprobado = false;
  const letras = ['A', 'B', 'C', 'D'];
  const opciones = p.o.map((o, i) =>
    '<button class="opcion" data-i="' + i + '"><span class="letra">' + letras[i] + '</span><span>' + o + '</span><span class="check"></span></button>'
  ).join('');
  pantalla.innerHTML =
    '<span class="quiz-tipo">' + p.m + ' · pregunta ' + (estado.i + 1) + ' de ' + estado.mazo.length + '</span>' +
    '<div class="progreso-ronda" id="ronda"></div>' +
    '<p class="quiz-enunciado" data-foco>' + p.q + '</p>' +
    '<div class="opciones" id="opciones">' + opciones + '</div>' +
    '<div class="zona-accion"><button class="btn-comprobar" id="comprobar" disabled>Comprobar</button></div>';
  pintarRonda();
  pantalla.querySelectorAll('.opcion').forEach((b) => {
    b.addEventListener('click', () => {
      if (estado.comprobado) return;
      estado.elegida = Number(b.dataset.i);
      pantalla.querySelectorAll('.opcion').forEach((x) => x.classList.toggle('elegida', x === b));
      pantalla.querySelector('#comprobar').disabled = false;
    });
  });
  pantalla.querySelector('#comprobar').addEventListener('click', comprobar);
  refrescar();
}

function pintarRonda() {
  const ronda = pantalla.querySelector('#ronda');
  if (!ronda) return;
  let html = '';
  for (let n = 0; n < estado.mazo.length; n++) {
    const res = estado.resultados[n];
    const cls = res === true ? 'ok' : res === false ? 'mal' : n === estado.i ? 'ahora' : '';
    html += '<i class="' + cls + '"></i>';
  }
  ronda.innerHTML = html;
}

function comprobar() {
  if (estado.elegida < 0 || estado.comprobado) return;
  estado.comprobado = true;
  const p = estado.mazo[estado.i];
  const acerto = estado.elegida === p.r;
  const botones = pantalla.querySelectorAll('.opcion');
  botones.forEach((b) => {
    const i = Number(b.dataset.i);
    b.disabled = true;
    b.classList.remove('elegida');
    if (i === p.r) { b.classList.add('correcta'); b.querySelector('.check').textContent = 'CORRECTO'; }
    if (i === estado.elegida && !acerto) { b.classList.add('errada'); b.querySelector('.check').textContent = 'ERROR'; }
  });

  if (acerto) {
    estado.aciertos++;
    estado.racha++;
    estado.rachaMax = Math.max(estado.rachaMax, estado.racha);
    const bonus = Math.min(estado.racha - 1, 5) * 2;
    estado.xp += 10 + bonus;
    if (estado.racha > 0 && estado.racha % 5 === 0) avisar('Racha de ' + estado.racha + ' seguidas');
  } else {
    estado.fallos++;
    estado.racha = 0;
    estado.vidas--;
  }

  estado.resultados[estado.i] = acerto;
  pantalla.querySelector('.zona-accion').innerHTML = '';
  pintarRonda();
  mostrarFeedback(acerto, p.e);
  refrescar();
  const marc = document.getElementById(acerto ? 'marcadorXp' : 'marcadorVidas');
  if (marc) { marc.classList.remove('destello'); void marc.offsetWidth; marc.classList.add('destello'); }
}

function mostrarFeedback(ok, texto) {
  const viejo = document.getElementById('feedback');
  if (viejo) viejo.remove();
  const div = document.createElement('div');
  div.id = 'feedback';
  div.className = 'feedback ' + (ok ? 'ok' : 'mal');
  div.innerHTML =
    '<div class="inner"><span class="icono">' + (ok ? '✓' : '✕') + '</span>' +
    '<div style="flex:1"><h3>' + (ok ? '¡Correcto!' : 'Respuesta incorrecta') + '</h3>' +
    '<p>' + texto + (ok ? '' : ' Te queda' + (estado.vidas === 1 ? '' : 'n') + ' ' + estado.vidas + ' de ' + VIDAS_INICIALES + ' vidas.') + '</p>' +
    '<button class="btn-seguir" id="seguir">Continuar</button></div></div>';
  document.body.appendChild(div);
  requestAnimationFrame(() => div.classList.add('visible'));
  div.querySelector('#seguir').addEventListener('click', () => {
    div.remove();
    siguiente();
  });
}

function siguiente() {
  estado.i++;
  if (estado.vidas <= 0) return finRonda(true);
  if (estado.i >= estado.mazo.length) return finRonda(false);
  renderPregunta();
}

function finRonda(sinVidas) {
  const total = estado.mazo.length;
  const pct = Math.round((estado.aciertos / total) * 100);
  barra.style.width = (sinVidas ? Math.min(100, Math.round(((estado.i + 1) / total) * 100)) : 100) + '%';
  const record = store.get('record', 0);
  const nuevoRecord = pct > record;
  if (nuevoRecord) store.set('record', pct);
  store.set('xp', store.get('xp', 0) + estado.xp);

  let insignia = 'Seguí estudiando';
  if (pct === 100) insignia = 'Experto del cuadernillo';
  else if (pct >= 80) insignia = 'Muy bien';
  else if (pct >= 60) insignia = 'Aprobado';

  pantalla.innerHTML =
    '<div class="pantalla-card">' +
      '<span class="quiz-tipo">' + (sinVidas ? 'Se acabaron las vidas' : 'Ronda terminada') + '</span>' +
      '<div class="grande">' + pct + '%</div>' +
      '<h1>' + (sinVidas ? 'Todavía no llegás al final' : '¡Completaste la autoevaluación!') + '</h1>' +
      '<p>' + (sinVidas ? 'Repasá el módulo y volvé a intentarlo. La práctica hace al maestro.' : 'Resultado guardado en este dispositivo.') + '</p>' +
      '<div class="resumen">' +
        '<div><b>' + estado.aciertos + '/' + total + '</b><span>Aciertos</span></div>' +
        '<div><b>' + estado.xp + '</b><span>XP ganada</span></div>' +
        '<div><b>' + estado.rachaMax + '</b><span>Racha máx.</span></div>' +
      '</div>' +
      '<span class="insignia">' + insignia + (nuevoRecord ? ' · nuevo récord' : '') + '</span>' +
      '<div class="acciones">' +
        '<button class="btn btn-solido" id="repetir">Intentar de nuevo</button>' +
        '<a class="btn btn-linea" href="index.html">Volver al cuadernillo</a>' +
      '</div>' +
      '<p class="creditos-fin">Mejor puntaje: ' + Math.max(record, pct) + '% · XP total: ' + store.get('xp', 0) + '</p>' +
    '</div>';
  pantalla.querySelector('#repetir').addEventListener('click', empezar);
}

document.addEventListener('keydown', (ev) => {
  if (ev.key !== 'Enter') return;
  const seg = document.getElementById('seguir');
  if (seg) { seg.click(); return; }
  const com = document.getElementById('comprobar');
  if (com && !com.disabled) com.click();
});

pantallaInicio();
