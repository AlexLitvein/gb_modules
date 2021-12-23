import { printError, printResult } from './dateDiff/js/printResult.js';
import { getDateDiff } from './common/js/getDateDiff.js';
import { getCtrls } from './common/js/utils.js';
import { initSwitchDateCalc, initSwitchTimer } from './common/js/switchSect.js';

// import { Howl } from './node_modules/howler/dist/howler.js';
// import {Howl, Howler} from 'https://github.com/goldfire/howler.js/blob/master/dist/howler.min.js';
// import {Howl, Howler} from 'howler';

// const sound = new Howl({
//   src: ['./media/zing_1.mp3']
// });

const ctrls = getCtrls();

ctrls.datecalc.onsubmit = (event) => {
  event.preventDefault();

  const dataForm = new FormData(event.target);
  const firstDate = dataForm.get('firstDate');
  const secondDate = dataForm.get('secondDate');

  if (!firstDate || !secondDate) {
    printError('Oooopps! Введите дату')
  } else {
    const dateREsult = getDateDiff(firstDate, secondDate);
    printResult(dateREsult);
  }
}

initSwitchDateCalc(ctrls);
initSwitchTimer(ctrls);

ctrls.btnStart.addEventListener('click', (e) => {
  tm.start(inpTime.value, (str) => {
    str.length === 0 ? timeLeft.innerText = 'Время!' : timeLeft.innerText = str;
  });
});

ctrls.btnStop.addEventListener('click', (e) => {
  tm.stop();
  timeLeft.innerText = 'Остановлен';
});
