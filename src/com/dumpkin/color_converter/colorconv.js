// JavaScript Document created 2018_10_10 - 2018_10_12 modified 2018_10_27 2018_12_16
// Author Michael Sartakov - msartakov@gmail.com
// Copyright https://CIELab.XYZ
// Encoding: UTF-8
// charset=UTF-8

secondbgc1 = false;
VR = 0;
VRI = 1755;
VRP = "PANTONE+ ";
digitink = 0;
surface = 4; //sRGB
clipping_selector = true;
mapping_selector = true;
gamut_error = 0;
fixLCHabC = 0.0;
fixLCHabL = 0.0;
stooperSL = false;
vhigh = 300;
mouse_x = 1;
mouse_y = 1;
refWcct = 0;
var XYZ = {X:0.0, Y:0.0, Z:0.0};
var xyY = {x:0.0, y:0.0, Y:0.0};
var Lab = {L:50.0, a:0.0, b:0.0};
var Luv = {L:0.0, u:0.0, v:0.0};
var LCHab = {L:50.0, C:0.0, H:0.0};
var LCHuv = {L:0.0, C:0.0, H:0.0};
var RGB = {R:0.0, G:0.0, B:0.0};
var CMYK = {C:0.0, M:0.0, Y:0.0, K:0.0};
var CCT = 5000.0;
var Tint = 0.0;
var DomWavelengthNm = 0.0;
var Gamma = 1.0;
var GammaRGB = 1.0;
var GammaRGBIndex = 0.0;
var RefWhite = {X:0.0, Y:0.0, Z:0.0};
var RefWhitexyY = {x:0.0, y:0.0}
var ScaleXYZ = false;
var ScaleY = false;
var ScaleRGB = false;
var kE = 216.0 / 24389.0;
var kK = 24389.0 / 27.0;
var kKE = 8.0;
var AdaptationMethod = 0;
var RefWhiteRGB = {X:0.0, Y:0.0, Z:0.0};
var MtxRGB2XYZ = {m00:1.0, m01:0.0, m02:0.0, m10:0.0, m11:1.0, m12:0.0, m20:0.0, m21:0.0, m22:1.0};
var MtxXYZ2RGB = {m00:1.0, m01:0.0, m02:0.0, m10:0.0, m11:1.0, m12:0.0, m20:0.0, m21:0.0, m22:1.0};
var MtxToRGB = {m00:1.0, m01:0.0, m02:0.0, m10:0.0, m11:1.0, m12:0.0, m20:0.0, m21:0.0, m22:1.0};
var MtxFromRGB = {m00:1.0, m01:0.0, m02:0.0, m10:0.0, m11:1.0, m12:0.0, m20:0.0, m21:0.0, m22:1.0};
var MtxAdaptMa = {m00:1.0, m01:0.0, m02:0.0, m10:0.0, m11:1.0, m12:0.0, m20:0.0, m21:0.0, m22:1.0};
var MtxAdaptMaI = {m00:1.0, m01:0.0, m02:0.0, m10:0.0, m11:1.0, m12:0.0, m20:0.0, m21:0.0, m22:1.0};

/* 360nm to 830nm in 5nm increments */
var CIE1931StdObs_x = [
	0.000129900000, 0.000232100000, 0.000414900000, 0.000741600000, 0.001368000000, 0.002236000000,
	0.004243000000, 0.007650000000, 0.014310000000, 0.023190000000, 0.043510000000, 0.077630000000, 0.134380000000, 0.214770000000, 0.283900000000, 0.328500000000,
	0.348280000000, 0.348060000000, 0.336200000000, 0.318700000000, 0.290800000000, 0.251100000000, 0.195360000000, 0.142100000000, 0.095640000000, 0.057950010000,
	0.032010000000, 0.014700000000, 0.004900000000, 0.002400000000, 0.009300000000, 0.029100000000, 0.063270000000, 0.109600000000, 0.165500000000, 0.225749900000,
	0.290400000000, 0.359700000000, 0.433449900000, 0.512050100000, 0.594500000000, 0.678400000000, 0.762100000000, 0.842500000000, 0.916300000000, 0.978600000000,
	1.026300000000, 1.056700000000, 1.062200000000, 1.045600000000, 1.002600000000, 0.938400000000, 0.854449900000, 0.751400000000, 0.642400000000, 0.541900000000,
	0.447900000000, 0.360800000000, 0.283500000000, 0.218700000000, 0.164900000000, 0.121200000000, 0.087400000000, 0.063600000000, 0.046770000000, 0.032900000000,
	0.022700000000, 0.015840000000, 0.011359160000, 0.008110916000, 0.005790346000, 0.004109457000, 0.002899327000, 0.002049190000, 0.001439971000, 0.000999949300,
	0.000690078600, 0.000476021300, 0.000332301100, 0.000234826100, 0.000166150500, 0.000117413000, 0.000083075270, 0.000058706520, 0.000041509940, 0.000029353260,
	0.000020673830, 0.000014559770, 0.000010253980, 0.000007221456, 0.000005085868, 0.000003581652, 0.000002522525, 0.000001776509, 0.000001251141];
var CIE1931StdObs_y = [
	0.000003917000, 0.000006965000, 0.000012390000, 0.000022020000, 0.000039000000, 0.000064000000,
	0.000120000000, 0.000217000000, 0.000396000000, 0.000640000000, 0.001210000000, 0.002180000000, 0.004000000000, 0.007300000000, 0.011600000000, 0.016840000000,
	0.023000000000, 0.029800000000, 0.038000000000, 0.048000000000, 0.060000000000, 0.073900000000, 0.090980000000, 0.112600000000, 0.139020000000, 0.169300000000,
	0.208020000000, 0.258600000000, 0.323000000000, 0.407300000000, 0.503000000000, 0.608200000000, 0.710000000000, 0.793200000000, 0.862000000000, 0.914850100000,
	0.954000000000, 0.980300000000, 0.994950100000, 1.000000000000, 0.995000000000, 0.978600000000, 0.952000000000, 0.915400000000, 0.870000000000, 0.816300000000,
	0.757000000000, 0.694900000000, 0.631000000000, 0.566800000000, 0.503000000000, 0.441200000000, 0.381000000000, 0.321000000000, 0.265000000000, 0.217000000000,
	0.175000000000, 0.138200000000, 0.107000000000, 0.081600000000, 0.061000000000, 0.044580000000, 0.032000000000, 0.023200000000, 0.017000000000, 0.011920000000,
	0.008210000000, 0.005723000000, 0.004102000000, 0.002929000000, 0.002091000000, 0.001484000000, 0.001047000000, 0.000740000000, 0.000520000000, 0.000361100000,
	0.000249200000, 0.000171900000, 0.000120000000, 0.000084800000, 0.000060000000, 0.000042400000, 0.000030000000, 0.000021200000, 0.000014990000, 0.000010600000,
	0.000007465700, 0.000005257800, 0.000003702900, 0.000002607800, 0.000001836600, 0.000001293400, 0.000000910930, 0.000000641530, 0.000000451810];
var CIE1931StdObs_z = [
	0.000606100000, 0.001086000000, 0.001946000000, 0.003486000000, 0.006450001000, 0.010549990000,
	0.020050010000, 0.036210000000, 0.067850010000, 0.110200000000, 0.207400000000, 0.371300000000, 0.645600000000, 1.039050100000, 1.385600000000, 1.622960000000,
	1.747060000000, 1.782600000000, 1.772110000000, 1.744100000000, 1.669200000000, 1.528100000000, 1.287640000000, 1.041900000000, 0.812950100000, 0.616200000000,
	0.465180000000, 0.353300000000, 0.272000000000, 0.212300000000, 0.158200000000, 0.111700000000, 0.078249990000, 0.057250010000, 0.042160000000, 0.029840000000,
	0.020300000000, 0.013400000000, 0.008749999000, 0.005749999000, 0.003900000000, 0.002749999000, 0.002100000000, 0.001800000000, 0.001650001000, 0.001400000000,
	0.001100000000, 0.001000000000, 0.000800000000, 0.000600000000, 0.000340000000, 0.000240000000, 0.000190000000, 0.000100000000, 0.000049999990, 0.000030000000,
	0.000020000000, 0.000010000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000,
	0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000,
	0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000,
	0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000, 0.000000000000];

