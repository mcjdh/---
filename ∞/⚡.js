// ⚡ 📏 💾 🌊 ⚡
import{φ}from'./φ.js';
export const rsz=(W,H,Ω,Κ,Β,Υ,Τ,Ψ,Ε,ζ,λ,μ)=>{const r=document.getElementById('∞').getBoundingClientRect(),s=parseFloat(getComputedStyle(document.getElementById('∞')).fontSize)*0.6;W=Math.min(Math.floor(r.width/s)||40,100);H=Math.min(Math.floor(r.height/(s*1.4))||25,50);const l=W*H;[Ω,Κ,Β,Υ,Τ,Ψ,Ε]=[...Array(7)].map(()=>new Float32Array(l));const χ=W*φ/3,ψ=H*φ/3;ζ=Math.max(0.5,ζ*0.999+0.001);for(let i=0;i<l;i++)if(Math.random()<φ/15*ζ)Ψ[i]=Math.random()*0.3*ζ;λ=λ.filter(b=>b.t<200);μ=μ.filter(s=>s.t<100);return{W,H,Ω,Κ,Β,Υ,Τ,Ψ,Ε,χ,ψ,ζ,λ,μ};};
