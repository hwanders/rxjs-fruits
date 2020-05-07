function _defineProperties(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),e}function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"7Qxo":function(e,n,t){"use strict";t.r(n),t.d(n,"MapModule",(function(){return y}));var i=t("PCNd"),r=t("iInd"),a=function e(){_classCallCheck(this,e),this.expectedFruits=["apple","apple","banana","banana"],this.code='const fruits = from([\n    "dirty-apple",\n    "apple",\n    "dirty-banana",\n    "banana"]);\n\nfruits.pipe(\n\t\n).subscribe(fruit => toConveyorBelt(fruit));',this.minPositionLineNumber=7,this.positionColumnNumber=2},c=t("8Y7J"),s=t("VIrA"),o=t("TSSN"),u=t("SVse"),b=t("dJsq"),p=t("uzYf");function l(e,n){if(1&e&&(c.Pb(0,"div"),c.Pb(1,"p"),c.qc(2,"In dieser Lieferung sind einige Fr\xfcchte schmutzig."),c.Ob(),c.Pb(3,"p"),c.qc(4,"Der "),c.Pb(5,"code",4),c.qc(6,"map"),c.Ob(),c.qc(7," Operator erm\xf6glicht hier das ver\xe4ndern von Daten. Wasche die Fr\xfcchte, indem du den Schmutz von dreckigen Fr\xfcchten entfernst. "),c.Pb(8,"a",5),c.qc(9,"(Mehr Infos zu map)"),c.Ob(),c.Ob(),c.Ob()),2&e){c.bc();var t=c.ic(6);c.Bb(5),c.gc("appTooltip",t)}}function h(e,n){if(1&e&&(c.Pb(0,"div"),c.Pb(1,"p"),c.qc(2,"Some fruits are dirty in this delivery."),c.Ob(),c.Pb(3,"p"),c.qc(4,"The "),c.Pb(5,"code",4),c.qc(6,"map"),c.Ob(),c.qc(7," operator enables data to be changed here. Wash the fruits by removing the dirt from dirty fruits. "),c.Pb(8,"a",5),c.qc(9,"(Learn more about map)"),c.Ob(),c.Ob(),c.Ob()),2&e){c.bc();var t=c.ic(6);c.Bb(5),c.gc("appTooltip",t)}}var d,f,g,m=[{path:"",component:(d=function(){function e(n,t){_classCallCheck(this,e),this.exerciseService=n,this.translateService=t,this.task="map",this.mapCode="\n  const source = from([1, 2, 3, 4, 5]);\n  source.pipe(\n    map(data => 'My Number is ' + data)\n  ).subscribe(data => console.log(data));\n\n  // Logs:\n  // My Number is 1\n  // My Number is 2\n  // My Number is 3\n  // My Number is 4\n  // My Number is 5\n  ",this.currentLanguage=""}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.exerciseService.newExercise(new a),this.currentLanguage=this.translateService.currentLang,this.onLangChangeSubscription=this.translateService.onLangChange.subscribe({next:function(){e.currentLanguage=e.translateService.currentLang}})}},{key:"ngOnDestroy",value:function(){this.onLangChangeSubscription.unsubscribe()}}]),e}(),d.\u0275fac=function(e){return new(e||d)(c.Mb(s.a),c.Mb(o.d))},d.\u0275cmp=c.Gb({type:d,selectors:[["app-map"]],decls:11,vars:7,consts:[[4,"ngIf"],[1,"tooltip","codeTooltip"],["tooltip",""],[3,"highlight"],[1,"help",3,"appTooltip"],["href","https://rxjs.dev/api/operators/map","target","_blank"]],template:function(e,n){1&e&&(c.Pb(0,"h3"),c.qc(1),c.cc(2,"translate"),c.Ob(),c.pc(3,l,10,1,"div",0),c.pc(4,h,10,1,"div",0),c.Pb(5,"div",1,2),c.Pb(7,"pre"),c.qc(8,"        "),c.Nb(9,"code",3),c.qc(10,"\n    "),c.Ob(),c.Ob()),2&e&&(c.Bb(1),c.tc("",c.dc(2,5,"EXERCISES.EXERCISETITLE"),": ",n.task,""),c.Bb(2),c.gc("ngIf","de"===n.currentLanguage),c.Bb(1),c.gc("ngIf","en"===n.currentLanguage),c.Bb(5),c.gc("highlight",n.mapCode))},directives:[u.j,b.b,p.a],pipes:[o.c],styles:[""]}),d)}],v=((g=function e(){_classCallCheck(this,e)}).\u0275mod=c.Kb({type:g}),g.\u0275inj=c.Jb({factory:function(e){return new(e||g)},imports:[[r.d.forChild(m)],r.d]}),g),y=((f=function e(){_classCallCheck(this,e)}).\u0275mod=c.Kb({type:f}),f.\u0275inj=c.Jb({factory:function(e){return new(e||f)},imports:[[i.a,v]]}),f)}}]);