function CMYK2Lab() {
	if (CMYK.C <= 0) {CMYK.C = 0.0;}
	if (CMYK.M <= 0) {CMYK.M = 0.0;}
	if (CMYK.Y <= 0) {CMYK.Y = 0.0;}
	if (CMYK.K <= 0) {CMYK.K = 0.0;}
	if (CMYK.C > 100) {CMYK.C = 100.0;}
	if (CMYK.M > 100) {CMYK.M = 100.0;}
	if (CMYK.Y > 100) {CMYK.Y = 100.0;}
	if (CMYK.K > 100) {CMYK.K = 100.0;}
	
	for (var i=0; i<4096; i++) {
		if (CMYK.C >= A2B0_f39_CLUT_Input[i] && CMYK.C < A2B0_f39_CLUT_Input[i+1]) {
			var C = A2B0_f39_CLUT_C[i];
			}
		if (CMYK.M >= A2B0_f39_CLUT_Input[i] && CMYK.M < A2B0_f39_CLUT_Input[i+1]) {
			var M = A2B0_f39_CLUT_M[i];
			}
		if (CMYK.Y >= A2B0_f39_CLUT_Input[i] && CMYK.Y < A2B0_f39_CLUT_Input[i+1]) {
			var Y = A2B0_f39_CLUT_Y[i];
			}
		if (CMYK.K >= A2B0_f39_CLUT_Input[i] && CMYK.K < A2B0_f39_CLUT_Input[i+1]) {
			var K = A2B0_f39_CLUT_K[i];
			}}
		if (C == 100.0) {C = 99.9999;}
		if (M == 100.0) {M = 99.9999;}
		if (Y == 100.0) {Y = 99.9999;}
		if (K == 100.0) {K = 99.9999;}

		for (var i=0; i < (2401-343); i+=343) {
			if(C >= A2B0_f39_7_C[i] && C < A2B0_f39_7_C[i+343]){
			var A2B0C = i;
		}}
		for (var i=A2B0C; i < A2B0C+(343-49); i+=49) {
			if(M >= A2B0_f39_7_M[i] && M < A2B0_f39_7_M[i+49]){
			var A2B0M = i;
		}}
		for (var i=A2B0M; i < A2B0M+49; i+=7) {
			if(Y >= A2B0_f39_7_Y[i] && Y < A2B0_f39_7_Y[i+7]){
			var A2B0Y = i;
		}}
		for (var i=A2B0Y; i < A2B0Y+7; i++) {
			if(K >= A2B0_f39_7_K[i] && K < A2B0_f39_7_K[i+1]){
			var strt = i;
		}}
		
		var delitel = (A2B0_f39_7_C[strt+343] - A2B0_f39_7_C[strt]) * (A2B0_f39_7_M[strt+49] - A2B0_f39_7_M[strt]) * (A2B0_f39_7_Y[strt+7] - A2B0_f39_7_Y[strt]);
		var delitel2 = (A2B0_f39_7_C[strt+343+1] - A2B0_f39_7_C[strt+1]) * (A2B0_f39_7_M[strt+49+1] - A2B0_f39_7_M[strt+1]) * (A2B0_f39_7_Y[strt+7+1] - A2B0_f39_7_Y[strt+1]);
		var TriLinearL1 = 
		A2B0_f39_7_L[strt] / delitel * (A2B0_f39_7_C[strt+343] - C) * (A2B0_f39_7_M[strt+49] - M) * (A2B0_f39_7_Y[strt+7] - Y) +
		A2B0_f39_7_L[strt+7] / delitel * (A2B0_f39_7_C[strt+343] - C) * (A2B0_f39_7_M[strt+49] - M) * (Y - A2B0_f39_7_Y[strt]) +
		A2B0_f39_7_L[strt+49] / delitel * (A2B0_f39_7_C[strt+343] - C) * (M - A2B0_f39_7_M[strt]) * (A2B0_f39_7_Y[strt+7] - Y) +
		A2B0_f39_7_L[strt+56] / delitel * (A2B0_f39_7_C[strt+343] - C) * (M - A2B0_f39_7_M[strt]) * (Y - A2B0_f39_7_Y[strt]) +
		A2B0_f39_7_L[strt+343] / delitel * (C - A2B0_f39_7_C[strt]) * (A2B0_f39_7_M[strt+49] - M) * (A2B0_f39_7_Y[strt+7] - Y) +
		A2B0_f39_7_L[strt+350] / delitel * (C - A2B0_f39_7_C[strt]) * (A2B0_f39_7_M[strt+49] - M) * (Y - A2B0_f39_7_Y[strt]) +
		A2B0_f39_7_L[strt+392] / delitel * (C - A2B0_f39_7_C[strt]) * (M - A2B0_f39_7_M[strt]) * (A2B0_f39_7_Y[strt+7] - Y) +
		A2B0_f39_7_L[strt+393] / delitel * (C - A2B0_f39_7_C[strt]) * (M - A2B0_f39_7_M[strt]) * (Y - A2B0_f39_7_Y[strt]);
		var TriLinearL2 = 
		A2B0_f39_7_L[strt+1] / delitel2 * (A2B0_f39_7_C[strt+1+343] - C) * (A2B0_f39_7_M[strt+1+49] - M) * (A2B0_f39_7_Y[strt+1+7] - Y) +
		A2B0_f39_7_L[strt+1+7] / delitel2 * (A2B0_f39_7_C[strt+1+343] - C) * (A2B0_f39_7_M[strt+1+49] - M) * (Y - A2B0_f39_7_Y[strt+1]) +
		A2B0_f39_7_L[strt+1+49] / delitel2 * (A2B0_f39_7_C[strt+1+343] - C) * (M - A2B0_f39_7_M[strt+1]) * (A2B0_f39_7_Y[strt+1+7] - Y) +
		A2B0_f39_7_L[strt+1+56] / delitel2 * (A2B0_f39_7_C[strt+1+343] - C) * (M - A2B0_f39_7_M[strt+1]) * (Y - A2B0_f39_7_Y[strt+1]) +
		A2B0_f39_7_L[strt+1+343] / delitel2 * (C - A2B0_f39_7_C[strt+1]) * (A2B0_f39_7_M[strt+1+49] - M) * (A2B0_f39_7_Y[strt+1+7] - Y) +
		A2B0_f39_7_L[strt+1+350] / delitel2 * (C - A2B0_f39_7_C[strt+1]) * (A2B0_f39_7_M[strt+1+49] - M) * (Y - A2B0_f39_7_Y[strt+1]) +
		A2B0_f39_7_L[strt+1+392] / delitel2 * (C - A2B0_f39_7_C[strt+1]) * (M - A2B0_f39_7_M[strt+1]) * (A2B0_f39_7_Y[strt+1+7] - Y) +
		A2B0_f39_7_L[strt+1+393] / delitel2 * (C - A2B0_f39_7_C[strt+1]) * (M - A2B0_f39_7_M[strt+1]) * (Y - A2B0_f39_7_Y[strt+1]);
		
		var TriLineara1 = 
		A2B0_f39_7_a[strt] / delitel * (A2B0_f39_7_C[strt+343] - C) * (A2B0_f39_7_M[strt+49] - M) * (A2B0_f39_7_Y[strt+7] - Y) +
		A2B0_f39_7_a[strt+7] / delitel * (A2B0_f39_7_C[strt+343] - C) * (A2B0_f39_7_M[strt+49] - M) * (Y - A2B0_f39_7_Y[strt]) +
		A2B0_f39_7_a[strt+49] / delitel * (A2B0_f39_7_C[strt+343] - C) * (M - A2B0_f39_7_M[strt]) * (A2B0_f39_7_Y[strt+7] - Y) +
		A2B0_f39_7_a[strt+56] / delitel * (A2B0_f39_7_C[strt+343] - C) * (M - A2B0_f39_7_M[strt]) * (Y - A2B0_f39_7_Y[strt]) +
		A2B0_f39_7_a[strt+343] / delitel * (C - A2B0_f39_7_C[strt]) * (A2B0_f39_7_M[strt+49] - M) * (A2B0_f39_7_Y[strt+7] - Y) +
		A2B0_f39_7_a[strt+350] / delitel * (C - A2B0_f39_7_C[strt]) * (A2B0_f39_7_M[strt+49] - M) * (Y - A2B0_f39_7_Y[strt]) +
		A2B0_f39_7_a[strt+392] / delitel * (C - A2B0_f39_7_C[strt]) * (M - A2B0_f39_7_M[strt]) * (A2B0_f39_7_Y[strt+7] - Y) +
		A2B0_f39_7_a[strt+393] / delitel * (C - A2B0_f39_7_C[strt]) * (M - A2B0_f39_7_M[strt]) * (Y - A2B0_f39_7_Y[strt]);
		var TriLineara2 = 
		A2B0_f39_7_a[strt+1] / delitel2 * (A2B0_f39_7_C[strt+1+343] - C) * (A2B0_f39_7_M[strt+1+49] - M) * (A2B0_f39_7_Y[strt+1+7] - Y) +
		A2B0_f39_7_a[strt+1+7] / delitel2 * (A2B0_f39_7_C[strt+1+343] - C) * (A2B0_f39_7_M[strt+1+49] - M) * (Y - A2B0_f39_7_Y[strt+1]) +
		A2B0_f39_7_a[strt+1+49] / delitel2 * (A2B0_f39_7_C[strt+1+343] - C) * (M - A2B0_f39_7_M[strt+1]) * (A2B0_f39_7_Y[strt+1+7] - Y) +
		A2B0_f39_7_a[strt+1+56] / delitel2 * (A2B0_f39_7_C[strt+1+343] - C) * (M - A2B0_f39_7_M[strt+1]) * (Y - A2B0_f39_7_Y[strt+1]) +
		A2B0_f39_7_a[strt+1+343] / delitel2 * (C - A2B0_f39_7_C[strt+1]) * (A2B0_f39_7_M[strt+1+49] - M) * (A2B0_f39_7_Y[strt+1+7] - Y) +
		A2B0_f39_7_a[strt+1+350] / delitel2 * (C - A2B0_f39_7_C[strt+1]) * (A2B0_f39_7_M[strt+1+49] - M) * (Y - A2B0_f39_7_Y[strt+1]) +
		A2B0_f39_7_a[strt+1+392] / delitel2 * (C - A2B0_f39_7_C[strt+1]) * (M - A2B0_f39_7_M[strt+1]) * (A2B0_f39_7_Y[strt+1+7] - Y) +
		A2B0_f39_7_a[strt+1+393] / delitel2 * (C - A2B0_f39_7_C[strt+1]) * (M - A2B0_f39_7_M[strt+1]) * (Y - A2B0_f39_7_Y[strt+1]);
		
		var TriLinearb1 = 
		A2B0_f39_7_b[strt] / delitel * (A2B0_f39_7_C[strt+343] - C) * (A2B0_f39_7_M[strt+49] - M) * (A2B0_f39_7_Y[strt+7] - Y) +
		A2B0_f39_7_b[strt+7] / delitel * (A2B0_f39_7_C[strt+343] - C) * (A2B0_f39_7_M[strt+49] - M) * (Y - A2B0_f39_7_Y[strt]) +
		A2B0_f39_7_b[strt+49] / delitel * (A2B0_f39_7_C[strt+343] - C) * (M - A2B0_f39_7_M[strt]) * (A2B0_f39_7_Y[strt+7] - Y) +
		A2B0_f39_7_b[strt+56] / delitel * (A2B0_f39_7_C[strt+343] - C) * (M - A2B0_f39_7_M[strt]) * (Y - A2B0_f39_7_Y[strt]) +
		A2B0_f39_7_b[strt+343] / delitel * (C - A2B0_f39_7_C[strt]) * (A2B0_f39_7_M[strt+49] - M) * (A2B0_f39_7_Y[strt+7] - Y) +
		A2B0_f39_7_b[strt+350] / delitel * (C - A2B0_f39_7_C[strt]) * (A2B0_f39_7_M[strt+49] - M) * (Y - A2B0_f39_7_Y[strt]) +
		A2B0_f39_7_b[strt+392] / delitel * (C - A2B0_f39_7_C[strt]) * (M - A2B0_f39_7_M[strt]) * (A2B0_f39_7_Y[strt+7] - Y) +
		A2B0_f39_7_b[strt+393] / delitel * (C - A2B0_f39_7_C[strt]) * (M - A2B0_f39_7_M[strt]) * (Y - A2B0_f39_7_Y[strt]);
		var TriLinearb2 = 
		A2B0_f39_7_b[strt+1] / delitel2 * (A2B0_f39_7_C[strt+1+343] - C) * (A2B0_f39_7_M[strt+1+49] - M) * (A2B0_f39_7_Y[strt+1+7] - Y) +
		A2B0_f39_7_b[strt+1+7] / delitel2 * (A2B0_f39_7_C[strt+1+343] - C) * (A2B0_f39_7_M[strt+1+49] - M) * (Y - A2B0_f39_7_Y[strt+1]) +
		A2B0_f39_7_b[strt+1+49] / delitel2 * (A2B0_f39_7_C[strt+1+343] - C) * (M - A2B0_f39_7_M[strt+1]) * (A2B0_f39_7_Y[strt+1+7] - Y) +
		A2B0_f39_7_b[strt+1+56] / delitel2 * (A2B0_f39_7_C[strt+1+343] - C) * (M - A2B0_f39_7_M[strt+1]) * (Y - A2B0_f39_7_Y[strt+1]) +
		A2B0_f39_7_b[strt+1+343] / delitel2 * (C - A2B0_f39_7_C[strt+1]) * (A2B0_f39_7_M[strt+1+49] - M) * (A2B0_f39_7_Y[strt+1+7] - Y) +
		A2B0_f39_7_b[strt+1+350] / delitel2 * (C - A2B0_f39_7_C[strt+1]) * (A2B0_f39_7_M[strt+1+49] - M) * (Y - A2B0_f39_7_Y[strt+1]) +
		A2B0_f39_7_b[strt+1+392] / delitel2 * (C - A2B0_f39_7_C[strt+1]) * (M - A2B0_f39_7_M[strt+1]) * (A2B0_f39_7_Y[strt+1+7] - Y) +
		A2B0_f39_7_b[strt+1+393] / delitel2 * (C - A2B0_f39_7_C[strt+1]) * (M - A2B0_f39_7_M[strt+1]) * (Y - A2B0_f39_7_Y[strt+1]);
		
		Lab.L = TriLinearL1 + (TriLinearL2 - TriLinearL1) * (K - A2B0_f39_7_K[strt]) / (A2B0_f39_7_K[strt+1] - A2B0_f39_7_K[strt]);
		Lab.a = TriLineara1 + (TriLineara2 - TriLineara1) * (K - A2B0_f39_7_K[strt]) / (A2B0_f39_7_K[strt+1] - A2B0_f39_7_K[strt]);
		Lab.b = TriLinearb1 + (TriLinearb2 - TriLinearb1) * (K - A2B0_f39_7_K[strt]) / (A2B0_f39_7_K[strt+1] - A2B0_f39_7_K[strt]);
}

