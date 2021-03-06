/*************************************************************
 * This script is developed by Arturs Sosins aka ar2rsawseen, http://webcodingeasy.com
 * Feel free to distribute and modify code, but keep reference to its creator
 *
 * Spotlight class creates a spotlight like visual cue to 
 * concentrate visitors attention to specific elements
 *
 * For more information, examples and online documentation visit: 
 * http://webcodingeasy.com/JS-classes/Javascript-Spotlight-visual-cue
 **************************************************************/
eval(function (p, a, c, k, e, r) {
	e = function (c) {
		return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
	};
	if (!''.replace(/^/, String)) {
		while (c--) r[e(c)] = k[c] || e(c);
		k = [function (e) {
			return r[e]
		}];
		e = function () {
			return '\\w+'
		};
		c = 1
	};
	while (c--)
		if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]);
	return p
}('7 1o=5(f){7 g={T:"G(0,0,0,0.9)",R:0,Y:0.2,W:17,Z:20,13:10,Q:1y,V:17,K:A,L:A,M:A,N:A,S:A,X:A};7 d,q,3={},6={},t={};3.x=0,3.y=0,3.r=0,3.p=0,6.x=0,6.y=0,6.r=0,6.p=0,t.x=0,t.y=0,t.r=0,t.p=0;7 h=5(){d=m();1q(7 a 1w f){g[a]=f[a]}3.r=g.W;6.r=g.W;3.p=g.Z;6.p=g.Z;7 b;8(4.19("O")){b=4.19("O");q=b.15("1g")}C{b=4.1t("1D");b.1e("E",d.E+"1i");b.1e("D",d.D+"1i");b.I.1A="1H";b.I.1F="1b";b.I.1J="1b";b.I.V=g.V;b.1L="O";q=b.15("1g");4.v.1p(b)}8(g.N||g.M){n(b,"1C",5(e){e=o(e);8(((e.F-3.x)*(e.F-3.x))+((e.B-3.y)*(e.B-3.y))<=3.r*3.r){8(g.M){g.M(e)}}C{8(g.N){g.N(e)}}})}8(g.K||g.L){n(b,"1v",5(e){e=o(e);8(((e.F-3.x)*(e.F-3.x))+((e.B-3.y)*(e.B-3.y))<=3.r*3.r){8(g.K){g.K(e)}}C{8(g.L){g.L(e)}}})}};u.1P=5(x,y,r){l(x,y,r)};u.1K=5(){k()};u.H=5(x,y,r,a,b){6.x=x;6.y=y;6.r=r;6.p=a;b=(b)?b:g.Q;t.x=s.J(6.x-3.x)/b;t.y=s.J(6.y-3.y)/b;t.r=s.J(6.r-3.r)/b;t.p=s.J(6.p-3.p)/b;8(g.S){g.S()}i()};u.1s=5(x,y){u.H(x,y,3.r,3.p)};u.1R=5(r){u.H(3.x,3.y,r,3.p)};u.p=5(a){u.H(3.x,3.y,3.r,a)};u.1G=5(a){g.T=a;l(3.x,3.y)};u.1Z=5(a,b){g.R=a;g.Y=b;l(3.x,3.y)};u.1V=5(a){g.Q=a};7 i=5(){7 a=11;a=j("x",a);a=j("y",a);a=j("r",a);a=j("p",a);l(3.x,3.y,3.r,3.p);8(a){1z(i,g.13)}C{8(g.X){g.X()}}};7 j=5(a,b){8(3[a]>6[a]){3[a]-=t[a];b=14}C 8(3[a]<6[a]){3[a]+=t[a];b=14}8(3[a]>6[a]-t[a]&&3[a]<6[a]+t[a]){3[a]=6[a]}U b};7 k=5(){q.18="1N-1T";q.1X(0,0,d.E,d.D);q.12=g.T;q.1r(0,0,d.E,d.D)};7 l=5(x,y,r,a){k();3.x=x;3.y=y;r=(r)?r:3.r;3.r=r;a=(a)?a:3.p;3.p=a;7 b=r+a;7 c=q.1Q(x,y,0,x,y,b);c.P(0,"G(0,0,0,"+(1-g.R)+")");c.P(r/b,"G(0,0,0,"+(1-g.Y)+")");c.P(1,"G(0,0,0,0)");q.18="1E-1W";q.12=c;q.1x();q.1U(x,y,b,0,s.21*2);q.22()};7 m=5(){7 a=1M 1Y();a.E=0;a.D=0;a.E=s.z(s.z(4.v.1a,4.w.1a),s.z(4.v.16,4.w.16),s.z(4.v.1d,4.w.1d));a.D=s.z(s.z(4.v.1h,4.w.1h),s.z(4.v.1k,4.w.1k),s.z(4.v.1m,4.w.1m));U a};7 n=5(a,b,c){8(a.1n){a.1n(b,c,11)}C{a.1u(\'1B\'+b,c)}};7 o=5(e){8(1c e.B==\'1O\'&&1c e.1j==\'1I\'&&4.w){e.F=e.1j+4.v.1f+4.w.1f;e.B=e.1S+4.v.1l+4.w.1l};U e};h()}', 62, 127, '|||current|document|function|target|var|if|||||||||||||||||blur|ctx||Math|step|this|body|documentElement|||max|null|pageY|else|height|width|pageX|rgba|animate|style|abs|onMouseOver|onMouseOut|onSpotClick|onCanvasClick|spotlight_canvas|addColorStop|steps|lightStart|onAnimationStart|bgColor|return|zIndex|size|onAnimationEnd|lightEnd|blurRadius||false|fillStyle|interval|true|getContext|offsetWidth|100|globalCompositeOperation|getElementById|scrollWidth|0px|typeof|clientWidth|setAttribute|scrollLeft|2d|scrollHeight|px|clientX|offsetHeight|scrollTop|clientHeight|addEventListener|spotlight|appendChild|for|fillRect|move|createElement|attachEvent|mousemove|in|beginPath|50|setTimeout|position|on|click|canvas|destination|top|changeBgColor|absolute|number|left|hide|id|new|source|undefined|show|createRadialGradient|resize|clientY|over|arc|setSteps|out|clearRect|Object|changeSpot||PI|fill'.split('|'), 0, {}))

var spotlight = new spotlight();
document.onmousemove = function (e) {
	spotlight.show(e.clientX, e.clientY);
};
document.onclick = function () {
	window.open('http://rafaelfran.co', '_blank');
}
spotlight.show();