/* ═══════════════════════════════════════════════════════════
   ChessQuest v2 — Pure Interactive Chess Teaching App
   ═══════════════════════════════════════════════════════════ */

// ── Piece SVG generators (colourful, kid-friendly) ──
const PIECE_SVG = {
  K:(f,s,a)=>`<svg viewBox="0 0 100 100">
    <defs><linearGradient id="kg${a}" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="${f}"/><stop offset="100%" stop-color="${s}"/></linearGradient></defs>
    <g fill="url(#kg${a})" stroke="${s}" stroke-width="2" stroke-linejoin="round">
      <rect x="47" y="4" width="6" height="16" rx="2" fill="${s}"/>
      <rect x="40" y="10" width="20" height="6" rx="2" fill="${s}"/>
      <path d="M32 74 L36 34 C38 22 44 16 50 16 C56 16 62 22 64 34 L68 74Z"/>
      <ellipse cx="50" cy="74" rx="20" ry="6"/>
      <rect x="26" y="78" width="48" height="12" rx="5"/>
      <ellipse cx="50" cy="50" rx="8" ry="6" fill="none" stroke="${s}" stroke-width="1.5"/>
    </g></svg>`,

  Q:(f,s,a)=>`<svg viewBox="0 0 100 100">
    <defs><linearGradient id="qg${a}" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="${f}"/><stop offset="100%" stop-color="${s}"/></linearGradient></defs>
    <g fill="url(#qg${a})" stroke="${s}" stroke-width="2" stroke-linejoin="round">
      <circle cx="50" cy="8" r="5" fill="${s}"/>
      <circle cx="20" cy="20" r="4" fill="${s}"/>
      <circle cx="35" cy="12" r="4" fill="${s}"/>
      <circle cx="65" cy="12" r="4" fill="${s}"/>
      <circle cx="80" cy="20" r="4" fill="${s}"/>
      <path d="M20 24 L30 60 L50 46 L70 60 L80 24 C68 48 32 48 20 24Z"/>
      <ellipse cx="50" cy="72" rx="24" ry="6"/>
      <rect x="20" y="78" width="60" height="12" rx="5"/>
    </g></svg>`,

  R:(f,s,a)=>`<svg viewBox="0 0 100 100">
    <defs><linearGradient id="rg${a}" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="${f}"/><stop offset="100%" stop-color="${s}"/></linearGradient></defs>
    <g fill="url(#rg${a})" stroke="${s}" stroke-width="2" stroke-linejoin="round">
      <rect x="20" y="8" width="14" height="16" rx="2"/>
      <rect x="43" y="8" width="14" height="16" rx="2"/>
      <rect x="66" y="8" width="14" height="16" rx="2"/>
      <rect x="16" y="24" width="68" height="10" rx="3"/>
      <rect x="24" y="34" width="52" height="34" rx="2"/>
      <rect x="16" y="68" width="68" height="10" rx="3"/>
      <rect x="12" y="78" width="76" height="12" rx="5"/>
    </g></svg>`,

  B:(f,s,a)=>`<svg viewBox="0 0 100 100">
    <defs><linearGradient id="bg${a}" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="${f}"/><stop offset="100%" stop-color="${s}"/></linearGradient></defs>
    <g fill="url(#bg${a})" stroke="${s}" stroke-width="2" stroke-linejoin="round">
      <circle cx="50" cy="10" r="5"/>
      <path d="M34 72 C34 72 42 32 46 22 Q50 12 54 22 C58 32 66 72 66 72Z"/>
      <line x1="50" y1="30" x2="50" y2="48" stroke="${s}" stroke-width="2"/>
      <line x1="42" y1="40" x2="58" y2="40" stroke="${s}" stroke-width="2"/>
      <ellipse cx="50" cy="73" rx="18" ry="6"/>
      <rect x="26" y="78" width="48" height="12" rx="5"/>
    </g></svg>`,

  N:(f,s,a)=>`<svg viewBox="0 0 100 100">
    <defs><linearGradient id="ng${a}" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="${f}"/><stop offset="100%" stop-color="${s}"/></linearGradient></defs>
    <g fill="url(#ng${a})" stroke="${s}" stroke-width="2" stroke-linejoin="round">
      <path d="M28 82 L28 58 C28 42 30 32 36 24 L32 18 C32 18 30 14 34 12 L40 8 C42 6 44 8 44 10 L46 16 C50 12 56 10 62 12 C70 14 76 22 76 32 C76 36 74 42 70 48 L62 60 C58 66 56 74 56 82Z"/>
      <circle cx="64" cy="24" r="3.5" fill="${s}" stroke="none"/>
      <path d="M36 24 C36 24 40 20 44 16" fill="none" stroke="${s}" stroke-width="1.5"/>
      <ellipse cx="42" cy="56" rx="3" ry="4" fill="none" stroke="${s}" stroke-width="1"/>
      <path d="M34 32 C36 28 40 26 44 28" fill="none" stroke="${s}" stroke-width="1.2"/>
      <rect x="22" y="82" width="56" height="12" rx="5"/>
    </g></svg>`,

  P:(f,s,a)=>`<svg viewBox="0 0 100 100">
    <defs><linearGradient id="pg${a}" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="${f}"/><stop offset="100%" stop-color="${s}"/></linearGradient></defs>
    <g fill="url(#pg${a})" stroke="${s}" stroke-width="2" stroke-linejoin="round">
      <circle cx="50" cy="24" r="13"/>
      <path d="M34 40 C34 36 38 34 50 34 C62 34 66 36 66 40 L70 78 L30 78Z"/>
      <rect x="22" y="78" width="56" height="12" rx="5"/>
    </g></svg>`,
};
function pieceHTML(type, color) {
  const f = color==='w' ? '#fff5f7' : '#7c3aed';
  const s = color==='w' ? '#e11d73' : '#2e1065';
  const a = color; // gradient ID suffix
  return PIECE_SVG[type]?.(f,s,a)||'';
}

// ── Sound (Web Audio, no files needed) ──
const Snd = (()=>{
  let ctx;
  function c(){if(!ctx)ctx=new(window.AudioContext||window.webkitAudioContext)();return ctx}
  function t(freq,dur,type='sine',vol=.25){
    try{const o=c().createOscillator(),g=c().createGain();o.type=type;o.frequency.value=freq;g.gain.setValueAtTime(vol,c().currentTime);g.gain.exponentialRampToValueAtTime(.001,c().currentTime+dur);o.connect(g).connect(c().destination);o.start();o.stop(c().currentTime+dur)}catch(e){}
  }
  return{
    init(){c()},
    move(){t(600,.08);setTimeout(()=>t(800,.06),50)},
    capture(){t(300,.15,'square',.2);t(200,.1,'sawtooth',.15)},
    star(){t(1200,.1);setTimeout(()=>t(1600,.15),100)},
    done(){[523,659,784,1047,1319].forEach((f,i)=>setTimeout(()=>t(f,.15),i*100))},
    click(){t(1000,.04,'sine',.1)},
    err(){t(200,.2,'sawtooth',.12)},
    pop(){t(900,.06);},
  }
})();
document.addEventListener('click',()=>Snd.init(),{once:true});

// ── Board ──
const $ = s => document.getElementById(s);
const board8 = []; // 2D: board8[row][col] = {type,color} | null
let sqEls = [];    // 2D DOM elements

function initBoard(){
  const brd = $('board');
  brd.innerHTML='';
  sqEls=[];
  for(let r=0;r<8;r++){
    sqEls[r]=[];
    board8[r]=[];
    for(let c=0;c<8;c++){
      board8[r][c]=null;
      const sq=document.createElement('div');
      sq.className=`sq ${(r+c)%2===0?'sq-light':'sq-dark'}`;
      sq.dataset.r=r; sq.dataset.c=c;
      sq.addEventListener('click',()=>onSquareClick(r,c));
      brd.appendChild(sq);
      sqEls[r][c]=sq;
    }
  }
  // External rank labels (1-8 on the left)
  const rl=$('rank-labels-outer'); rl.innerHTML='';
  for(let r=0;r<8;r++){const s=document.createElement('span');s.textContent=8-r;rl.appendChild(s)}
  // External file labels (a-h on the bottom)
  const fl=$('file-labels-outer'); fl.innerHTML='';
  for(let c=0;c<8;c++){const s=document.createElement('span');s.textContent='abcdefgh'[c];fl.appendChild(s)}
}

function clearBoard(){
  for(let r=0;r<8;r++)for(let c=0;c<8;c++){board8[r][c]=null;const sq=sqEls[r][c];const p=sq.querySelector('.piece');if(p)p.remove();}
  clearHighlights();clearArrows();
}

function putPiece(r,c,type,color,anim=false){
  board8[r][c]={type,color};
  const el=document.createElement('div');
  el.className='piece'+(anim?' animate-in':'');
  el.innerHTML=pieceHTML(type,color);
  sqEls[r][c].appendChild(el);
  return el;
}

function removePiece(r,c,anim=false){
  const sq=sqEls[r][c];
  const el=sq.querySelector('.piece');
  if(!el)return;
  if(anim){el.classList.add('captured');setTimeout(()=>el.remove(),400);}
  else el.remove();
  board8[r][c]=null;
}

function movePieceAnim(fromR,fromC,toR,toC,cb){
  const fromSq=sqEls[fromR][fromC];
  const toSq=sqEls[toR][toC];
  const el=fromSq.querySelector('.piece');
  if(!el){cb?.();return;}

  const fRect=fromSq.getBoundingClientRect();
  const tRect=toSq.getBoundingClientRect();

  // If there's a piece at destination, capture-animate it
  const destPiece=toSq.querySelector('.piece');
  if(destPiece){destPiece.classList.add('captured');setTimeout(()=>destPiece.remove(),400);Snd.capture();}
  else Snd.move();

  // Animate
  el.style.transition='transform .28s ease';
  el.style.transform=`translate(${tRect.left-fRect.left}px,${tRect.top-fRect.top}px)`;
  el.style.zIndex='100';

  setTimeout(()=>{
    el.style.transition='';
    el.style.transform='';
    el.style.zIndex='';
    // Move DOM
    fromSq.removeChild(el);
    toSq.appendChild(el);
    // Update data
    board8[toR][toC]=board8[fromR][fromC];
    board8[fromR][fromC]=null;
    cb?.();
  },300);
}

// ── Highlights ──
function clearHighlights(){
  document.querySelectorAll('.sq').forEach(sq=>{
    sq.classList.remove('legal','capture-target','selected','highlight-green','highlight-orange','highlight-blue','goal','hint-glow');
    // remove star-only after-content goals (handled by class removal)
  });
}

function highlightLegal(squares){squares.forEach(([r,c])=>sqEls[r]?.[c]?.classList.add('legal'))}
function highlightCapture(squares){squares.forEach(([r,c])=>sqEls[r]?.[c]?.classList.add('capture-target'))}
function highlightGoal(squares){squares.forEach(([r,c])=>sqEls[r]?.[c]?.classList.add('goal'))}
function highlightGreen(squares){squares.forEach(([r,c])=>sqEls[r]?.[c]?.classList.add('highlight-green'))}
function highlightOrange(squares){squares.forEach(([r,c])=>sqEls[r]?.[c]?.classList.add('highlight-orange'))}
function highlightBlue(squares){squares.forEach(([r,c])=>sqEls[r]?.[c]?.classList.add('highlight-blue'))}
function selectSquare(r,c){sqEls[r][c].classList.add('selected')}