function Lab2CMYK(L,a,b) {
	if (L == 100.0 && a == 0.0 && b == 0.0) {
		CMYK.C = 0.0;
		CMYK.M = 0.0;
		CMYK.Y = 0.0;
		CMYK.K = 0.0;
		} else {
	if (a > 126) {a = 126.0;}
	if (b > 126) {b = 126.0;}
	if (a <= -128) {a = -127.99;}
	if (b <= -128) {b = -127.99;}
	
	for (var i=0; i<4096; i++) {
		if (L >= B2A0_f39_CLUT_L_Input[i] && L < B2A0_f39_CLUT_L_Input[i+1]) {
			L = B2A0_f39_CLUT_L_Output[i];
	}}
	
	if (L < 100.0) {
	
	for (var i=0; i<(4913-289); i+=289) {
		if(L >= B2A0_f39_17_L[i] && L < B2A0_f39_17_L[i+289]){
 			var B2A0L = i;
 		}}
	for (var i=B2A0L; i<(B2A0L+289-17); i+=17) {
		if(a >= B2A0_f39_17_a[i] && a < B2A0_f39_17_a[i+17]) {
			var B2A0a = i;
		}}
	for (var i=B2A0a; i<(B2A0a+17); i++) {
		if(b >= B2A0_f39_17_b[i] && b < B2A0_f39_17_b[i+1]) {
			var B2A0b = i;
		}}
			
		var delitel = (B2A0_f39_17_L[B2A0b+289] - B2A0_f39_17_L[B2A0b]) * (B2A0_f39_17_a[B2A0b+17] - B2A0_f39_17_a[B2A0b]) * (B2A0_f39_17_b[B2A0b+1] - B2A0_f39_17_b[B2A0b]);
		
		var TriLinearC = 
		B2A0_f39_17_C[B2A0b] / delitel * (B2A0_f39_17_L[B2A0b+289] - L) * (B2A0_f39_17_a[B2A0b+17] - a) * (B2A0_f39_17_b[B2A0b+1] - b) +
		B2A0_f39_17_C[B2A0b+1] / delitel * (B2A0_f39_17_L[B2A0b+289] - L) * (B2A0_f39_17_a[B2A0b+17] - a) * (b - B2A0_f39_17_b[B2A0b]) +
		B2A0_f39_17_C[B2A0b+17] / delitel * (B2A0_f39_17_L[B2A0b+289] - L) * (a - B2A0_f39_17_a[B2A0b]) * (B2A0_f39_17_b[B2A0b+1] - b) +
		B2A0_f39_17_C[B2A0b+18] / delitel * (B2A0_f39_17_L[B2A0b+289] - L) * (a - B2A0_f39_17_a[B2A0b]) * (b - B2A0_f39_17_b[B2A0b]) +
		B2A0_f39_17_C[B2A0b+289] / delitel * (L - B2A0_f39_17_L[B2A0b]) * (B2A0_f39_17_a[B2A0b+17] - a) * (B2A0_f39_17_b[B2A0b+1] - b) +
		B2A0_f39_17_C[B2A0b+290] / delitel * (L - B2A0_f39_17_L[B2A0b]) * (B2A0_f39_17_a[B2A0b+17] - a) * (b - B2A0_f39_17_b[B2A0b]) +
		B2A0_f39_17_C[B2A0b+306] / delitel * (L - B2A0_f39_17_L[B2A0b]) * (a - B2A0_f39_17_a[B2A0b]) * (B2A0_f39_17_b[B2A0b+1] - b) +
		B2A0_f39_17_C[B2A0b+307] / delitel * (L - B2A0_f39_17_L[B2A0b]) * (a - B2A0_f39_17_a[B2A0b]) * (b - B2A0_f39_17_b[B2A0b]);

		var TriLinearM = 
		B2A0_f39_17_M[B2A0b] / delitel * (B2A0_f39_17_L[B2A0b+289] - L) * (B2A0_f39_17_a[B2A0b+17] - a) * (B2A0_f39_17_b[B2A0b+1] - b) +
		B2A0_f39_17_M[B2A0b+1] / delitel * (B2A0_f39_17_L[B2A0b+289] - L) * (B2A0_f39_17_a[B2A0b+17] - a) * (b - B2A0_f39_17_b[B2A0b]) +
		B2A0_f39_17_M[B2A0b+17] / delitel * (B2A0_f39_17_L[B2A0b+289] - L) * (a - B2A0_f39_17_a[B2A0b]) * (B2A0_f39_17_b[B2A0b+1] - b) +
		B2A0_f39_17_M[B2A0b+18] / delitel * (B2A0_f39_17_L[B2A0b+289] - L) * (a - B2A0_f39_17_a[B2A0b]) * (b - B2A0_f39_17_b[B2A0b]) +
		B2A0_f39_17_M[B2A0b+289] / delitel * (L - B2A0_f39_17_L[B2A0b]) * (B2A0_f39_17_a[B2A0b+17] - a) * (B2A0_f39_17_b[B2A0b+1] - b) +
		B2A0_f39_17_M[B2A0b+290] / delitel * (L - B2A0_f39_17_L[B2A0b]) * (B2A0_f39_17_a[B2A0b+17] - a) * (b - B2A0_f39_17_b[B2A0b]) +
		B2A0_f39_17_M[B2A0b+306] / delitel * (L - B2A0_f39_17_L[B2A0b]) * (a - B2A0_f39_17_a[B2A0b]) * (B2A0_f39_17_b[B2A0b+1] - b) +
		B2A0_f39_17_M[B2A0b+307] / delitel * (L - B2A0_f39_17_L[B2A0b]) * (a - B2A0_f39_17_a[B2A0b]) * (b - B2A0_f39_17_b[B2A0b]);
		
		var TriLinearY = 
		B2A0_f39_17_Y[B2A0b] / delitel * (B2A0_f39_17_L[B2A0b+289] - L) * (B2A0_f39_17_a[B2A0b+17] - a) * (B2A0_f39_17_b[B2A0b+1] - b) +
		B2A0_f39_17_Y[B2A0b+1] / delitel * (B2A0_f39_17_L[B2A0b+289] - L) * (B2A0_f39_17_a[B2A0b+17] - a) * (b - B2A0_f39_17_b[B2A0b]) +
		B2A0_f39_17_Y[B2A0b+17] / delitel * (B2A0_f39_17_L[B2A0b+289] - L) * (a - B2A0_f39_17_a[B2A0b]) * (B2A0_f39_17_b[B2A0b+1] - b) +
		B2A0_f39_17_Y[B2A0b+18] / delitel * (B2A0_f39_17_L[B2A0b+289] - L) * (a - B2A0_f39_17_a[B2A0b]) * (b - B2A0_f39_17_b[B2A0b]) +
		B2A0_f39_17_Y[B2A0b+289] / delitel * (L - B2A0_f39_17_L[B2A0b]) * (B2A0_f39_17_a[B2A0b+17] - a) * (B2A0_f39_17_b[B2A0b+1] - b) +
		B2A0_f39_17_Y[B2A0b+290] / delitel * (L - B2A0_f39_17_L[B2A0b]) * (B2A0_f39_17_a[B2A0b+17] - a) * (b - B2A0_f39_17_b[B2A0b]) +
		B2A0_f39_17_Y[B2A0b+306] / delitel * (L - B2A0_f39_17_L[B2A0b]) * (a - B2A0_f39_17_a[B2A0b]) * (B2A0_f39_17_b[B2A0b+1] - b) +
		B2A0_f39_17_Y[B2A0b+307] / delitel * (L - B2A0_f39_17_L[B2A0b]) * (a - B2A0_f39_17_a[B2A0b]) * (b - B2A0_f39_17_b[B2A0b]);
		
		var TriLinearK = 
		B2A0_f39_17_K[B2A0b] / delitel * (B2A0_f39_17_L[B2A0b+289] - L) * (B2A0_f39_17_a[B2A0b+17] - a) * (B2A0_f39_17_b[B2A0b+1] - b) +
		B2A0_f39_17_K[B2A0b+1] / delitel * (B2A0_f39_17_L[B2A0b+289] - L) * (B2A0_f39_17_a[B2A0b+17] - a) * (b - B2A0_f39_17_b[B2A0b]) +
		B2A0_f39_17_K[B2A0b+17] / delitel * (B2A0_f39_17_L[B2A0b+289] - L) * (a - B2A0_f39_17_a[B2A0b]) * (B2A0_f39_17_b[B2A0b+1] - b) +
		B2A0_f39_17_K[B2A0b+18] / delitel * (B2A0_f39_17_L[B2A0b+289] - L) * (a - B2A0_f39_17_a[B2A0b]) * (b - B2A0_f39_17_b[B2A0b]) +
		B2A0_f39_17_K[B2A0b+289] / delitel * (L - B2A0_f39_17_L[B2A0b]) * (B2A0_f39_17_a[B2A0b+17] - a) * (B2A0_f39_17_b[B2A0b+1] - b) +
		B2A0_f39_17_K[B2A0b+290] / delitel * (L - B2A0_f39_17_L[B2A0b]) * (B2A0_f39_17_a[B2A0b+17] - a) * (b - B2A0_f39_17_b[B2A0b]) +
		B2A0_f39_17_K[B2A0b+306] / delitel * (L - B2A0_f39_17_L[B2A0b]) * (a - B2A0_f39_17_a[B2A0b]) * (B2A0_f39_17_b[B2A0b+1] - b) +
		B2A0_f39_17_K[B2A0b+307] / delitel * (L - B2A0_f39_17_L[B2A0b]) * (a - B2A0_f39_17_a[B2A0b]) * (b - B2A0_f39_17_b[B2A0b]);
		
		if (TriLinearC <= 0) {TriLinearC = 0.0;}
		if (TriLinearM <= 0) {TriLinearM = 0.0;}
		if (TriLinearY <= 0) {TriLinearY = 0.0;}
		if (TriLinearK <= 0) {TriLinearK = 0.0;}
		
		for (var i=0; i<4096; i++) {
		if (TriLinearC >= B2A0_f39_CLUT_L_Input[i] && TriLinearC < B2A0_f39_CLUT_L_Input[i+1]) {
			CMYK.C = B2A0_f39_CLUT_C_Output[i];
		}
		if (TriLinearM >= B2A0_f39_CLUT_L_Input[i] && TriLinearM < B2A0_f39_CLUT_L_Input[i+1]) {
			CMYK.M = B2A0_f39_CLUT_M_Output[i];
		}
		if (TriLinearY >= B2A0_f39_CLUT_L_Input[i] && TriLinearY < B2A0_f39_CLUT_L_Input[i+1]) {
			CMYK.Y = B2A0_f39_CLUT_Y_Output[i];
		}
		if (TriLinearK >= B2A0_f39_CLUT_L_Input[i] && TriLinearK < B2A0_f39_CLUT_L_Input[i+1]) {
			CMYK.K = B2A0_f39_CLUT_K_Output[i];
		}}	
	} else { // L = 100

	for (var i=4625; i<=4914; i+=17) {
		if(a >= B2A0_f39_17_a[i] && a < B2A0_f39_17_a[i+17]) {
			var B2A0a = i;
		}}
	for (var i=B2A0a; i<(B2A0a+17); i++) {
		if(b >= B2A0_f39_17_b[i] && b < B2A0_f39_17_b[i+1]) {
			var B2A0b = i;
		}}
		
		var delitel = (B2A0_f39_17_a[B2A0b+17] - B2A0_f39_17_a[B2A0b]) * (B2A0_f39_17_b[B2A0b+1] - B2A0_f39_17_b[B2A0b]);
		
		var BiLinearC = 
		B2A0_f39_17_C[B2A0b] / delitel * (B2A0_f39_17_a[B2A0b+17] - a) * (B2A0_f39_17_b[B2A0b+1] - b) +
		B2A0_f39_17_C[B2A0b+1] / delitel * (a - B2A0_f39_17_a[B2A0b]) * (B2A0_f39_17_b[B2A0b+1] - b) +
		B2A0_f39_17_C[B2A0b+17] / delitel * (B2A0_f39_17_a[B2A0b+17] - a) * (b - B2A0_f39_17_b[B2A0b]) +
		B2A0_f39_17_C[B2A0b+18] / delitel * (a - B2A0_f39_17_a[B2A0b]) * (b - B2A0_f39_17_b[B2A0b]);
		
		var BiLinearM = 
		B2A0_f39_17_M[B2A0b] / delitel * (B2A0_f39_17_a[B2A0b+17] - a) * (B2A0_f39_17_b[B2A0b+1] - b) +
		B2A0_f39_17_M[B2A0b+1] / delitel * (a - B2A0_f39_17_a[B2A0b]) * (B2A0_f39_17_b[B2A0b+1] - b) +
		B2A0_f39_17_M[B2A0b+17] / delitel * (B2A0_f39_17_a[B2A0b+17] - a) * (b - B2A0_f39_17_b[B2A0b]) +
		B2A0_f39_17_M[B2A0b+18] / delitel * (a - B2A0_f39_17_a[B2A0b]) * (b - B2A0_f39_17_b[B2A0b]);
		
		var BiLinearY = 
		B2A0_f39_17_Y[B2A0b] / delitel * (B2A0_f39_17_a[B2A0b+17] - a) * (B2A0_f39_17_b[B2A0b+1] - b) +
		B2A0_f39_17_Y[B2A0b+1] / delitel * (a - B2A0_f39_17_a[B2A0b]) * (B2A0_f39_17_b[B2A0b+1] - b) +
		B2A0_f39_17_Y[B2A0b+17] / delitel * (B2A0_f39_17_a[B2A0b+17] - a) * (b - B2A0_f39_17_b[B2A0b]) +
		B2A0_f39_17_Y[B2A0b+18] / delitel * (a - B2A0_f39_17_a[B2A0b]) * (b - B2A0_f39_17_b[B2A0b]);
		
		var BiLinearK = 
		B2A0_f39_17_K[B2A0b] / delitel * (B2A0_f39_17_a[B2A0b+17] - a) * (B2A0_f39_17_b[B2A0b+1] - b) +
		B2A0_f39_17_K[B2A0b+1] / delitel * (a - B2A0_f39_17_a[B2A0b]) * (B2A0_f39_17_b[B2A0b+1] - b) +
		B2A0_f39_17_K[B2A0b+17] / delitel * (B2A0_f39_17_a[B2A0b+17] - a) * (b - B2A0_f39_17_b[B2A0b]) +
		B2A0_f39_17_K[B2A0b+18] / delitel * (a - B2A0_f39_17_a[B2A0b]) * (b - B2A0_f39_17_b[B2A0b]);
		
		if (BiLinearC <= 0) {BiLinearC = 0.0;}
		if (BiLinearM <= 0) {BiLinearM = 0.0;}
		if (BiLinearY <= 0) {BiLinearY = 0.0;}
		if (BiLinearK <= 0) {BiLinearK = 0.0;}
		
		for (var i=0; i<4096; i++) {
		if (BiLinearC >= B2A0_f39_CLUT_L_Input[i] && BiLinearC < B2A0_f39_CLUT_L_Input[i+1]) {
			CMYK.C = B2A0_f39_CLUT_C_Output[i];
		}
		if (BiLinearM >= B2A0_f39_CLUT_L_Input[i] && BiLinearM < B2A0_f39_CLUT_L_Input[i+1]) {
			CMYK.M = B2A0_f39_CLUT_M_Output[i];
		}
		if (BiLinearY >= B2A0_f39_CLUT_L_Input[i] && BiLinearY < B2A0_f39_CLUT_L_Input[i+1]) {
			CMYK.Y = B2A0_f39_CLUT_Y_Output[i];
		}
		if (BiLinearK >= B2A0_f39_CLUT_L_Input[i] && BiLinearK < B2A0_f39_CLUT_L_Input[i+1]) {
			CMYK.K = B2A0_f39_CLUT_K_Output[i];
		}}
		
	}
		}
}

function PantoneSelect(theForm) {
	if (document.getElementById('pnamediv').getElementsByTagName('div').length > 0){
	document.getElementById('pnamediv').removeChild(document.getElementById('pnamediv').getElementsByTagName('div')[0]);
	}
	
	switch (theForm.Veer.selectedIndex)
	{
		case 0:	// +
			VR = 0;
			VRI = 1755;
			VRP = "PANTONE+ ";
var pnameDiv = document.createElement('div'); 
pnameDiv.innerHTML = 'PANTONE+ Solid Coated & CII:';
document.getElementById('pnamediv').appendChild(pnameDiv);
			break;
		case 1:	// R
			VR = 1;
			VRI = 1124;
			VRP = "PANTONE® ";
var pnameDiv = document.createElement('div'); 
pnameDiv.innerHTML = 'PANTONE® Solid Coated & CII:';
document.getElementById('pnamediv').appendChild(pnameDiv);
			break;
	}
}

function Lab2PantonePlus(L,a,b) {
	var deltaE = [];
	for (var i=0; i<VRI; i++) {
		deltaE[i] = Math.sqrt(Math.pow((L-psp[VR][i][1]),2)+Math.pow((a-psp[VR][i][2]),2)+Math.pow((b-psp[VR][i][3]),2)); // dE 1976 high speed
	}
	var delta = 1000.0;
	var deltaNum = 0;
	for (var i=0; i<VRI; i++) {
		if (deltaE[i] < delta) {
			delta = deltaE[i];
			deltaNum = i;
		}
	}
	PantoneName = psp[VR][deltaNum][0];
	CII = psp[VR][deltaNum][4];
	document.converter.Pantone_Name.value = VRP+PantoneName;
	document.converter.PantoneCII.value = CII;
}


function PantonePlus2Lab(theForm) {
	var InkName = theForm.Pantone_Name.value;
	var AlertName = InkName;
	var InkNameString = InkName.toString();
	var InkNameUpper = InkNameString.toUpperCase();
	InkNameUpper = InkNameUpper.replace("C","####");
	InkNameUpper = InkNameUpper.replace("С","####");
	InkNameUpper = InkNameUpper.replace("\t"," ");
	InkNameUpper = InkNameUpper.replace("PANTONE® ","");
	InkNameUpper = InkNameUpper.replace("PANTONE+ ","");
	InkNameUpper = InkNameUpper.replace("PANTONE ","");
	InkNameUpper = InkNameUpper.replace("PANTON ","");
	InkNameUpper = InkNameUpper.replace(" GOEGUIDE ","");
	InkNameUpper = InkNameUpper.replace("GOEGUIDE ","");
	InkNameUpper = InkNameUpper.replace(" GOE GUIDE ","");
	InkNameUpper = InkNameUpper.replace("GOE GUIDE ","");
	InkNameUpper = InkNameUpper.replace("  "," ");
	InkNameUpper = InkNameUpper.replace("  "," ");
	InkNameUpper = InkNameUpper.replace("  "," ");
	InkNameUpper+=" C";
	InkNameUpper = InkNameUpper.replace("#### C"," C");
	InkNameUpper = InkNameUpper.replace("####"," C");
	InkNameUpper = InkNameUpper.replace("  "," "); 
	InkNameUpper = InkNameUpper.replace("BLA CK","BLACK");
	InkNameUpper = InkNameUpper.replace(" C C"," C");
	
	//alert(InkNameUpper);

	var NameNum = -1;
	for (var i=0; i<VRI; i++) {
		if (InkNameUpper == psp[VR][i][0].toUpperCase()) {
			NameNum = i;
		}
	}
	if (NameNum == -1) {
		var pt = confirm("В базе "+VRP+"из "+VRI+" имен не найдено краски \nс названием "+AlertName+". \n\nПродвинутый поиск цвета по имени краски \nиз любого веера Pantone\nдоступен в специализированном калькуляторе \nhttps://cielab.xyz/assortment/Lab.php\n\nПерейти по ссылке в калькулятор \nпоиска цвета по имени краски?");
		if (pt == true) {window.open('https://cielab.xyz/assortment/Lab.php', '_blank');}
	} else {
	Lab.L = psp[VR][NameNum][1];
	Lab.a = psp[VR][NameNum][2];
	Lab.b = psp[VR][NameNum][3];
	CII = psp[VR][NameNum][4];
	PantoneName = psp[VR][NameNum][0];
	}
	document.converter.Pantone_Name.value = VRP+PantoneName;
	document.converter.PantoneCII.value = CII;
}

