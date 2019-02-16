import { Icon, Point } from 'leaflet';
import { size } from 'lodash';

export class MapClusterIcon {
  static icon: any = Icon.extend({
      options: {
        iconSize: new Point(44, 44)
      },

      createIcon: function() {
        const e = window.document.createElement('canvas');
        this._setIconStyles(e, 'icon');
        const s = this.options.iconSize;
        e.width = s.x;
        e.height = s.y;
        this.draw(e.getContext('2d'), s.x, s.y);
        return e;
      },

      draw: function(canvas: CanvasRenderingContext2D) {
        const pi2 = Math.PI * 2;
        let start = 0;
        for (let i = 0, l = size(this.options.colors); i < l; ++i) {
          const s = this.options.stats[i] / this.options.count;

          if (s > 0) {
            canvas.beginPath();
            canvas.moveTo(22, 22);
            canvas.fillStyle = this.options.colors[i];

            const to = start + s * pi2;
            let from = start + 0.14;
            if (to < from) {
              from = start;
            }
            canvas.arc(22, 22, 22, from, to);
            start = start + s * pi2;
            canvas.lineTo(22, 22);
            canvas.fill();
            canvas.closePath();
          }
        }

        canvas.beginPath();
        canvas.fillStyle = '#ffffff';
        canvas.arc(22, 22, 18, 0, pi2);
        canvas.fill();
        canvas.closePath();

        canvas.fillStyle = '#555';
        canvas.textAlign = 'center';
        canvas.textBaseline = 'middle';
        canvas.font = 'bold 12px sans-serif';
        canvas.fillText(this.options.count, 22, 22, 40);
      }
    });
}
