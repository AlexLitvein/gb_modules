import { ScriptLoader } from '../../loadScript/js/loadScript.js';

export function initSwitchDateCalc(ctrls) {
    ctrls.btnDatecalc.addEventListener('click', (e) => {
        ctrls.datecalc.className = 'show-form';
        ctrls.timer.className = 'hide-form';
    });
}

export function initSwitchTimer(ctrls) {
    ctrls.btnTimer.addEventListener('click', (e) => {
        ctrls.datecalc.className = 'hide-form';
        ctrls.timer.className = 'show-form';
        ScriptLoader.load('./timer/js/timer.js', () => { });        
    });
}

