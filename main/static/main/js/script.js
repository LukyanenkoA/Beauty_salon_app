//СОБЫТИЯ КЛАВИАТУРЫ
let keys = document.querySelectorAll('.key');
const arr=new Map([
  ['q','C'],['2','Cs'],['w','D'],['3','Ds'],['e','E'],
  ['x','F'],['d','Fs'],['c','G'],['f','Gs'],['v','A'],['g','As'],['b','B'],

  ['n','C1'],['j','Cs1'],['m','D1'],['k','Ds1'],[',','E1'],
  ['i','F1'],['9','Fs1'],['o','G1'],['0','Gs1'],['p','A1'],['-','As1'],['[','B1']

]);
document.addEventListener('keydown', function(e){
  if (e.repeat == false) {
    keys.forEach(key =>
    {
      for(let pair of arr.entries()){
        if (e.key===pair[0]){
          if(key.classList.contains(pair[1])){
            let sound=document.getElementById(pair[1]);
            sound.currentTime = 0;
            sound.play();
            key.classList.add('active');
            document.addEventListener('keyup',() => {
            key.classList.remove('active');
            });
          }
        }
      }
    })
  }
})


//СОБЫТИЯ МЫШИ
keys.forEach(key => {
 key.addEventListener('mousedown', playSound);
});

function playSound(e) {
 let key = e.target;
 let sound = document.getElementById(key.dataset.sound);
 key.classList.add('active');
 sound.currentTime = 0;
 sound.play();
 key.addEventListener('mouseup',() => {
  key.classList.remove('active');
 });
}