function HVS_clipping() {
	if (document.converter.clipping.checked == true) {
		clipping_selector = true;
		ButtonLCHab(document.converter); sliderchange();
	}
	else {
		//document.converter.mapping.checked = false;
		//mapping_selector = false;
		clipping_selector = false;
		ButtonLCHab(document.converter); sliderchange();
	}
}

function RGB_mapping() {
	if (document.converter.mapping.checked == true) {
		//document.converter.clipping.checked = true;
		mapping_selector = true;
		//clipping_selector = true;
		ButtonLCHab(document.converter); sliderchange();
	}
	else {
		mapping_selector = false;
		ButtonLCHab(document.converter); sliderchange();
	}
}

function clip_map_max() {
	ugolH = LCHab.H;
	document.converter.gamut_clip_L.value = HVS_surfaceL[ugolH.toFixed(0)];
	document.converter.gamut_clip_C.value = HVS_surfaceC[ugolH.toFixed(0)];
	edgeL = cubicspline(RGB_surfaceh[surface],RGB_surfaceL[surface],[ugolH]);
	edgeC = cubicspline(RGB_surfaceh[surface],RGB_surfaceC[surface],[ugolH]);
	document.converter.gamut_map_L.value = edgeL[0].toFixed(1)
	document.converter.gamut_map_C.value = edgeC[0].toFixed(1)
}

function defineMappingCoordinatesFromSlider() { // x1 != 0 для плавности перехода по слайдеру
	if(gamut_error == 1 && mapping_selector == true) {
x1 = fixLCHabC;
y1 = fixLCHabL;

x2 = edgeC[0];
y2 = edgeL[0];

x3 = LCHab.C;
y3 = LCHab.L;
	} 
	if(gamut_error == 0) { // gamut_error = false
	fixLCHabC = LCHab.C+0.2; // + погрешность слайдера / 2
	fixLCHabL = LCHab.L;
}	
}

function defineMappingCoordinatesFromButton() {
	if(gamut_error == 1 && mapping_selector == true) {
x1 = 0.0;
if (LCHab.L <= edgeL[0]) {
var y1 = 0.0;
} else {
var y1 = 100.0;
}	

x2 = edgeC[0];
y2 = edgeL[0];

x3 = LCHab.C;
y3 = LCHab.L;
	}
}

function gamutmappingTaylorTwoDimensional() {
if(gamut_error == 1 && mapping_selector == true) { //two-dimensional space: Taylor 

// координаты пересечения перпендикуляра с отрезком LCnull-LCmax:
var x4=((x2-x1)*(y2-y1)*(y3-y1)+x1*Math.pow(y2-y1, 2)+x3*Math.pow(x2-x1, 2))/(Math.pow(y2-y1, 2)+Math.pow(x2-x1, 2));
var y4=(y2-y1)*(x4-x1)/(x2-x1)+y1;

if(x4 > edgeC[0]) {x4 = edgeC[0];}

LCHab.L = y4;
LCHab.C = x4;

LCHab2Lab();
Lab2XYZ();
XYZ2RGB();
secondbgc1 = true;
bgcolor1();
document.converter.hexcode.value = "#" + hexarray[backgrR] + hexarray[backgrG] + hexarray[backgrB];
//document.converter.hexcode.value = LCHab.L.toFixed(2)+"  "+LCHab.C.toFixed(2)+"  "+ugolH.toFixed(2); // отладка
}
}

function Determinant3x3(m)
{
	var det = m.m00 * (m.m22 * m.m11 - m.m21 * m.m12) -
			  m.m10 * (m.m22 * m.m01 - m.m21 * m.m02) +
			  m.m20 * (m.m12 * m.m01 - m.m11 * m.m02);
	
	return (det);
}

function MtxInvert3x3(m, i)
{
	var scale = 1.0 / Determinant3x3(m);
	
	i.m00 =  scale * (m.m22 * m.m11 - m.m21 * m.m12);
	i.m01 = -scale * (m.m22 * m.m01 - m.m21 * m.m02);
	i.m02 =  scale * (m.m12 * m.m01 - m.m11 * m.m02);
	
	i.m10 = -scale * (m.m22 * m.m10 - m.m20 * m.m12);
	i.m11 =  scale * (m.m22 * m.m00 - m.m20 * m.m02);
	i.m12 = -scale * (m.m12 * m.m00 - m.m10 * m.m02);
	
	i.m20 =  scale * (m.m21 * m.m10 - m.m20 * m.m11);
	i.m21 = -scale * (m.m21 * m.m00 - m.m20 * m.m01);
	i.m22 =  scale * (m.m11 * m.m00 - m.m10 * m.m01);
}

function MtxTranspose3x3(m)
{
	var v = m.m01;
	m.m01 = m.m10;
	m.m10 = v;
	
	v = m.m02;
	m.m02 = m.m20;
	m.m20 = v;
	
	v = m.m12;
	m.m12 = m.m21;
	m.m21 = v;
}

function ClearForm(theForm)
{
	theForm.XYZ_X.value = "";
	theForm.XYZ_Y.value = "";
	theForm.XYZ_Z.value = "";
	
	theForm.xyY_x.value = "";
	theForm.xyY_y.value = "";
	theForm.xyY_Y.value = "";
	
	theForm.Lab_L.value = "";
	theForm.Lab_a.value = "";
	theForm.Lab_b.value = "";
	
	theForm.LCHab_L.value = "";
	theForm.LCHab_C.value = "";
	theForm.LCHab_H.value = "";
	
	theForm.Luv_L.value = "";
	theForm.Luv_u.value = "";
	theForm.Luv_v.value = "";
	
	theForm.LCHuv_L.value = "";
	theForm.LCHuv_C.value = "";
	theForm.LCHuv_H.value = "";
	
	theForm.RGB_R.value = "";
	theForm.RGB_G.value = "";
	theForm.RGB_B.value = "";
	
	theForm.K.value = "";
	theForm.DomWavelength.value = "";
	
	theForm.hexcode.value = "";
	theForm.gamut_alert.value = "";
	theForm.refWcctF.value = " 6500";
	theForm.RefWhite.selectedIndex = 11;
}

function ButtonXYZ(theForm)
{
	GetRefWhite(theForm);
	GetRefWhiteCCT(theForm);
	GetRGBModel(theForm);
	GetGamma(theForm);
	GetAdaptation(theForm);
	GetXYZ(theForm);
	PantoneSelect(theForm);
	XYZ2xyY();
	XYZ2Lab();
	Lab2LCHab();
	Lab2CMYK(Lab.L,Lab.a,Lab.b);
	Lab2PantonePlus(Lab.L,Lab.a,Lab.b);
	XYZ2RGB();
	FillxyYCells(theForm);
	FillLabCells(theForm);
	FillLCHabCells(theForm);
	FillRGBCells(theForm);
	FillCMYKCells(theForm);
	bgcolor(theForm);
	bgcolor1();
	clip_map_max();
	defineMappingCoordinatesFromButton();
	gamutmappingTaylorTwoDimensional();
	sliderchange();
}

function ButtonxyY(theForm)
{
	GetRefWhite(theForm);
	GetRefWhiteCCT(theForm);
	GetRGBModel(theForm);
	GetGamma(theForm);
	GetAdaptation(theForm);
	GetxyY(theForm);
	PantoneSelect(theForm);
	xyY2XYZ();
	XYZ2Lab();
	Lab2LCHab();
	Lab2CMYK(Lab.L,Lab.a,Lab.b);
	Lab2PantonePlus(Lab.L,Lab.a,Lab.b);
	XYZ2RGB();
	FillXYZCells(theForm);
	FillLabCells(theForm);
	FillLCHabCells(theForm);
	FillRGBCells(theForm);
	FillCMYKCells(theForm);
	bgcolor(theForm);
	bgcolor1();
	clip_map_max();
	defineMappingCoordinatesFromButton();
	gamutmappingTaylorTwoDimensional();
	sliderchange();
}

function ButtonLab(theForm)
{
	GetRefWhite(theForm);
	GetRefWhiteCCT(theForm);
	GetRGBModel(theForm);
	GetGamma(theForm);
	GetAdaptation(theForm);
	GetLab(theForm);
	PantoneSelect(theForm);
	Lab2XYZ();
	Lab2CMYK(Lab.L,Lab.a,Lab.b);
	Lab2PantonePlus(Lab.L,Lab.a,Lab.b);
	XYZ2xyY();
	Lab2LCHab();
	XYZ2RGB();
	FillXYZCells(theForm);
	FillxyYCells(theForm);
	FillLCHabCells(theForm);
	FillRGBCells(theForm);
	FillCMYKCells(theForm);
	bgcolor(theForm);
	bgcolor1();
	clip_map_max();
	defineMappingCoordinatesFromButton();
	gamutmappingTaylorTwoDimensional();
	sliderchange();
}

function ButtonLCHab(theForm)
{
	GetRefWhite(theForm);
	GetRefWhiteCCT(theForm);
	GetRGBModel(theForm);
	GetGamma(theForm);
	GetAdaptation(theForm);
	GetLCHab(theForm);
	PantoneSelect(theForm);
	LCHab2Lab();
	Lab2XYZ();
	Lab2CMYK(Lab.L,Lab.a,Lab.b);
	Lab2PantonePlus(Lab.L,Lab.a,Lab.b);
	XYZ2xyY();
	XYZ2RGB();
	FillXYZCells(theForm);
	FillxyYCells(theForm);
	FillLabCells(theForm);
	FillRGBCells(theForm);
	FillCMYKCells(theForm);
	bgcolor(theForm);
	bgcolor1();
	clip_map_max();
	defineMappingCoordinatesFromButton();
	gamutmappingTaylorTwoDimensional();
	//sliderchange(); in html!
}

function Slider2LCHab(theForm) // copy of ButtonLCHab but defineMappingCoordinatesFromSlider
{
	GetRefWhite(theForm);
	GetRefWhiteCCT(theForm);
	GetRGBModel(theForm);
	GetGamma(theForm);
	GetAdaptation(theForm);
	GetLCHab(theForm);
	PantoneSelect(theForm);
	LCHab2Lab();
	Lab2XYZ();
	Lab2CMYK(Lab.L,Lab.a,Lab.b);
	Lab2PantonePlus(Lab.L,Lab.a,Lab.b);
	XYZ2xyY();
	XYZ2RGB();
	FillXYZCells(theForm);
	FillxyYCells(theForm);
	FillLabCells(theForm);
	FillRGBCells(theForm);
	FillCMYKCells(theForm);
	bgcolor(theForm);
	bgcolor1();
	clip_map_max();
	defineMappingCoordinatesFromSlider();
	gamutmappingTaylorTwoDimensional();
}

function ButtonRGB(theForm)
{
	GetRefWhite(theForm);
	GetRefWhiteCCT(theForm);
	GetRGBModel(theForm);
	GetGamma(theForm);
	GetAdaptation(theForm);
	GetRGB(theForm);
	PantoneSelect(theForm);
	RGB2XYZ();
	XYZ2xyY();
	XYZ2Lab();
	Lab2LCHab();
	Lab2CMYK(Lab.L,Lab.a,Lab.b);
	Lab2PantonePlus(Lab.L,Lab.a,Lab.b);
	FillXYZCells(theForm);
	FillxyYCells(theForm);
	FillLabCells(theForm);
	FillLCHabCells(theForm);
	FillCMYKCells(theForm);
	bgcolor(theForm);
	bgcolor1();
	clip_map_max();
	defineMappingCoordinatesFromButton();
	gamutmappingTaylorTwoDimensional();
	sliderchange();
}

function ButtonCMYK(theForm)
{
	GetRefWhite(theForm);
	GetRefWhiteCCT(theForm);
	GetRGBModel(theForm);
	GetGamma(theForm);
	GetAdaptation(theForm);
	GetCMYK(theForm);
	PantoneSelect(theForm);
	CMYK2Lab();
	Lab2XYZ();
	XYZ2xyY();
	XYZ2RGB();
	Lab2LCHab();
	Lab2PantonePlus(Lab.L,Lab.a,Lab.b);
	FillXYZCells(theForm);
	FillxyYCells(theForm);
	FillLabCells(theForm);
	FillLCHabCells(theForm);
	FillRGBCells(theForm);
	bgcolor(theForm);
	bgcolor1();
	clip_map_max();
	defineMappingCoordinatesFromButton();
	gamutmappingTaylorTwoDimensional();
	sliderchange();
}

function ButtonPantonePlus2Lab(theForm)
{
	GetRefWhite(theForm);
	GetRefWhiteCCT(theForm);
	GetRGBModel(theForm);
	GetGamma(theForm);
	GetAdaptation(theForm);
	PantoneSelect(theForm);
	PantonePlus2Lab(theForm);
	Lab2LCHab();
	Lab2XYZ();
	Lab2CMYK(Lab.L,Lab.a,Lab.b);
	XYZ2xyY();
	Lab2LCHab();
	XYZ2RGB();
	FillXYZCells(theForm);
	FillxyYCells(theForm);
	FillLabCells(theForm);
	FillLCHabCells(theForm);
	FillRGBCells(theForm);
	FillCMYKCells(theForm);
	bgcolor(theForm);
	bgcolor1();
	clip_map_max();
	defineMappingCoordinatesFromButton();
	gamutmappingTaylorTwoDimensional();
	sliderchange();
}

