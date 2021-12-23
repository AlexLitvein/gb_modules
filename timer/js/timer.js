import { DateTime } from 'https://moment.github.io/luxon/es6/luxon.min.js';
import { getDateDiffNowString } from '../../common/js/getDateDiff.js';
// import { Howl } from 'howler';
// import { Howl } from '../../node_modules/howler/dist/howler.js';
import '../../common/js/howler.js';

const Timer = () => {
    let tm = null;

    const sound = new Howl({
        src: ['./media/zing_1.mp3'],
        // mute: true,
        // autoplay : false,
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