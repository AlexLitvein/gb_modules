import { DateTime } from "luxon";
import { getDateDiffNowString } from '../../common/js/getDateDiff.js';
import { Howl } from 'howler';

const Timer = () => {
    let tm = null;

    const sound = new Howl({
        src: ['./media/zing_1.mp3'],
    });

    return {
        start(timeStr, cb) {
            let arr = timeStr.split(':');
            let initialDate = DateTime.now();
            initialDate = initialDate.set({ hour: initialDate.hour + +arr[0], minute: initialDate.minute + +arr[1], second: initialDate.second + +arr[2] });

            tm = setInterval(() => {
                const str = getDateDiffNowString(initialDate);
                if (str.length === 0) {
                    this.stop();
                }
                cb(str);
            }, 1000);
        },
        stop() {
            clearInterval(tm);
            sound.play();
        },
    }
}

window.tm = Timer();