function sliderchange() {
	//GetLCHab(document.converter);
	stooperSL = true;
	mysl1.setValue((LCHab.L*5).toFixed(0));
	stooperSL = true;
	mysl2.setValue((LCHab.C*5).toFixed(0));
	stooperSL = true;
	mysl3.setValue((LCHab.H*5).toFixed(0));
	stooperSL = false;
}

function FillCMYKCells(theForm)
{
	theForm.CMYK_C.value = CMYK.C.toFixed(digitink);
	theForm.CMYK_M.value = CMYK.M.toFixed(digitink);
	theForm.CMYK_Y.value = CMYK.Y.toFixed(digitink);
	theForm.CMYK_K.value = CMYK.K.toFixed(digitink);
}

function FillLabCells(theForm)
{
	theForm.Lab_L.value = Lab.L.toFixed(2);
	theForm.Lab_a.value = Lab.a.toFixed(2);
	theForm.Lab_b.value = Lab.b.toFixed(2);
}

function FillLCHabCells(theForm)
{
	theForm.LCHab_L.value = LCHab.L.toFixed(2);
	theForm.LCHab_C.value = LCHab.C.toFixed(2);
	theForm.LCHab_H.value = LCHab.H.toFixed(2);
}

function FillXYZCells(theForm)
{
	var scale = (ScaleXYZ == false) ? 1.0 : 100.0;
	var digits = (ScaleXYZ == false) ? 4 : 3;
	theForm.XYZ_X.value = (scale * XYZ.X).toFixed(digits);
	theForm.XYZ_Y.value = (scale * XYZ.Y).toFixed(digits);
	theForm.XYZ_Z.value = (scale * XYZ.Z).toFixed(digits);
}

function FillxyYCells(theForm)
{
	var scale = (ScaleY == false) ? 1.0 : 100.0;
	var digits = (ScaleY == false) ? 4 : 3;
	theForm.xyY_x.value = xyY.x.toFixed(4);
	theForm.xyY_y.value = xyY.y.toFixed(4);
	theForm.xyY_Y.value = (scale * xyY.Y).toFixed(digits);
}

function FillRGBCells(theForm)
{
	var scale = (ScaleRGB == false) ? 1.0 : 255.0;
	var digits = (ScaleRGB == false) ? 4 : 2;
	theForm.RGB_R.value = (scale * RGB.R).toFixed(digits);
	theForm.RGB_G.value = (scale * RGB.G).toFixed(digits);
	theForm.RGB_B.value = (scale * RGB.B).toFixed(digits);
}

function RGBModelChange(theForm)
{
	GetRGBModel(theForm);
	theForm.Gamma.selectedIndex = GammaRGBIndex;
	//ButtonLCHab(theForm);
}

function GetXYZ(theForm)
{
	var scale = (ScaleXYZ == false) ? 1.0 : 0.01;
	XYZ.X = scale * GetNumber(theForm.XYZ_X.value);
	XYZ.Y = scale * GetNumber(theForm.XYZ_Y.value);
	XYZ.Z = scale * GetNumber(theForm.XYZ_Z.value);
	
	XYZ.X = (XYZ.X < 0.0) ? 0.0 : XYZ.X;
	XYZ.Y = (XYZ.Y < 0.0) ? 0.0 : XYZ.Y;
	XYZ.Z = (XYZ.Z < 0.0) ? 0.0 : XYZ.Z;
}

function GetxyY(theForm)
{
	var scale = (ScaleY == false) ? 1.0 : 0.01;
	xyY.x = GetNumber(theForm.xyY_x.value);
	xyY.y = GetNumber(theForm.xyY_y.value);
	xyY.Y = scale * GetNumber(theForm.xyY_Y.value);
	
	xyY.Y = (xyY.Y < 0.0) ? 0.0 : xyY.Y;
}

function GetLab(theForm)
{
	Lab.L = GetNumber(theForm.Lab_L.value);
	Lab.a = GetNumber(theForm.Lab_a.value);
	Lab.b = GetNumber(theForm.Lab_b.value);
	
	Lab.L = (Lab.L < 0.0) ? 0.0 : (Lab.L > 100.0) ? 100.0 : Lab.L;
}

function GetLCHab(theForm)
{
	LCHab.L = GetNumber(theForm.LCHab_L.value);
	LCHab.C = GetNumber(theForm.LCHab_C.value);
	LCHab.H = GetNumber(theForm.LCHab_H.value);
	
	LCHab.L = (LCHab.L < 0.0) ? 0.0 : (LCHab.L > 100.0) ? 100.0 : LCHab.L;
	LCHab.C = (LCHab.C < 0.0) ? 0.0 : LCHab.C;
	while (LCHab.H < 0.0)
	{
		LCHab.H += 360.0;
	}
	while (LCHab.H > 360.0)
	{
		LCHab.H -= 360.0;
	}
	
	clip_map_max();
	
	//2018.10.16 HVS Clipping
	if (clipping_selector == true) {
	pintL = LCHab.L.toFixed(0);
	pintC = LCHab.C.toFixed(0);
	pintH = LCHab.H.toFixed(0);
	
	if (pintC <= HVS_LCh_surfaceC[pintH][pintL]) {
		LCHabLtemp = LCHab.L;
		LCHabCtemp = LCHab.C;
		LCHabHtemp = LCHab.H;
		outOfC = false;
	}
	else {
		LCHab.C = LCHabCtemp;
		converter.LCHab_C.value = LCHab.C.toFixed(1);
		outOfC = true;
	}
	
	for (var i = 0; i<101; i++) {
		HVS_LCh_surfaceC[pintH][pintL] == HVS_LCh_surfaceC[pintH][i];
		numberL = i;
	}
	
	if (pintL <= HVS_LCh_surfaceL[numberL] && outOfC == true) {
		LCHab.L = LCHabLtemp;
		converter.LCHab_L.value = LCHab.L.toFixed(1);
	}
	}//end 2018.10.16 HVS Clipping
	
/*	if (mapping_selector == true) {
	//mintL = LCHab.L.toFixed(0);
	//mintC = LCHab.C.toFixed(0);
	mintH = LCHab.H.toFixed(0);
		LCHab2Lab();
		Lab2XYZ();
		XYZ2xyY();
		XYZ2RGB();
		
		if(RGB.R < 0.0 || RGB.G < 0.0 || RGB.B < 0.0) {minusCor = true;} 
		else {minusCor = false;}
		if (RGB.R > 1.0 || RGB.G > 1.0 || RGB.B > 1.0) {plusCor = true;} 
		else {plusCor = false;}
		
		if (minusCor == true && plusCor == false && LCHab.L <= RGB_surfaceL[surface][mintH]) {
			LCHab.L += 0.5;
			theForm.LCHab_L.value = LCHab.L.toFixed(2);
			stooperSL = true;
			mysl1.setValue((LCHab.L*5).toFixed(0));
			stooperSL = false;
		}
		if (plusCor == true && LCHab.L >= RGB_surfaceL[surface][mintH]) {
			LCHab.L -= 0.5;
			theForm.LCHab_L.value = LCHab.L.toFixed(2);
			stooperSL = true;
			mysl1.setValue((LCHab.L*5).toFixed(0));
			stooperSL = false;
		}
	
	} //mapping_selector
	*/
}

function GetRGB(theForm)
{
	var scale = (ScaleRGB == false) ? 1.0 : (1.0 / 255.0);
	RGB.R = scale * GetNumber(theForm.RGB_R.value);
	RGB.G = scale * GetNumber(theForm.RGB_G.value);
	RGB.B = scale * GetNumber(theForm.RGB_B.value);
}

function GetCMYK(theForm)
{
	CMYK.C = GetNumber(theForm.CMYK_C.value);
	CMYK.M = GetNumber(theForm.CMYK_M.value);
	CMYK.Y = GetNumber(theForm.CMYK_Y.value);
	CMYK.K = GetNumber(theForm.CMYK_K.value);
}


function GetCCT(theForm)
{
	CCT = GetNumber(theForm.K.value);
}

function GetRefWhiteCCT(theForm)
{
	refWcct = GetNumber(theForm.refWcctF.value);
}

function GetRefWhite(theForm)
{
	RefWhite.Y = 1.0;
	//document.converter.refWcctF.value = "";
	switch (theForm.RefWhite.selectedIndex)
	{
		case 0:	// A (ASTM E308-01)
			RefWhite.X = 1.09850;
			RefWhite.Z = 0.35585;
			document.converter.refWcctF.value = " 2856K";
			break;
		case 1:	// B (Wyszecki & Stiles, p. 769)
			RefWhite.X = 0.99072;
			RefWhite.Z = 0.85223;
			document.converter.refWcctF.value = " 4874K";
			break;
		case 2:	// C (ASTM E308-01)
			RefWhite.X = 0.98074;
			RefWhite.Z = 1.18232;
			document.converter.refWcctF.value = " 6775K";
			break;
		case 3:	// D50 (ASTM E308-01)
			RefWhite.X = 0.96422;
			RefWhite.Z = 0.82521;
			document.converter.refWcctF.value = " 5003K";
			break;
		case 4:	// D55 (ASTM E308-01)
			RefWhite.X = 0.95682;
			RefWhite.Z = 0.92149;
			document.converter.refWcctF.value = " 5500K";
			break;
		case 5:	// D65 (ASTM E308-01)
			RefWhite.X = 0.95047;
			RefWhite.Z = 1.08883;
			document.converter.refWcctF.value = " 6504K";
			break;
		case 6:	// D75 (ASTM E308-01)
			RefWhite.X = 0.94972;
			RefWhite.Z = 1.22638;
			document.converter.refWcctF.value = " 7500K";
			break;
		default:
		case 7:	// E (ASTM E308-01)
			RefWhite.X = 1.00000;
			RefWhite.Z = 1.00000;
			document.converter.refWcctF.value = " 5455K";
			break;
		case 8:	// F2 (ASTM E308-01)
			RefWhite.X = 0.99186;
			RefWhite.Z = 0.67393;
			document.converter.refWcctF.value = " 4224K";
			break;
		case 9:	// F7 (ASTM E308-01)
			RefWhite.X = 0.95041;
			RefWhite.Z = 1.08747;
			document.converter.refWcctF.value = " 6491K";
			break;
		case 10:	// F11 (ASTM E308-01)
			RefWhite.X = 1.00962;
			RefWhite.Z = 0.64350;
			document.converter.refWcctF.value = " 4000K";
			break;
		case 11:	// Plank's blackbody
		//if (refWcct == 0) {document.converter.refWcctF.value = "5003";}
			//GraphSelector(theForm);
			GetRefWhiteCCT(theForm);
			CCT2refWhite();
			//RefWhite.X = XYZwX;
			//RefWhite.Z = XYZwZ;
			break;
	}
}