// ── Arrows ──
function clearArrows(){$('arrows').innerHTML=''}
function drawArrow(r1,c1,r2,c2,cls=''){
  const svg=$('arrows');
  const x1=c1*100+50, y1=r1*100+50, x2=c2*100+50, y2=r2*100+50;
  const dx=x2-x1, dy=y2-y1, len=Math.sqrt(dx*dx+dy*dy);
  const ux=dx/len, uy=dy/len;
  const ax=x2-ux*14, ay=y2-uy*14;

  const line=document.createElementNS('http://www.w3.org/2000/svg','line');
  line.setAttribute('x1',x1);line.setAttribute('y1',y1);
  line.setAttribute('x2',ax);line.setAttribute('y2',ay);
  line.setAttribute('class','arrow-line '+cls);
  line.style.strokeDasharray=len;line.style.strokeDashoffset=len;
  svg.appendChild(line);

  // arrowhead
  const head=document.createElementNS('http://www.w3.org/2000/svg','polygon');
  const perpX=-uy*10, perpY=ux*10;
  head.setAttribute('points',`${x2},${y2} ${ax+perpX},${ay+perpY} ${ax-perpX},${ay-perpY}`);
  head.setAttribute('class','arrow-head '+cls);
  svg.appendChild(head);
}

// ── Legal move calculation (for teaching — simplified, no check/pin logic) ──
function getLegalSquares(r,c){
  const p=board8[r][c];
  if(!p)return{moves:[],captures:[]};
  const moves=[], captures=[];
  const own=p.color;

  function trySlide(dr,dc){
    let nr=r+dr,nc=c+dc;
    while(nr>=0&&nr<8&&nc>=0&&nc<8){
      const t=board8[nr][nc];
      if(t){if(t.color!==own)captures.push([nr,nc]);break;}
      moves.push([nr,nc]);
      nr+=dr;nc+=dc;
    }
  }

  switch(p.type){
    case'K':
      for(let dr=-1;dr<=1;dr++)for(let dc=-1;dc<=1;dc++){
        if(!dr&&!dc)continue;
        const nr=r+dr,nc=c+dc;
        if(nr<0||nr>7||nc<0||nc>7)continue;
        const t=board8[nr][nc];
        if(!t)moves.push([nr,nc]);
        else if(t.color!==own)captures.push([nr,nc]);
      }
      break;
    case'Q':
      for(let dr=-1;dr<=1;dr++)for(let dc=-1;dc<=1;dc++)if(dr||dc)trySlide(dr,dc);
      break;
    case'R':trySlide(0,1);trySlide(0,-1);trySlide(1,0);trySlide(-1,0);break;
    case'B':trySlide(1,1);trySlide(1,-1);trySlide(-1,1);trySlide(-1,-1);break;
    case'N':
      for(const[dr,dc]of[[-2,-1],[-2,1],[-1,-2],[-1,2],[1,-2],[1,2],[2,-1],[2,1]]){
        const nr=r+dr,nc=c+dc;
        if(nr<0||nr>7||nc<0||nc>7)continue;
        const t=board8[nr][nc];
        if(!t)moves.push([nr,nc]);
        else if(t.color!==own)captures.push([nr,nc]);
      }
      break;
    case'P':{
      const dir=own==='w'?-1:1;
      const start=own==='w'?6:1;
      // forward
      const f1=r+dir;
      if(f1>=0&&f1<8&&!board8[f1][c]){
        moves.push([f1,c]);
        if(r===start){const f2=r+2*dir;if(!board8[f2][c])moves.push([f2,c]);}
      }
      // captures
      for(const dc of[-1,1]){
        const nc=c+dc;if(nc<0||nc>7||f1<0||f1>7)continue;
        const t=board8[f1][nc];
        if(t&&t.color!==own)captures.push([f1,nc]);
      }
      break;
    }
  }
  return{moves,captures};
}

// ── Confetti ──
function confetti(count=50){
  const colors=['#ff6b6b','#ffd93d','#6bcb77','#4d96ff','#ff6fff','#fb923c'];
  for(let i=0;i<count;i++){
    const p=document.createElement('div');p.className='confetti';
    p.style.left=Math.random()*100+'%';
    p.style.backgroundColor=colors[Math.floor(Math.random()*colors.length)];
    p.style.animationDelay=Math.random()*.6+'s';
    p.style.animationDuration=(1.2+Math.random())+'s';
    document.body.appendChild(p);
    setTimeout(()=>p.remove(),2500);
  }
}

// ═══════════════════════════════════════════
// LESSON ENGINE
// ═══════════════════════════════════════════

let currentChapter = 0;
let currentStep = 0;
let selectedPiece = null;     // {r,c}
let exerciseGoals = [];       // [{r,c},...] squares to reach/capture
let exerciseMovesAllowed = null; // [r,c] of the piece to move, null = lesson
let awaitingClick = false;    // waiting for user to click
let stepCallback = null;      // called when user completes an action

// Progress
const SAVE_KEY = 'cq2_progress';
function loadProgress(){try{return JSON.parse(localStorage.getItem(SAVE_KEY))||{ch:0,st:0}}catch{return{ch:0,st:0}}}
function saveProgress(ch,st){try{localStorage.setItem(SAVE_KEY,JSON.stringify({ch,st}))}catch{}}

// Speech + Text-to-Speech
const TTS = (()=>{
  let enabled = true;
  let voice = null;
  // Pick a good English voice once available
  function pickVoice(){
    const voices = speechSynthesis.getVoices();
    // Prefer child-friendly / female voices
    voice = voices.find(v=>/samantha|karen|fiona|victoria|zira/i.test(v.name) && /en/i.test(v.lang))
         || voices.find(v=>/en.*(us|gb|au)/i.test(v.lang) && /female/i.test(v.name))
         || voices.find(v=>/en/i.test(v.lang))
         || voices[0] || null;
  }
  if(speechSynthesis.getVoices().length) pickVoice();
  speechSynthesis.addEventListener('voiceschanged', pickVoice);

  return {
    speak(text){
      if(!enabled || !text) return;
      speechSynthesis.cancel();
      // Strip HTML tags and emojis for cleaner speech
      const clean = text.replace(/<[^>]*>/g,' ').replace(/[^\x20-\x7E]/g,' ').replace(/\s+/g,' ').trim();
      if(!clean) return;
      const u = new SpeechSynthesisUtterance(clean);
      u.rate = 0.9;
      u.pitch = 1.15;
      u.volume = 1;
      if(voice) u.voice = voice;
      speechSynthesis.speak(u);
    },
    stop(){ speechSynthesis.cancel(); },
    toggle(){ enabled = !enabled; if(!enabled) speechSynthesis.cancel(); return enabled; },
    isEnabled(){ return enabled; },
  };
})();

function say(html){
  $('speech').innerHTML=html;
  $('speech').style.animation='slide-up .3s ease';
  setTimeout(()=>$('speech').style.animation='',300);
  // Auto-read aloud
  TTS.speak(html);
}

// Show/hide buttons
function showBtn(id,show=true){$(id).style.display=show?'':'none'}

// ── Step types ──
// Each step is an object: {type, ...data}
// type: 'teach' — show text, wait for "Next"
// type: 'demo'  — place pieces, draw arrows, auto-animate, wait for "Next"
// type: 'exercise' — place pieces + goals, let user move, validate

function runStep(){
  showLesson();
  const ch = CHAPTERS[currentChapter];
  if(!ch)return;
  const step = ch.steps[currentStep];
  if(!step){
    // Chapter complete!
    chapterComplete();
    return;
  }

  clearBoard();clearArrows();clearHighlights();
  selectedPiece=null;exerciseGoals=[];exerciseMovesAllowed=null;awaitingClick=false;stepCallback=null;

  $('exercise-counter').textContent = `Step ${currentStep+1} / ${ch.steps.length}`;
  updateProgress();

  switch(step.type){
    case 'teach': runTeach(step); break;
    case 'demo':  runDemo(step);  break;
    case 'exercise': runExercise(step); break;
  }
}

function runTeach(step){
  say(step.text);
  if(step.setup) step.setup();
  showBtn('btn-next',true);
  showBtn('btn-skip',true);
}

function runDemo(step){
  say(step.text);
  showBtn('btn-next',false);
  showBtn('btn-skip',true);
  if(step.setup) step.setup();

  // Run demo sequence then show Next
  let seq = step.sequence || [];
  // Support lazy sequences (functions that return arrays)
  if(typeof seq === 'function') seq = seq();
  let i=0;
  function next(){
    if(i>=seq.length){showBtn('btn-next',true);return;}
    const action=seq[i++];
    if(action.arrow){drawArrow(...action.arrow,action.cls||'');setTimeout(next,action.delay||350);}
    else if(action.highlight){highlightGreen(action.highlight);setTimeout(next,action.delay||250);}
    else if(action.move){movePieceAnim(...action.move,()=>setTimeout(next,action.delay||300));}
    else if(action.place){putPiece(...action.place,true);setTimeout(next,action.delay||300);}
    else if(action.remove){removePiece(...action.remove,true);setTimeout(next,action.delay||300);}
    else if(action.say){say(action.say);setTimeout(next,action.delay||400);}
    else if(action.wait){setTimeout(next,action.wait);}
    else if(action.fn){action.fn();setTimeout(next,action.delay||200);}
    else setTimeout(next,200);
  }
  next();
}

function runExercise(step){
  say(step.text);
  showBtn('btn-next',false);
  showBtn('btn-skip',true);
  if(step.setup) step.setup();
  exerciseGoals = step.goals ? [...step.goals] : [];
  exerciseMovesAllowed = step.movePiece || null; // {r,c}

  // Show goals
  highlightGoal(exerciseGoals.map(g=>[g.r,g.c]));

  // Show legal moves for the piece
  if(exerciseMovesAllowed){
    const{moves,captures}=getLegalSquares(exerciseMovesAllowed.r,exerciseMovesAllowed.c);
    highlightLegal(moves);
    highlightCapture(captures);
    selectSquare(exerciseMovesAllowed.r,exerciseMovesAllowed.c);
  }
  awaitingClick=true;
}

function onSquareClick(r,c){
  if(!awaitingClick)return;

  // Exercise mode: user must move the designated piece to a goal
  if(exerciseMovesAllowed){
    const pr=exerciseMovesAllowed.r, pc=exerciseMovesAllowed.c;
    // If clicking on the piece itself, ignore
    if(r===pr&&c===pc)return;

    // Check if this is a legal square
    const{moves,captures}=getLegalSquares(pr,pc);
    const allLegal=[...moves,...captures];
    const isLegal=allLegal.some(([lr,lc])=>lr===r&&lc===c);

    if(!isLegal){Snd.err();return;}

    // Is it a goal?
    const goalIdx=exerciseGoals.findIndex(g=>g.r===r&&g.c===c);

    clearHighlights();

    movePieceAnim(pr,pc,r,c,()=>{
      exerciseMovesAllowed={r,c}; // piece moved

      if(goalIdx>=0){
        exerciseGoals.splice(goalIdx,1);
        Snd.star();
      }

      if(exerciseGoals.length===0){
        // Exercise complete!
        setTimeout(()=>exerciseComplete(),200);
      } else {
        // Show remaining goals and new legal moves
        highlightGoal(exerciseGoals.map(g=>[g.r,g.c]));
        const{moves:m2,captures:c2}=getLegalSquares(r,c);
        highlightLegal(m2);highlightCapture(c2);
        selectSquare(r,c);
      }
    });
  }
}

