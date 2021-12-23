import { DateTime } from 'https://moment.github.io/luxon/es6/luxon.min.js';
import { getDateDiffNowString } from '../../common/js/getDateDiff.js';

const Timer = () => {
    let tm = null;

    return {
        start(timeStr, cb) {
            let arr = timeStr.split(':');
            let initialDate = DateTime.now();
            initialDate = initialDate.set({ hour: initialDate.hour + +arr[0], minute: initialDate.minute + +arr[1], second: initialDate.second + +arr[2] });

            tm = setInterval(() => {
                const str = getDateDiffNowString(initialDate);
                if (str.length === 0) {
                    clearInterval(tm);
                }
                cb(str);
            }, 1000);
        },
        stop() { clearInterval(tm); },
    }
}

window.tm = Timer();