function GetRGBModel(theForm)
{
	model_to_output_ar = new Array("Adobe RGB(1998)","Apple RGB","Best RGB","Beta RGB","Bruce RGB","CIE RGB","ColorMatch RGB","Don RGB 4","ECI RGB v2","Ekta Space PS5","NTSC RGB","PAL/SECAM RGB","ProPhoto RGB","SMPTE-C RGB","sRGB","Wide Gamut RGB");
	model_to_output = model_to_output_ar[theForm.RGBModel.selectedIndex];
	
	RefWhiteRGB.Y = 1.00000;
	var xr, yr, xg, yg, xb, yb;
	
	switch (theForm.RGBModel.selectedIndex)
	{
		case 0:	/* Adobe RGB (1998) */
			xr = 0.64;
			yr = 0.33;
			xg = 0.21;
			yg = 0.71;
			xb = 0.15;
			yb = 0.06;
			
			RefWhiteRGB.X = 0.95047;
			RefWhiteRGB.Z = 1.08883;
			
			GammaRGB =  2.2;
			GammaRGBIndex = 2;
			
			surface = 0;
			break;
		case 1:	/* AppleRGB */
			xr = 0.625;
			yr = 0.340;
			xg = 0.280;
			yg = 0.595;
			xb = 0.155;
			yb = 0.070;
			
			RefWhiteRGB.X = 0.95047;
			RefWhiteRGB.Z = 1.08883;
			
			GammaRGB =  1.8;
			GammaRGBIndex = 1;
			
			surface = 1;
			break;
		case 2:	/* Best RGB */
			xr = 0.7347;
			yr = 0.2653;
			xg = 0.2150;
			yg = 0.7750;
			xb = 0.1300;
			yb = 0.0350;
			
			RefWhiteRGB.X = 0.96422;
			RefWhiteRGB.Z = 0.82521;
			
			GammaRGB =  2.2;
			GammaRGBIndex = 2;
			
			surface = 5;
			break;
		case 3:	/* Beta RGB */
			xr = 0.6888;
			yr = 0.3112;
			xg = 0.1986;
			yg = 0.7551;
			xb = 0.1265;
			yb = 0.0352;
			
			RefWhiteRGB.X = 0.96422;
			RefWhiteRGB.Z = 0.82521;
			
			GammaRGB =  2.2;
			GammaRGBIndex = 2;
			
			surface = 5;
			break;
		case 4:	/* Bruce RGB */
			xr = 0.64;
			yr = 0.33;
			xg = 0.28;
			yg = 0.65;
			xb = 0.15;
			yb = 0.06;
			
			RefWhiteRGB.X = 0.95047;
			RefWhiteRGB.Z = 1.08883;
			
			GammaRGB =  2.2;
			GammaRGBIndex = 2;
			
			surface = 5;
			break;
		case 5:	/* CIE RGB */
			xr = 0.735;
			yr = 0.265;
			xg = 0.274;
			yg = 0.717;
			xb = 0.167;
			yb = 0.009;
			
			RefWhiteRGB.X = 1.00000;
			RefWhiteRGB.Z = 1.00000;
			
			GammaRGB =  2.2;
			GammaRGBIndex = 2;
			
			surface = 5;
			break;
		case 6:	/* ColorMatch RGB */
			xr = 0.630;
			yr = 0.340;
			xg = 0.295;
			yg = 0.605;
			xb = 0.150;
			yb = 0.075;
			
			RefWhiteRGB.X = 0.96422;
			RefWhiteRGB.Z = 0.82521;
			
			GammaRGB =  1.8;
			GammaRGBIndex = 1;
			
			surface = 2;
			break;
		case 7:	/* Don RGB 4 */
			xr = 0.696;
			yr = 0.300;
			xg = 0.215;
			yg = 0.765;
			xb = 0.130;
			yb = 0.035;
			
			RefWhiteRGB.X = 0.96422;
			RefWhiteRGB.Z = 0.82521;
			
			GammaRGB =  2.2;
			GammaRGBIndex = 2;
			
			surface = 5;
			break;
		case 8:	/* ECI RGB v2 */
			xr = 0.67;
			yr = 0.33;
			xg = 0.21;
			yg = 0.71;
			xb = 0.14;
			yb = 0.08;
			
			RefWhiteRGB.X = 0.96422;
			RefWhiteRGB.Z = 0.82521;
			
			GammaRGB =  0.0;
			GammaRGBIndex = 4;
			
			surface = 5;
			break;
		case 9:	/* Ekta Space PS5 */
			xr = 0.695;
			yr = 0.305;
			xg = 0.260;
			yg = 0.700;
			xb = 0.110;
			yb = 0.005;
			
			RefWhiteRGB.X = 0.96422;
			RefWhiteRGB.Z = 0.82521;
			
			GammaRGB =  2.2;
			GammaRGBIndex = 2;
			
			surface = 5;
			break;
		case 10:	/* NTSC RGB */
			xr = 0.67;
			yr = 0.33;
			xg = 0.21;
			yg = 0.71;
			xb = 0.14;
			yb = 0.08;
			
			RefWhiteRGB.X = 0.98074;
			RefWhiteRGB.Z = 1.18232;
			
			GammaRGB =  2.2;
			GammaRGBIndex = 2;
			
			surface = 5;
			break;
		case 11:	/* PAL/SECAM RGB */
			xr = 0.64;
			yr = 0.33;
			xg = 0.29;
			yg = 0.60;
			xb = 0.15;
			yb = 0.06;
			
			RefWhiteRGB.X = 0.95047;
			RefWhiteRGB.Z = 1.08883;
			
			GammaRGB =  2.2;
			GammaRGBIndex = 2;
			
			surface = 5;
			break;
		case 12:	/* ProPhoto RGB */
			xr = 0.7347;
			yr = 0.2653;
			xg = 0.1596;
			yg = 0.8404;
			xb = 0.0366;
			yb = 0.0001;
			
			RefWhiteRGB.X = 0.96422;
			RefWhiteRGB.Z = 0.82521;
			
			GammaRGB =  1.8;
			GammaRGBIndex = 1;
			
			surface = 3;
			break;
		case 13:	/* SMPTE-C RGB */
			xr = 0.630;
			yr = 0.340;
			xg = 0.310;
			yg = 0.595;
			xb = 0.155;
			yb = 0.070;
			
			RefWhiteRGB.X = 0.95047;
			RefWhiteRGB.Z = 1.08883;
			
			GammaRGB =  2.2;
			GammaRGBIndex = 2;
			
			surface = 5;
			break;
		case 14:	/* sRGB */
			xr = 0.64;
			yr = 0.33;
			xg = 0.30;
			yg = 0.60;
			xb = 0.15;
			yb = 0.06;
			
			RefWhiteRGB.X = 0.95047;
			RefWhiteRGB.Z = 1.08883;
			
			GammaRGB = -2.2;
			GammaRGBIndex = 3;
			
			surface = 4;
			break;
		case 15:	/* Wide Gamut RGB */
			xr = 0.735;
			yr = 0.265;
			xg = 0.115;
			yg = 0.826;
			xb = 0.157;
			yb = 0.018;
			
			RefWhiteRGB.X = 0.96422;
			RefWhiteRGB.Z = 0.82521;
			
			GammaRGB =  2.2;
			GammaRGBIndex = 2;
			
			surface = 5;
			break;
	}
	
	var m = {m00:xr/yr, m01:xg/yg, m02:xb/yb, m10:1.0, m11:1.0, m12:1.0, m20:(1.0-xr-yr)/yr, m21:(1.0-xg-yg)/yg, m22:(1.0-xb-yb)/yb};
	var mi = {m00:1.0, m01:0.0, m02:0.0, m10:0.0, m11:1.0, m12:0.0, m20:0.0, m21:0.0, m22:1.0};
	MtxInvert3x3(m, mi);
	
	var sr = RefWhiteRGB.X * mi.m00 + RefWhiteRGB.Y * mi.m01 + RefWhiteRGB.Z * mi.m02;
	var sg = RefWhiteRGB.X * mi.m10 + RefWhiteRGB.Y * mi.m11 + RefWhiteRGB.Z * mi.m12;
	var sb = RefWhiteRGB.X * mi.m20 + RefWhiteRGB.Y * mi.m21 + RefWhiteRGB.Z * mi.m22;
	
	MtxRGB2XYZ.m00 = sr * m.m00;
	MtxRGB2XYZ.m01 = sg * m.m01;
	MtxRGB2XYZ.m02 = sb * m.m02;
	MtxRGB2XYZ.m10 = sr * m.m10;
	MtxRGB2XYZ.m11 = sg * m.m11;
	MtxRGB2XYZ.m12 = sb * m.m12;
	MtxRGB2XYZ.m20 = sr * m.m20;
	MtxRGB2XYZ.m21 = sg * m.m21;
	MtxRGB2XYZ.m22 = sb * m.m22;
	
	MtxTranspose3x3(MtxRGB2XYZ);
	
	MtxInvert3x3(MtxRGB2XYZ, MtxXYZ2RGB);
}

function GetGamma(theForm)
{
	switch (theForm.Gamma.selectedIndex)
	{
		case 0:	/* 1.0 */
			Gamma = 1.0;
			break;
		case 1:	/* 1.8 */
			Gamma = 1.8;
			break;
		case 2:	/* 2.2 */
			Gamma = 2.2;
			break;
		case 3:	/* sRGB */
			Gamma = -2.2
			break;
		case 4: /* L* */
			Gamma = 0.0;
			break;
	}
}

function GetAdaptation(theForm)
{
	AdaptationMethod = theForm.Adaptation.selectedIndex;
	switch (AdaptationMethod)
	{
		case 0:	/* Bradford */
			MtxAdaptMa.m00 =  0.8951;
			MtxAdaptMa.m01 = -0.7502;
			MtxAdaptMa.m02 =  0.0389;
			MtxAdaptMa.m10 =  0.2664;
			MtxAdaptMa.m11 =  1.7135;
			MtxAdaptMa.m12 = -0.0685;
			MtxAdaptMa.m20 = -0.1614;
			MtxAdaptMa.m21 =  0.0367;
			MtxAdaptMa.m22 =  1.0296;
			
			MtxInvert3x3(MtxAdaptMa, MtxAdaptMaI);
			break;
		case 1:	/* von Kries */
			MtxAdaptMa.m00 =  0.40024;
			MtxAdaptMa.m01 = -0.22630;
			MtxAdaptMa.m02 =  0.00000;
			MtxAdaptMa.m10 =  0.70760;
			MtxAdaptMa.m11 =  1.16532;
			MtxAdaptMa.m12 =  0.00000;
			MtxAdaptMa.m20 = -0.08081;
			MtxAdaptMa.m21 =  0.04570;
			MtxAdaptMa.m22 =  0.91822;
			
			MtxInvert3x3(MtxAdaptMa, MtxAdaptMaI);
			break;
		case 2:	/* XYZ Scaling */
		MtxAdaptMa.m00 = 1.0;
			MtxAdaptMa.m01 = 0.0;
			MtxAdaptMa.m02 = 0.0;
			MtxAdaptMa.m10 = 0.0;
			MtxAdaptMa.m11 = 1.0;
			MtxAdaptMa.m12 = 0.0;
			MtxAdaptMa.m20 = 0.0;
			MtxAdaptMa.m21 = 0.0;
			MtxAdaptMa.m22 = 1.0;
			
			MtxAdaptMaI.m00 = 1.0;
			MtxAdaptMaI.m01 = 0.0;
			MtxAdaptMaI.m02 = 0.0;
			MtxAdaptMaI.m10 = 0.0;
			MtxAdaptMaI.m11 = 1.0;
			MtxAdaptMaI.m12 = 0.0;
			MtxAdaptMaI.m20 = 0.0;
			MtxAdaptMaI.m21 = 0.0;
			MtxAdaptMaI.m22 = 1.0;
			break;
		case 3:	/* CAT02 */
			MtxAdaptMa = {m00:0.7328, m01:-0.7036, m02:0.0030, m10:0.4296, m11:1.6975, m12:0.0136, m20:-0.1624, m21:0.0061, m22:0.9834};
			MtxAdaptMaI = {m00:1.096124, m01:0.454369, m02:-0.009628, m10:-0.278869, m11:0.473533, m12:-0.005698, m20:0.182745, m21:0.072098, m22:1.015326};
			break;
		case 4:	/* Sharp */
			MtxAdaptMa = {m00:1.2694, m01:-0.8364, m02:0.0297, m10:-0.0988, m11:1.8006, m12:-0.0315, m20:-0.1706, m21:0.0357, m22:1.0018};
			MtxAdaptMaI = {m00:0.8156333, m01:0.3791144, m02:-0.0122601, m10:0.0471548, m11:0.5769424, m12:0.0167431, m20:0.1372166, m21:0.0440009, m22:0.9955188};
			break;
		case 5:	/* CMCCAT2000 */
			MtxAdaptMa = {m00:0.7982, m01:-0.5918, m02:0.0008, m10:0.3389, m11:1.5512, m12:0.0239, m20:-0.1371, m21:0.0406, m22:0.9753}; //0.239 wrong
			MtxAdaptMaI = {m00:1.07645, m01:0.4109643, m02:-0.0109538, m10:-0.2376624, m11:0.5543418, m12:-0.0133894, m20:0.1612123, m21:0.0346939, m22:1.0243431};
			break;
		case 6:	/* None */
			MtxAdaptMa.m00 = 1.0;
			MtxAdaptMa.m01 = 0.0;
			MtxAdaptMa.m02 = 0.0;
			MtxAdaptMa.m10 = 0.0;
			MtxAdaptMa.m11 = 1.0;
			MtxAdaptMa.m12 = 0.0;
			MtxAdaptMa.m20 = 0.0;
			MtxAdaptMa.m21 = 0.0;
			MtxAdaptMa.m22 = 1.0;
			
			MtxAdaptMaI.m00 = 1.0;
			MtxAdaptMaI.m01 = 0.0;
			MtxAdaptMaI.m02 = 0.0;
			MtxAdaptMaI.m10 = 0.0;
			MtxAdaptMaI.m11 = 1.0;
			MtxAdaptMaI.m12 = 0.0;
			MtxAdaptMaI.m20 = 0.0;
			MtxAdaptMaI.m21 = 0.0;
			MtxAdaptMaI.m22 = 1.0;
			break;
	}
}

function XYZ2RGB()
{
	var X2 = XYZ.X;
	var Y2 = XYZ.Y;
	var Z2 = XYZ.Z;
	
	if (AdaptationMethod != 6)
	{
		var As = RefWhite.X * MtxAdaptMa.m00 + RefWhite.Y * MtxAdaptMa.m10 + RefWhite.Z * MtxAdaptMa.m20;
		var Bs = RefWhite.X * MtxAdaptMa.m01 + RefWhite.Y * MtxAdaptMa.m11 + RefWhite.Z * MtxAdaptMa.m21;
		var Cs = RefWhite.X * MtxAdaptMa.m02 + RefWhite.Y * MtxAdaptMa.m12 + RefWhite.Z * MtxAdaptMa.m22;
		
		var Ad = RefWhiteRGB.X * MtxAdaptMa.m00 + RefWhiteRGB.Y * MtxAdaptMa.m10 + RefWhiteRGB.Z * MtxAdaptMa.m20;
		var Bd = RefWhiteRGB.X * MtxAdaptMa.m01 + RefWhiteRGB.Y * MtxAdaptMa.m11 + RefWhiteRGB.Z * MtxAdaptMa.m21;
		var Cd = RefWhiteRGB.X * MtxAdaptMa.m02 + RefWhiteRGB.Y * MtxAdaptMa.m12 + RefWhiteRGB.Z * MtxAdaptMa.m22;
		
		var X1 = XYZ.X * MtxAdaptMa.m00 + XYZ.Y * MtxAdaptMa.m10 + XYZ.Z * MtxAdaptMa.m20;
		var Y1 = XYZ.X * MtxAdaptMa.m01 + XYZ.Y * MtxAdaptMa.m11 + XYZ.Z * MtxAdaptMa.m21;
		var Z1 = XYZ.X * MtxAdaptMa.m02 + XYZ.Y * MtxAdaptMa.m12 + XYZ.Z * MtxAdaptMa.m22;
		
		X1 *= (Ad / As);
		Y1 *= (Bd / Bs);
		Z1 *= (Cd / Cs);
		
		X2 = X1 * MtxAdaptMaI.m00 + Y1 * MtxAdaptMaI.m10 + Z1 * MtxAdaptMaI.m20;
		Y2 = X1 * MtxAdaptMaI.m01 + Y1 * MtxAdaptMaI.m11 + Z1 * MtxAdaptMaI.m21;
		Z2 = X1 * MtxAdaptMaI.m02 + Y1 * MtxAdaptMaI.m12 + Z1 * MtxAdaptMaI.m22;
	}
	
	RGB.R = Compand(X2 * MtxXYZ2RGB.m00 + Y2 * MtxXYZ2RGB.m10 + Z2 * MtxXYZ2RGB.m20);
	RGB.G = Compand(X2 * MtxXYZ2RGB.m01 + Y2 * MtxXYZ2RGB.m11 + Z2 * MtxXYZ2RGB.m21);
	RGB.B = Compand(X2 * MtxXYZ2RGB.m02 + Y2 * MtxXYZ2RGB.m12 + Z2 * MtxXYZ2RGB.m22);
}