function exerciseComplete(){
  awaitingClick=false;
  confetti(40);
  Snd.done();
  $('celebrate-title').textContent=['Amazing!','Brilliant!','Perfect!','Wonderful!','Great job!'][Math.floor(Math.random()*5)];
  $('celebrate-text').textContent=['You nailed it!','That was perfect!','You\'re a natural!','Keep it up!','You\'re learning fast!'][Math.floor(Math.random()*5)];
  $('overlay-celebrate').classList.remove('hidden');
}

function chapterComplete(){
  const ch=CHAPTERS[currentChapter];
  confetti(70);
  Snd.done();
  $('chapter-title').textContent='Chapter Complete!';
  $('chapter-text').textContent=ch.completeText||'Onwards to the next chapter!';
  $('overlay-chapter').classList.remove('hidden');
}

function nextStep(){
  currentStep++;
  saveProgress(currentChapter,currentStep);
  runStep();
}

function nextChapter(){
  $('overlay-chapter').classList.add('hidden');
  currentChapter++;
  currentStep=0;
  saveProgress(currentChapter,currentStep);
  if(currentChapter>=CHAPTERS.length){
    showHome();
  } else {
    runStep();
  }
}

function updateProgress(){
  const total=CHAPTERS.reduce((s,ch)=>s+ch.steps.length,0);
  const done=CHAPTERS.slice(0,currentChapter).reduce((s,ch)=>s+ch.steps.length,0)+currentStep;
  $('progress-bar').style.width=Math.max(2,done/total*100)+'%';
  $('progress-label').textContent=`Ch ${currentChapter+1} / ${CHAPTERS.length}`;
}

// ── Home Screen ──
function showHome(){
  $('screen-home').classList.remove('hidden');
  $('main').classList.add('hidden');
  renderHome();
}

function showLesson(){
  $('screen-home').classList.add('hidden');
  $('main').classList.remove('hidden');
}

const CH_ICONS=['📋','🏰','♝','👑','🐴','♟️','👑','🏁','📜'];

function renderHome(){
  const grid=$('chapter-grid');
  grid.innerHTML='';
  const prog=loadProgress();
  const curCh=prog.ch;

  CHAPTERS.forEach((ch,i)=>{
    const done=i<curCh;
    const cur=i===curCh;
    const card=document.createElement('div');
    card.className=`chapter-card ${done?'completed':''} ${cur?'current':''}`;
    card.innerHTML=`
      <div class="ch-icon">${CH_ICONS[i]||'📖'}</div>
      <div class="ch-info">
        <h3>Ch ${i+1}: ${ch.title}</h3>
        <p>${ch.steps.length} steps</p>
      </div>
      <span class="ch-badge ${done?'done':cur?'current-badge':''}">${done?'✓ Done':cur?'▶ Current':'○'}</span>
    `;
    card.addEventListener('click',()=>{
      currentChapter=i;
      currentStep= (i<curCh) ? 0 : prog.st;
      if(currentStep>=ch.steps.length) currentStep=0;
      showLesson();
      runStep();
    });
    grid.appendChild(card);
  });
}

// ── Button bindings ──
$('btn-next').addEventListener('click',()=>{Snd.click();TTS.stop();nextStep()});
$('btn-skip').addEventListener('click',()=>{Snd.click();TTS.stop();currentStep=CHAPTERS[currentChapter]?.steps.length||0;runStep()});
$('btn-celebrate-next').addEventListener('click',()=>{$('overlay-celebrate').classList.add('hidden');Snd.click();nextStep()});
$('btn-chapter-next').addEventListener('click',()=>{Snd.click();TTS.stop();nextChapter()});
$('btn-home').addEventListener('click',()=>{Snd.click();TTS.stop();showHome()});
$('btn-voice').addEventListener('click',()=>{
  const on=TTS.toggle();
  $('btn-voice').textContent=on?'🔊':'🔇';
  Snd.click();
});

// ═══════════════════════════════════════════
//   HELPER: quick setup functions
// ═══════════════════════════════════════════
function placePieces(list){list.forEach(([r,c,type,color,anim])=>putPiece(r,c,type,color,anim??true))}

// Generate all reachable squares for demo arrows — returns a function for lazy eval
function demoArrowSeq(r,c,cls=''){
  return ()=>{
    const{moves,captures}=getLegalSquares(r,c);
    const all=[...moves,...captures];
    return all.map(([tr,tc])=>({arrow:[r,c,tr,tc],cls,delay:120}));
  };
}

// ═══════════════════════════════════════════════════════════
//   CHAPTERS — The Full Curriculum
// ═══════════════════════════════════════════════════════════

