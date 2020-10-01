(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"7rQJ":function(e,n,p){"use strict";p.r(n),p.d(n,"SkiplastSkipMergeModule",(function(){return m}));var t=p("iInd");class c{constructor(){this.fruits=["apple","dirty-apple","apple","old-apple","apple","old-banana","old-banana","dirty-banana","dirty-banana","dirty-banana"],this.expectedFruits=["apple","apple","apple","banana","banana","banana"],this.code="const apples = from(['apple', 'dirty-apple', 'apple', 'old-apple', 'apple']);\nconst bananas = from(['old-banana', 'old-banana', 'dirty-banana', 'dirty-banana', 'dirty-banana']);\n\nconst freshApples = apples.pipe(\n\t\n);\n\nconst freshBananas = bananas.pipe(\n\t\n);\n\nEMPTY.pipe(\n\t\n).subscribe(fruit => toConveyorBelt(fruit));\n",this.minPositionLineNumber=4,this.positionColumnNumber=2}}var i=p("8Y7J"),a=p("VIrA"),o=p("TSSN"),s=p("SVse"),b=p("dJsq"),r=p("uzYf");function d(e,n){if(1&e&&(i.Mb(0,"div"),i.Mb(1,"p"),i.pc(2,"Gib dem Chaos keine Chance!"),i.Lb(),i.Mb(3,"p"),i.pc(4,"Du hast zwei Lieferungen bekommen. Entnehme nur verwendbare Fr\xfcchte mit dem "),i.Mb(5,"code",6),i.pc(6,"skipLast"),i.Lb(),i.pc(7,"- und "),i.Mb(8,"code",6),i.pc(9,"skip"),i.Lb(),i.pc(10,"-Operator. Ersetze dann das leere (Empty) Observable mit der "),i.Mb(11,"code",6),i.pc(12,"merge"),i.Lb(),i.pc(13,"-Funktion. Gegen Ende bereinige die dreckigen (dirty) Fr\xfcchte und lege sie auf das Flie\xdfband."),i.Lb(),i.Lb()),2&e){i.Yb();const e=i.fc(14),n=i.fc(8),p=i.fc(20);i.zb(5),i.dc("appTooltip",e),i.zb(3),i.dc("appTooltip",n),i.zb(3),i.dc("appTooltip",p)}}function l(e,n){if(1&e&&(i.Mb(0,"div"),i.Mb(1,"p"),i.pc(2,"Don't give chaos a chance!"),i.Lb(),i.Mb(3,"p"),i.pc(4,"You received two deliveries. Take only usable fruit with the "),i.Mb(5,"code",6),i.pc(6,"skipLast"),i.Lb(),i.pc(7," and "),i.Mb(8,"code",6),i.pc(9,"skip"),i.Lb(),i.pc(10," operator. Then replace the empty observable with the "),i.Mb(11,"code",6),i.pc(12,"merge"),i.Lb(),i.pc(13," function. Towards the end, clean up the dirty fruits and place them on the conveyor belt."),i.Lb(),i.Lb()),2&e){i.Yb();const e=i.fc(14),n=i.fc(8),p=i.fc(20);i.zb(5),i.dc("appTooltip",e),i.zb(3),i.dc("appTooltip",n),i.zb(3),i.dc("appTooltip",p)}}function u(e,n){if(1&e&&(i.Mb(0,"div"),i.Mb(1,"p"),i.pc(2,"\u4e0d\u8981\u628a\u6c34\u679c\u641e\u6df7\u4e71\u4e86\uff01"),i.Lb(),i.Mb(3,"p"),i.pc(4,"\u4f60\u6709\u4e24\u4e2a\u4f9b\u8d27\u5546\u3002\u4f7f\u7528 "),i.Mb(5,"code",6),i.pc(6,"skipLast"),i.Lb(),i.pc(7," \u548c "),i.Mb(8,"code",6),i.pc(9,"skip"),i.Lb(),i.pc(10," \u64cd\u4f5c\u7b26\uff0c\u53ea\u53d6\u53ef\u7528\u7684\u6c34\u679c\u3002\u7136\u540e\u7528 "),i.Mb(11,"code",6),i.pc(12,"merge"),i.Lb(),i.pc(13," \u64cd\u4f5c\u7b26\u66ff\u6362 empty observable\u3002\u6700\u540e\uff0c\u628a\u4e0d\u5e72\u51c0\u7684\u6c34\u679c\u6e05\u7406\u5e72\u51c0\uff0c\u518d\u653e\u5230\u4f20\u9001\u5e26\u4e0a\u3002"),i.Lb(),i.Lb()),2&e){i.Yb();const e=i.fc(14),n=i.fc(8),p=i.fc(20);i.zb(5),i.dc("appTooltip",e),i.zb(3),i.dc("appTooltip",n),i.zb(3),i.dc("appTooltip",p)}}function h(e,n){if(1&e&&(i.Mb(0,"div"),i.Mb(1,"p"),i.pc(2,"\u041d\u0435 \u0434\u0430\u0439 \u0445\u0430\u043e\u0441\u0443 \u0448\u0430\u043d\u0441!"),i.Lb(),i.Mb(3,"p"),i.pc(4,"\u0412\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u043b\u0438 \u0434\u0432\u0435 \u043f\u043e\u0441\u0442\u0430\u0432\u043a\u0438. \u0412\u043e\u0437\u044c\u043c\u0438\u0442\u0435 \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u043e\u043b\u0435\u0437\u043d\u044b\u0435 \u0444\u0440\u0443\u043a\u0442\u044b \u0441 \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u043e\u043c "),i.Mb(5,"code",6),i.pc(6,"skipLast"),i.Lb(),i.pc(7," \u0438 "),i.Mb(8,"code",6),i.pc(9,"skip"),i.Lb(),i.pc(10,". \u0417\u0430\u0442\u0435\u043c \u0437\u0430\u043c\u0435\u043d\u0438\u0442\u0435 \u043f\u0443\u0441\u0442\u0443\u044e \u043d\u0430\u0431\u043b\u044e\u0434\u0430\u0435\u043c\u0443\u044e \u0444\u0443\u043d\u043a\u0446\u0438\u044e "),i.Mb(11,"code",6),i.pc(12,"merge"),i.Lb(),i.pc(13,". \u041f\u043e\u0434 \u043a\u043e\u043d\u0435\u0446 \u0443\u0431\u0435\u0440\u0438\u0442\u0435 \u0433\u0440\u044f\u0437\u043d\u044b\u0435 \u0444\u0440\u0443\u043a\u0442\u044b \u0438 \u043f\u043e\u043b\u043e\u0436\u0438\u0442\u0435 \u0438\u0445 \u043d\u0430 \u043a\u043e\u043d\u0432\u0435\u0439\u0435\u0440."),i.Lb(),i.Lb()),2&e){i.Yb();const e=i.fc(14),n=i.fc(8),p=i.fc(20);i.zb(5),i.dc("appTooltip",e),i.zb(3),i.dc("appTooltip",n),i.zb(3),i.dc("appTooltip",p)}}const g=[{path:"",component:(()=>{class e{constructor(e,n){this.exerciseService=e,this.translateService=n,this.exerciseTitle="skipLast, skip & merge",this.skipCode="\n  of(1, 2, 3, 4).pipe(\n    skip(1)\n  ).subscribe(data => console.log(data));\n\n  // Logs:\n  // 2\n  // 3\n  // 4\n  ",this.skipLastCode="\n  of(1, 2, 3, 4).pipe(\n    skipLast(1)\n  ).subscribe(data => console.log(data));\n\n  // Logs:\n  // 1\n  // 2\n  // 3\n  ",this.mergeCode="\n  const first = of(1, 2, 3)\n  const second = of(4, 5, 6);\n\n  merge(first, second).subscribe(data => console.log(data));\n\n  // Logs:\n  // 1\n  // 2\n  // 3\n  // 4\n  // 5\n  // 6\n  ",this.currentLanguage=""}ngOnInit(){this.exerciseService.newExercise(new c),this.currentLanguage=this.translateService.currentLang,this.onLangChangeSubscription=this.translateService.onLangChange.subscribe({next:()=>{this.currentLanguage=this.translateService.currentLang}})}ngOnDestroy(){this.onLangChangeSubscription.unsubscribe()}}return e.\u0275fac=function(n){return new(n||e)(i.Jb(a.a),i.Jb(o.d))},e.\u0275cmp=i.Db({type:e,selectors:[["app-skiplast-skip-merge"]],decls:25,vars:11,consts:[[4,"ngIf"],[1,"tooltip","codeTooltip"],["skipTooltip",""],[3,"highlight"],["skipLastTooltip",""],["mergeTooltip",""],[1,"help",3,"appTooltip"]],template:function(e,n){1&e&&(i.Mb(0,"h3"),i.pc(1),i.Zb(2,"translate"),i.Lb(),i.oc(3,d,14,3,"div",0),i.oc(4,l,14,3,"div",0),i.oc(5,u,14,3,"div",0),i.oc(6,h,14,3,"div",0),i.Mb(7,"div",1,2),i.Mb(9,"pre"),i.pc(10,"        "),i.Kb(11,"code",3),i.pc(12,"\n    "),i.Lb(),i.Lb(),i.Mb(13,"div",1,4),i.Mb(15,"pre"),i.pc(16,"        "),i.Kb(17,"code",3),i.pc(18,"\n    "),i.Lb(),i.Lb(),i.Mb(19,"div",1,5),i.Mb(21,"pre"),i.pc(22,"        "),i.Kb(23,"code",3),i.pc(24,"\n    "),i.Lb(),i.Lb()),2&e&&(i.zb(1),i.sc("",i.ac(2,9,"EXERCISES.EXERCISETITLE"),": ",n.exerciseTitle,""),i.zb(2),i.dc("ngIf","de"===n.currentLanguage),i.zb(1),i.dc("ngIf","en"===n.currentLanguage),i.zb(1),i.dc("ngIf","zh_CN"===n.currentLanguage),i.zb(1),i.dc("ngIf","ru"===n.currentLanguage),i.zb(5),i.dc("highlight",n.skipCode),i.zb(6),i.dc("highlight",n.skipLastCode),i.zb(6),i.dc("highlight",n.mergeCode))},directives:[s.j,b.b,r.a],pipes:[o.c],styles:[""]}),e})()}];let L=(()=>{class e{}return e.\u0275mod=i.Hb({type:e}),e.\u0275inj=i.Gb({factory:function(n){return new(n||e)},imports:[[t.d.forChild(g)],t.d]}),e})();var f=p("PCNd");let m=(()=>{class e{}return e.\u0275mod=i.Hb({type:e}),e.\u0275inj=i.Gb({factory:function(n){return new(n||e)},imports:[[f.a,L]]}),e})()}}]);