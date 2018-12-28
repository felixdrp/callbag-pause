import { Source } from 'callbag';
declare const pause: (paused: () => boolean) => (source: Source<any>) => void;
export = pause;