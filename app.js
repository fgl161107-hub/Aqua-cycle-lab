const KEY='aquaCycleLab31';
const defaults={name:'',xp:0,score:0,completed:[],answers:[],experiments:0};
function state(){try{return {...defaults,...JSON.parse(localStorage.getItem(KEY)||'{}')}}catch(e){return {...defaults}}}
function save(s){localStorage.setItem(KEY,JSON.stringify(s))}
function complete(id,xp=10){const s=state();if(!s.completed.includes(id)){s.completed.push(id);s.xp+=xp;save(s)}return s}
function go(id){location.href=id+'.html'}
function next(id){const s=complete(id);const map={start:'m1',m1:'m2',m2:'m3',m3:'m4',m4:'m5',m5:'m6',m6:'m7',m7:'m8',m8:'hasil'};go(map[id])}
function guard(id){const s=state();const order=['m1','m2','m3','m4','m5','m6','m7','m8','hasil'];let idx=order.indexOf(id);if(idx>0){const prev=order[idx-1];if(!s.completed.includes(prev)){go(prev);return false}}return true}
function header(step,total=8){const s=state();document.getElementById('player').textContent=s.name||'Peserta';document.getElementById('xp').textContent=s.xp+' XP';document.getElementById('bar').style.width=Math.min(100,(step/total)*100)+'%';}
function reset(){localStorage.removeItem(KEY);go('index')}