function RGB2XYZ()
{
	var R = InvCompand(RGB.R);
	var G = InvCompand(RGB.G);
	var B = InvCompand(RGB.B);
	
	XYZ.X = R * MtxRGB2XYZ.m00 + G * MtxRGB2XYZ.m10 + B * MtxRGB2XYZ.m20;
	XYZ.Y = R * MtxRGB2XYZ.m01 + G * MtxRGB2XYZ.m11 + B * MtxRGB2XYZ.m21;
	XYZ.Z = R * MtxRGB2XYZ.m02 + G * MtxRGB2XYZ.m12 + B * MtxRGB2XYZ.m22;
	
	if (AdaptationMethod != 6)
	{
		var Ad = RefWhite.X * MtxAdaptMa.m00 + RefWhite.Y * MtxAdaptMa.m10 + RefWhite.Z * MtxAdaptMa.m20;
		var Bd = RefWhite.X * MtxAdaptMa.m01 + RefWhite.Y * MtxAdaptMa.m11 + RefWhite.Z * MtxAdaptMa.m21;
		var Cd = RefWhite.X * MtxAdaptMa.m02 + RefWhite.Y * MtxAdaptMa.m12 + RefWhite.Z * MtxAdaptMa.m22;
		
		var As = RefWhiteRGB.X * MtxAdaptMa.m00 + RefWhiteRGB.Y * MtxAdaptMa.m10 + RefWhiteRGB.Z * MtxAdaptMa.m20;
		var Bs = RefWhiteRGB.X * MtxAdaptMa.m01 + RefWhiteRGB.Y * MtxAdaptMa.m11 + RefWhiteRGB.Z * MtxAdaptMa.m21;
		var Cs = RefWhiteRGB.X * MtxAdaptMa.m02 + RefWhiteRGB.Y * MtxAdaptMa.m12 + RefWhiteRGB.Z * MtxAdaptMa.m22;
		
		var X = XYZ.X * MtxAdaptMa.m00 + XYZ.Y * MtxAdaptMa.m10 + XYZ.Z * MtxAdaptMa.m20;
		var Y = XYZ.X * MtxAdaptMa.m01 + XYZ.Y * MtxAdaptMa.m11 + XYZ.Z * MtxAdaptMa.m21;
		var Z = XYZ.X * MtxAdaptMa.m02 + XYZ.Y * MtxAdaptMa.m12 + XYZ.Z * MtxAdaptMa.m22;
		
		X *= (Ad / As);
		Y *= (Bd / Bs);
		Z *= (Cd / Cs);
		
		XYZ.X = X * MtxAdaptMaI.m00 + Y * MtxAdaptMaI.m10 + Z * MtxAdaptMaI.m20;
		XYZ.Y = X * MtxAdaptMaI.m01 + Y * MtxAdaptMaI.m11 + Z * MtxAdaptMaI.m21;
		XYZ.Z = X * MtxAdaptMaI.m02 + Y * MtxAdaptMaI.m12 + Z * MtxAdaptMaI.m22;
	}
}

function GetNumber(s)
{
	var val = parseFloat(s);
	return(isNaN(val) ? 0.0 : val);
	
}

function Compand(linear)
{
	var companded;
	if (Gamma > 0.0)
	{
		companded = (linear >= 0.0) ? Math.pow(linear, 1.0 / Gamma) : -Math.pow(-linear, 1.0 / Gamma);
	}
	else if (Gamma < 0.0)
	{
		/* sRGB */
		var sign = 1.0;
		if (linear < 0.0)
		{
			sign = -1.0;
			linear = -linear;
		}
		companded = (linear <= 0.0031308) ? (linear * 12.92) : (1.055 * Math.pow(linear, 1.0 / 2.4) - 0.055);
		companded *= sign;
	}
	else
	{
		/* L* */
		var sign = 1.0;
		if (linear < 0.0)
		{
			sign = -1.0;
			linear = -linear;
		}
		companded = (linear <= (216.0 / 24389.0)) ? (linear * 24389.0 / 2700.0) : (1.16 * Math.pow(linear, 1.0 / 3.0) - 0.16);
		companded *= sign;
	}
	return(companded);
}

function InvCompand(companded)
{
	var linear;
	if (Gamma > 0.0)
	{
		linear = (companded >= 0.0) ? Math.pow(companded, Gamma) : -Math.pow(-companded, Gamma);
	}
	else if (Gamma < 0.0)
	{
		/* sRGB */
		var sign = 1.0;
		if (companded < 0.0)
		{
			sign = -1.0;
			companded = -companded;
		}
		linear = (companded <= 0.04045) ? (companded / 12.92) : Math.pow((companded + 0.055) / 1.055, 2.4);
		linear *= sign;
	}
	else
	{
		/* L* */
		var sign = 1.0;
		if (companded < 0.0)
		{
			sign = -1.0;
			companded = -companded;
		}
		linear = (companded <= 0.08) ? (2700.0 * companded / 24389.0) : ((((1000000.0 * companded + 480000.0) * companded + 76800.0) * companded + 4096.0) / 1560896.0);
		linear *= sign;
	}
	return(linear);
}

function XYZ2xyY()
{
	Den = XYZ.X + XYZ.Y + XYZ.Z;
	/* TODO: divide by zero handling */
	if (Den > 0.0)
	{
		xyY.x = XYZ.X / Den;
		xyY.y = XYZ.Y / Den;
	}
	else
	{
		xyY.x = RefWhite.X / (RefWhite.X + RefWhite.Y + RefWhite.Z);
		xyY.y = RefWhite.Y / (RefWhite.X + RefWhite.Y + RefWhite.Z);
	}
	xyY.Y = XYZ.Y;
}

function XYZ2Lab()
{
	var xr = XYZ.X / RefWhite.X;
	var yr = XYZ.Y / RefWhite.Y;
	var zr = XYZ.Z / RefWhite.Z;
	
	var fx = (xr > kE) ? Math.pow(xr, 1.0 / 3.0) : ((kK * xr + 16.0) / 116.0);
	var fy = (yr > kE) ? Math.pow(yr, 1.0 / 3.0) : ((kK * yr + 16.0) / 116.0);
	var fz = (zr > kE) ? Math.pow(zr, 1.0 / 3.0) : ((kK * zr + 16.0) / 116.0);
	
	Lab.L = 116.0 * fy - 16.0;
	Lab.a = 500.0 * (fx - fy);
	Lab.b = 200.0 * (fy - fz);
}

function XYZ2Luv()
{
	var Den = XYZ.X + 15.0 * XYZ.Y + 3.0 * XYZ.Z;
	var up = (Den > 0.0) ? ((4.0 * XYZ.X) / (XYZ.X + 15.0 * XYZ.Y + 3.0 * XYZ.Z)) : 0.0;
	var vp = (Den > 0.0) ? ((9.0 * XYZ.Y) / (XYZ.X + 15.0 * XYZ.Y + 3.0 * XYZ.Z)) : 0.0;
	
	var urp = (4.0 * RefWhite.X) / (RefWhite.X + 15.0 * RefWhite.Y + 3.0 * RefWhite.Z);
	var vrp = (9.0 * RefWhite.Y) / (RefWhite.X + 15.0 * RefWhite.Y + 3.0 * RefWhite.Z);
	
	var yr = XYZ.Y / RefWhite.Y;
	
	Luv.L = (yr > kE) ? (116.0 * Math.pow(yr, 1.0 / 3.0) - 16.0) : (kK * yr);
	Luv.u = 13.0 * Luv.L * (up - urp);
	Luv.v = 13.0 * Luv.L * (vp - vrp);
}

function xyY2XYZ()
{
	if (xyY.y < 0.000001)
	{
		XYZ.X = XYZ.Y = XYZ.Z = 0.0;
	}
	else
	{
		XYZ.X = (xyY.x * xyY.Y) / xyY.y;
		XYZ.Y = xyY.Y;
		XYZ.Z = ((1.0 - xyY.x - xyY.y) * xyY.Y) / xyY.y;
	}
}

function Lab2XYZ()
{
	var fy = (Lab.L + 16.0) / 116.0;
	var fx = 0.002 * Lab.a + fy;
	var fz = fy - 0.005 * Lab.b;
	
	var fx3 = fx * fx * fx;
	var fz3 = fz * fz * fz;
	
	var xr = (fx3 > kE) ? fx3 : ((116.0 * fx - 16.0) / kK);
	var yr = (Lab.L > kKE) ? Math.pow((Lab.L + 16.0) / 116.0, 3.0) : (Lab.L / kK);
	var zr = (fz3 > kE) ? fz3 : ((116.0 * fz - 16.0) / kK);
	
	XYZ.X = xr * RefWhite.X;
	XYZ.Y = yr * RefWhite.Y;
	XYZ.Z = zr * RefWhite.Z;
}

function Lab2LCHab()
{
	LCHab.L = Lab.L;
	LCHab.C = Math.sqrt(Lab.a * Lab.a + Lab.b * Lab.b);
	LCHab.H = 180.0 * Math.atan2(Lab.b, Lab.a) / Math.PI;
	if (LCHab.H < 0.0)
	{
		LCHab.H += 360.0;
	}
}

function LCHab2Lab()
{
	Lab.L = LCHab.L;
	Lab.a = LCHab.C * Math.cos(LCHab.H * Math.PI / 180.0);
	Lab.b = LCHab.C * Math.sin(LCHab.H * Math.PI / 180.0);
}

function Luv2XYZ()
{
	XYZ.Y = (Luv.L > kKE) ? Math.pow((Luv.L + 16.0) / 116.0, 3.0) : (Luv.L / kK);
	var u0 = (4.0 * RefWhite.X) / (RefWhite.X + 15.0 * RefWhite.Y + 3.0 * RefWhite.Z);
	var v0 = (9.0 * RefWhite.Y) / (RefWhite.X + 15.0 * RefWhite.Y + 3.0 * RefWhite.Z);
	
	var a = (((52.0 * Luv.L) / (Luv.u + 13.0 * Luv.L * u0)) - 1.0) / 3.0;
	var b = -5.0 * XYZ.Y;
	var c = -1.0 / 3.0;
	var d = XYZ.Y * (((39.0 * Luv.L) / (Luv.v + 13.0 * Luv.L * v0)) - 5.0);
	
	XYZ.X = (d - b) / (a - c);
	XYZ.Z = XYZ.X * a + b;
}

function Luv2LCHuv()
{
	LCHuv.L = Luv.L;
	LCHuv.C = Math.sqrt(Luv.u * Luv.u + Luv.v * Luv.v);
	LCHuv.H = 180.0 * Math.atan2(Luv.v, Luv.u) / Math.PI;
	if (LCHuv.H < 0.0)
	{
		LCHuv.H += 360.0;
	}
}

function LCHuv2Luv()
{
	Luv.L = LCHuv.L;
	Luv.u = LCHuv.C * Math.cos(LCHuv.H * Math.PI / 180.0);
	Luv.v = LCHuv.C * Math.sin(LCHuv.H * Math.PI / 180.0);
}

function CCT2XYZ()
{
	var Temp = CCT;
	var C1 = 2.0 * Math.PI * 6.626176 * 2.99792458 * 2.99792458;	// * 1.0e-18
	var C2 = (6.626176 * 2.99792458) / 1.380662;	// * 1.0e-3
	var nm;
	var i = 0;
	XYZ.X = 0.0;
	XYZ.Y = 0.0;
	XYZ.Z = 0.0;
	
	for (nm = 360; nm <= 830; nm += 5)
	{
		var dWavelengthM = nm * 1.0e-3;	// * 1.0e-6
		var dWavelengthM5 = dWavelengthM * dWavelengthM * dWavelengthM * dWavelengthM * dWavelengthM;	// * 1.0e-30
		var blackbody = C1 / (dWavelengthM5 * 1.0e-12 * (Math.exp(C2 / (Temp * dWavelengthM * 1.0e-3)) - 1.0));	// -12 = -30 - (-18)
		XYZ.X += (blackbody * CIE1931StdObs_x[i]);
		XYZ.Y += (blackbody * CIE1931StdObs_y[i]);
		XYZ.Z += (blackbody * CIE1931StdObs_z[i]);
		i++;
	}
	XYZ.X /= XYZ.Y;
	XYZ.Z /= XYZ.Y;
	XYZ.Y = 1.0;
}

function CCT2refWhite()
{
	GetRefWhiteCCT(document.converter)
	var Temp = refWcct;
	var C1 = 2.0 * Math.PI * 6.626176 * 2.99792458 * 2.99792458;	// * 1.0e-18
	var C2 = (6.626176 * 2.99792458) / 1.380662;	// * 1.0e-3
	var nm;
	var i = 0;
	XYZwX = 0.0;
	XYZwY = 0.0;
	XYZwZ = 0.0;
	
	for (nm = 360; nm <= 830; nm += 5)
	{
		var dWavelengthM = nm * 1.0e-3;	// * 1.0e-6
		var dWavelengthM5 = dWavelengthM * dWavelengthM * dWavelengthM * dWavelengthM * dWavelengthM;	// * 1.0e-30
		var blackbody = C1 / (dWavelengthM5 * 1.0e-12 * (Math.exp(C2 / (Temp * dWavelengthM * 1.0e-3)) - 1.0));	// -12 = -30 - (-18)
		XYZwX += (blackbody * CIE1931StdObs_x[i]);
		XYZwY += (blackbody * CIE1931StdObs_y[i]);
		XYZwZ += (blackbody * CIE1931StdObs_z[i]);
		i++;
	}
	XYZwX /= XYZwY;
	XYZwZ /= XYZwY;
	XYZwY = 1.0;
	
	RefWhite.X = XYZwX;
	RefWhite.Y = XYZwY;
	RefWhite.Z = XYZwZ;
}

function DigitCMYKCheckBox(theForm) {
	if (theForm.DigitCMYK.checked == true) {
		digitink = 1;
	} else {
		digitink = 0;
	}
	FillCMYKCells(theForm);
}

function XYZCheckBox(theForm)
{
	ScaleXYZ = (ScaleXYZ == true) ? false : true;
	var scale = (ScaleXYZ == false) ? 0.01 : 1.0;
	XYZ.X = scale * GetNumber(theForm.XYZ_X.value);
	XYZ.Y = scale * GetNumber(theForm.XYZ_Y.value);
	XYZ.Z = scale * GetNumber(theForm.XYZ_Z.value);
	FillXYZCells(theForm);
}

function YCheckBox(theForm)
{
	ScaleY = (ScaleY == true) ? false : true;
	var scale = (ScaleY == false) ? 0.01 : 1.0;
	xyY.Y = scale * GetNumber(theForm.xyY_Y.value);
	FillxyYCells(theForm);
}

