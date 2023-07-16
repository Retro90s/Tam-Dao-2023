import Image from 'next/image';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

export type Photos = {
  src: string;
  width: number;
  height: number;
  base64: string;
};

const Photos: Photos[] = [
  {
    src: '/gallery/230114_165001.jpg',
    width: 2202,
    height: 1652,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAL0lEQVR4nGOwkZXQFxW2UpUIdrJmWD+9yUlZ2VhUkI+FgeHD/y/NdS2z6zqa+/sAtrIMdCJTnF4AAAAASUVORK5CYII=',
  },
  {
    src: '/gallery/230114_165002.jpg',
    width: 2114,
    height: 1586,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAL0lEQVR4nGNQYmSIsDVXY2AwkxVgqIt2shHnS3S0sdERZ/j//8mcvq4ZhWWVTUUAoooL1GwXXLEAAAAASUVORK5CYII=',
  },
  {
    src: '/gallery/230114_165301.jpg',
    width: 1274,
    height: 956,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMklEQVR4nAEnANj/AHx2VhMJAGBeVbfjuwAqAABGAADYj4Hn/tsAvLO8YCkl1JqIu7zCGEkQ7eUSGYwAAAAASUVORK5CYII=',
  },
  {
    src: '/gallery/230114_165302.jpg',
    width: 1274,
    height: 956,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMklEQVR4nAEnANj/AHt4VxcGADw1LLLbsAAvHyBAAADYlIvq/+EAsLC5ajw315eFp6asD0oQk98EbAsAAAAASUVORK5CYII=',
  },
  {
    src: '/gallery/230114_165305.jpg',
    width: 1205,
    height: 904,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nGOYuWRb98y185793///P4OFj6MEM4OqkXXyhC4GtZDoivpoW209NX1ZAGxhDyMJsLzdAAAAAElFTkSuQmCC',
  },
  {
    src: '/gallery/230114_165306.jpg',
    width: 1173,
    height: 880,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAL0lEQVR4nGOY0NWRnxJfdeD/vv//GcQtjZWkGXiYGe0SfBnUvUMyCmJtLOxVddUBLLEMrGYv21sAAAAASUVORK5CYII=',
  },
  {
    src: '/gallery/230114_165310.jpg',
    width: 2042,
    height: 1530,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nGMoTdNmYmdgEBWbOKWb4f+PMndjubKAxCfZbgyHju0IcfFqS8vbuGw5APs6DyaCL2pVAAAAAElFTkSuQmCC',
  },
  {
    src: '/gallery/230114_165312.jpg',
    width: 2506,
    height: 1880,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nGMICjBkYGWQNLc5+/8/w+1tphbaDFYiMkVhsgxHDvWH+7gmOXst66kHAO3dDUV9mmJLAAAAAElFTkSuQmCC',
  },
  {
    src: '/gallery/230114_165316.jpg',
    width: 2250,
    height: 1688,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nGPIS7Zi52YQUlbeduspw//vhd5WUnmugWtiDRnOn1oZExBQFZuyc/5sABCBD5sPZRh3AAAAAElFTkSuQmCC',
  },
  {
    src: '/gallery/230114_165701.jpg',
    width: 839,
    height: 839,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAP0lEQVR4nAE0AMv/ALSdAFlQC/jaQRQBAAD/8Dz72Sv/+UBGOgAAtqwP3rYTtpcAk30AAHB6aHpuRXBmM6ybQj2EFZagb0l4AAAAAElFTkSuQmCC',
  },
  {
    src: '/gallery/230114_165703.jpg',
    width: 960,
    height: 960,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAP0lEQVR4nAE0AMv/AH9uBGtfIuTFOhYBAADs1i7/3TX/+kM7JwAAgaVA+sMn0K0XjWoAAGiHfo5+XJqLVqqaYjAlFkJnsYLXAAAAAElFTkSuQmCC',
  },
  {
    src: '/gallery/230114_170501.jpg',
    width: 889,
    height: 1185,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMUlEQVR4nGO4+P//rKv/F9/9z1BUFuvn45eSlc0QocWgzsAQHhPJYGNi4h8alVZaDQCJOA/Q5YQI9gAAAABJRU5ErkJggg==',
  },
  {
    src: '/gallery/230114_170504.jpg',
    width: 749,
    height: 999,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMUlEQVR4nGO49v//6qf/Vz34zxAaZOZhaebjas+QZS6kx8AQ6OPNoCon7ecfmFtZCwB2ug7JmXFn2gAAAABJRU5ErkJggg==',
  },
  {
    src: '/gallery/230114_170506.jpg',
    width: 809,
    height: 1078,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMUlEQVR4nGO48f//ykf/Vz35z1DdUp5ZWFrW2MKQY8ujy8Dg7+XOYK6t5u8flFNVAwCl5hDKQFuDLgAAAABJRU5ErkJggg==',
  },
  {
    src: '/gallery/230114_170510.jpg',
    width: 771,
    height: 771,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAPUlEQVR4nGO4+f//8uvfNj7/P3HXRQYPJy1tWUEbTU1PB0OG6Qmasfx8ygwMpaX5DCrMbMr84rZObsW1DQBcZRIVqzGxugAAAABJRU5ErkJggg==',
  },
  {
    src: '/gallery/230114_170901.jpg',
    width: 937,
    height: 703,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMklEQVR4nAEnANj/AJ6fmbm9uK+5s3+GewBaWUMSCQBBPB5VTCgA0tzdcXl+q7a79//6YXITFOT9AaoAAAAASUVORK5CYII=',
  },
  {
    src: '/gallery/230114_170902.jpg',
    width: 794,
    height: 793,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAP0lEQVR4nAE0AMv/ANjY2+fu8uz9/8zj8gAhIhc4NyoaGQA2MxoAcHBdCgIAFQ4AXFY9AL/N14SPl3+LmM3a5Id4Fxpp+hJ4AAAAAElFTkSuQmCC',
  },
  {
    src: '/gallery/230114_170909.jpg',
    width: 899,
    height: 899,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAP0lEQVR4nAE0AMv/AG9va6SnpISOiZacmgBCQSJAPCQHAgBAOhMA1NbCSElBHiIgnZaAAO/6/5umr6q5xcXT3RRqF0H1Em4FAAAAAElFTkSuQmCC',
  },
  {
    src: '/gallery/230114_170910.jpg',
    width: 960,
    height: 960,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAPUlEQVR4nGO49er7x///71x50GLvyDC7MGVxRXFVSnyLjSlDnBK/JgODkrpil5sxgyofgykDgxo7gzYDAwCHLhFU+hrwVAAAAABJRU5ErkJggg==',
  },
  {
    src: '/gallery/230114_171001.jpg',
    width: 1119,
    height: 897,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMklEQVR4nAEnANj/AN7d1+jt8ZKZopifpABrbU4lGA8dCAAlIBAA/PzAjW1ikGdY//62iKwTA1gDUAcAAAAASUVORK5CYII=',
  },
  {
    src: '/gallery/230114_171003.jpg',
    width: 1221,
    height: 915,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nGNYsXxOV3dPakaeb0AQQ2WVn5mamCIjg6utFMP//2e3zeufWJDw7fNuAC0oENtXuTDdAAAAAElFTkSuQmCC',
  },
  {
    src: '/gallery/230114_171005.jpg',
    width: 867,
    height: 1157,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMUlEQVR4nGN49+v/4y//X/7/z2Dj6mFobiUrr8Lg72+ixMCQEW/GMHtuV35s4oJlTQCRHREYp4ERfQAAAABJRU5ErkJggg==',
  },
  {
    src: '/gallery/230114_171007.jpg',
    width: 920,
    height: 1227,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMUlEQVR4nGM4d/vZy3//r337zxCRkOoVGmvi4M5gaq4mycBgZijGUFcT52NoXFMbAACKmQ+O+1QGPAAAAABJRU5ErkJggg==',
  },
  {
    src: '/gallery/230114_171009.jpg',
    width: 896,
    height: 1194,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAM0lEQVR4nAEoANf/APf8/5uir97r9AAmJyUmJSENBAAAgnlUQRARhHY9ALW1o4l2ebi7pWwMERCcb4wyAAAAAElFTkSuQmCC',
  },
  {
    src: '/gallery/230114_171012.jpg',
    width: 960,
    height: 960,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAP0lEQVR4nAE0AMv/APn7/ZmgraOqtuTw8wA0NjhKTEouLS4FAwMAaWlOOSIcUjsoiH5WALa2e4JFUGpAKZWUSmnSFKRy2K1TAAAAAElFTkSuQmCC',
  },
  {
    src: '/gallery/230114_171014.jpg',
    width: 908,
    height: 908,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAP0lEQVR4nAE0AMv/AKetspqiq4iOlY6ZlgA3OThKSkQrLCoDAAMA6OW2XEI3im1T//m9AOLpsaRgc208L7S8blLqF12ayjyAAAAAAElFTkSuQmCC',
  },
  {
    src: '/gallery/230114_171018.jpg',
    width: 1276,
    height: 956,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nGN49+nDoeMXQqPTLRw9GdKyAkT5GOTEGEz0xBk+/zg3qbNelofx+7fjAElrECRhF07sAAAAAElFTkSuQmCC',
  },
  {
    src: '/gallery/230114_171019.jpg',
    width: 1075,
    height: 806,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAL0lEQVR4nGOoqq3KKayydfaTkFVh8A60kxbjEOVlEONjYLh0bX6Im70qF8OP7+sByicLNl1rbUQAAAAASUVORK5CYII=',
  },
  {
    src: '/gallery/230114_171020.jpg',
    width: 928,
    height: 696,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nGNg4GKQlhYwMlEW42dk+Plzf2GCd4Sd2q8faxkOn9sZG5cuxsg5dX47ANOODW8FDgTvAAAAAElFTkSuQmCC',
  },
  {
    src: '/gallery/230114_171022.jpg',
    width: 938,
    height: 1251,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMUlEQVR4nGO4eu/lu///H/37z6BtZKKuY8LGJ8rg4Kiiqcjt4STNUFCWKMbAmp7uBABriQ26UoWn5wAAAABJRU5ErkJggg==',
  },
  {
    src: '/gallery/230114_171520.jpg',
    width: 1388,
    height: 1850,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAM0lEQVR4nAEoANf/AOnazv345f//8gDAtYKdjXOMfmkALjEpRDdAIgAAAKOdmZ+enpuRjdVzFDXwGV6+AAAAAElFTkSuQmCC',
  },
  {
    src: '/gallery/230114_171522.jpg',
    width: 1390,
    height: 1390,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAP0lEQVR4nAE0AMv/AP/+5P//8f7+8vv79ACtp3mSiGx6YlxpWkwAIiQcQUpTMxwuIAAAAJSPh7SzrX19fm1oYSA6GYzrP+RzAAAAAElFTkSuQmCC',
  },
  {
    src: '/gallery/230114_171628.jpg',
    width: 1863,
    height: 1398,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAL0lEQVR4nGPIVLPLMXN7euLS/2+/GRIFfcwZRIwYxGyYDBnCGCyTGQw67BJyTYIAE4sMIK1ijzAAAAAASUVORK5CYII=',
  },
  {
    src: '/gallery/230114_173028.jpg',
    width: 1836,
    height: 1836,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAPElEQVR4nGOQEBM1N5J2tFEU4WdhcLAzPXf38uf///PyEhgsbXQjDA3zIpJT8lIZFJQVxRi4+fhkpVTVAIChDco1cREkAAAAAElFTkSuQmCC',
  },
  {
    src: '/gallery/230114_173029.jpg',
    width: 1747,
    height: 2328,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nGMQl1XQMVTnlZRjiEmOefL/f2xqAoOjjaERr7yBuT2DiJoJA4McA7scAMR5CJ9LgWkeAAAAAElFTkSuQmCC',
  },
  {
    src: '/gallery/230114_173030.jpg',
    width: 1786,
    height: 2381,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nGOQkJSwcTTmFhRkyC3Je/X/f155KYOVqZYqg4CEnBqDuk2AhL6nmKknAM7jCblsRuq8AAAAAElFTkSuQmCC',
  },
  {
    src: '/gallery/230114_173031.jpg',
    width: 1861,
    height: 1395,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nGMQl5SatXbV3I1rZORkGMKTk/fd+Xb7//+MmnYGVy83dQZ2RQYZEzdfADlfDoTQQuCnAAAAAElFTkSuQmCC',
  },
  {
    src: '/gallery/230114_173032.jpg',
    width: 1996,
    height: 1540,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nGMwMTOdvXbdzDUrdQyMGFKzUi88eP343//ItEwGexcnNQYmCQYJLUtrAEloDqQ35t+LAAAAAElFTkSuQmCC',
  },
  {
    src: '/gallery/230114_173035.jpg',
    width: 2276,
    height: 1804,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nGOw9widu/v4zJ0HdCw9GCpaux9++f/w///gjDIGW79oJS5ZTgY1BWtvAG32ECuGYgEbAAAAAElFTkSuQmCC',
  },
  {
    src: '/gallery/230114_173601.jpg',
    width: 2568,
    height: 1926,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nGPIyEiaMrnzwL711fWNDEXZcdtWzf//8215RQ5DTFKii6EFB5OYnZsbAHbfELt2A+nmAAAAAElFTkSuQmCC',
  },
  {
    src: '/gallery/230114_173606.jpg',
    width: 2568,
    height: 1926,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nGPIy00/dmz71SsH6ppbGNKSw2+d2Pv/27uSsmyGsLg4E3kNBgYRBy9PAJefEZ//0BM9AAAAAElFTkSuQmCC',
  },
  {
    src: '/gallery/230114_173608.jpg',
    width: 2568,
    height: 1926,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nGMoL817/OTStcsHW9s7GVKSw19cOvX/17u6hmKG6PgkK2VdFhYxVz8/AK5mEpIT7K+BAAAAAElFTkSuQmCC',
  },
  {
    src: '/gallery/230114_173610.jpg',
    width: 2182,
    height: 1637,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nGNIjI/ct3fNnRtH8/MyGaoqc58/uPT39/u2tmqGyJjQXDcvcQZBLSNTAJrYEiceo8V2AAAAAElFTkSuQmCC',
  },
  {
    src: '/gallery/230114_173612.jpg',
    width: 2068,
    height: 1551,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nGMID/O5//Tin79PMjNiGZKTw+a21EzobImJDWVwc3UK1jbjZRTVNDUHAG/2DzdDLhBfAAAAAElFTkSuQmCC',
  },
  {
    src: '/gallery/230114_173617.jpg',
    width: 1596,
    height: 1197,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAL0lEQVR4nGPw8rTecWjz1/8fM9LDGMzNdfy01Q3VlDT1NRmMzC1UpFQYGMUlVXUAGOAKvylg9zQAAAAASUVORK5CYII=',
  },
  {
    src: '/gallery/230114_173620.jpg',
    width: 1373,
    height: 1030,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nGOoqck8e/fCt/+fp0xpYEhLjWj0c/O2trBxtmcwNDOJsXJmYhARUdIGAGl0DgvMBH+/AAAAAElFTkSuQmCC',
  },
  {
    src: '/gallery/230114_173622.jpg',
    width: 1610,
    height: 1327,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nGOoKM95+/nxn//PWpoqGLo6yq+c2HX9+qnGtiqGhMSoQkcPAQYhcydnAMLkE0neB3qiAAAAAElFTkSuQmCC',
  },
  {
    src: '/gallery/230114_174015.jpg',
    width: 1712,
    height: 2284,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nGMIi4xPTIpXUtdksDZV+/XvdVCAA0NNkmmKva6Hjw2Dp6OhJAODsLgYAPscCsVvnJXsAAAAAElFTkSuQmCC',
  },
  {
    src: '/gallery/230114_174016.jpg',
    width: 1711,
    height: 2281,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nGNor8qb2VFeV5rJ4GMp+v/7gfpsR4blFeary9376kIZ3PRYNRgYpPkZAE2BDcrAEaWwAAAAAElFTkSuQmCC',
  },
  {
    src: '/gallery/230114_174017.jpg',
    width: 1702,
    height: 1702,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAPUlEQVR4nGPgZ2OIDXYqLwjmY2VgCHQzPHtm2+8/r/JyQhjail2npFrkxftmZ4Qw+LlK2DEwSLMzqKuLAAC4WQ+YT3748wAAAABJRU5ErkJggg==',
  },
  {
    src: '/gallery/230114_174020.jpg',
    width: 1852,
    height: 2470,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMUlEQVR4nGOY2du8ZEZrY20RQ4yn6v/fRwoSLBjmlJpsaQ+pzXNncDPiVGFgEOdlAABgAQ46go4nggAAAABJRU5ErkJggg==',
  },
  {
    src: '/gallery/230114_174021.jpg',
    width: 1728,
    height: 2305,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nGOI8jBuyfNws1FjqMu0+//71Krp6Qyz8pQbwlSqcpwZPEzEFBkYJAUZACM1DHTNfkbZAAAAAElFTkSuQmCC',
  },
  {
    src: '/gallery/230114_174022.jpg',
    width: 1723,
    height: 2297,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nGPwslatTLY10xVnqEy2+v/z5IL+eIYJqZLF7uJZMSYMTkZCcgwMItwMAAcrCz+ood/gAAAAAElFTkSuQmCC',
  },
  {
    src: '/gallery/230114_174040.jpg',
    width: 1764,
    height: 2352,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nGOI9rXPjfdwtTVkCLGT+f/jWFWOI8PEbI152ValcRYMWrIMhmIMUowMAAm8C1w/ACicAAAAAElFTkSuQmCC',
  },
  {
    src: '/gallery/230114_174041.jpg',
    width: 1785,
    height: 2380,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nGOI8LEtSfO2MdNgSPTW+P/nfEOhB0Nvhsq0dLP0QAMGdXkGLXEWcSYGAAtzC1BQHhhnAAAAAElFTkSuQmCC',
  },
  {
    src: '/gallery/230114_174545.jpg',
    width: 1808,
    height: 2410,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nGMwVRXKDtWTFWBgqIi1+v/r2uyuZIZZGdJlPrIFESYM2gqM8iIMoswMAO7tCn0oEKcaAAAAAElFTkSuQmCC',
  },
  {
    src: '/gallery/230114_174546.jpg',
    width: 1822,
    height: 2430,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nGOw0ZfJDTeS4mVgKAg1/v/7+sz2eIYpKXJlvnKFUaYMukoMskIMQgwMAO/jCnTXjK5+AAAAAElFTkSuQmCC',
  },
  {
    src: '/gallery/230114_174547.jpg',
    width: 1701,
    height: 2268,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMUlEQVR4nGNQE2Poq/DVkGVgmFkZ8P/7lQNrmxmWFypFGTJVJ5gxqEkySPEyCDMwAAAH4wtCaK5KIgAAAABJRU5ErkJggg==',
  },
  {
    src: '/gallery/230114_174622.jpg',
    width: 1859,
    height: 2480,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAM0lEQVR4nAEoANf/AOjk3trSx7y6uAA9KhD/+MhURSMAq4NI1Kp4h3JOAEAqACINABcDALBfEKR4HfJRAAAAAElFTkSuQmCC',
  },
  {
    src: '/gallery/230114_174623.jpg',
    width: 1920,
    height: 2560,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAM0lEQVR4nAEoANf/APz69+Xf18zNzQA8KxPw2KpHOxsAkm03169+gm5JADkkACMPABgFALgsEJe8QkY0AAAAAElFTkSuQmCC',
  },
  {
    src: '/gallery/230114_174624.jpg',
    width: 1825,
    height: 2433,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAM0lEQVR4nAEoANf/AMW+uNHIvK2spwA0IAD/+8hsXDUAn3k/wpppkHxWADUkABcBABIAAJM4D6URbg0YAAAAAElFTkSuQmCC',
  },
  {
    src: '/gallery/230114_180001.jpg',
    width: 1197,
    height: 898,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nGMIK2/Zcerc7mMnnvz/z8DByaApxePjamprZ87gERStr6oTGJe59uhlAE+YD3cBhlg3AAAAAElFTkSuQmCC',
  },
  {
    src: '/gallery/230114_180002.jpg',
    width: 1193,
    height: 896,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nGMIq+lZvPPQ2n3Hb/3/z8DGzGCkKuHrZm5lZ85gYmErJyjh6B3YOGU+AEGGDfkyKlONAAAAAElFTkSuQmCC',
  },
  {
    src: '/gallery/230114_180007.jpg',
    width: 1251,
    height: 939,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nGPwyatcte/opoMnbv3/z8DPxmCsKh4V4mznbMPg5R1qYmCdXt4yZc0OAEu6D4nX5z4KAAAAAElFTkSuQmCC',
  },
  {
    src: '/gallery/230114_180009.jpg',
    width: 1199,
    height: 900,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nGMIq+5Zsf/UhsOnb///z8DBzmCqKR3oaWlla85gae+iJCpp6+7fOHU+AEhVDkMaCS67AAAAAElFTkSuQmCC',
  },
  {
    src: '/gallery/230114_183001.jpg',
    width: 851,
    height: 851,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAP0lEQVR4nAE0AMv/AEZVbkhXcURRaDZEVwDQ3/vN4f+60fGVqsgA1r62/+fi//by5NvbAAYGBRsZFiclIRUTEMeMGVXJNRpUAAAAAElFTkSuQmCC',
  },
  {
    src: '/gallery/230114_191301.jpg',
    width: 1024,
    height: 576,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAI0lEQVR4nGMorVi7Ytma/79fZgRbMXAw8M7tafv/8kxWkD0AsK4M4GD4I5oAAAAASUVORK5CYII=',
  },
  {
    src: '/gallery/230114_191302.jpg',
    width: 1024,
    height: 576,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAJUlEQVR4nAEaAOX/ADYqM2pmjrS0x//23AAZAQDfvar/9trUuKWicQ5SZIBkGAAAAABJRU5ErkJggg==',
  },
  {
    src: '/gallery/230114_191303.jpg',
    width: 1024,
    height: 576,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAI0lEQVR4nGPYe+Lp/2+fdi5o3t1dxtDeN91YRVlXgkuRgQEAyx4LgO9OADgAAAAASUVORK5CYII=',
  },
  {
    src: '/gallery/230114_191305.jpg',
    width: 1024,
    height: 576,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAI0lEQVR4nGNYOW9BR18VKzODuoI4w+IZ3f8/3q5MCHE11AQAhkYKO5lkM24AAAAASUVORK5CYII=',
  },
  {
    src: '/gallery/230114_191306.jpg',
    width: 1024,
    height: 576,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAI0lEQVR4nGNgYmQy1jQ6vPv0zz//GVKtVPZNq3x7bs+Tc0sAilgNLm1VAL8AAAAASUVORK5CYII=',
  },
  {
    src: '/gallery/230114_191307.jpg',
    width: 1024,
    height: 576,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAI0lEQVR4nGNgYWDUVdedPWX2p5//Gaak++7sTv9/78itY6sAhTQNGf8TsPAAAAAASUVORK5CYII=',
  },
  {
    src: '/gallery/230114_191308.jpg',
    width: 1024,
    height: 576,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAJUlEQVR4nAEaAOX/AEVGR7u2ufD3//z67wAcAACAZVrjybb/4K29wA8ROAQljQAAAABJRU5ErkJggg==',
  },
  {
    src: '/gallery/230114_191401.jpg',
    width: 884,
    height: 1178,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMUlEQVR4nGNg4DSTMQ32cDJgiMyI6ZvZ9f/bAQY3G7XlnQllMXYMny+uMlNg0JdlAgADMA17MtMkbwAAAABJRU5ErkJggg==',
  },
  {
    src: '/gallery/230114_191403.jpg',
    width: 884,
    height: 1179,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMUlEQVR4nGNgUA5WN/GyMddmSC1Ju3Jx2/9vmxhy4x0eH+jNCjFj2DevVJWB4f+DbQApIRC21TO3zAAAAABJRU5ErkJggg==',
  },
  {
    src: '/gallery/230114_191501.jpg',
    width: 847,
    height: 1130,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAM0lEQVR4nAEoANf/AA4JA1hohKnA9wC3r5O8u6zs7+oAwbWU//LL9t25AMicasibbsqtka8nF5nfk3WmAAAAAElFTkSuQmCC',
  },
  {
    src: '/gallery/230114_191502.jpg',
    width: 886,
    height: 1181,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAM0lEQVR4nAEoANf/AAoICzJBXnub7AC4s5SwqpvBysUA/+7R0ciz5dKtAP/0wP/nr//ivpYzGIopqCVCAAAAAElFTkSuQmCC',
  },
  {
    src: '/gallery/230114_191703.jpg',
    width: 960,
    height: 960,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAP0lEQVR4nAE0AMv/AJFtTgoGAH5nSnlTQgCKeGFVOCfYu5K+oIoA4dvB1q2Nx59zxbabAP7z5v/3zryQbsuumVNuG6Ff72y0AAAAAElFTkSuQmCC',
  },
  {
    src: '/gallery/230114_191704.jpg',
    width: 960,
    height: 960,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAP0lEQVR4nAE0AMv/ANrLtqWMbYJ1Y+HTuACXh2PDo3MXAAD/+uAAcGZXXTwglFor0LmjAJ+OdiMOAGs/JSwgFKTdFjjBWXSEAAAAAElFTkSuQmCC',
  },
  {
    src: '/gallery/230114_191705.jpg',
    width: 960,
    height: 960,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAPUlEQVR4nGPQ1OTV0lH09NOZPtuHwVyPKyfRzFCPIdJbhWFGdejheYWrWqP8DIUZ/v99r8jA0Jtuv3N2DgB1OhEFDPJQmQAAAABJRU5ErkJggg==',
  },
  {
    src: '/gallery/230114_191932.jpg',
    width: 1021,
    height: 765,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMklEQVR4nAEnANj/ABEFAFZPQsCskv/95QAmFABrUTPCo4X/6c4ATjQSlHFGtJhx38CgNMERgYwYXhkAAAAASUVORK5CYII=',
  },
  {
    src: '/gallery/230114_191933.jpg',
    width: 1021,
    height: 765,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMklEQVR4nAEnANj/ABYGAF9SQdrBoP/87AAkBgB4XT7lwJ//7dIASTEPoXxPspdxq5Z+RucR3qvGq1sAAAAASUVORK5CYII=',
  },
  {
    src: '/gallery/230114_191935.jpg',
    width: 1215,
    height: 912,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMklEQVR4nAEnANj/AAgHAFBPTMKwlP/95QArHgdqUTW6nH/e0cAAYEEgimpBsJJt1baWMkkRLLRdHJcAAAAASUVORK5CYII=',
  },
  {
    src: '/gallery/230114_191939.jpg',
    width: 1021,
    height: 765,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nGPgYGYI8vPctqTj/6/rDKqiDLGe+jtnVN8+tY3BWIEhL0hvcmXEibV9ABxzD4X0CXDUAAAAAElFTkSuQmCC',
  },
  {
    src: '/gallery/230114_191940.jpg',
    width: 1128,
    height: 846,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nGPgZmVIigm+e3z2/z/PGDTFGMqiLPbNr79/dguDsxZTd5bN/NaElf25ADkpEI50O+HWAAAAAElFTkSuQmCC',
  },
  {
    src: '/gallery/230114_191942.jpg',
    width: 1132,
    height: 849,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nGPgY2NIjg29cXDG/z+PGLQkGUrCLQ4sbHhwZguDtwFvR4bN0s7U1ZMKATm6ELQYtlilAAAAAElFTkSuQmCC',
  },
  {
    src: '/gallery/230114_191943.jpg',
    width: 1021,
    height: 765,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nGMQZGGIDfa4sX/S/18PGNT5GXIDjbZNK79/Yi2DoQRDQ4LZzIaYWS2pACqxD6Shl/9BAAAAAElFTkSuQmCC',
  },
  {
    src: '/gallery/230114_192001.jpg',
    width: 1280,
    height: 960,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMklEQVR4nAEnANj/ABwHAAEFCFBXY6OakwA/MCJzYE/Kspeek30AYlhBtpt5//PHzZR36esP1hwkWDgAAAAASUVORK5CYII=',
  },
  {
    src: '/gallery/230114_192002.jpg',
    width: 1280,
    height: 960,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMklEQVR4nAEnANj/ACQQBAAEF0hjg6SkqwB9WkJiVErKy8uqpp0AaWBKtqB+//LEzJN3CrgRTXBuMnMAAAAASUVORK5CYII=',
  },
  {
    src: '/gallery/230114_192003.jpg',
    width: 1280,
    height: 960,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nGPQkxdnYmMPi8ua2d/OEO9uUhDjvXVxz5JpdQyZsW47F9b+/3r20qxaAPbqEFvtpMVlAAAAAElFTkSuQmCC',
  },
  {
    src: '/gallery/230114_212739.jpg',
    width: 1728,
    height: 972,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGP4//Xzz6//Z7R2CnOwM5QVlRno26ycOUtFVAgAwNcLvQMYTN4AAAAASUVORK5CYII=',
  },
  {
    src: '/gallery/230114_232732.jpg',
    width: 4032,
    height: 3024,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMklEQVR4nAEnANj/AP/ClP/otv/pxM7DpACqinCjhnb/5Mo3MikAb5Cif5CQ8fnuAAwN8N4Wh0ZVQh0AAAAASUVORK5CYII=',
  },
  {
    src: '/gallery/230114_232738.jpg',
    width: 4032,
    height: 3024,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMklEQVR4nAEnANj/APaqdf/xwuTMrb+6oQCqkXeliXv/za0KCwYAXXmIn6Sg7/DiFiEh1NUViIpRfZMAAAAASUVORK5CYII=',
  },
  {
    src: '/gallery/230114_232740.jpg',
    width: 4032,
    height: 3024,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMklEQVR4nAEnANj/APeqdv/rwOPKrcK7ogCvlXm3m4n/wJkGBgAAW3qLorOv5O/iAA8U1qAVc8jBWHgAAAAASUVORK5CYII=',
  },
  {
    src: '/gallery/230114_234658.jpg',
    width: 4032,
    height: 3024,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nGPg4OAUERayMjV5efUiQ2Ko//8XNxa0N/x/dYth8aR2Iz0tGSkJQ111ABrXDsysO3ZKAAAAAElFTkSuQmCC',
  },
  {
    src: '/gallery/230115_081512.jpg',
    width: 2468,
    height: 1851,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nGP48Ov/kq2X1xz/tujILwYDEyMGFlkGKUuz4AqG2obK0JiYyJRMJyd7AIbQEFYc3VOWAAAAAElFTkSuQmCC',
  },
  {
    src: '/gallery/230115_082030.jpg',
    width: 2560,
    height: 1920,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nGP4//96ZnIsFydDakoyw6F9i2L1tQp8XNwsjRmeXd3uKKZYGB6hIS0PADhnDjQfDYG4AAAAAElFTkSuQmCC',
  },
  {
    src: '/gallery/230115_082031.jpg',
    width: 2560,
    height: 1920,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nGP48X7PshlTODkYlBRkGVata7WXknaQEI5xMGX4++f0msISVQZGeXEpACP7DT4I1B7rAAAAAElFTkSuQmCC',
  },
  {
    src: '/gallery/230115_082032.jpg',
    width: 2407,
    height: 1805,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nGP4//9Oc005OyODna01w/rVkyNUVEPVlMtC3Bg+vTk3PzJBlYFXWUoBADH9Dd4JLbAAAAAAAElFTkSuQmCC',
  },
  {
    src: '/gallery/230115_090730.jpg',
    width: 4032,
    height: 3024,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nGNw9dHSU2WY2lr3//9/BikFBitVvuJM86nL5zAoKTPwMDI6m6jEZ3gDAPJ0CzYhI42cAAAAAElFTkSuQmCC',
  },
  {
    src: '/gallery/230115_110901.jpg',
    width: 957,
    height: 956,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAP0lEQVR4nAE0AMv/AEZKGw8IAHB+Js3XbQBAPxNZSDZpWjl0cDMA9Oqh69ixmohmtqtzANrUkefhof//veHcmAFDGWuSOCpVAAAAAElFTkSuQmCC',
  },
  {
    src: '/gallery/230115_110902.jpg',
    width: 957,
    height: 956,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAP0lEQVR4nAE0AMv/AFNSKoxlSpJ1T4OFTQCldVv/8v/75PGuhloA/ObLdn+CAAYIsJdtAOrYn+bFtPjVwrutcqqIHIi1M4wJAAAAAElFTkSuQmCC',
  },
  {
    src: '/gallery/230115_111002.jpg',
    width: 1176,
    height: 883,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nGN4cuPG6tkL5nZPddCXY/j3/3VHd6Wto2pclCeDq4+Su4WsJDODtDIDAHTgDoaJHopqAAAAAElFTkSuQmCC',
  },
  {
    src: '/gallery/230115_111004.jpg',
    width: 1189,
    height: 892,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMklEQVR4nAEnANj/APPm5rKhprGfqVZCMQD9/+ecn5BNUDJ4dGEATlYrVEInGgQAJzAFmkcQSy/Q64MAAAAASUVORK5CYII=',
  },
  {
    src: '/gallery/230115_111006.jpg',
    width: 842,
    height: 1123,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAM0lEQVR4nAEoANf/APX9/6KrqNLe3AB4fV1maEFsaz8A3sWht552jX5hAKCOhw4ABCgnLcIhEqhk6UuLAAAAAElFTkSuQmCC',
  },
  {
    src: '/gallery/230115_111008.jpg',
    width: 1127,
    height: 845,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAL0lEQVR4nGP4+ve/hZ1paIxHamYYQ2tLlqudmIkeg6UJG8Pjq0cibXUEGRh8XE0BI00MsKrbbdgAAAAASUVORK5CYII=',
  },
  {
    src: '/gallery/230115_111201.jpg',
    width: 1243,
    height: 932,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAL0lEQVR4nGNoa0v9+udLYISbs48RQ11eaF6oTZSfnQQbA4Ofl4eWGGNKdIqLrS0AIskMTXdzkKwAAAAASUVORK5CYII=',
  },
  {
    src: '/gallery/230115_111202.jpg',
    width: 1248,
    height: 936,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAL0lEQVR4nGPYsa3/y++PCWkB7r6GDO3lCRl+FsUp0ZKMDAyWJiZybAzJCZkejo4APpYNDJGzyHUAAAAASUVORK5CYII=',
  },
  {
    src: '/gallery/230115_111206.jpg',
    width: 1239,
    height: 929,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAL0lEQVR4nGPYsLrp2/8P6TlhFvaKDN1VKRUx7q2V+TpSPAwBfv6SDAy5GXkejk4AR5QN27qmn+wAAAAASUVORK5CYII=',
  },
  {
    src: '/gallery/230115_111209.jpg',
    width: 1236,
    height: 927,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nGM4d3rBj/+fEtIC7NzVGWa0FVVFuqyeM8VZX4HBw9VVgoGhpLA80D8AAGOyDy/S8sQ8AAAAAElFTkSuQmCC',
  },
  {
    src: '/gallery/230115_111210.jpg',
    width: 1231,
    height: 923,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAL0lEQVR4nGOYPbP5//8vWWGeGpKsDMoS/LqSDAEOnqIMDAzeTrZ2SqI+Hs6ZuXEA/KgKwU6TVaYAAAAASUVORK5CYII=',
  },
];

export default function Gallery() {
  return Photos.map(({ src, height, width, base64 }) => (
    <Dialog>
      <DialogTrigger asChild>
        <AspectRatio
          ratio={3 / 2}
          className='after:content after:shadow-highlight group relative cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg'
        >
          <Image
            src={src}
            placeholder='blur'
            blurDataURL={base64}
            alt='Tam Dao 2023'
            className='rounded-lg object-cover brightness-90 transition will-change-auto group-hover:brightness-110'
            fill
          />
        </AspectRatio>
      </DialogTrigger>
      <DialogContent className='max-h-full w-full p-0'>
        <Image
          key={src}
          alt='Tam Dao 2023'
          src={src}
          placeholder='blur'
          blurDataURL={base64}
          height={height}
          width={width}
          sizes='(max-width: 640px) 100vw, (max-width: 1280px) 50vw, (max-width: 1536px) 33vw, 25vw'
        />
      </DialogContent>
    </Dialog>
  ));
}
