(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1131,
	height: 488,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};

// stage content:
(lib.production = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_99 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(99).call(this.frame_99).wait(1));

	// Layer 15 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_67 = new cjs.Graphics().p("ArTAnIAAhNIWoAAIAABNg");
	var mask_graphics_68 = new cjs.Graphics().p("ArgDdIAAm4IXAAAIAAG4g");
	var mask_graphics_69 = new cjs.Graphics().p("ArrGHIAAsNIXXAAIAAMNg");
	var mask_graphics_70 = new cjs.Graphics().p("Ar2InIAAxNIXtAAIAARNg");
	var mask_graphics_71 = new cjs.Graphics().p("AsAK+IAA16IYAAAIAAV6g");
	var mask_graphics_72 = new cjs.Graphics().p("AsJNJIAA6RIYTAAIAAaRg");
	var mask_graphics_73 = new cjs.Graphics().p("AsSPKIAA+TIYkAAIAAeTg");
	var mask_graphics_74 = new cjs.Graphics().p("AsZRBMAAAgiBIYzAAMAAAAiBg");
	var mask_graphics_75 = new cjs.Graphics().p("AsgSuMAAAglbIZCAAMAAAAlbg");
	var mask_graphics_76 = new cjs.Graphics().p("AsnUQMAAAgofIZPAAMAAAAofg");
	var mask_graphics_77 = new cjs.Graphics().p("AstVoMAAAgrPIZbAAMAAAArPg");
	var mask_graphics_78 = new cjs.Graphics().p("AsyW1MAAAgtqIZlAAMAAAAtqg");
	var mask_graphics_79 = new cjs.Graphics().p("As2X5MAAAgvxIZtAAMAAAAvxg");
	var mask_graphics_80 = new cjs.Graphics().p("As6YyMAAAgxjIZ1AAMAAAAxjg");
	var mask_graphics_81 = new cjs.Graphics().p("As9ZgMAAAgy/IZ7AAMAAAAy/g");
	var mask_graphics_82 = new cjs.Graphics().p("AtAaEMAAAg0HIaBAAMAAAA0Hg");
	var mask_graphics_83 = new cjs.Graphics().p("AtCaeMAAAg07IaFAAMAAAA07g");
	var mask_graphics_84 = new cjs.Graphics().p("AtDauMAAAg1bIaHAAMAAAA1bg");
	var mask_graphics_85 = new cjs.Graphics().p("EA76AhPMAAAg1lIaJAAMAAAA1lg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(67).to({graphics:mask_graphics_67,x:1027.8,y:422.1}).wait(1).to({graphics:mask_graphics_68,x:1026.7,y:404}).wait(1).to({graphics:mask_graphics_69,x:1025.7,y:386.8}).wait(1).to({graphics:mask_graphics_70,x:1024.7,y:370.7}).wait(1).to({graphics:mask_graphics_71,x:1023.8,y:355.7}).wait(1).to({graphics:mask_graphics_72,x:1023,y:341.7}).wait(1).to({graphics:mask_graphics_73,x:1022.2,y:328.7}).wait(1).to({graphics:mask_graphics_74,x:1021.5,y:316.7}).wait(1).to({graphics:mask_graphics_75,x:1020.9,y:305.8}).wait(1).to({graphics:mask_graphics_76,x:1020.3,y:296}).wait(1).to({graphics:mask_graphics_77,x:1019.7,y:287.1}).wait(1).to({graphics:mask_graphics_78,x:1019.3,y:279.4}).wait(1).to({graphics:mask_graphics_79,x:1018.9,y:272.6}).wait(1).to({graphics:mask_graphics_80,x:1018.5,y:266.9}).wait(1).to({graphics:mask_graphics_81,x:1018.3,y:262.2}).wait(1).to({graphics:mask_graphics_82,x:1018,y:258.6}).wait(1).to({graphics:mask_graphics_83,x:1017.9,y:256}).wait(1).to({graphics:mask_graphics_84,x:1017.8,y:254.4}).wait(1).to({graphics:mask_graphics_85,x:550.7,y:212.7}).wait(15));

	// Layer 14
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(1,0,0,4).p("Aj9AAIH7AA");
	this.shape.setTransform(969.6,120.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#25408B","#922B4E","#E11B22"],[0,0.565,1],0,151.4,0,-151.3).s().p("AnzXpMAAAgvRIPmAAMAAAAvRg");
	this.shape_1.setTransform(1045.1,271.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E11B22").s().p("AghA/IAAgLIAyhAQALgOgIgOQgHgLgNAAQgHAAgGAFQgGAFgCAJIgLAAQABgNAKgIQAJgJAMAAQAVAAAJATQAFAIgBALQgBAJgGAIIguA7IA1AAIAAALg");
	this.shape_2.setTransform(1049.1,91.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E11B22").s().p("AACA+IAAhvIgPAMIAAgMIAPgMIALAAIAAB7g");
	this.shape_3.setTransform(1040.2,91.5);

	this.shape.mask = this.shape_1.mask = this.shape_2.mask = this.shape_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},67).wait(33));

	// Layer 13 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_56 = new cjs.Graphics().p("AsaBPIAAieIY1AAIAACeg");
	var mask_1_graphics_57 = new cjs.Graphics().p("AsaB7IAAj1IY1AAIAAD1g");
	var mask_1_graphics_58 = new cjs.Graphics().p("AsaCkIAAlHIY1AAIAAFHg");
	var mask_1_graphics_59 = new cjs.Graphics().p("AsaDJIAAmRIY1AAIAAGRg");
	var mask_1_graphics_60 = new cjs.Graphics().p("AsaDtIAAnZIY1AAIAAHZg");
	var mask_1_graphics_61 = new cjs.Graphics().p("AsaENIAAoZIY1AAIAAIZg");
	var mask_1_graphics_62 = new cjs.Graphics().p("AsaErIAApVIY1AAIAAJVg");
	var mask_1_graphics_63 = new cjs.Graphics().p("AsaFFIAAqJIY1AAIAAKJg");
	var mask_1_graphics_64 = new cjs.Graphics().p("AsaFdIAAq5IY1AAIAAK5g");
	var mask_1_graphics_65 = new cjs.Graphics().p("AsaFyIAArjIY1AAIAALjg");
	var mask_1_graphics_66 = new cjs.Graphics().p("AsaGEIAAsHIY1AAIAAMHg");
	var mask_1_graphics_67 = new cjs.Graphics().p("AsaGUIAAsnIY1AAIAAMng");
	var mask_1_graphics_68 = new cjs.Graphics().p("AsaGhIAAtBIY1AAIAANBg");
	var mask_1_graphics_69 = new cjs.Graphics().p("AsaGqIAAtTIY1AAIAANTg");
	var mask_1_graphics_70 = new cjs.Graphics().p("AsaGyIAAtjIY1AAIAANjg");
	var mask_1_graphics_71 = new cjs.Graphics().p("AsaG2IAAtrIY1AAIAANrg");
	var mask_1_graphics_72 = new cjs.Graphics().p("AsaG3IAAttIY1AAIAANtg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(56).to({graphics:mask_1_graphics_56,x:869.7,y:169.1}).wait(1).to({graphics:mask_1_graphics_57,x:869.7,y:164}).wait(1).to({graphics:mask_1_graphics_58,x:869.7,y:159.2}).wait(1).to({graphics:mask_1_graphics_59,x:869.7,y:154.8}).wait(1).to({graphics:mask_1_graphics_60,x:869.7,y:150.7}).wait(1).to({graphics:mask_1_graphics_61,x:869.7,y:146.9}).wait(1).to({graphics:mask_1_graphics_62,x:869.7,y:143.5}).wait(1).to({graphics:mask_1_graphics_63,x:869.7,y:140.4}).wait(1).to({graphics:mask_1_graphics_64,x:869.7,y:137.6}).wait(1).to({graphics:mask_1_graphics_65,x:869.7,y:135.1}).wait(1).to({graphics:mask_1_graphics_66,x:869.7,y:133}).wait(1).to({graphics:mask_1_graphics_67,x:869.7,y:131.2}).wait(1).to({graphics:mask_1_graphics_68,x:869.7,y:129.7}).wait(1).to({graphics:mask_1_graphics_69,x:869.7,y:128.6}).wait(1).to({graphics:mask_1_graphics_70,x:869.7,y:127.8}).wait(1).to({graphics:mask_1_graphics_71,x:869.7,y:127.3}).wait(1).to({graphics:mask_1_graphics_72,x:869.7,y:127.1}).wait(28));

	// Layer 12
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#CCCCCC").ss(1,0,0,4).p("Aj9AAIH7AA");
	this.shape_4.setTransform(818.8,167);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#E11B22","#A31B22"],[0,1],0,-23.3,0,23.4).s().p("AnyDpIAAnRIPlAAIAAHRg");
	this.shape_5.setTransform(894.1,143.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E11B22").s().p("AghA/IAAgLIAyhAQALgOgJgOQgGgLgNAAQgRAAgFATIgLAAQACgNAKgIQAJgJAMAAQAUAAAKATQAFAIgBALQgCAKgGAHIguA7IA1AAIAAALg");
	this.shape_6.setTransform(894,91.4);

	this.shape_4.mask = this.shape_5.mask = this.shape_6.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},56).wait(44));

	// Layer 11 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_46 = new cjs.Graphics().p("AsaA2IAAhsIY1AAIAABsg");
	var mask_2_graphics_47 = new cjs.Graphics().p("AsaBtIAAjZIY1AAIAADZg");
	var mask_2_graphics_48 = new cjs.Graphics().p("AsaCgIAAk/IY1AAIAAE/g");
	var mask_2_graphics_49 = new cjs.Graphics().p("AsaDPIAAmdIY1AAIAAGdg");
	var mask_2_graphics_50 = new cjs.Graphics().p("AsaD6IAAnzIY1AAIAAHzg");
	var mask_2_graphics_51 = new cjs.Graphics().p("AsaEhIAApBIY1AAIAAJBg");
	var mask_2_graphics_52 = new cjs.Graphics().p("AsaFFIAAqJIY1AAIAAKJg");
	var mask_2_graphics_53 = new cjs.Graphics().p("AsaFlIAArJIY1AAIAALJg");
	var mask_2_graphics_54 = new cjs.Graphics().p("AsaGBIAAsBIY1AAIAAMBg");
	var mask_2_graphics_55 = new cjs.Graphics().p("AsaGaIAAszIY1AAIAAMzg");
	var mask_2_graphics_56 = new cjs.Graphics().p("AsaGvIAAtdIY1AAIAANdg");
	var mask_2_graphics_57 = new cjs.Graphics().p("AsaHAIAAt/IY1AAIAAN/g");
	var mask_2_graphics_58 = new cjs.Graphics().p("AsaHMIAAuXIY1AAIAAOXg");
	var mask_2_graphics_59 = new cjs.Graphics().p("AsaHWIAAurIY1AAIAAOrg");
	var mask_2_graphics_60 = new cjs.Graphics().p("AsaHbIAAu1IY1AAIAAO1g");
	var mask_2_graphics_61 = new cjs.Graphics().p("AsaHdIAAu6IY1AAIAAO6g");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(46).to({graphics:mask_2_graphics_46,x:717.7,y:218.6}).wait(1).to({graphics:mask_2_graphics_47,x:717.7,y:213}).wait(1).to({graphics:mask_2_graphics_48,x:717.7,y:207.9}).wait(1).to({graphics:mask_2_graphics_49,x:717.7,y:203.1}).wait(1).to({graphics:mask_2_graphics_50,x:717.7,y:198.8}).wait(1).to({graphics:mask_2_graphics_51,x:717.7,y:194.8}).wait(1).to({graphics:mask_2_graphics_52,x:717.7,y:191.1}).wait(1).to({graphics:mask_2_graphics_53,x:717.7,y:187.9}).wait(1).to({graphics:mask_2_graphics_54,x:717.7,y:185}).wait(1).to({graphics:mask_2_graphics_55,x:717.7,y:182.6}).wait(1).to({graphics:mask_2_graphics_56,x:717.7,y:180.5}).wait(1).to({graphics:mask_2_graphics_57,x:717.7,y:178.8}).wait(1).to({graphics:mask_2_graphics_58,x:717.7,y:177.4}).wait(1).to({graphics:mask_2_graphics_59,x:717.7,y:176.5}).wait(1).to({graphics:mask_2_graphics_60,x:717.7,y:175.9}).wait(1).to({graphics:mask_2_graphics_61,x:717.7,y:175.7}).wait(39));

	// Layer 10
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#CCCCCC").ss(1,0,0,4).p("Aj9AAIH7AA");
	this.shape_7.setTransform(667.8,218.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#E11B22","#A31B22"],[0,1],0,-25.8,0,25.9).s().p("AnyECIAAoDIPmAAIAAIDg");
	this.shape_8.setTransform(743.2,192.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E11B22").s().p("AghA/IAAgLIAyhAQALgOgIgOQgHgLgNAAQgRAAgEATIgLAAQABgNAKgIQAJgJAMAAQAVAAAJATQAFAIgBALQgBAJgGAIIguA7IA0AAIAAALg");
	this.shape_9.setTransform(742.6,137.4);

	this.shape_7.mask = this.shape_8.mask = this.shape_9.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},46).wait(54));

	// Layer 9 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_35 = new cjs.Graphics().p("AsfA3IAAhtIY/AAIAABtg");
	var mask_3_graphics_36 = new cjs.Graphics().p("AsfBjIAAjFIY/AAIAADFg");
	var mask_3_graphics_37 = new cjs.Graphics().p("AsfCNIAAkZIY/AAIAAEZg");
	var mask_3_graphics_38 = new cjs.Graphics().p("AsfC1IAAlpIY/AAIAAFpg");
	var mask_3_graphics_39 = new cjs.Graphics().p("AsfDaIAAmzIY/AAIAAGzg");
	var mask_3_graphics_40 = new cjs.Graphics().p("AsfD8IAAn3IY/AAIAAH3g");
	var mask_3_graphics_41 = new cjs.Graphics().p("AsfEbIAAo1IY/AAIAAI1g");
	var mask_3_graphics_42 = new cjs.Graphics().p("AsfE4IAApvIY/AAIAAJvg");
	var mask_3_graphics_43 = new cjs.Graphics().p("AsfFRIAAqhIY/AAIAAKhg");
	var mask_3_graphics_44 = new cjs.Graphics().p("AsfFoIAArQIY/AAIAALQg");
	var mask_3_graphics_45 = new cjs.Graphics().p("AsfF9IAAr5IY/AAIAAL5g");
	var mask_3_graphics_46 = new cjs.Graphics().p("AsfGOIAAsbIY/AAIAAMbg");
	var mask_3_graphics_47 = new cjs.Graphics().p("AsfGdIAAs6IY/AAIAAM6g");
	var mask_3_graphics_48 = new cjs.Graphics().p("AsfGqIAAtTIY/AAIAANTg");
	var mask_3_graphics_49 = new cjs.Graphics().p("AsfGzIAAtlIY/AAIAANlg");
	var mask_3_graphics_50 = new cjs.Graphics().p("AsfG6IAAtzIY/AAIAANzg");
	var mask_3_graphics_51 = new cjs.Graphics().p("AsfG+IAAt7IY/AAIAAN7g");
	var mask_3_graphics_52 = new cjs.Graphics().p("AsfHAIAAt/IY/AAIAAN/g");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(35).to({graphics:mask_3_graphics_35,x:567.1,y:264.6}).wait(1).to({graphics:mask_3_graphics_36,x:567.1,y:260.1}).wait(1).to({graphics:mask_3_graphics_37,x:567.1,y:255.9}).wait(1).to({graphics:mask_3_graphics_38,x:567.1,y:252}).wait(1).to({graphics:mask_3_graphics_39,x:567.1,y:248.4}).wait(1).to({graphics:mask_3_graphics_40,x:567.1,y:245}).wait(1).to({graphics:mask_3_graphics_41,x:567.1,y:241.9}).wait(1).to({graphics:mask_3_graphics_42,x:567.1,y:239.1}).wait(1).to({graphics:mask_3_graphics_43,x:567.1,y:236.5}).wait(1).to({graphics:mask_3_graphics_44,x:567.1,y:234.2}).wait(1).to({graphics:mask_3_graphics_45,x:567.1,y:232.2}).wait(1).to({graphics:mask_3_graphics_46,x:567.1,y:230.4}).wait(1).to({graphics:mask_3_graphics_47,x:567.1,y:228.9}).wait(1).to({graphics:mask_3_graphics_48,x:567.1,y:227.7}).wait(1).to({graphics:mask_3_graphics_49,x:567.1,y:226.8}).wait(1).to({graphics:mask_3_graphics_50,x:567.1,y:226.1}).wait(1).to({graphics:mask_3_graphics_51,x:567.1,y:225.7}).wait(1).to({graphics:mask_3_graphics_52,x:567.1,y:225.6}).wait(48));

	// Layer 8
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#CCCCCC").ss(1,0,0,4).p("Aj9AAIH7AA");
	this.shape_10.setTransform(515.8,265.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#E11B22","#A31B22"],[0,1],0,-23.5,0,23.5).s().p("AnzDrIAAnVIPnAAIAAHVg");
	this.shape_11.setTransform(592.2,242.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E11B22").s().p("AghA/IAAgLIAyhAQAKgOgIgOQgGgLgNAAQgRAAgFATIgLAAQACgNAKgIQAJgJAMAAQAUAAAKATQAFAJgCAKQgBAKgGAHIguA7IA1AAIAAALg");
	this.shape_12.setTransform(591.3,187.4);

	this.shape_10.mask = this.shape_11.mask = this.shape_12.mask = mask_3;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},35).wait(65));

	// Layer 7 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_24 = new cjs.Graphics().p("AspBKIAAiTIZSAAIAACTg");
	var mask_4_graphics_25 = new cjs.Graphics().p("AspB5IAAjxIZSAAIAADxg");
	var mask_4_graphics_26 = new cjs.Graphics().p("AspCkIAAlHIZSAAIAAFHg");
	var mask_4_graphics_27 = new cjs.Graphics().p("AspDMIAAmYIZSAAIAAGYg");
	var mask_4_graphics_28 = new cjs.Graphics().p("AspDyIAAnjIZSAAIAAHjg");
	var mask_4_graphics_29 = new cjs.Graphics().p("AspEVIAAopIZSAAIAAIpg");
	var mask_4_graphics_30 = new cjs.Graphics().p("AspE1IAAppIZSAAIAAJpg");
	var mask_4_graphics_31 = new cjs.Graphics().p("AspFSIAAqjIZSAAIAAKjg");
	var mask_4_graphics_32 = new cjs.Graphics().p("AspFtIAArZIZSAAIAALZg");
	var mask_4_graphics_33 = new cjs.Graphics().p("AspGFIAAsJIZSAAIAAMJg");
	var mask_4_graphics_34 = new cjs.Graphics().p("AspGZIAAsxIZSAAIAAMxg");
	var mask_4_graphics_35 = new cjs.Graphics().p("AspGsIAAtXIZSAAIAANXg");
	var mask_4_graphics_36 = new cjs.Graphics().p("AspG7IAAt1IZSAAIAAN1g");
	var mask_4_graphics_37 = new cjs.Graphics().p("AspHIIAAuPIZSAAIAAOPg");
	var mask_4_graphics_38 = new cjs.Graphics().p("AspHRIAAuhIZSAAIAAOhg");
	var mask_4_graphics_39 = new cjs.Graphics().p("AspHYIAAuvIZSAAIAAOvg");
	var mask_4_graphics_40 = new cjs.Graphics().p("AspHcIAAu3IZSAAIAAO3g");
	var mask_4_graphics_41 = new cjs.Graphics().p("AspHeIAAu7IZSAAIAAO7g");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(24).to({graphics:mask_4_graphics_24,x:415.1,y:308.6}).wait(1).to({graphics:mask_4_graphics_25,x:415.1,y:303.9}).wait(1).to({graphics:mask_4_graphics_26,x:415.1,y:299.5}).wait(1).to({graphics:mask_4_graphics_27,x:415.1,y:295.4}).wait(1).to({graphics:mask_4_graphics_28,x:415.1,y:291.6}).wait(1).to({graphics:mask_4_graphics_29,x:415.1,y:288}).wait(1).to({graphics:mask_4_graphics_30,x:415.1,y:284.8}).wait(1).to({graphics:mask_4_graphics_31,x:415.1,y:281.8}).wait(1).to({graphics:mask_4_graphics_32,x:415.1,y:279.1}).wait(1).to({graphics:mask_4_graphics_33,x:415.1,y:276.7}).wait(1).to({graphics:mask_4_graphics_34,x:415.1,y:274.6}).wait(1).to({graphics:mask_4_graphics_35,x:415.1,y:272.7}).wait(1).to({graphics:mask_4_graphics_36,x:415.1,y:271.2}).wait(1).to({graphics:mask_4_graphics_37,x:415.1,y:269.9}).wait(1).to({graphics:mask_4_graphics_38,x:415.1,y:268.9}).wait(1).to({graphics:mask_4_graphics_39,x:415.1,y:268.2}).wait(1).to({graphics:mask_4_graphics_40,x:415.1,y:267.8}).wait(1).to({graphics:mask_4_graphics_41,x:415.1,y:267.6}).wait(59));

	// Layer 6
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#CCCCCC").ss(1,0,0,4).p("Aj9AAIH7AA");
	this.shape_13.setTransform(365.8,310.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#E11B22","#A31B22"],[0,1],0,-22.2,0,22.2).s().p("AnzDeIAAm7IPmAAIAAG7g");
	this.shape_14.setTransform(441.3,287.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E11B22").s().p("AggAkIALAAQAFAQAQAAQAPAAAFgNQADgGAAgNQAAgdgXAAQgKAAgJAJIgMAAIAAg9IA9AAIAAAKIgyAAIAAAqQAKgKAMAAQAUgBAIASQADAEAAASQAAAPgDAIQgDAIgJAGQgJAFgJAAQgaAAgGgag");
	this.shape_15.setTransform(448.4,234.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E11B22").s().p("AgEAFIAAgJIAJAAIAAAJg");
	this.shape_16.setTransform(442.3,240.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E11B22").s().p("AACA+IAAhvIgPAMIAAgMIAPgMIALAAIAAB7g");
	this.shape_17.setTransform(435.5,234.5);

	this.shape_13.mask = this.shape_14.mask = this.shape_15.mask = this.shape_16.mask = this.shape_17.mask = mask_4;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]},24).wait(76));

	// Layer 5 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_12 = new cjs.Graphics().p("AtHA3IAAhtIaPAAIAABtg");
	var mask_5_graphics_13 = new cjs.Graphics().p("AtHBvIAAjdIaPAAIAADdg");
	var mask_5_graphics_14 = new cjs.Graphics().p("AtHCkIAAlHIaPAAIAAFHg");
	var mask_5_graphics_15 = new cjs.Graphics().p("AtHDWIAAmrIaPAAIAAGrg");
	var mask_5_graphics_16 = new cjs.Graphics().p("AtHEFIAAoJIaPAAIAAIJg");
	var mask_5_graphics_17 = new cjs.Graphics().p("AtHEyIAApjIaPAAIAAJjg");
	var mask_5_graphics_18 = new cjs.Graphics().p("AtHFbIAAq1IaPAAIAAK1g");
	var mask_5_graphics_19 = new cjs.Graphics().p("AtHGBIAAsBIaPAAIAAMBg");
	var mask_5_graphics_20 = new cjs.Graphics().p("AtHGkIAAtHIaPAAIAANHg");
	var mask_5_graphics_21 = new cjs.Graphics().p("AtHHEIAAuHIaPAAIAAOHg");
	var mask_5_graphics_22 = new cjs.Graphics().p("AtHHhIAAvBIaPAAIAAPBg");
	var mask_5_graphics_23 = new cjs.Graphics().p("AtHH6IAAv0IaPAAIAAP0g");
	var mask_5_graphics_24 = new cjs.Graphics().p("AtHIRIAAwhIaPAAIAAQhg");
	var mask_5_graphics_25 = new cjs.Graphics().p("AtHIlIAAxJIaPAAIAARJg");
	var mask_5_graphics_26 = new cjs.Graphics().p("AtHI2IAAxrIaPAAIAARrg");
	var mask_5_graphics_27 = new cjs.Graphics().p("AtHJEIAAyHIaPAAIAASHg");
	var mask_5_graphics_28 = new cjs.Graphics().p("AtHJOIAAybIaPAAIAASbg");
	var mask_5_graphics_29 = new cjs.Graphics().p("AtHJWIAAyrIaPAAIAASrg");
	var mask_5_graphics_30 = new cjs.Graphics().p("AtHJaIAAy0IaPAAIAAS0g");
	var mask_5_graphics_31 = new cjs.Graphics().p("AtHJcIAAy3IaPAAIAAS3g");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(12).to({graphics:mask_5_graphics_12,x:264.1,y:385.6}).wait(1).to({graphics:mask_5_graphics_13,x:264.1,y:380.1}).wait(1).to({graphics:mask_5_graphics_14,x:264.1,y:374.9}).wait(1).to({graphics:mask_5_graphics_15,x:264.1,y:369.9}).wait(1).to({graphics:mask_5_graphics_16,x:264.1,y:365.3}).wait(1).to({graphics:mask_5_graphics_17,x:264.1,y:361}).wait(1).to({graphics:mask_5_graphics_18,x:264.1,y:356.9}).wait(1).to({graphics:mask_5_graphics_19,x:264.1,y:353.2}).wait(1).to({graphics:mask_5_graphics_20,x:264.1,y:349.8}).wait(1).to({graphics:mask_5_graphics_21,x:264.1,y:346.6}).wait(1).to({graphics:mask_5_graphics_22,x:264.1,y:343.8}).wait(1).to({graphics:mask_5_graphics_23,x:264.1,y:341.3}).wait(1).to({graphics:mask_5_graphics_24,x:264.1,y:339}).wait(1).to({graphics:mask_5_graphics_25,x:264.1,y:337.1}).wait(1).to({graphics:mask_5_graphics_26,x:264.1,y:335.5}).wait(1).to({graphics:mask_5_graphics_27,x:264.1,y:334.1}).wait(1).to({graphics:mask_5_graphics_28,x:264.1,y:333}).wait(1).to({graphics:mask_5_graphics_29,x:264.1,y:332.3}).wait(1).to({graphics:mask_5_graphics_30,x:264.1,y:331.9}).wait(1).to({graphics:mask_5_graphics_31,x:264.1,y:331.7}).wait(69));

	// Layer 4
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#CCCCCC").ss(1,0,0,4).p("Aj9AAIH7AA");
	this.shape_18.setTransform(214.8,386.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#E11B22","#A31B22"],[0,1],0,-38,0,38).s().p("AnzF7IAAr1IPmAAIAAL1g");
	this.shape_19.setTransform(290.3,348.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E11B22").s().p("AgVA5QgJgHgDgMIALAAQAHAPAPAAQAJAAAHgHQAHgHAAgMQAAgLgHgHQgGgHgKAAIgGAAIAAgHIAGAAQAIAAAHgGQAHgHAAgKQAAgKgHgHQgHgGgIAAQgRAAgFAQIgLAAQADgMAJgHQAJgIALAAQAOAAAKAKQAJAKAAAOQAAARgQAKQASAHAAAVQAAAQgKAKQgLAKgOAAQgLAAgJgGg");
	this.shape_20.setTransform(290,279.9);

	this.shape_18.mask = this.shape_19.mask = this.shape_20.mask = mask_5;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]},12).wait(88));

	// Layer 3 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	var mask_6_graphics_0 = new cjs.Graphics().p("ApDAiIAAhEISHAAIAABEg");
	var mask_6_graphics_1 = new cjs.Graphics().p("ApDBGIAAiLISHAAIAACLg");
	var mask_6_graphics_2 = new cjs.Graphics().p("ApDBnIAAjOISHAAIAADOg");
	var mask_6_graphics_3 = new cjs.Graphics().p("ApDCHIAAkNISHAAIAAENg");
	var mask_6_graphics_4 = new cjs.Graphics().p("ApDClIAAlIISHAAIAAFIg");
	var mask_6_graphics_5 = new cjs.Graphics().p("ApDDAIAAl/ISHAAIAAF/g");
	var mask_6_graphics_6 = new cjs.Graphics().p("ApDDaIAAmzISHAAIAAGzg");
	var mask_6_graphics_7 = new cjs.Graphics().p("ApDDyIAAnjISHAAIAAHjg");
	var mask_6_graphics_8 = new cjs.Graphics().p("ApDEIIAAoPISHAAIAAIPg");
	var mask_6_graphics_9 = new cjs.Graphics().p("ApDEcIAAo3ISHAAIAAI3g");
	var mask_6_graphics_10 = new cjs.Graphics().p("ApDEuIAApbISHAAIAAJbg");
	var mask_6_graphics_11 = new cjs.Graphics().p("ApDE+IAAp7ISHAAIAAJ7g");
	var mask_6_graphics_12 = new cjs.Graphics().p("ApDFNIAAqZISHAAIAAKZg");
	var mask_6_graphics_13 = new cjs.Graphics().p("ApDFZIAAqxISHAAIAAKxg");
	var mask_6_graphics_14 = new cjs.Graphics().p("ApDFkIAArGISHAAIAALGg");
	var mask_6_graphics_15 = new cjs.Graphics().p("ApDFsIAArXISHAAIAALXg");
	var mask_6_graphics_16 = new cjs.Graphics().p("ApDFzIAArlISHAAIAALlg");
	var mask_6_graphics_17 = new cjs.Graphics().p("ApDF4IAArvISHAAIAALvg");
	var mask_6_graphics_18 = new cjs.Graphics().p("ApDF6IAArzISHAAIAALzg");
	var mask_6_graphics_19 = new cjs.Graphics().p("EgC4AhDIAAr4ISHAAIAAL4g");

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:mask_6_graphics_0,x:137,y:419.6}).wait(1).to({graphics:mask_6_graphics_1,x:137,y:416.1}).wait(1).to({graphics:mask_6_graphics_2,x:137,y:412.7}).wait(1).to({graphics:mask_6_graphics_3,x:137,y:409.5}).wait(1).to({graphics:mask_6_graphics_4,x:137,y:406.6}).wait(1).to({graphics:mask_6_graphics_5,x:137,y:403.8}).wait(1).to({graphics:mask_6_graphics_6,x:137,y:401.2}).wait(1).to({graphics:mask_6_graphics_7,x:137,y:398.8}).wait(1).to({graphics:mask_6_graphics_8,x:137,y:396.6}).wait(1).to({graphics:mask_6_graphics_9,x:137,y:394.6}).wait(1).to({graphics:mask_6_graphics_10,x:137,y:392.8}).wait(1).to({graphics:mask_6_graphics_11,x:137,y:391.1}).wait(1).to({graphics:mask_6_graphics_12,x:137,y:389.7}).wait(1).to({graphics:mask_6_graphics_13,x:137,y:388.5}).wait(1).to({graphics:mask_6_graphics_14,x:137,y:387.4}).wait(1).to({graphics:mask_6_graphics_15,x:137,y:386.5}).wait(1).to({graphics:mask_6_graphics_16,x:137,y:385.9}).wait(1).to({graphics:mask_6_graphics_17,x:137,y:385.4}).wait(1).to({graphics:mask_6_graphics_18,x:137,y:385.1}).wait(1).to({graphics:mask_6_graphics_19,x:97.5,y:211.5}).wait(81));

	// Layer 2
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#E11B22","#A31B22"],[0,1],0,-18.4,0,18.4).s().p("AnyC4IAAlvIPmAAIAAFvg");
	this.shape_21.setTransform(139.4,404.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E11B22").s().p("AgTA5QgKgHgDgNIALAAQAFAPAQAAQAPAAAFgMQACgGAAgOQAAgdgWAAQgLAAgIAJIgMAAIAAg+IA9AAIAAALIgyAAIAAAqQAGgHAHgCQAEgBAFAAQAUAAAIARQADAEAAATQAAAPgDAHQgDAJgJAFQgJAGgJAAQgKAAgJgGg");
	this.shape_22.setTransform(145.4,360.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E11B22").s().p("AgEAFIAAgJIAJAAIAAAJg");
	this.shape_23.setTransform(139.3,366.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E11B22").s().p("AADA+IAAhwIgPANIAAgMIAPgMIALAAIAAB7g");
	this.shape_24.setTransform(132.5,360.8);

	this.shape_21.mask = this.shape_22.mask = this.shape_23.mask = this.shape_24.mask = mask_6;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21}]}).wait(100));

	// bg
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#CCCCCC").ss(1,0,0,4).p("EBSjAAAMilFAAA");
	this.shape_25.setTransform(592.2,423);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#333333").s().p("AALA7QgRAAAAgUIAAg6IgKAAIAAgJIAKAAIAAgeIAIAAIAAAeIAPAAIAAAJIgPAAIAAA3QABANALAAIADAAIAAAKg");
	this.shape_26.setTransform(1069.9,464.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#333333").s().p("AAYAtIAAg0QgBgMgGgGQgHgIgKAAQgJAAgHAIQgGAHAAALIAAA0IgMAAIAAhXIAMAAIAAAKIAAAAQAJgMAPABQANgBAJAJQAKAIAAAOIAAA6g");
	this.shape_27.setTransform(1063.1,466.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#333333").s().p("AgWAkQgNgMAAgYQAAgXAMgMQAKgJANAAQAPAAAKAKQALALAAASIAAAHIg7AAQAAAhAZAAQAMAAAJgIIAHAIQgLAKgQAAQgPAAgKgJgAgQgaQgGAHgBANIAvAAQAAgNgHgIQgHgHgKAAQgJAAgHAIg");
	this.shape_28.setTransform(1054.1,466.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#333333").s().p("AgZAtIAAhXIALAAIAAALIAAAAQAKgNASABQAGAAAGADIgHALQgEgDgHAAQgIAAgHAGQgHAHAAALIAAA1g");
	this.shape_29.setTransform(1047.3,466.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#333333").s().p("AgZAtIAAhXIALAAIAAALIAAAAQALgNASABQAGABAFACIgHALQgFgDgHAAQgHAAgHAGQgHAHAAALIAAA1g");
	this.shape_30.setTransform(1041,466.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#333333").s().p("AgXAlQgKgKAAgOIAAg4IALAAIAAAzQAAAMAHAHQAGAHAJgBQAKABAHgHQAHgHAAgMIAAgzIAKAAIAABWIgKAAIAAgLIgBAAQgJANgPAAQgMgBgKgHg");
	this.shape_31.setTransform(1032.2,466.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#333333").s().p("AgVA5QgLgHgFgLQgDgHgBgQIAAgfQABgQADgHQAFgLALgHQALgGALAAQAPAAAMAIQAKAJAEANIgNAAQgHgTgVAAQgOAAgJALQgEAHgCAHQgCAHAAATQAAAUACAHQACAHAEAGQAJAMAOAAQAVAAAHgUIANAAQgEAOgKAIQgMAJgPAAQgLAAgLgGg");
	this.shape_32.setTransform(1023.1,464.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#333333").s().p("AgWA2QgLgLAAgRQAAgMAFgIIAhhEIAMAAIgaA5QAJgDAGAAQAMABAIAHQAIAJAAAPQAAAUgLAKQgKAJgNAAQgNAAgJgJgAgPAGQgHAIAAAMQAAAMAGAHQAHAIAJAAQAJAAAHgHQAHgIAAgMQAAgMgHgIQgGgGgKAAQgJAAgGAGg");
	this.shape_33.setTransform(906.4,464.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#333333").s().p("AADA+IAAhvIgQAMIAAgMIAQgMIALAAIAAB7g");
	this.shape_34.setTransform(897.4,464.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#333333").s().p("AgWA2QgLgJAAgQIAAg5QAAgQALgJQAJgJANAAQAOAAAKAJQAJAJABAQIAAA5QgBAQgJAJQgKAJgOAAQgNAAgJgJgAgPgtQgHAHAAALIAAA3QAAALAHAHQAGAHAJAAQAKAAAHgHQAGgHAAgLIAAg3QAAgLgGgHQgHgHgKAAQgJAAgGAHg");
	this.shape_35.setTransform(890,464.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#333333").s().p("AghA/IAAgLIAyhAQAFgGABgHQABgIgEgHQgGgLgOAAQgHAAgGAFQgGAFgCAJIgLAAQACgMAJgJQAJgIAMAAQAVAAAJASQAFAIgBALQgBAKgGAHIguA7IA1AAIAAALg");
	this.shape_36.setTransform(881.7,464.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#333333").s().p("AgVA5QgJgHgDgNIALAAQAHAQAPAAQAJAAAHgHQAHgHAAgMQAAgLgHgHQgGgHgKAAIgGAAIAAgIIAGAAQAIAAAHgGQAHgGAAgKQAAgKgHgHQgHgHgIAAQgQAAgGAQIgLAAQADgLAJgIQAJgHALAAQAOAAAKAKQAJAKAAANQAAASgQAKQASAHAAAVQAAAQgKAKQgLAKgOAAQgLAAgJgGg");
	this.shape_37.setTransform(755.2,464.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#333333").s().p("AADA+IAAhvIgQAMIAAgMIAQgMIAKAAIAAB7g");
	this.shape_38.setTransform(746.5,464.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#333333").s().p("AgWA2QgKgJAAgQIAAg5QAAgQAKgJQAJgJANAAQAOAAAJAJQAKAJAAAQIAAA5QAAAQgKAJQgJAJgOAAQgNAAgJgJgAgPgtQgGAHgBALIAAA3QABALAGAHQAGAHAJAAQAKAAAHgHQAGgHAAgLIAAg3QAAgLgGgHQgHgHgKAAQgJAAgGAHg");
	this.shape_39.setTransform(739.1,464.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#333333").s().p("AghA/IAAgLIAyhAQAFgGABgHQABgIgEgHQgHgLgNAAQgHAAgGAFQgGAFgCAJIgLAAQACgNAJgIQAJgIAMAAQAVAAAJASQAFAIgBALQgBAKgGAHIguA7IA1AAIAAALg");
	this.shape_40.setTransform(730.8,464.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#333333").s().p("AgVA+IArhwIgsAAIAAATIgLAAIAAgeIBDAAIAAALIgsBwg");
	this.shape_41.setTransform(604.8,464.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#333333").s().p("AgWA2QgKgJAAgQIAAg5QAAgQAKgJQAJgJANAAQAOAAAJAJQAKAJAAAQIAAA5QAAAQgKAJQgKAJgNAAQgNAAgJgJgAgPgtQgGAHAAALIAAA3QAAALAGAHQAGAHAJAAQAKAAAGgHQAHgHgBgLIAAg3QABgLgHgHQgGgHgKAAQgJAAgGAHg");
	this.shape_42.setTransform(596.3,464.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#333333").s().p("AgWA2QgKgJAAgQIAAg5QAAgQAKgJQAJgJANAAQAOAAAJAJQAKAJAAAQIAAA5QAAAQgKAJQgKAJgNAAQgNAAgJgJgAgPgtQgGAHAAALIAAA3QAAALAGAHQAGAHAJAAQAKAAAGgHQAHgHAAgLIAAg3QAAgLgHgHQgGgHgKAAQgJAAgGAHg");
	this.shape_43.setTransform(588.1,464.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#333333").s().p("AghA/IAAgLIAyhAQAFgGABgHQABgIgEgHQgHgLgNAAQgHAAgGAFQgGAFgCAJIgLAAQACgNAJgIQAJgIAMAAQAVAAAJASQAFAIgBALQgBAKgGAHIguA7IA1AAIAAALg");
	this.shape_44.setTransform(579.8,464.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#333333").s().p("AARA+IAAgUIg2AAIAAgLIAqhcIALAAIgqBdIArAAIAAgjIAKAAIAAAjIALAAIAAAKIgLAAIAAAUg");
	this.shape_45.setTransform(453.5,464.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#333333").s().p("AgWA2QgLgJABgQIAAg5QgBgQALgJQAJgJANAAQAOAAAKAJQAKAJgBAQIAAA5QABAQgKAJQgLAJgNAAQgNAAgJgJgAgQgtQgGAGAAAMIAAA3QAAALAGAHQAGAHAKAAQAKAAAGgHQAHgHAAgLIAAg3QAAgLgHgHQgGgHgKAAQgKAAgGAHg");
	this.shape_46.setTransform(445.4,464.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#333333").s().p("AgWA2QgLgJAAgQIAAg5QAAgQALgJQAKgJAMAAQAOAAAKAJQAKAJgBAQIAAA5QABAQgKAJQgLAJgNAAQgMAAgKgJgAgPgtQgHAHABALIAAA3QgBALAHAHQAGAHAJAAQAKAAAGgHQAHgHAAgLIAAg3QAAgLgHgHQgGgHgKAAQgJAAgGAHg");
	this.shape_47.setTransform(437.2,464.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#333333").s().p("AghA/IAAgLIAyhAQAFgGABgHQABgIgEgHQgHgLgNAAQgRAAgEATIgLAAQABgMAKgJQAJgIAMAAQAVAAAJASQAFAIgBALQgBAKgGAHIguA7IA1AAIAAALg");
	this.shape_48.setTransform(428.9,464.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#333333").s().p("AgQA/IAbg5IgBAAQgIAEgHgBQgMgBgIgIQgIgIAAgPQAAgTALgKQAJgKANABQAOgBAJAKQALAKAAARQAAAMgFAIIghBEgAgPgtQgHAHAAANQAAANAHAGQAGAGAJAAQAKAAAGgGQAHgGAAgNQAAgMgGgHQgHgIgKAAQgIAAgHAHg");
	this.shape_49.setTransform(302.7,464.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#333333").s().p("AgQA/IAbg5IgBAAQgIAEgHgBQgMgBgHgIQgJgIAAgPQAAgTALgKQAKgKANABQANgBAJAKQALAKAAARQAAAMgFAIIghBEgAgOgtQgIAHAAANQAAANAHAGQAGAGAJAAQAKAAAGgGQAHgGAAgNQAAgMgGgHQgGgIgLAAQgHAAgHAHg");
	this.shape_50.setTransform(294.5,464.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#333333").s().p("AgQA/IAag5IAAAAQgJAEgGgBQgMgBgIgIQgIgIAAgPQAAgTALgKQAKgKAMABQAOgBAKAKQAKAKAAARQAAALgFAJIghBEgAgPgtQgHAHAAANQAAANAGAGQAHAGAJAAQAKAAAGgGQAHgGAAgNQAAgMgHgHQgFgIgLAAQgIAAgHAHg");
	this.shape_51.setTransform(286.3,464.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#333333").s().p("AADA+IAAhvIgQAMIAAgMIAQgMIALAAIAAB7g");
	this.shape_52.setTransform(277.2,464.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#CCCCCC").ss(1,0,0,4).p("AAA7ZMAAAA2z");
	this.shape_53.setTransform(63.9,247.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#333333").s().p("AgiAhIAGgIQANAKAQAAQAKAAAGgEQAIgEgBgJQAAgLgPgDIgKgBIgKgBQgVgCABgSQgBgNAKgHQAIgGAOAAQARAAANAJIgGAIQgMgHgMAAQgUAAAAAQQAAAIAJADIALACQAMABAHACQAQACABATQAAAMgLAHQgKAHgPAAQgRAAgRgMg");
	this.shape_54.setTransform(149,466.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#333333").s().p("AgEgOIAJAAIAAAVIgJAIg");
	this.shape_55.setTransform(143.3,458.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#333333").s().p("AgWA2QgKgJAAgQIAAg5QAAgQAKgJQAJgJANAAQAOAAAJAJQALAJgBAQIAAA5QABAQgLAJQgKAJgNAAQgNAAgJgJgAgPgtQgHAGAAAMIAAA3QAAALAHAHQAGAHAJAAQAKAAAGgHQAHgHgBgLIAAg3QABgLgHgHQgGgHgKAAQgJAAgGAHg");
	this.shape_56.setTransform(137.7,464.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#333333").s().p("AgQA/IAbg5IgBAAQgJAEgGgBQgMgBgHgIQgJgIAAgPQAAgTALgKQAJgKAOABQANgBAJAKQALAKAAARQAAALgFAJIghBEgAgOgtQgIAHAAANQAAANAHAGQAHAGAIAAQAJAAAHgGQAHgGAAgNQAAgMgHgHQgFgIgLAAQgHAAgHAHg");
	this.shape_57.setTransform(129.6,464.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#333333").s().p("AgWA2QgLgJAAgQIAAg5QAAgQALgJQAKgJAMAAQAOAAAKAJQAKAJAAAQIAAA5QAAAQgKAJQgLAJgNAAQgMAAgKgJgAgPgtQgHAHABALIAAA3QgBALAHAHQAGAHAJAAQAKAAAGgHQAHgHAAgLIAAg3QAAgLgHgHQgGgHgKAAQgJAAgGAHg");
	this.shape_58.setTransform(22.7,412.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#333333").s().p("AghA/IAAgLIAyhAQAFgFABgIQABgIgEgHQgHgLgNAAQgHAAgGAFQgGAFgCAJIgLAAQACgNAJgIQAJgJAMABQAVgBAJATQAFAIgBALQgBAKgGAHIguA7IA1AAIAAALg");
	this.shape_59.setTransform(22.6,364.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#333333").s().p("AARA+IAAgTIg2AAIAAgLIAqhdIALAAIgqBeIArAAIAAgkIAKAAIAAAkIAMAAIAAAKIgMAAIAAATg");
	this.shape_60.setTransform(22.7,315.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#333333").s().p("AgWA2QgLgLAAgQQAAgMAFgJIAhhDIAMAAIgbA4IABAAQAHgDAIABQAMABAHAGQAJAJAAAPQAAAUgLAKQgKAJgNAAQgNgBgJgIgAgQAGQgGAIAAAMQAAAMAGAIQAGAHAKAAQAJAAAHgHQAHgHAAgNQAAgMgHgIQgGgGgKAAQgJAAgHAGg");
	this.shape_61.setTransform(22.7,267.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#333333").s().p("AgWA3QgLgKAAgQIAAg5QAAgQALgJQAKgJAMAAQANAAALAJQAKAJAAAQIAAA5QAAAQgKAKQgKAIgOAAQgMAAgKgIgAgPgtQgHAHABALIAAA3QgBAMAHAGQAGAHAJAAQAKAAAGgHQAHgHAAgLIAAg3QAAgLgHgHQgGgGgKAAQgJAAgGAGg");
	this.shape_62.setTransform(22.7,169.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#333333").s().p("AACA+IAAhwIgPANIAAgMIAPgMIALAAIAAB7g");
	this.shape_63.setTransform(13.8,169.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#333333").s().p("AARA+IAAgTIg2AAIAAgLIAqhdIALAAIgqBdIArAAIAAgkIAKAAIAAAkIAMAAIAAALIgMAAIAAATg");
	this.shape_64.setTransform(22.7,72.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#333333").s().p("AACA+IAAhwIgPANIAAgMIAPgMIALAAIAAB7g");
	this.shape_65.setTransform(13.8,72.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#333333").s().p("AghA/IAAgLIAyhAQALgOgIgOQgHgLgNAAQgHAAgGAFQgGAFgCAJIgLAAQACgNAJgIQAJgJAMAAQAVAAAJATQAFAIgBALQgBAKgGAHIguA7IA1AAIAAALg");
	this.shape_66.setTransform(22.6,121.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#333333").s().p("AACA+IAAhwIgPANIAAgMIAPgMIALAAIAAB7g");
	this.shape_67.setTransform(13.8,121.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#333333").s().p("AgYA1QgLgKAAgQQAAgUARgHQgPgIAAgUQAAgOAKgKQAKgKANAAQAOAAAKAKQAKAJAAAPQAAATgPAJQAIABAFAJQAEAJAAAIQAAAQgLAKQgKAKgPAAQgOAAgKgKgAgRAJQgIAHAAALQAAALAIAHQAIAIAJAAQAKAAAIgIQAIgHAAgLQAAgLgIgHQgIgIgKAAQgJAAgIAIgAgPgtQgHAGAAALQAAALAHAHQAHAFAIAAQAJAAAHgFQAHgHAAgLQAAgLgHgGQgHgHgJAAQgIAAgHAHg");
	this.shape_68.setTransform(22.7,218.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#333333").s().p("AgKBDQAMgEAAgQIAAhdQAAgQgMgDIABgJQAJACAGAIQAFAIAAALIAABbQAAAMgFAHQgGAIgJADg");
	this.shape_69.setTransform(449,21.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#333333").s().p("AgrAxIAIgJQARAMATAAQAOAAAIgGQAJgGAAgLQAAgMgJgGQgGgEgQgCQgVgDgJgHQgIgIAAgOQAAgQAKgJQAKgKARAAQATAAATALIgHAJQgRgJgOAAQgKAAgIAGQgIAGAAAMQAAAOAOAEQAHADAPADQALACAGACQARAIAAAUQAAAQgMAJQgMAJgTAAQgaAAgSgOg");
	this.shape_70.setTransform(440.3,21.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#333333").s().p("AAhA+IhChnIAAABIAABmIgMAAIAAh7IANAAIBCBoIAAhoIAMAAIAAB7g");
	this.shape_71.setTransform(427.6,21.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#333333").s().p("AAdA+IgdhoIgcBoIgKAAIgfh7IAMAAIAYBmIABAAIAchmIAJAAIAdBmIABAAIAXhmIANAAIggB7g");
	this.shape_72.setTransform(412.4,21.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#333333").s().p("AgWA5QgLgHgFgLQgEgJAAgOIAAgfQAAgQAEgHQAFgLALgHQALgGALAAQAMAAALAGQAMAHAEALQADAGABARIAAAfQgBAQgDAHQgEALgMAHQgLAGgMAAQgLAAgLgGgAgXgoQgFAHgBAHQgCAHAAATQAAATACAIQABAIAFAFQAJAMAOAAQAPAAAJgMQAFgGABgHQACgIAAgTQAAgTgCgHQgBgHgFgHQgIgLgQAAQgPAAgIALg");
	this.shape_73.setTransform(397.9,21.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#333333").s().p("AAdA+Igcg5IggAAIAAA5IgLAAIAAh7IAwAAQAPAAAJAJQALAJAAAPQAAAbgcAFIAeA6gAgfgDIAhAAQANAAAIgGQAHgHAAgMQAAgXgbAAIgiAAg");
	this.shape_74.setTransform(386.1,21.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#333333").s().p("AgVA5QgLgHgFgLQgCgFgCgSIAAgfQACgSACgFQAFgLALgHQALgGALAAQAPgBALAKQALAIAEANIgNAAQgIgTgUAAQgOAAgJALQgFAHgBAHQgCAHAAATQAAAUACAHQABAHAFAGQAKAMANAAQAKAAAIgGQAHgFADgIIANAAQgEANgLAIQgLAKgPgBQgLAAgLgGg");
	this.shape_75.setTransform(374.1,21.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#333333").s().p("AAiA+IhDhnIAABnIgMAAIAAh7IAMAAIBDBoIAAhoIAMAAIAAB7g");
	this.shape_76.setTransform(355.3,21.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#333333").s().p("AgpA+IAAh7IAtAAQARAAAKAJQAJAIAAAPQAAAVgTAIIAAAAQALABAGAJQAEAIAAALQAAAPgKAJQgJAJgOAAgAgdA0IAhAAQANAAAHgIQAGgGAAgLQAAgKgGgGQgHgIgNAAIghAAgAgdgFIAfAAQANAAAHgGQAGgHAAgKQAAgKgGgGQgHgHgNAAIgfAAg");
	this.shape_77.setTransform(342.4,21.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#333333").s().p("AgFBBQgFgHAAgMIAAhbQAAgLAFgIQAFgIAKgCIABAJQgMADAAAQIAABdQAAAPAMAFIgBAJQgKgDgFgIg");
	this.shape_78.setTransform(333.5,21.8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#333333").s().p("AAiA+IhDhnIAABnIgMAAIAAh7IAMAAIBDBoIABgBIAAhnIALAAIAAB7g");
	this.shape_79.setTransform(316.9,21.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#333333").s().p("AgWA5QgLgHgFgLQgEgIAAgPIAAgfQABgRADgGQAFgLALgHQALgGALAAQAMAAALAGQAMAHAFALQADAIAAAPIAAAfQAAAOgDAJQgFALgMAHQgLAGgMAAQgLAAgLgGgAgXgoQgEAHgCAHQgBAHAAATQAAATABAIQACAIAEAFQAKAMANAAQAPAAAJgMQAFgGABgHQACgHAAgUQAAgTgCgHQgBgHgFgHQgJgLgPAAQgOAAgJALg");
	this.shape_80.setTransform(303.9,21.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#333333").s().p("AgEA+IAAh7IAJAAIAAB7g");
	this.shape_81.setTransform(294.9,21.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#333333").s().p("AgEA+IAAhxIgmAAIAAgKIBVAAIAAAKIglAAIAABxg");
	this.shape_82.setTransform(286.9,21.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#333333").s().p("AgdAzQgNgMAAgUIAAhRIAMAAIAABPQAAAPAJAKQAJAJAMAAQAOAAAIgIQAJgJAAgPIAAhRIAMAAIAABTQAAASgMAMQgNAMgSAAQgRAAgMgMg");
	this.shape_83.setTransform(275.3,21.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#333333").s().p("AglA+IAAh7IAMAAIAABxIA/AAIAAAKg");
	this.shape_84.setTransform(263.6,21.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#333333").s().p("AgWA5QgLgHgFgLQgEgIAAgPIAAgfQAAgPAEgIQAFgLALgHQALgGALAAQAMAAALAGQAMAHAFALQADAIAAAPIAAAfQAAAOgDAJQgFALgMAHQgLAGgMAAQgLAAgLgGgAgXgoQgEAHgCAHQgBAHAAATQAAATABAIQACAIAEAFQAKAMANAAQAPAAAJgMQAFgGABgHQACgIAAgTQAAgTgCgHQgBgHgFgHQgJgLgPAAQgOAAgJALg");
	this.shape_85.setTransform(251.3,21.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#333333").s().p("AgEA+Igph7IANAAIAgBmIAAAAIAhhmIANAAIgqB7g");
	this.shape_86.setTransform(239.6,21.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#333333").s().p("AglA+IAAh7IBLAAIAAALIg/AAIAAAuIA2AAIAAAIIg2AAIAAAwIA/AAIAAAKg");
	this.shape_87.setTransform(228.6,21.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#333333").s().p("AgEA+IAAg0IglhHIAMAAIAdA9IAfg9IALAAIglBHIAAA0g");
	this.shape_88.setTransform(211.4,21.1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#333333").s().p("AgFA+IAAhxIgkAAIAAgKIBTAAIAAAKIglAAIAABxg");
	this.shape_89.setTransform(201,21.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#333333").s().p("AgEA+IAAh7IAJAAIAAB7g");
	this.shape_90.setTransform(192.9,21.1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#333333").s().p("AgVA5QgLgHgFgLQgDgHgBgQIAAgfQABgRADgGQAFgLALgHQALgGAKAAQAQgBALAKQALAIAEANIgNAAQgDgIgIgFQgIgGgKAAQgOAAgIALQgFAHgBAHQgCAHAAATQAAAUACAHQABAHAFAGQAJAMANAAQAVAAAIgTIANAAQgEANgLAIQgLAKgQgBQgKAAgLgGg");
	this.shape_91.setTransform(184.7,21.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#333333").s().p("AAmA+IgKgeIg3AAIgLAeIgMAAIAuh7IAJAAIAuB7gAgYAXIAxAAIgZhFIAAAAg");
	this.shape_92.setTransform(172.4,21.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#333333").s().p("AgpA+IAAh7IAqAAQAaAAAKASQAFAJAAAKQAAAPgLAJQgJAKgSAAIghAAIAAA0gAgdAAIAgAAQALAAAHgEQAJgIAAgMQAAgNgIgHQgIgGgMAAIgfAAg");
	this.shape_93.setTransform(162.4,21.1);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#333333").s().p("AAmA+IgKgeIg3AAIgLAeIgMAAIAuh7IAJAAIAuB7gAgYAXIAxAAIgZhFIAAAAg");
	this.shape_94.setTransform(149.6,21.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#333333").s().p("AgVA5QgLgHgFgLQgDgIgBgPIAAgfQABgPADgIQAFgLALgHQALgGALAAQAPgBALAKQALAIAEANIgNAAQgIgTgUAAQgOAAgJALQgFAHgBAHQgCAHAAATQAAAUACAHQABAHAFAGQAKAMANAAQAKAAAIgGQAHgFADgIIANAAQgEANgLAIQgLAKgPgBQgLAAgLgGg");
	this.shape_95.setTransform(138,21.1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#333333").s().p("AAiA+IhDhnIAABnIgMAAIAAh7IAMAAIBDBoIAAhoIAMAAIAAB7g");
	this.shape_96.setTransform(119.2,21.1);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#333333").s().p("AgWA5QgLgHgFgLQgEgIAAgPIAAgfQAAgPAEgIQAFgLALgHQALgGALAAQAMAAALAGQAMAHAFALQADAIAAAPIAAAfQAAAOgDAJQgFALgMAHQgLAGgMAAQgLAAgLgGgAgXgoQgEAHgCAHQgBAHAAATQAAATABAIQACAIAEAFQAKAMANAAQAPAAAJgMQAFgGABgHQACgIAAgTQAAgTgCgHQgBgHgFgHQgJgLgPAAQgOAAgJALg");
	this.shape_97.setTransform(106.1,21.1);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#333333").s().p("AgEA+IAAh7IAJAAIAAB7g");
	this.shape_98.setTransform(97.2,21.1);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#333333").s().p("AgEA+IAAhxIglAAIAAgKIBTAAIAAAKIglAAIAABxg");
	this.shape_99.setTransform(89.1,21.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#333333").s().p("AgVA5QgLgHgFgLQgDgHgBgQIAAgHIAAgYQABgRADgGQAFgLALgHQALgGALAAQAPgBALAKQALAIAEANIgNAAQgIgTgUAAQgOAAgJALQgFAIgBAGQgCAIAAASQAAATACAIQABAGAFAHQAKAMANAAQAKAAAIgGQAHgFADgIIANAAQgEANgLAIQgLAKgPgBQgLAAgLgGg");
	this.shape_100.setTransform(78.6,21.1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#333333").s().p("AgeAzQgMgMAAgUIAAhRIALAAIAABPQAAAPAKAKQAJAJAMAAQAOAAAIgIQAJgJAAgPIAAhRIAMAAIAABTQAAASgNAMQgMAMgSAAQgSAAgMgMg");
	this.shape_101.setTransform(66.1,21.1);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#333333").s().p("AgqA+IAAh7IAqAAQAMAAALAGQALAHAFALQADAHABAQIAAAdQgBAQgDAHQgFALgLAHQgLAGgMAAgAgeA0IAeAAQAPAAAJgMQAFgGABgHQACgHAAgUQAAgSgCgIQgBgGgFgHQgJgLgPAAIgeAAg");
	this.shape_102.setTransform(53.5,21.1);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#333333").s().p("AgWA5QgLgHgFgLQgEgIAAgPIAAgfQAAgPAEgIQAFgLALgHQALgGALAAQAMAAALAGQAMAHAFALQADAIAAAPIAAAfQAAAOgDAJQgFALgMAHQgLAGgMAAQgLAAgLgGgAgXgoQgEAHgCAHQgBAHAAATQAAATABAIQACAIAEAFQAKAMANAAQAPAAAJgMQAFgGABgHQACgIAAgTQAAgTgCgHQgBgHgFgHQgJgLgPAAQgOAAgJALg");
	this.shape_103.setTransform(40.7,21.1);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#333333").s().p("AAeA+Igdg5IgfAAIAAA5IgMAAIAAh7IAvAAQAQAAAKAJQAKAJAAAPQAAAbgcAFIAeA6gAgegDIAhAAQAMAAAHgGQAIgHAAgMQAAgXgbAAIghAAg");
	this.shape_104.setTransform(28.9,21.1);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#333333").s().p("AgpA+IAAh7IAqAAQAZAAALASQAFAJAAAKQAAAPgKAJQgLAKgRAAIghAAIAAA0gAgdAAIAgAAQALAAAHgEQAJgIAAgMQAAgNgIgHQgHgGgMAAIggAAg");
	this.shape_105.setTransform(16.9,21.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]}).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(577.9,258.2,1109.2,456.7);

})(libProduction = libProduction||{}, images = images||{}, createjs = createjs||{});
var libProduction, images, createjs;