function RGBCheckBox(theForm)
{
	ScaleRGB = (ScaleRGB == true) ? false : true;
	var scale = (ScaleRGB == false) ? (1.0 / 255.0) : 1.0;
	RGB.R = scale * GetNumber(theForm.RGB_R.value);
	RGB.G = scale * GetNumber(theForm.RGB_G.value);
	RGB.B = scale * GetNumber(theForm.RGB_B.value);
	FillRGBCells(theForm);
}

var hexarray = new Array("00","01","02","03","04","05","06","07","08","09","0A","0B","0C","0D","0E","0F","10","11","12","13","14","15","16","17","18","19","1A","1B","1C","1D","1E","1F","20","21","22","23","24","25","26","27","28","29","2A","2B","2C","2D","2E","2F","30","31","32","33","34","35","36","37","38","39","3A","3B","3C","3D","3E","3F","40","41","42","43","44","45","46","47","48","49","4A","4B","4C","4D","4E","4F","50","51","52","53","54","55","56","57","58","59","5A","5B","5C","5D","5E","5F","60","61","62","63","64","65","66","67","68","69","6A","6B","6C","6D","6E","6F","70","71","72","73","74","75","76","77","78","79","7A","7B","7C","7D","7E","7F","80","81","82","83","84","85","86","87","88","89","8A","8B","8C","8D","8E","8F","90","91","92","93","94","95","96","97","98","99","9A","9B","9C","9D","9E","9F","A0","A1","A2","A3","A4","A5","A6","A7","A8","A9","AA","AB","AC","AD","AE","AF","B0","B1","B2","B3","B4","B5","B6","B7","B8","B9","BA","BB","BC","BD","BE","BF","C0","C1","C2","C3","C4","C5","C6","C7","C8","C9","CA","CB","CC","CD","CE","CF","D0","D1","D2","D3","D4","D5","D6","D7","D8","D9","DA","DB","DC","DD","DE","DF","E0","E1","E2","E3","E4","E5","E6","E7","E8","E9","EA","EB","EC","ED","EE","EF","F0","F1","F2","F3","F4","F5","F6","F7","F8","F9","FA","FB","FC","FD","FE","FF"); 

function hex_create() {
	gamut_error = 0;
	backgrR = (RGB.R * 255).toFixed(0);
	backgrG = (RGB.G * 255).toFixed(0);
	backgrB = (RGB.B * 255).toFixed(0);
	
	if (RGB.R < 0.0) {backgrR = 0.0; gamut_error = 1;}
	if (RGB.G < 0.0) {backgrG = 0.0; gamut_error = 1;}
	if (RGB.B < 0.0) {backgrB = 0.0; gamut_error = 1;}
	if (backgrR > 255) {backgrR = 255; gamut_error = 1;}
	if (backgrG > 255) {backgrG = 255; gamut_error = 1;}
	if (backgrB > 255) {backgrB = 255; gamut_error = 1;}
}

function bgcolor(theForm)
{
	secondbgc1 = false;
	hex_create();
	
	theForm.hexcode.value = "#" + hexarray[backgrR] + hexarray[backgrG] + hexarray[backgrB];
	if (gamut_error == 1) {
	theForm.gamut_alert.value = " Out of gamut!";
	theForm.gamut_alert.style.color = 'red';
	theForm.gamut_alert.style.fontWeight = 'bold';
	}
	else
	{
	theForm.gamut_alert.value = " Fit gamut";
	theForm.gamut_alert.style.color = 'black';
	theForm.gamut_alert.style.fontWeight = 'normal';
	}
	
}

function bgcolor1()
{
	hex_create();
	
	leftbgColor = "#" + hexarray[backgrR] + hexarray[backgrG] + hexarray[backgrB];
	
	if(LCHab.L > 35) {
	colortextout = "#000000"; } else {
	colortextout = "#FFFFFF";	
	}
	
	if(secondbgc1 == true && mapping_selector == true) { //two-dimensional space: Taylor 
	gmtext = "(two-dimensional gamut mapping)";
	} else {
	gmtext = " ";
	}
	
	text1 = '<h4 style="color: '+colortextout+' !important;">R: '+backgrR+' &nbsp; G: '+backgrG+' &nbsp; B: '+backgrB+'</h4><h4 style="color: '+colortextout+' !important;">hex = '+leftbgColor+'<br>'+gmtext+'<br><br><br><br><br><br><br></h4>';
	
	if (document.getElementById('leftback').getElementsByTagName('div').length > 0){
	document.getElementById('leftback').removeChild(document.getElementById('leftback').getElementsByTagName('div')[0]);
	}
	var leftDiv = document.createElement('div'); 
leftDiv.innerHTML = '<div style="width:100%; height:'+vhigh+'px; background-color:'+leftbgColor+'; vertical-align:text-top;" onmouseover="mouseerror=1;"><h4 style="color: '+colortextout+' !important; padding-top:8px;">Color sample in '+model_to_output+' model: </h4>'+text1+'</div>';
document.getElementById('leftback').appendChild(leftDiv);

}

function ButtonHEX(theForm) {
	var allhexL = theForm.hexcode.value;
	var allhex = allhexL.toUpperCase();
	var rhex = allhex.slice(1,3);
	var ghex = allhex.slice(3,5);
	var bhex = allhex.slice(5,7);
	
	for (var i=0; i<hexarray.length; i++) {
		if (hexarray[i] == rhex) {
			RGB.R = i;
		}
		if (hexarray[i] == ghex) {
			RGB.G = i;
		}
		if (hexarray[i] == bhex) {
			RGB.B = i;
		}
	}

	if(theForm.ScaleRGB.checked == true) {scale = 1.0;}
	else { scale = 1.0 / 255.0; }
	var digits = (ScaleRGB == false) ? 4 : 2;
	
	theForm.RGB_R.value = (RGB.R * scale).toFixed(digits);
	theForm.RGB_G.value = (RGB.G * scale).toFixed(digits);
	theForm.RGB_B.value = (RGB.B * scale).toFixed(digits);

	ButtonRGB(theForm);
}


// ----------------------------------- slider --------------------------
function setFormLCh(elemId,smnum){
	if (elemId == 'slL') {converter.LCHab_L.value = (smnum*0.2).toFixed(1);}
	if (elemId == 'slC') {converter.LCHab_C.value = (smnum*0.2).toFixed(1);}
	if (elemId == 'slh') {converter.LCHab_H.value = (smnum*0.2).toFixed(1);}
}

function slider(elemId, sliderWidth, range1, range2, step) {
	var knobWidth = 17;				// ширина и высота бегунка
	var knobHeight = 21;			// изменяются в зависимости от используемых изображений
	var sliderHeight = 21;			// высота slider'а
	
	var offsX,tmp;					// вспомагательные переменные
	var d = document;
	var isIE = d.all || window.opera;	// определяем модель DOM
	var point = (sliderWidth-knobWidth-3)/(range2-range1);
	// point - количество пикселей на единицу значения
	
	var slider = d.createElement('DIV'); // создаем slider
	slider.id = elemId + '_slider';
	slider.className = 'slider';
	d.getElementById(elemId).appendChild(slider);	
	
	var knob = d.createElement('DIV');	// создаем ползунок
	knob.id = elemId + '_knob';
	knob.className = 'knob';
	slider.appendChild(knob); // добавляем его в документ
	
	knob.style.left = 0;			// бегунок в нулевое значение
	knob.style.width = knobWidth+'px';	
	knob.style.height = knobHeight+'px';
	slider.style.width = sliderWidth+'px';
	slider.style.height = sliderHeight+'px';
	
	var sliderOffset = slider.offsetLeft;			// sliderOffset - абсолютное смещение slider'а
	tmp = slider.offsetParent;		// от левого края в пикселях (в IE не работает)
	while(tmp.tagName != 'BODY') {
		sliderOffset += tmp.offsetLeft;		// тут его и находим
		tmp = tmp.offsetParent;
	}
	
	if(isIE)						// в зависимости от модели DOM
	{								// назначаем слушателей событий
		knob.onmousedown = startCoord;		
		slider.onclick = sliderClick;		
		knob.onmouseup = endCoord;		
		slider.onmouseup = endCoord;			
	}
	else {
		knob.addEventListener("mousedown", startCoord, true);		
		slider.addEventListener("click", sliderClick, true);		
		knob.addEventListener("mouseup", endCoord, true);	
		slider.addEventListener("mouseup", endCoord, true);	
	}


// далее подробно не описываю, кто захочет - разберется
//////////////////// функции установки/получения значения //////////////////////////

	function setValue(x)	// установка по пикселям
	{
		if(x < 0) knob.style.left = 0; 
		else if(x > sliderWidth-knobWidth-3) knob.style.left = (sliderWidth-3-knobWidth)+'px';
		else {
			if(step == 0) knob.style.left = x+'px';			
			else knob.style.left = Math.round(x/(step*point))*step*point+'px';
		}
		//d.getElementById('info').value = getValue();	// это вывод значения для примера
		
		//document.bgColor="#" + hexarray[getValue()] + hexarray[getValue()] + hexarray[getValue()];
		
		if (stooperSL == false) {
		smnum = getValue();
		setFormLCh(elemId,smnum);
		Slider2LCHab(document.converter);
		}
		stooperSL = false;
		
	}
	function setValue2(x)	// установка по значению
	{
		if(x < range1 || x > range2) alert('Value is not included into a slider range!');
		else setValue((x-range1)*point);
		
		//d.getElementById('info').value = getValue();
	}

	function getValue() 
	{return Math.round(parseInt(knob.style.left)/point)+range1;}

//////////////////////////////// слушатели событий ////////////////////////////////////

	function sliderClick(e) {	
		var x;
		if(isIE) {
			if(event.srcElement != slider) return; //IE onclick bug
			x = event.offsetX - Math.round(knobWidth/2);
		}	
		else x = e.pageX-sliderOffset-knobWidth/2;
		setValue(x);
	}

	function startCoord(e) {				
		if(isIE) {	
			offsX = event.clientX - parseInt(knob.style.left);
			slider.onmousemove = mov;
		}
		else {				
			slider.addEventListener("mousemove", mov, true);
		}
	}
	
	function mov(e)	{
		var x;	
		if(isIE) x = event.clientX-offsX;
		else x = e.pageX-sliderOffset-knobWidth/2;
		setValue(x);
	}

	function endCoord()	{
		if(isIE) slider.onmousemove = null;	
		else slider.removeEventListener("mousemove", mov, true);
	}

	// объявляем функции setValue2 и getValue как методы класса
	this.setValue = setValue2;
	this.getValue = getValue;
} // конец класса
// ----------------------------------- slider end --------------------------

// function cubicspline(массив X, массив Y, массив X-интерп)
// cubicspline return - массив Y-интерп
function cubicspline(bG,bH,aM){
	var H = bG.length;var bo = aM.length;var L=H;var O=new Array(H);var T=new Array(H);var G=new Array(H);var ap=new Array(bo);var bm=new Array(bo);var t=new Array(2);t[0]=new Array(H);t[1]=new Array(H);var next=new Array(2);var F=1,K,C=0,V,ab;var J=0;var l,v,bP;var ac,bF,R,aJ,aS,bk,bb,h,aR,bM;for(var i=0;i<bo;i++){ap[J]=aM[J];J++;}V=0;for(var i=0;i<L;i++){v=parseFloat(bG[V]);bP=parseFloat(bH[V]);V++;if(!isNaN(v)&& !isNaN(bP)){O[i]=v;T[i]=bP;}}K=1;for(var i=0;i<(L-1);i++){t[0][K]=O[K]-O[i];t[1][K]=(T[K]-T[i])/t[0][K];K++;}if(L==2){t[1][0]=t[0][0]=1.0;G[0]=2.0*t[1][1];}else{v=l=t[0][1];t[1][0]=t[0][2];t[0][0]=v+t[0][2];l*=l*t[1][2];G[0]=((v+2.0*t[0][0])*t[1][1]*t[0][2]+l)/t[0][0];}ab=L-1;for(var i=1;i<ab;i++){v= -(t[0][i+1]/t[1][i-1]);G[i]=v*G[i-1]+3.0*(t[0][i]*t[1][i+1]+t[0][i+1]*t[1][i]);t[1][i]=v*t[0][i-1]+2.0*(t[0][i]+t[0][i+1]);}if(L==2){G[1]=t[1][1];}else{if(L==3){G[2]=2.0*t[1][2];t[1][2]=1.0;v= -(1.0/t[1][1]);}else{v=t[0][L-2]+t[0][L-1];l=t[0][L-1]*t[0][L-1]*(T[L-2]-T[L-3]);l/=t[0][L-2];G[L-1]=((t[0][L-1]+2.0*v)*t[1][L-1]*t[0][L-2]+l)/v;v= -(v/t[1][L-2]);t[1][L-1]=t[0][L-2];}t[1][L-1]=v*t[0][L-2]+t[1][L-1];G[L-1]=(v*G[L-2]+G[L-1])/t[1][L-1];}for(var i=L-2;i>=0;i--){G[i]=(G[i]-t[0][i]*G[i+1])/t[1][i];}while(C<J){for(V=C;V<J;V++){if(ap[V]>=O[F])break;}if(V<J){if(F==(L-1))V=J;}ab=V-C;if(ab>0){aR=h=O[F]-O[F-1];next[1]=next[0]=0;bM=0.0;aS=(T[F]-T[F-1])/h;bk=(G[F-1]-aS)/h;bb=(G[F]-aS)/h;ac= -(bk+bk+bb);bF=ac+ac;R=(bk+bb)/h;aJ=R+R+R;for(k=0;k<ab;k++){l=ap[C+k]-O[F-1];bm[C+k]=T[F-1]+l*(G[F-1]+l*(ac+l*R));if(l<bM)next[0]=next[0]+1;if(l>aR)next[1]=next[1]+1;}if((next[0]>0)&&(F!=1)){for(k=C;k<V;k++){if(ap[k]<O[F-1])break;}V=k;for(k=0;k<F;k++){if(ap[V]<O[k])break;}F=(((k-1)>0)?(k-1):0);}C=V;}F++;if(F>=L)break;}
return bm;
}  //End of function cubicspline