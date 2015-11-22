import ProcessPixels from 'canvas/pixels/Process.js';

export default function Grayscale (context, x = 0, y = 0, width = 0, height = 0) {

    let effect = function (x, y, r, g, b, a) {

        let avg = (r + g + b) / 3;

        r = avg;
        g = avg;
        b = avg;

        return [ r, g, b, a ];

    };

    ProcessPixels(context, effect, x, y, width, height);

}
