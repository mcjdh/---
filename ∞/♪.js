// ♪ 🎵 ⚡ 🌊
import{φ,ƒ}from'./φ.js';
export let Α;
export const snd=(f,d,w='sine',κ=0.05,τ=0)=>{if(!Α)return;const a=0.05+κ*0.03,o=Α.createOscillator(),g=Α.createGain(),t=Α.currentTime;o.type=w;o.frequency.setValueAtTime(f*(1+Math.sin(τ*φ/500)*0.02),t);g.gain.setValueAtTime(0,t);g.gain.exponentialRampToValueAtTime(a,t+d*φ/1000);g.gain.exponentialRampToValueAtTime(0.001,t+d/1000);o.connect(g);g.connect(Α.destination);o.start(t);o.stop(t+d/1000);};
export const initΑ=()=>{try{Α=new AudioContext()}catch(e){}return Α;};
