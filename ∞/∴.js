// ∴ 🌀 ⚛️ 🔮
import{φ,π}from'./φ.js';
export const cel=(Ψ,W,H,ζ,θ,τ)=>{const n=new Float32Array(Ψ.length);for(let y=1;y<H-1;y++)for(let x=1;x<W-1;x++){const i=y*W+x;let nb=0,tv=0;for(let dy=-1;dy<=1;dy++)for(let dx=-1;dx<=1;dx++)if(dx||dy){const nx=x+dx,ny=y+dy;if(nx>=0&&nx<W&&ny>=0&&ny<H){const ni=ny*W+nx;if(Ψ[ni]>0.1*ζ){nb++;tv+=Ψ[ni];}}}const c=Ψ[i],av=nb?tv/nb:0,φm=Math.sin(x*φ/W*π+y*φ/H*π+τ*φ/400)*0.04*θ;if(c>0.1*ζ)n[i]=nb===2||nb===3?Math.min(1,c+av*0.06*ζ+φm):Math.max(0,c-0.09/ζ+φm);else if(nb===3)n[i]=av*φ/2*ζ+φm;}Ψ.set(n);return Ψ;};