const CHAPTERS = [

// ─────────────────────────────────
// CHAPTER 1: THE CHESSBOARD
// ─────────────────────────────────
{
  title:'The Chessboard',
  completeText:"You know the chessboard! Let's meet the pieces! 🏰",
  steps:[
    {type:'teach',text:"<span class='piece-name'>Welcome to Hifza's Chess! 🏰</span><br><br>We're going to learn chess step by step.<br><br>Let's start with the <b>chessboard</b> itself!"},
    {type:'teach',text:"The chessboard is a big square made of <b>64 smaller squares</b>.<br><br>That's <b>8 rows</b> across and <b>8 rows</b> up!",setup(){/* board already shows */}},
    {type:'teach',text:"The squares alternate between <b>light</b> and <b>dark</b> colors.<br><br>Look at the board — can you see the pattern? It's like a checkerboard! 🟫⬜"},
    {type:'demo',text:"Each column is called a <b class='highlight'>file</b> and has a letter: <b>a</b> through <b>h</b>.<br><br>Watch as we highlight file <b>e</b>!",
      sequence:[
        {fn(){highlightGreen([[0,4],[1,4],[2,4],[3,4],[4,4],[5,4],[6,4],[7,4]])},delay:800},
        {say:"Every square has a <b>name</b>! The bottom-left is <b>a1</b>, the top-right is <b>h8</b>.<br><br>Like a map with coordinates! 🗺️"},
      ]},
    {type:'demo',text:"Each row is called a <b class='highlight'>rank</b> and has a number: <b>1</b> through <b>8</b>.<br><br>Watch rank <b>4</b> light up!",
      sequence:[
        {fn(){clearHighlights();highlightOrange([[4,0],[4,1],[4,2],[4,3],[4,4],[4,5],[4,6],[4,7]])},delay:800},
        {say:"So the square where file <b>e</b> meets rank <b>4</b> is called... <b>e4</b>! That's one of the most famous squares in chess! ⭐"},
      ]},
    {type:'teach',text:"<b>Fun fact:</b> The board is always set up so that each player has a <b class='highlight'>light square in the bottom-right corner</b>.<br><br>Remember: <b>\"Light on right!\"</b> ☀️"},
    {type:'teach',text:"Now you know the chessboard!<br><br>✅ 64 squares (8×8)<br>✅ Light and dark squares<br>✅ Files (columns): a–h<br>✅ Ranks (rows): 1–8<br>✅ Every square has a name (like e4)<br><br>Let's meet our first piece! 🎉"},
  ]
},

// ─────────────────────────────────
// CHAPTER 2: THE ROOK
// ─────────────────────────────────
{
  title:'The Rook',
  completeText:"You've mastered the Rook! It moves in straight lines like a boss! 🏰",
  steps:[
    // --- Intro ---
    {type:'teach',text:"<span class='piece-name'>♜ Meet the Rook!</span><br><br>The Rook looks like a <b>castle tower</b>. It's one of the most powerful pieces!",
      setup(){placePieces([[4,4,'R','w']])}},

    // --- How it moves ---
    {type:'demo',text:"The Rook moves in <b>straight lines</b> — up, down, left, or right.<br><br>It can move <b>as many squares as it wants</b> in one direction!",
      setup(){placePieces([[4,4,'R','w']])},
      sequence:[
        ...[[4,4,0,4],[4,4,4,7],[4,4,7,4],[4,4,4,0]].map(a=>({arrow:a,cls:'',delay:400})),
      ]},
    {type:'demo',text:"From the <b>corner</b>, the Rook can still reach 14 squares!",
      setup(){placePieces([[0,0,'R','w']])},
      sequence:demoArrowSeq(0,0)},
    {type:'demo',text:"From the <b>edge</b>, same thing — 14 squares!",
      setup(){placePieces([[3,0,'R','w']])},
      sequence:demoArrowSeq(3,0)},

    // --- What it can't do ---
    {type:'demo',text:"The Rook <b>cannot</b> move diagonally.<br><br>See? No diagonal arrows!",
      setup(){placePieces([[4,4,'R','w']])},
      sequence:[
        {fn(){highlightGreen([[4,0],[4,1],[4,2],[4,3],[4,5],[4,6],[4,7],[0,4],[1,4],[2,4],[3,4],[5,4],[6,4],[7,4]])},delay:600},
        {say:"Only straight lines: ↑ ↓ ← → <br>Never diagonal! ↗️❌"},
      ]},

    // --- Blocked paths ---
    {type:'demo',text:"The Rook <b>can't jump over</b> other pieces. It's blocked!<br><br>Watch — the Rook can't pass the pawn.",
      setup(){placePieces([[4,3,'R','w'],[4,5,'P','w'],[2,3,'P','w']])},
      sequence:[
        {fn(){
          highlightGreen([[4,0],[4,1],[4,2],[3,3],[5,3],[6,3],[7,3],[4,4]]);
          highlightOrange([[4,5],[2,3]]);
        },delay:600},
        {say:"The green squares are where it CAN go. The orange squares show friendly pieces blocking the path. It can't go past them!"},
      ]},

    // --- Capturing ---
    {type:'demo',text:"The Rook <b>captures</b> by landing on an enemy piece!<br><br>Watch the Rook capture the black pawn:",
      setup(){placePieces([[4,0,'R','w'],[4,5,'P','b']])},
      sequence:[
        {arrow:[4,0,4,5],cls:'',delay:500},
        {move:[4,0,4,5],delay:400},
        {say:"Boom! The pawn is gone! The Rook takes its place. 💥"},
      ]},

    // --- Exercise 1-4: Move to star ---
    {type:'exercise',text:"<b>Your turn!</b> Move the Rook to the ⭐ star!",
      setup(){placePieces([[7,0,'R','w']])},movePiece:{r:7,c:0},goals:[{r:7,c:7}]},
    {type:'exercise',text:"Move the Rook to the ⭐!",
      setup(){placePieces([[0,4,'R','w']])},movePiece:{r:0,c:4},goals:[{r:7,c:4}]},
    {type:'exercise',text:"Move the Rook to the ⭐!",
      setup(){placePieces([[3,0,'R','w']])},movePiece:{r:3,c:0},goals:[{r:3,c:7}]},
    {type:'exercise',text:"Move the Rook to the ⭐!",
      setup(){placePieces([[7,7,'R','w']])},movePiece:{r:7,c:7},goals:[{r:0,c:7}]},

    // --- Exercise 5-8: Capture ---
    {type:'exercise',text:"<b>Capture</b> the black pawn! Move the Rook to eat it! 😋",
      setup(){placePieces([[7,0,'R','w'],[7,6,'P','b']])},movePiece:{r:7,c:0},goals:[{r:7,c:6}]},
    {type:'exercise',text:"Capture the black Knight!",
      setup(){placePieces([[0,3,'R','w'],[6,3,'N','b']])},movePiece:{r:0,c:3},goals:[{r:6,c:3}]},
    {type:'exercise',text:"Capture the black Bishop!",
      setup(){placePieces([[4,7,'R','w'],[4,1,'B','b']])},movePiece:{r:4,c:7},goals:[{r:4,c:1}]},
    {type:'exercise',text:"Capture the enemy Rook!",
      setup(){placePieces([[5,0,'R','w'],[0,0,'R','b']])},movePiece:{r:5,c:0},goals:[{r:0,c:0}]},

    // --- Exercise 9-12: Multi-step ---
    {type:'exercise',text:"Collect <b>both</b> stars! (Two moves needed)",
      setup(){placePieces([[7,0,'R','w']])},movePiece:{r:7,c:0},goals:[{r:0,c:0},{r:0,c:7}]},
    {type:'exercise',text:"Collect <b>both</b> stars!",
      setup(){placePieces([[4,4,'R','w']])},movePiece:{r:4,c:4},goals:[{r:4,c:0},{r:0,c:0}]},
    {type:'exercise',text:"Collect <b>all three</b> stars! ⭐⭐⭐",
      setup(){placePieces([[7,7,'R','w']])},movePiece:{r:7,c:7},goals:[{r:7,c:0},{r:0,c:0},{r:0,c:7}]},
    {type:'exercise',text:"Get all three stars!",
      setup(){placePieces([[3,3,'R','w']])},movePiece:{r:3,c:3},goals:[{r:3,c:7},{r:0,c:7},{r:0,c:0}]},

    // --- Exercise 13-15: Navigate around blockers ---
    {type:'exercise',text:"The path is blocked! Navigate <b>around</b> the pawns to reach the ⭐!",
      setup(){placePieces([[7,0,'R','w'],[3,0,'P','w'],[7,4,'P','w']])},movePiece:{r:7,c:0},goals:[{r:0,c:7}]},
    {type:'exercise',text:"Reach the ⭐ without jumping over pieces!",
      setup(){placePieces([[7,7,'R','w'],[7,3,'P','w'],[4,7,'P','w']])},movePiece:{r:7,c:7},goals:[{r:0,c:0}]},
    {type:'exercise',text:"Find your way to the ⭐!",
      setup(){placePieces([[0,0,'R','w'],[0,3,'P','w'],[4,0,'P','w']])},movePiece:{r:0,c:0},goals:[{r:7,c:7}]},

    // --- Exercise 16-18: Capture multiple ---
    {type:'exercise',text:"Capture <b>all</b> enemy pawns! (move to each one)",
      setup(){placePieces([[7,0,'R','w'],[7,5,'P','b'],[0,5,'P','b']])},movePiece:{r:7,c:0},goals:[{r:7,c:5},{r:0,c:5}]},
    {type:'exercise',text:"Capture all enemies!",
      setup(){placePieces([[4,4,'R','w'],[4,0,'P','b'],[0,0,'P','b'],[0,4,'P','b']])},movePiece:{r:4,c:4},goals:[{r:4,c:0},{r:0,c:0},{r:0,c:4}]},
    {type:'exercise',text:"Clean the board! Capture everything! 🧹",
      setup(){placePieces([[7,7,'R','w'],[7,0,'P','b'],[0,0,'P','b'],[0,7,'N','b']])},movePiece:{r:7,c:7},goals:[{r:7,c:0},{r:0,c:0},{r:0,c:7}]},

    // --- Summary ---
    {type:'teach',text:"<b>🏰 Rook Summary:</b><br><br>✅ Moves in <b>straight lines</b> (up, down, left, right)<br>✅ Can move <b>any number of squares</b><br>✅ <b>Cannot</b> move diagonally<br>✅ <b>Cannot</b> jump over pieces<br>✅ Captures by landing on enemy pieces<br><br>You did amazing! 🎉"},
  ]
},

// ─────────────────────────────────
// CHAPTER 3: THE BISHOP
// ─────────────────────────────────
{
  title:'The Bishop',
  completeText:"The Bishop is your diagonal master! Great job! ♝",
  steps:[
    {type:'teach',text:"<span class='piece-name'>♝ Meet the Bishop!</span><br><br>The Bishop has a <b>pointy hat</b>. It's a sneaky piece that moves <b>diagonally</b>!",
      setup(){placePieces([[4,4,'B','w']])}},

    {type:'demo',text:"The Bishop moves <b>diagonally</b> — any number of squares in a diagonal line!",
      setup(){placePieces([[4,4,'B','w']])},
      sequence:demoArrowSeq(4,4)},

    {type:'demo',text:"From the corner, the Bishop has fewer squares — only 7!",
      setup(){placePieces([[0,0,'B','w']])},
      sequence:demoArrowSeq(0,0)},

    {type:'demo',text:"<b>Important!</b> A Bishop on a <b>light square</b> can <b>NEVER</b> reach a dark square!<br><br>It's stuck on one color forever!",
      setup(){placePieces([[4,3,'B','w']])},
      sequence:[
        {fn(){
          const sqs=[];
          for(let r=0;r<8;r++)for(let c=0;c<8;c++)if((r+c)%2===(4+3)%2)sqs.push([r,c]);
          highlightGreen(sqs);
        },delay:800},
        {say:"See? Only the <b>dark squares</b> are highlighted. This Bishop can never visit a light square! That's why you need <b>both</b> Bishops!"},
      ]},

    {type:'demo',text:"The Bishop <b>cannot jump over</b> pieces, just like the Rook.",
      setup(){placePieces([[4,4,'B','w'],[3,5,'P','w'],[6,2,'P','w']])},
      sequence:[
        {fn(){
          const{moves}=getLegalSquares(4,4);
          highlightGreen(moves);
          highlightOrange([[3,5],[6,2]]);
        },delay:600},
        {say:"The Bishop is blocked by its own pawns. It can't pass them!"},
      ]},

    {type:'demo',text:"The Bishop <b>captures diagonally</b> — landing on the enemy!",
      setup(){placePieces([[7,0,'B','w'],[4,3,'P','b']])},
      sequence:[
        {arrow:[7,0,4,3],delay:500},
        {move:[7,0,4,3],delay:400},
        {say:"The Bishop slides diagonally and captures! 💥"},
      ]},

    // Exercises 1-4: Move to star
    {type:'exercise',text:"Move the Bishop to the ⭐!",
      setup(){placePieces([[7,0,'B','w']])},movePiece:{r:7,c:0},goals:[{r:0,c:7}]},
    {type:'exercise',text:"Move the Bishop to the ⭐!",
      setup(){placePieces([[7,7,'B','w']])},movePiece:{r:7,c:7},goals:[{r:4,c:4}]},
    {type:'exercise',text:"Move the Bishop to the ⭐!",
      setup(){placePieces([[3,3,'B','w']])},movePiece:{r:3,c:3},goals:[{r:0,c:0}]},
    {type:'exercise',text:"Move the Bishop to the ⭐!",
      setup(){placePieces([[0,2,'B','w']])},movePiece:{r:0,c:2},goals:[{r:5,c:7}]},

    // Exercises 5-8: Capture
    {type:'exercise',text:"Capture the enemy pawn!",
      setup(){placePieces([[7,0,'B','w'],[3,4,'P','b']])},movePiece:{r:7,c:0},goals:[{r:3,c:4}]},
    {type:'exercise',text:"Capture the black Knight!",
      setup(){placePieces([[4,4,'B','w'],[1,7,'N','b']])},movePiece:{r:4,c:4},goals:[{r:1,c:7}]},
    {type:'exercise',text:"Capture the enemy Rook!",
      setup(){placePieces([[7,7,'B','w'],[5,5,'R','b']])},movePiece:{r:7,c:7},goals:[{r:5,c:5}]},
    {type:'exercise',text:"Capture the Queen!",
      setup(){placePieces([[0,0,'B','w'],[3,3,'Q','b']])},movePiece:{r:0,c:0},goals:[{r:3,c:3}]},

    // Exercises 9-12: Multi-step
    {type:'exercise',text:"Collect both stars! (The Bishop zig-zags!)",
      setup(){placePieces([[7,0,'B','w']])},movePiece:{r:7,c:0},goals:[{r:4,c:3},{r:0,c:7}]},
    {type:'exercise',text:"Collect both stars!",
      setup(){placePieces([[0,1,'B','w']])},movePiece:{r:0,c:1},goals:[{r:3,c:4},{r:7,c:0}]},
    {type:'exercise',text:"Collect all three stars!",
      setup(){placePieces([[7,7,'B','w']])},movePiece:{r:7,c:7},goals:[{r:4,c:4},{r:1,c:7},{r:5,c:3}]},
    {type:'exercise',text:"Get all the stars!",
      setup(){placePieces([[4,4,'B','w']])},movePiece:{r:4,c:4},goals:[{r:0,c:0},{r:3,c:7},{r:7,c:3}]},

    // Exercises 13-15: Navigate around blockers
    {type:'exercise',text:"Blocked! Find a way around to the ⭐!",
      setup(){placePieces([[7,0,'B','w'],[5,2,'P','w']])},movePiece:{r:7,c:0},goals:[{r:0,c:7}]},
    {type:'exercise',text:"Navigate around the blockers!",
      setup(){placePieces([[0,0,'B','w'],[2,2,'P','w']])},movePiece:{r:0,c:0},goals:[{r:7,c:7}]},
    {type:'exercise',text:"Find your path to the ⭐!",
      setup(){placePieces([[7,7,'B','w'],[5,5,'P','w']])},movePiece:{r:7,c:7},goals:[{r:0,c:0}]},

    // Exercises 16-18: Capture multiple
    {type:'exercise',text:"Capture all enemies!",
      setup(){placePieces([[7,0,'B','w'],[4,3,'P','b'],[0,7,'P','b']])},movePiece:{r:7,c:0},goals:[{r:4,c:3},{r:0,c:7}]},
    {type:'exercise',text:"Clean up the board!",
      setup(){placePieces([[0,0,'B','w'],[3,3,'P','b'],[7,7,'N','b']])},movePiece:{r:0,c:0},goals:[{r:3,c:3},{r:7,c:7}]},
    {type:'exercise',text:"Capture everything!",
      setup(){placePieces([[4,4,'B','w'],[6,6,'P','b'],[1,7,'R','b'],[7,1,'P','b']])},movePiece:{r:4,c:4},goals:[{r:6,c:6},{r:1,c:7},{r:7,c:1}]},

    {type:'teach',text:"<b>♝ Bishop Summary:</b><br><br>✅ Moves <b>diagonally</b> any number of squares<br>✅ Stays on <b>one color</b> forever<br>✅ <b>Cannot</b> move in straight lines<br>✅ <b>Cannot</b> jump over pieces<br>✅ Captures diagonally<br><br>You're doing great! 🌟"},
  ]
},

// ─────────────────────────────────
// CHAPTER 4: THE QUEEN
// ─────────────────────────────────
{
  title:'The Queen',
  completeText:"The Queen is the most powerful piece — and now she's yours! 👑",
  steps:[
    {type:'teach',text:"<span class='piece-name'>♛ Meet the Queen!</span><br><br>The Queen is the <b>most powerful piece</b> on the board! She wears a crown! 👑",
      setup(){placePieces([[4,4,'Q','w']])}},

    {type:'demo',text:"The Queen moves like a <b>Rook + Bishop combined</b>!<br><br>She goes <b>straight lines AND diagonals</b> — any number of squares!",
      setup(){placePieces([[4,4,'Q','w']])},
      sequence:demoArrowSeq(4,4)},

    {type:'demo',text:"From the center, the Queen can reach <b>27 squares</b>! She controls the whole board!",
      setup(){placePieces([[3,3,'Q','w']])},
      sequence:[
        {fn(){const{moves}=getLegalSquares(3,3);highlightGreen(moves)},delay:800},
        {say:"That's more than any other piece! The Queen is incredibly powerful! 💪"},
      ]},

    {type:'demo',text:"Think of it this way:<br><br>🏰 Rook = straight lines<br>♝ Bishop = diagonals<br>👑 <b>Queen = BOTH!</b>",
      setup(){placePieces([[4,4,'Q','w']])},
      sequence:[
        {fn(){highlightGreen([[4,0],[4,1],[4,2],[4,3],[4,5],[4,6],[4,7],[0,4],[1,4],[2,4],[3,4],[5,4],[6,4],[7,4]])},delay:600},
        {say:"Straight lines like a Rook..."},
        {fn(){highlightOrange([[0,0],[1,1],[2,2],[3,3],[5,5],[6,6],[7,7],[1,7],[2,6],[3,5],[5,3],[6,2],[7,1]])},delay:600},
        {say:"...PLUS diagonals like a Bishop! That's the Queen!"},
      ]},

    {type:'demo',text:"The Queen <b>cannot jump</b> over pieces either!",
      setup(){placePieces([[4,4,'Q','w'],[4,6,'P','w'],[2,2,'P','w']])},
      sequence:[
        {fn(){const{moves}=getLegalSquares(4,4);highlightGreen(moves);highlightOrange([[4,6],[2,2]])},delay:600},
        {say:"She's blocked by friendly pieces — can't go past them!"},
      ]},

    // Exercises 1-5: Move
    {type:'exercise',text:"Move the Queen to the ⭐!",
      setup(){placePieces([[7,3,'Q','w']])},movePiece:{r:7,c:3},goals:[{r:0,c:3}]},
    {type:'exercise',text:"Move the Queen to the ⭐!",
      setup(){placePieces([[7,7,'Q','w']])},movePiece:{r:7,c:7},goals:[{r:0,c:0}]},
    {type:'exercise',text:"Move the Queen to the ⭐!",
      setup(){placePieces([[4,4,'Q','w']])},movePiece:{r:4,c:4},goals:[{r:4,c:0}]},
    {type:'exercise',text:"Move the Queen to the ⭐!",
      setup(){placePieces([[0,0,'Q','w']])},movePiece:{r:0,c:0},goals:[{r:7,c:7}]},
    {type:'exercise',text:"Move the Queen to the ⭐!",
      setup(){placePieces([[3,6,'Q','w']])},movePiece:{r:3,c:6},goals:[{r:6,c:3}]},

    // Exercises 6-10: Capture
    {type:'exercise',text:"Capture the enemy piece!",
      setup(){placePieces([[7,3,'Q','w'],[0,3,'R','b']])},movePiece:{r:7,c:3},goals:[{r:0,c:3}]},
    {type:'exercise',text:"Capture!",
      setup(){placePieces([[4,4,'Q','w'],[1,7,'B','b']])},movePiece:{r:4,c:4},goals:[{r:1,c:7}]},
    {type:'exercise',text:"Capture!",
      setup(){placePieces([[0,0,'Q','w'],[7,0,'N','b']])},movePiece:{r:0,c:0},goals:[{r:7,c:0}]},
    {type:'exercise',text:"Capture both enemies!",
      setup(){placePieces([[4,4,'Q','w'],[4,7,'P','b'],[0,0,'P','b']])},movePiece:{r:4,c:4},goals:[{r:4,c:7},{r:0,c:0}]},
    {type:'exercise',text:"Capture all enemies!",
      setup(){placePieces([[7,0,'Q','w'],[0,0,'P','b'],[0,7,'P','b'],[7,7,'P','b']])},movePiece:{r:7,c:0},goals:[{r:0,c:0},{r:0,c:7},{r:7,c:7}]},

    // Exercises 11-15: Multi-step collect
    {type:'exercise',text:"Collect all stars! The Queen can reach them fast!",
      setup(){placePieces([[7,7,'Q','w']])},movePiece:{r:7,c:7},goals:[{r:0,c:0},{r:0,c:7},{r:7,c:0}]},
    {type:'exercise',text:"Collect all stars!",
      setup(){placePieces([[3,3,'Q','w']])},movePiece:{r:3,c:3},goals:[{r:0,c:0},{r:0,c:6},{r:6,c:0},{r:6,c:6}]},
    {type:'exercise',text:"Get every star!",
      setup(){placePieces([[4,4,'Q','w']])},movePiece:{r:4,c:4},goals:[{r:4,c:0},{r:0,c:0},{r:0,c:4},{r:4,c:7}]},
    {type:'exercise',text:"Navigate around blockers to get stars!",
      setup(){placePieces([[7,0,'Q','w'],[5,0,'P','w'],[7,3,'P','w']])},movePiece:{r:7,c:0},goals:[{r:0,c:0},{r:0,c:7}]},
    {type:'exercise',text:"Clean the whole board!",
      setup(){placePieces([[7,3,'Q','w'],[5,5,'P','b'],[2,0,'N','b'],[0,3,'R','b'],[3,6,'B','b']])},movePiece:{r:7,c:3},goals:[{r:5,c:5},{r:2,c:0},{r:0,c:3},{r:3,c:6}]},

    {type:'teach',text:"<b>👑 Queen Summary:</b><br><br>✅ Moves in <b>straight lines AND diagonals</b><br>✅ Combines the power of Rook + Bishop<br>✅ Can reach <b>up to 27 squares</b> from center<br>✅ <b>Cannot</b> jump over pieces<br>✅ Most powerful piece on the board!<br><br>👑 Long live the Queen! 👑"},
  ]
},

// ─────────────────────────────────
// CHAPTER 5: THE KNIGHT
// ─────────────────────────────────
{
  title:'The Knight',
  completeText:"You've tamed the tricky Knight! It's the only piece that can jump! 🐴",
  steps:[
    {type:'teach',text:"<span class='piece-name'>🐴 Meet the Knight!</span><br><br>The Knight looks like a <b>horse</b>! It's the <b>trickiest</b> piece because it moves in a very special way.",
      setup(){placePieces([[4,4,'N','w']])}},

    {type:'demo',text:"The Knight moves in an <b>L-shape</b>:<br><br>Two squares in one direction, then one square to the side!",
      setup(){placePieces([[4,4,'N','w']])},
      sequence:demoArrowSeq(4,4,'green')},

    {type:'demo',text:"Think of it as:<br><b>2 + 1</b> or <b>1 + 2</b><br><br>Two squares straight, then one to the side. Like the letter <b>L</b>!",
      setup(){placePieces([[4,4,'N','w']])},
      sequence:[
        {fn(){highlightGreen([[2,3],[2,5]])},delay:500},
        {say:"2 up + 1 to the side..."},
        {fn(){highlightOrange([[3,2],[3,6]])},delay:500},
        {say:"1 up + 2 to the side..."},
        {fn(){highlightBlue([[5,2],[5,6],[6,3],[6,5]])},delay:500},
        {say:"And the same going down! 8 possible squares total."},
      ]},

    {type:'demo',text:"<b>SUPER POWER:</b> The Knight is the <b>only piece that can JUMP</b> over other pieces! 🦘",
      setup(){placePieces([[4,4,'N','w'],[3,4,'P','w'],[5,4,'P','w'],[4,3,'P','w'],[4,5,'P','w'],[3,3,'P','b'],[3,5,'P','b'],[5,3,'P','b'],[5,5,'P','b']])},
      sequence:[
        {fn(){const{moves}=getLegalSquares(4,4);highlightGreen(moves)},delay:600},
        {say:"See? Surrounded by pieces — but the Knight can still reach 8 squares! It <b>jumps right over</b> everything! 🐴💨"},
      ]},

    {type:'demo',text:"From the corner, the Knight only has <b>2</b> possible moves:",
      setup(){placePieces([[0,0,'N','w']])},
      sequence:demoArrowSeq(0,0,'green')},

    {type:'demo',text:"From the edge, the Knight has fewer options too. <b>Knights love the center!</b>",
      setup(){placePieces([[0,4,'N','w']])},
      sequence:demoArrowSeq(0,4,'green')},

    {type:'demo',text:"The Knight <b>alternates colors</b> every jump! Watch: light → dark → light...",
      setup(){placePieces([[4,4,'N','w']])},
      sequence:[
        {fn(){selectSquare(4,4)},delay:400},
        {move:[4,4,2,5],delay:500},
        {say:"Started on dark, landed on light!"},
        {move:[2,5,4,4],delay:500},
        {say:"Back to dark! Every move switches the square color!"},
      ]},

    // Exercises 1-5: Move
    {type:'exercise',text:"Move the Knight to the ⭐! Remember the L-shape!",
      setup(){placePieces([[7,1,'N','w']])},movePiece:{r:7,c:1},goals:[{r:5,c:2}]},
    {type:'exercise',text:"Move the Knight to the ⭐!",
      setup(){placePieces([[7,6,'N','w']])},movePiece:{r:7,c:6},goals:[{r:5,c:5}]},
    {type:'exercise',text:"Move the Knight to the ⭐!",
      setup(){placePieces([[4,4,'N','w']])},movePiece:{r:4,c:4},goals:[{r:2,c:3}]},
    {type:'exercise',text:"Move the Knight to the ⭐!",
      setup(){placePieces([[0,0,'N','w']])},movePiece:{r:0,c:0},goals:[{r:2,c:1}]},
    {type:'exercise',text:"Move the Knight to the ⭐!",
      setup(){placePieces([[3,3,'N','w']])},movePiece:{r:3,c:3},goals:[{r:1,c:4}]},

    // Exercises 6-9: Jump over pieces!
    {type:'exercise',text:"Jump OVER the pawns to reach the ⭐!",
      setup(){placePieces([[7,1,'N','w'],[6,0,'P','w'],[6,1,'P','w'],[6,2,'P','w']])},movePiece:{r:7,c:1},goals:[{r:5,c:0}]},
    {type:'exercise',text:"Jump over the wall!",
      setup(){placePieces([[4,0,'N','w'],[4,1,'P','b'],[3,0,'P','b'],[3,1,'P','b'],[5,0,'P','b'],[5,1,'P','b']])},movePiece:{r:4,c:0},goals:[{r:2,c:1}]},
    {type:'exercise',text:"The Knight doesn't care about blockers!",
      setup(){placePieces([[7,4,'N','w'],[6,3,'P','w'],[6,4,'P','w'],[6,5,'P','w']])},movePiece:{r:7,c:4},goals:[{r:5,c:3}]},
    {type:'exercise',text:"Jump!",
      setup(){placePieces([[0,0,'N','w'],[0,1,'P','w'],[1,0,'P','w'],[1,1,'P','w']])},movePiece:{r:0,c:0},goals:[{r:1,c:2}]},

    // Exercises 10-14: Multi-step
    {type:'exercise',text:"Collect both stars! (You'll need 2 jumps!)",
      setup(){placePieces([[7,1,'N','w']])},movePiece:{r:7,c:1},goals:[{r:5,c:2},{r:3,c:3}]},
    {type:'exercise',text:"Collect both stars!",
      setup(){placePieces([[4,4,'N','w']])},movePiece:{r:4,c:4},goals:[{r:2,c:3},{r:0,c:4}]},
    {type:'exercise',text:"Collect all three stars! 🌟🌟🌟",
      setup(){placePieces([[7,1,'N','w']])},movePiece:{r:7,c:1},goals:[{r:5,c:0},{r:3,c:1},{r:1,c:0}]},
    {type:'exercise',text:"Get all the stars!",
      setup(){placePieces([[0,0,'N','w']])},movePiece:{r:0,c:0},goals:[{r:2,c:1},{r:4,c:2},{r:6,c:3}]},
    {type:'exercise',text:"Navigate through the whole board!",
      setup(){placePieces([[7,7,'N','w']])},movePiece:{r:7,c:7},goals:[{r:5,c:6},{r:3,c:5},{r:1,c:4},{r:3,c:3}]},

    // Exercises 15-18: Capture
    {type:'exercise',text:"Capture the enemy pawn!",
      setup(){placePieces([[7,1,'N','w'],[5,2,'P','b']])},movePiece:{r:7,c:1},goals:[{r:5,c:2}]},
    {type:'exercise',text:"Capture the enemy!",
      setup(){placePieces([[4,4,'N','w'],[2,5,'B','b']])},movePiece:{r:4,c:4},goals:[{r:2,c:5}]},
    {type:'exercise',text:"Capture all enemies!",
      setup(){placePieces([[7,1,'N','w'],[5,0,'P','b'],[3,1,'P','b']])},movePiece:{r:7,c:1},goals:[{r:5,c:0},{r:3,c:1}]},
    {type:'exercise',text:"The Knight hunts them all!",
      setup(){placePieces([[4,4,'N','w'],[2,3,'P','b'],[0,4,'P','b'],[2,5,'P','b']])},movePiece:{r:4,c:4},goals:[{r:2,c:3},{r:0,c:4},{r:2,c:5}]},

    {type:'teach',text:"<b>🐴 Knight Summary:</b><br><br>✅ Moves in an <b>L-shape</b> (2+1 squares)<br>✅ The <b>only piece that can JUMP</b> over others!<br>✅ Has <b>up to 8</b> possible moves from center<br>✅ Fewer moves from edges/corners<br>✅ Alternates square colors each move<br><br>The Knight is tricky but powerful! 🐴"},
  ]
},

// ─────────────────────────────────
// CHAPTER 6: THE PAWN
// ─────────────────────────────────
{
  title:'The Pawn',
  completeText:"Pawns may be small, but they're the soul of chess! ♟️",
  steps:[
    {type:'teach',text:"<span class='piece-name'>♟️ Meet the Pawn!</span><br><br>Pawns are the <b>smallest</b> pieces, but there are <b>8 of them</b>! They're the soldiers of your army!",
      setup(){for(let c=0;c<8;c++)putPiece(6,c,'P','w',true)}},

    {type:'demo',text:"Pawns move <b>forward one square</b>. White pawns move UP ⬆️, Black pawns move DOWN ⬇️.",
      setup(){placePieces([[5,4,'P','w']])},
      sequence:[
        {arrow:[5,4,4,4],cls:'green',delay:500},
        {say:"Just one square at a time. Small steps, but important!"},
      ]},

    {type:'demo',text:"<b>Special first move!</b> On its very first move, a pawn can move <b>TWO squares</b> forward!",
      setup(){placePieces([[6,4,'P','w']])},
      sequence:[
        {arrow:[6,4,5,4],cls:'green',delay:400},
        {arrow:[6,4,4,4],cls:'green',delay:400},
        {say:"From the starting position (rank 2 for White), it can go ONE or TWO squares!"},
      ]},

    {type:'demo',text:"<b>Pawns capture DIFFERENTLY from how they move!</b><br><br>They move forward, but capture <b>diagonally</b>! One square diagonally forward.",
      setup(){placePieces([[4,4,'P','w'],[3,3,'P','b'],[3,5,'P','b']])},
      sequence:[
        {fn(){highlightGreen([[3,4]]);highlightOrange([[3,3],[3,5]])},delay:600},
        {say:"Green = where it can <b>move</b>. Orange = where it can <b>capture</b>! The pawn moves forward but attacks sideways! 🗡️"},
      ]},

    {type:'demo',text:"A pawn <b>cannot capture forward</b>. If something is directly in front, the pawn is stuck!",
      setup(){placePieces([[4,4,'P','w'],[3,4,'P','b']])},
      sequence:[
        {fn(){highlightOrange([[3,4]])},delay:600},
        {say:"The enemy pawn is blocking the way! This pawn can't move at all! 🚫"},
      ]},

    {type:'demo',text:"Watch a pawn capture:",
      setup(){placePieces([[4,4,'P','w'],[3,5,'N','b']])},
      sequence:[
        {arrow:[4,4,3,5],cls:'',delay:500},
        {move:[4,4,3,5],delay:400},
        {say:"The pawn moved diagonally and captured the Knight! 💥"},
      ]},

    // Exercises 1-5: Move forward
    {type:'exercise',text:"Move the pawn forward to the ⭐!",
      setup(){placePieces([[6,4,'P','w']])},movePiece:{r:6,c:4},goals:[{r:5,c:4}]},
    {type:'exercise',text:"Move the pawn TWO squares forward (first move special)!",
      setup(){placePieces([[6,3,'P','w']])},movePiece:{r:6,c:3},goals:[{r:4,c:3}]},
    {type:'exercise',text:"Move the pawn to the ⭐!",
      setup(){placePieces([[6,0,'P','w']])},movePiece:{r:6,c:0},goals:[{r:4,c:0}]},
    {type:'exercise',text:"One step forward!",
      setup(){placePieces([[4,4,'P','w']])},movePiece:{r:4,c:4},goals:[{r:3,c:4}]},
    {type:'exercise',text:"March forward to the ⭐!",
      setup(){placePieces([[6,7,'P','w']])},movePiece:{r:6,c:7},goals:[{r:5,c:7}]},

    // Exercises 6-10: Capture
    {type:'exercise',text:"Capture the enemy piece diagonally!",
      setup(){placePieces([[4,4,'P','w'],[3,5,'P','b']])},movePiece:{r:4,c:4},goals:[{r:3,c:5}]},
    {type:'exercise',text:"Capture!",
      setup(){placePieces([[5,3,'P','w'],[4,2,'N','b']])},movePiece:{r:5,c:3},goals:[{r:4,c:2}]},
    {type:'exercise',text:"Capture the enemy!",
      setup(){placePieces([[3,3,'P','w'],[2,4,'B','b']])},movePiece:{r:3,c:3},goals:[{r:2,c:4}]},
    {type:'exercise',text:"Capture!",
      setup(){placePieces([[6,6,'P','w'],[5,5,'R','b']])},movePiece:{r:6,c:6},goals:[{r:5,c:5}]},
    {type:'exercise',text:"Capture left!",
      setup(){placePieces([[4,4,'P','w'],[3,3,'P','b']])},movePiece:{r:4,c:4},goals:[{r:3,c:3}]},

    // Exercises 11-15: March and capture combos
    {type:'exercise',text:"March forward, then capture! (Two moves)",
      setup(){placePieces([[6,4,'P','w'],[4,5,'P','b']])},movePiece:{r:6,c:4},goals:[{r:4,c:5}]},
    {type:'exercise',text:"Move forward then capture!",
      setup(){placePieces([[6,2,'P','w'],[5,3,'P','b']])},movePiece:{r:6,c:2},goals:[{r:5,c:3}]},
    {type:'exercise',text:"Capture both enemies!",
      setup(){placePieces([[6,4,'P','w'],[5,5,'P','b'],[4,4,'P','b']])},movePiece:{r:6,c:4},goals:[{r:5,c:5},{r:4,c:4}]},
    {type:'exercise',text:"March all the way!",
      setup(){placePieces([[6,0,'P','w']])},movePiece:{r:6,c:0},goals:[{r:4,c:0},{r:3,c:0}]},
    {type:'exercise',text:"Go go go!",
      setup(){placePieces([[6,3,'P','w']])},movePiece:{r:6,c:3},goals:[{r:4,c:3},{r:3,c:3},{r:2,c:3}]},

    // Exercises 16-18: Blocked pawn awareness
    {type:'exercise',text:"This pawn is blocked ahead! Capture to the side!",
      setup(){placePieces([[4,4,'P','w'],[3,4,'P','b'],[3,3,'N','b']])},movePiece:{r:4,c:4},goals:[{r:3,c:3}]},
    {type:'exercise',text:"Blocked! Find the capture!",
      setup(){placePieces([[5,5,'P','w'],[4,5,'R','b'],[4,6,'B','b']])},movePiece:{r:5,c:5},goals:[{r:4,c:6}]},
    {type:'exercise',text:"Zig-zag captures!",
      setup(){placePieces([[6,4,'P','w'],[5,5,'P','b'],[4,4,'P','b'],[3,3,'P','b']])},movePiece:{r:6,c:4},goals:[{r:5,c:5},{r:4,c:4},{r:3,c:3}]},

    {type:'teach',text:"<b>♟️ Pawn Summary:</b><br><br>✅ Moves <b>forward one square</b><br>✅ Can move <b>two squares</b> on its first move<br>✅ Captures <b>diagonally forward</b><br>✅ <b>Cannot</b> move backward<br>✅ <b>Cannot</b> capture forward<br>✅ Gets blocked by pieces directly ahead<br><br>Small but mighty! ♟️"},
  ]
},

// ─────────────────────────────────
// CHAPTER 7: THE KING
// ─────────────────────────────────
{
  title:'The King',
  completeText:"Protect the King at all costs! You understand the most important piece! 👑",
  steps:[
    {type:'teach',text:"<span class='piece-name'>👑 Meet the King!</span><br><br>The King is the <b>most important piece</b>. If your King is trapped, you <b>lose the game</b>!",
      setup(){placePieces([[4,4,'K','w']])}},

    {type:'demo',text:"The King moves <b>one square</b> in <b>any direction</b> — up, down, left, right, or diagonally.",
      setup(){placePieces([[4,4,'K','w']])},
      sequence:demoArrowSeq(4,4,'green')},

    {type:'demo',text:"Only ONE square at a time. He's important, so he moves carefully!",
      setup(){placePieces([[4,4,'K','w']])},
      sequence:[
        {fn(){const{moves}=getLegalSquares(4,4);highlightGreen(moves)},delay:600},
        {say:"8 possible moves from the center. Like a slow Queen!"},
      ]},

    {type:'demo',text:"From the corner, the King has only <b>3</b> moves:",
      setup(){placePieces([[0,0,'K','w']])},
      sequence:demoArrowSeq(0,0,'green')},

    {type:'demo',text:"The King captures the same way he moves — one square in any direction!",
      setup(){placePieces([[4,4,'K','w'],[3,5,'P','b']])},
      sequence:[
        {arrow:[4,4,3,5],cls:'',delay:500},
        {move:[4,4,3,5],delay:400},
        {say:"The King captured the pawn! 💥"},
      ]},

    {type:'teach',text:"<b>The most important rule:</b><br><br>The King can <b>NEVER</b> move to a square where he would be attacked! He must stay safe! 🛡️<br><br>This is what makes chess so exciting — protecting your King while attacking the enemy's!"},

    // Exercises 1-5: Move
    {type:'exercise',text:"Move the King to the ⭐!",
      setup(){placePieces([[4,4,'K','w']])},movePiece:{r:4,c:4},goals:[{r:3,c:3}]},
    {type:'exercise',text:"Move the King to the ⭐!",
      setup(){placePieces([[7,4,'K','w']])},movePiece:{r:7,c:4},goals:[{r:6,c:4}]},
    {type:'exercise',text:"Move the King to the ⭐!",
      setup(){placePieces([[0,0,'K','w']])},movePiece:{r:0,c:0},goals:[{r:1,c:1}]},
    {type:'exercise',text:"Move the King to the ⭐!",
      setup(){placePieces([[3,7,'K','w']])},movePiece:{r:3,c:7},goals:[{r:4,c:6}]},
    {type:'exercise',text:"Move the King to the ⭐!",
      setup(){placePieces([[5,5,'K','w']])},movePiece:{r:5,c:5},goals:[{r:4,c:4}]},

    // Exercises 6-9: Capture
    {type:'exercise',text:"Capture the enemy pawn!",
      setup(){placePieces([[4,4,'K','w'],[3,4,'P','b']])},movePiece:{r:4,c:4},goals:[{r:3,c:4}]},
    {type:'exercise',text:"Capture!",
      setup(){placePieces([[5,5,'K','w'],[4,6,'N','b']])},movePiece:{r:5,c:5},goals:[{r:4,c:6}]},
    {type:'exercise',text:"Capture the Bishop!",
      setup(){placePieces([[2,2,'K','w'],[1,3,'B','b']])},movePiece:{r:2,c:2},goals:[{r:1,c:3}]},
    {type:'exercise',text:"Capture!",
      setup(){placePieces([[7,0,'K','w'],[6,1,'P','b']])},movePiece:{r:7,c:0},goals:[{r:6,c:1}]},

    // Exercises 10-15: Multi-step walk
    {type:'exercise',text:"Walk the King to the ⭐! (Several steps needed!)",
      setup(){placePieces([[7,0,'K','w']])},movePiece:{r:7,c:0},goals:[{r:5,c:2}]},
    {type:'exercise',text:"Walk to the ⭐!",
      setup(){placePieces([[7,7,'K','w']])},movePiece:{r:7,c:7},goals:[{r:5,c:5}]},
    {type:'exercise',text:"Walk to the ⭐!",
      setup(){placePieces([[4,4,'K','w']])},movePiece:{r:4,c:4},goals:[{r:1,c:1}]},
    {type:'exercise',text:"Collect both stars! Walk step by step!",
      setup(){placePieces([[7,4,'K','w']])},movePiece:{r:7,c:4},goals:[{r:6,c:3},{r:5,c:2}]},
    {type:'exercise',text:"Collect all stars!",
      setup(){placePieces([[7,0,'K','w']])},movePiece:{r:7,c:0},goals:[{r:6,c:1},{r:5,c:2},{r:4,c:3}]},
    {type:'exercise',text:"Walk along the edge!",
      setup(){placePieces([[0,0,'K','w']])},movePiece:{r:0,c:0},goals:[{r:1,c:0},{r:2,c:0},{r:3,c:0}]},

    // Exercises 16-18: Capture journey
    {type:'exercise',text:"Capture all enemies on your walk!",
      setup(){placePieces([[4,4,'K','w'],[3,3,'P','b'],[2,2,'P','b']])},movePiece:{r:4,c:4},goals:[{r:3,c:3},{r:2,c:2}]},
    {type:'exercise',text:"Capture everything!",
      setup(){placePieces([[7,0,'K','w'],[6,1,'P','b'],[5,2,'P','b'],[4,3,'P','b']])},movePiece:{r:7,c:0},goals:[{r:6,c:1},{r:5,c:2},{r:4,c:3}]},
    {type:'exercise',text:"The King goes on a rampage! 😄",
      setup(){placePieces([[4,4,'K','w'],[3,4,'P','b'],[3,5,'N','b'],[4,5,'B','b']])},movePiece:{r:4,c:4},goals:[{r:3,c:4},{r:3,c:5},{r:4,c:5}]},

    {type:'teach',text:"<b>👑 King Summary:</b><br><br>✅ Moves <b>one square</b> in any direction<br>✅ The <b>most important piece</b> — protect it!<br>✅ Captures the same way it moves<br>✅ Can never move into danger<br>✅ If your King is trapped (checkmate), you lose!<br><br>Guard your King! 🛡️👑"},
  ]
},

// ─────────────────────────────────
// CHAPTER 8: SETTING UP THE BOARD
// ─────────────────────────────────
{
  title:'Setting Up',
  completeText:"You know every piece and where they all go! You're ready to play chess! ♟️🎉",
  steps:[
    {type:'teach',text:"<span class='piece-name'>🏁 Setting Up the Board!</span><br><br>Now that you know all the pieces, let's learn where each one goes at the start of a game!"},

    {type:'demo',text:"<b>Pawns</b> line up on the <b>second row</b> (rank 2 for White). Eight little soldiers!",
      setup(){},
      sequence:[
        ...Array.from({length:8},(_,c)=>({place:[6,c,'P','w',true],delay:150})),
        {say:"8 pawns, one on each file! They form a protective wall! 🛡️"},
      ]},

    {type:'demo',text:"<b>Rooks</b> go in the <b>corners</b>! Like castle towers guarding the edges.",
      setup(){for(let c=0;c<8;c++)putPiece(6,c,'P','w')},
      sequence:[
        {place:[7,0,'R','w',true],delay:400},
        {place:[7,7,'R','w',true],delay:400},
        {say:"Two rooks, one in each corner! 🏰🏰"},
      ]},

    {type:'demo',text:"<b>Knights</b> go <b>next to the Rooks</b>!",
      setup(){for(let c=0;c<8;c++)putPiece(6,c,'P','w');putPiece(7,0,'R','w');putPiece(7,7,'R','w')},
      sequence:[
        {place:[7,1,'N','w',true],delay:400},
        {place:[7,6,'N','w',true],delay:400},
        {say:"The horses stand next to the castle towers! 🐴🐴"},
      ]},

    {type:'demo',text:"<b>Bishops</b> go <b>next to the Knights</b>!",
      setup(){for(let c=0;c<8;c++)putPiece(6,c,'P','w');putPiece(7,0,'R','w');putPiece(7,7,'R','w');putPiece(7,1,'N','w');putPiece(7,6,'N','w')},
      sequence:[
        {place:[7,2,'B','w',true],delay:400},
        {place:[7,5,'B','w',true],delay:400},
        {say:"One Bishop on a light square, one on a dark square! ♝♝"},
      ]},

    {type:'demo',text:"<b>The Queen</b> goes on <b>her own color</b>!<br><br>White Queen on a <b>light</b> square. Remember: <b>\"Queen on her color!\"</b>",
      setup(){for(let c=0;c<8;c++)putPiece(6,c,'P','w');putPiece(7,0,'R','w');putPiece(7,7,'R','w');putPiece(7,1,'N','w');putPiece(7,6,'N','w');putPiece(7,2,'B','w');putPiece(7,5,'B','w')},
      sequence:[
        {place:[7,3,'Q','w',true],delay:600},
        {say:"The Queen on d1 — a light square for the White Queen! 👑"},
      ]},

    {type:'demo',text:"<b>The King</b> goes on the <b>last remaining square</b>!",
      setup(){for(let c=0;c<8;c++)putPiece(6,c,'P','w');putPiece(7,0,'R','w');putPiece(7,7,'R','w');putPiece(7,1,'N','w');putPiece(7,6,'N','w');putPiece(7,2,'B','w');putPiece(7,5,'B','w');putPiece(7,3,'Q','w')},
      sequence:[
        {place:[7,4,'K','w',true],delay:600},
        {say:"The King on e1! And that's the complete setup! 🎉"},
      ]},

    {type:'demo',text:"Now let's add the <b>Black pieces</b> — they mirror White!",
      setup(){
        for(let c=0;c<8;c++){putPiece(6,c,'P','w');putPiece(1,c,'P','b')}
        placePieces([[7,0,'R','w'],[7,7,'R','w'],[7,1,'N','w'],[7,6,'N','w'],[7,2,'B','w'],[7,5,'B','w'],[7,3,'Q','w'],[7,4,'K','w']]);
      },
      sequence:[
        {place:[0,0,'R','b',true],delay:120},{place:[0,7,'R','b',true],delay:120},
        {place:[0,1,'N','b',true],delay:120},{place:[0,6,'N','b',true],delay:120},
        {place:[0,2,'B','b',true],delay:120},{place:[0,5,'B','b',true],delay:120},
        {place:[0,3,'Q','b',true],delay:120},{place:[0,4,'K','b',true],delay:300},
        {say:"<b>The complete starting position!</b> 32 pieces ready for battle! ⚔️<br><br>Remember these rules:<br>• Rooks in corners<br>• Knights next to Rooks<br>• Bishops next to Knights<br>• Queen on her color<br>• King on the remaining square"},
      ]},

    {type:'teach',text:"<b>🎉 Congratulations! 🎉</b><br><br>You've learned about <b>every chess piece</b>!<br><br>♜ <b>Rook</b> — straight lines<br>♝ <b>Bishop</b> — diagonals<br>♛ <b>Queen</b> — straight + diagonal<br>♞ <b>Knight</b> — L-shape, can jump<br>♟ <b>Pawn</b> — forward, captures diagonal<br>♚ <b>King</b> — one square, most important<br><br>You're ready to play your first game! 🏆"},
  ]
},

]; // END CHAPTERS

// ─────────────────────────────────
// CHAPTER 9: RULES & TIPS (added after the array)
// ─────────────────────────────────
CHAPTERS.push({
  title:'Rules & Tips',
  completeText:"You know all the rules! Go play your first game of chess! ♟️🏆",
  steps:[
    {type:'teach',text:"<span class='piece-name'>📜 Chess Rules & Tips!</span><br><br>You know all the pieces! Now let's learn the <b>rules of the game</b> and some <b>tips</b> to help you win!"},

    // ── The Goal ──
    {type:'teach',text:"<b>🎯 The Goal of Chess</b><br><br>The goal is to <b>CHECKMATE</b> the enemy King!<br><br>Checkmate means the King is <b>under attack</b> and has <b>no way to escape</b>. When that happens — you win! 🏆"},

    // ── Check ──
    {type:'teach',text:"<b>⚡ What is CHECK?</b><br><br>When a piece <b>attacks the enemy King</b>, that's called <b>check</b>.<br><br>If your King is in check, you <b>MUST</b> get out of it! You can't ignore it!"},
    {type:'demo',text:"<b>Three ways to escape check:</b>",
      setup(){placePieces([[0,4,'K','b'],[4,4,'R','w']])},
      sequence:[
        {fn(){drawArrow(4,4,0,4)},delay:600},
        {say:"The Rook is attacking the King — that's CHECK! ⚡<br><br><b>1. MOVE</b> the King to a safe square<br><b>2. BLOCK</b> — put a piece between the attacker and King<br><b>3. CAPTURE</b> the attacking piece"},
      ]},

    // ── Checkmate ──
    {type:'demo',text:"<b>🏆 CHECKMATE — You Win!</b><br><br>The King is in check AND cannot escape!",
      setup(){placePieces([[0,0,'K','b'],[1,2,'K','w'],[0,7,'R','w']])},
      sequence:[
        {fn(){drawArrow(0,7,0,0);highlightOrange([[0,1],[1,0],[1,1]])},delay:600},
        {say:"The Rook attacks the King on the back rank. The King can't go to b8 or a7 because the White King controls those squares. <b>Checkmate!</b> 🏆"},
      ]},

    // ── Stalemate ──
    {type:'teach',text:"<b>🤝 STALEMATE — It's a Draw!</b><br><br>If a player has <b>NO legal moves</b> but is <b>NOT in check</b>, the game is a <b>draw</b> (tie).<br><br>Be careful! If you're winning, don't accidentally stalemate your opponent!"},

    // ── Castling ──
    {type:'demo',text:"<b>🏰 Special Move: CASTLING</b><br><br>The King and Rook can team up in a special move called <b>castling</b>!",
      setup(){placePieces([[7,4,'K','w'],[7,7,'R','w']])},
      sequence:[
        {fn(){highlightGreen([[7,6]]);highlightBlue([[7,5]])},delay:600},
        {say:"The King moves <b>two squares</b> toward the Rook, and the Rook <b>jumps over</b> the King!<br><br>King goes to g1, Rook goes to f1. This keeps your King safe!"},
        {move:[7,4,7,6],delay:400},
        {move:[7,7,7,5],delay:400},
        {say:"<b>Castled!</b> The King is safe behind the pawns! 🏰<br><br>You can only castle if:<br>• King and Rook haven't moved yet<br>• No pieces between them<br>• King is not in check<br>• King doesn't pass through check"},
      ]},

    // ── En Passant ──
    {type:'demo',text:"<b>🥷 Special Move: EN PASSANT</b><br><br>A sneaky pawn capture!",
      setup(){placePieces([[3,4,'P','w'],[1,3,'P','b']])},
      sequence:[
        {say:"If an enemy pawn moves <b>two squares forward</b> and lands <b>beside your pawn</b>..."},
        {move:[1,3,3,3],delay:600},
        {say:"...you can capture it <b>as if it only moved one square</b>! This is called <b>en passant</b> (French for \"in passing\")."},
        {fn(){drawArrow(3,4,2,3,'green')},delay:400},
        {move:[3,4,2,3],delay:400},
        {say:"Your pawn moves diagonally and the enemy pawn is captured! You must do this <b>immediately</b> on your next move or the chance is gone!"},
      ]},

    // ── Pawn Promotion ──
    {type:'demo',text:"<b>✨ Pawn Promotion!</b><br><br>When a pawn reaches the <b>other end of the board</b>, it <b>transforms</b>!",
      setup(){placePieces([[1,4,'P','w']])},
      sequence:[
        {move:[1,4,0,4],delay:500},
        {fn(){removePiece(0,4);putPiece(0,4,'Q','w',true)},delay:400},
        {say:"The pawn becomes a <b>Queen</b>! (Or a Rook, Bishop, or Knight — your choice!)<br><br>Usually you pick a Queen because she's the strongest piece! ♛"},
      ]},

    // ── Piece Values ──
    {type:'teach',text:"<b>⚖️ Piece Values</b><br><br>Not all pieces are worth the same! Use this to decide good trades:<br><br>♟ <b>Pawn = 1 point</b><br>♞ <b>Knight = 3 points</b><br>♝ <b>Bishop = 3 points</b><br>♜ <b>Rook = 5 points</b><br>♛ <b>Queen = 9 points</b><br>♚ <b>King = Priceless!</b><br><br>Trading a Knight (3) for a Rook (5) is a good trade! ✅<br>Trading your Queen (9) for a Bishop (3) is bad! ❌"},

    // ── Tip: Control the Center ──
    {type:'demo',text:"<b>💡 Tip #1: Control the Center!</b>",
      setup(){},
      sequence:[
        {fn(){highlightGreen([[3,3],[3,4],[4,3],[4,4]]);highlightBlue([[2,2],[2,3],[2,4],[2,5],[3,2],[3,5],[4,2],[4,5],[5,2],[5,3],[5,4],[5,5]])},delay:600},
        {say:"The <b>four center squares</b> (d4, d5, e4, e5) are the most important!<br><br>Pieces in the center <b>control more squares</b> and can reach any part of the board quickly. Try to put your pawns and pieces there!"},
      ]},

    // ── Tip: Develop Pieces ──
    {type:'teach',text:"<b>💡 Tip #2: Develop Your Pieces!</b><br><br>At the start, move your pieces <b>off the back row</b>! Get them into the game!<br><br>A good opening:<br>1. Move a <b>center pawn</b> (e4 or d4)<br>2. Bring out your <b>Knights</b><br>3. Bring out your <b>Bishops</b><br>4. <b>Castle</b> to protect your King<br><br>Don't move the same piece twice before developing others!"},

    // ── Tip: King Safety ──
    {type:'teach',text:"<b>💡 Tip #3: Keep Your King Safe!</b><br><br>🏰 <b>Castle early!</b> Get your King behind a wall of pawns.<br><br>⚠️ <b>Don't move the pawns</b> in front of your King — they're his shield!<br><br>🛡️ Keep a Rook or pieces nearby to defend the King."},

    // ── Tip: Think Before You Move ──
    {type:'teach',text:"<b>💡 Tip #4: Think Before You Move!</b><br><br>Before every move, ask yourself:<br><br>🤔 <b>\"Is this square safe?\"</b> — Can my piece be captured there?<br>🤔 <b>\"What is my opponent's plan?\"</b> — Look for threats!<br>🤔 <b>\"Can I capture something?\"</b> — Look for free pieces!<br>🤔 <b>\"Can I fork or pin?\"</b> — Use tactics!"},

    // ── Tip: Don't give away pieces ──
    {type:'teach',text:"<b>💡 Tip #5: Don't Give Away Pieces!</b><br><br>Before you move a piece, check: <b>\"Can my opponent capture it?\"</b><br><br>Every piece lost is like losing a soldier from your army!<br><br>If you must trade, make sure you get<b> equal or greater value</b> back! (Remember the point values! ⚖️)"},

    // ── Tip: Look for Forks ──
    {type:'demo',text:"<b>💡 Tip #6: Look for Forks!</b>",
      setup(){placePieces([[0,0,'R','b'],[0,6,'K','b'],[2,2,'N','w']])},
      sequence:[
        {fn(){drawArrow(2,2,0,1,'green');drawArrow(2,2,0,3,'green')},delay:500},
        {say:"Wait... the Knight can jump to b6 or d6... but is there a <b>fork</b>?"},
        {move:[2,2,1,4],delay:400},
        {fn(){clearArrows();drawArrow(1,4,0,6,'');drawArrow(1,4,0,2,'')},delay:400},
        {say:"<b>FORK!</b> The Knight attacks BOTH the King and the area near the Rook! The opponent can only save one! 🍴"},
      ]},

    // ── Tip: Look for Pins ──
    {type:'demo',text:"<b>💡 Tip #7: Use Pins!</b>",
      setup(){placePieces([[0,4,'K','b'],[3,4,'N','b'],[7,4,'R','w']])},
      sequence:[
        {fn(){drawArrow(7,4,0,4)},delay:600},
        {say:"The Rook <b>pins</b> the Knight to the King!<br><br>The Knight <b>can't move</b> — if it does, the King would be in check! 📌<br><br>Pins are powerful because the pinned piece is stuck!"},
      ]},

    // ── Who goes first ──
    {type:'teach',text:"<b>⬜ White Goes First!</b><br><br>In chess, <b>White always makes the first move</b>.<br><br>After that, players take turns — one move each."},

    // ── How games end ──
    {type:'teach',text:"<b>🏁 How Games End:</b><br><br>🏆 <b>Checkmate</b> — King is trapped. Winner!<br>🤝 <b>Stalemate</b> — No legal moves, not in check. Draw!<br>🤝 <b>Agreement</b> — Both players agree to draw.<br>⏰ <b>Time</b> — If using a clock, running out of time = loss!<br>🏳️ <b>Resignation</b> — A player gives up."},

    // ── Sportmanship ──
    {type:'teach',text:"<b>🤝 Good Sportsmanship!</b><br><br>Before the game: <b>\"Good luck!\"</b><br>After the game: <b>\"Good game!\"</b> (win or lose!)<br><br>Everyone loses sometimes — even grandmasters! What matters is that you <b>learn from every game</b>. 🌟<br><br>Have fun! Chess is the greatest game ever invented! ♟️"},

    // ── Grand Finale ──
    {type:'teach',text:"<b>🎉🏆 CONGRATULATIONS! 🏆🎉</b><br><br>You've completed <b>all of ChessQuest</b>!<br><br>You know:<br>✅ All 6 piece types and how they move<br>✅ How to set up the board<br>✅ Check, Checkmate, and Stalemate<br>✅ Special moves (Castling, En Passant, Promotion)<br>✅ Piece values and trading<br>✅ Opening tips and tactics<br><br>You're ready to play real chess! Go find someone and challenge them! ⚔️👑"},
  ]
});

// ═══════════════════════════════════════════
// BOOT
// ═══════════════════════════════════════════
document.addEventListener('DOMContentLoaded',()=>{
  initBoard();
  const p = loadProgress();
  currentChapter = Math.min(p.ch, CHAPTERS.length-1);
  currentStep = p.st;
  if(!CHAPTERS[currentChapter] || currentStep >= CHAPTERS[currentChapter].steps.length){
    currentStep = 0;
  }
  showHome();
});
