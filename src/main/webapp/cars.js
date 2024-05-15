//used car
function usedcar() {

	var x = document.getElementsByClassName("neww");
	var y = document.getElementsByClassName("usedd");
	var i;
	for (i = 0; i < x.length; i++) {
		x[i].style.display = 'none';
	}
	for (i = 0; i < y.length; i++) {
		y[i].style.display = 'block';
	}
}


//new car
function newcar() {

	var x = document.getElementsByClassName("usedd");
	var y = document.getElementsByClassName("neww");

	var i;
	for (i = 0; i < x.length; i++) {
		x[i].style.display = 'none';
	}
	for (i = 0; i < x.length; i++) {
		y[i].style.display = 'block';
	}

}

//all car
function allcar() {

	var x = document.getElementsByClassName("all");
	var i;
	for (i = 0; i < x.length; i++) {
		x[i].style.display = 'block';
	}
}

//show pune cars
function pune() {
	var x = document.getElementsByClassName("pune");
	var y = document.getElementsByClassName("punjab");
	var z = document.getElementsByClassName("lucknow");
	var a = document.getElementsByClassName("delhi");
	var b = document.getElementsByClassName("mumbai");
	var c = document.getElementsByClassName("jaipur");
	var d = document.getElementsByClassName("kolkata");
	var e = document.getElementsByClassName("noida");
	var f = document.getElementsByClassName("chandigarh");
	var g = document.getElementsByClassName("ludhiana");
	var h = document.getElementsByClassName("patna");
	var j = document.getElementsByClassName("agra");

	var i;
	for (i = 0; i < x.length; i++) {
		x[i].style.display = 'block';
		y[i].style.display = 'none';
		z[i].style.display = 'none';
		a[i].style.display = 'none';
		c[i].style.display = 'none';
		b[i].style.display = 'none';
		d[i].style.display = 'none';
		e[i].style.display = 'none';
		f[i].style.display = 'none';
		g[i].style.display = 'none';
		h[i].style.display = 'none';
		j[i].style.display = 'none';
	}
}
function punjab() {
	var y = document.getElementsByClassName("punjab");
	var x = document.getElementsByClassName("pune");
	var z = document.getElementsByClassName("lucknow");
	var a = document.getElementsByClassName("delhi");
	var b = document.getElementsByClassName("mumbai");
	var c = document.getElementsByClassName("jaipur");
	var d = document.getElementsByClassName("kolkata");
	var e = document.getElementsByClassName("noida");
	var f = document.getElementsByClassName("chandigarh");
	var g = document.getElementsByClassName("ludhiana");
	var h = document.getElementsByClassName("patna");
	var j = document.getElementsByClassName("agra");

	var i;
	for (i = 0; i < x.length; i++) {
		y[i].style.display = 'block';
		x[i].style.display = 'none';

		z[i].style.display = 'none';
		a[i].style.display = 'none';
		c[i].style.display = 'none';
		b[i].style.display = 'none';
		d[i].style.display = 'none';
		e[i].style.display = 'none';
		f[i].style.display = 'none';
		g[i].style.display = 'none';
		h[i].style.display = 'none';
		j[i].style.display = 'none';
	}
}
function lucknow() {
	var z = document.getElementsByClassName("lucknow");
	var x = document.getElementsByClassName("pune");
	var y = document.getElementsByClassName("punjab");

	var a = document.getElementsByClassName("delhi");
	var b = document.getElementsByClassName("mumbai");
	var c = document.getElementsByClassName("jaipur");
	var d = document.getElementsByClassName("kolkata");
	var e = document.getElementsByClassName("noida");
	var f = document.getElementsByClassName("chandigarh");
	var g = document.getElementsByClassName("ludhiana");
	var h = document.getElementsByClassName("patna");
	var j = document.getElementsByClassName("agra");

	var i;
	for (i = 0; i < x.length; i++) {
		z[i].style.display = 'block';
		x[i].style.display = 'none';
		y[i].style.display = 'none';

		a[i].style.display = 'none';
		c[i].style.display = 'none';
		b[i].style.display = 'none';
		d[i].style.display = 'none';
		e[i].style.display = 'none';
		f[i].style.display = 'none';
		g[i].style.display = 'none';
		h[i].style.display = 'none';
		j[i].style.display = 'none';
	}
}
function delhi() {
	var a = document.getElementsByClassName("delhi");
	var x = document.getElementsByClassName("pune");
	var y = document.getElementsByClassName("punjab");
	var z = document.getElementsByClassName("lucknow");

	var b = document.getElementsByClassName("mumbai");
	var c = document.getElementsByClassName("jaipur");
	var d = document.getElementsByClassName("kolkata");
	var e = document.getElementsByClassName("noida");
	var f = document.getElementsByClassName("chandigarh");
	var g = document.getElementsByClassName("ludhiana");
	var h = document.getElementsByClassName("patna");
	var j = document.getElementsByClassName("agra");

	var i;
	for (i = 0; i < x.length; i++) {
		a[i].style.display = 'block';
		x[i].style.display = 'none';
		y[i].style.display = 'none';
		z[i].style.display = 'none';

		c[i].style.display = 'none';
		b[i].style.display = 'none';
		d[i].style.display = 'none';
		e[i].style.display = 'none';
		f[i].style.display = 'none';
		g[i].style.display = 'none';
		h[i].style.display = 'none';
		j[i].style.display = 'none';
	}
}
function mumbai() {
	var b = document.getElementsByClassName("mumbai");
	var x = document.getElementsByClassName("pune");
	var y = document.getElementsByClassName("punjab");
	var z = document.getElementsByClassName("lucknow");
	var a = document.getElementsByClassName("delhi");

	var c = document.getElementsByClassName("jaipur");
	var d = document.getElementsByClassName("kolkata");
	var e = document.getElementsByClassName("noida");
	var f = document.getElementsByClassName("chandigarh");
	var g = document.getElementsByClassName("ludhiana");
	var h = document.getElementsByClassName("patna");
	var j = document.getElementsByClassName("agra");

	var i;
	for (i = 0; i < x.length; i++) {
		b[i].style.display = 'block';
		x[i].style.display = 'none';
		y[i].style.display = 'none';
		z[i].style.display = 'none';
		a[i].style.display = 'none';
		c[i].style.display = 'none';

		d[i].style.display = 'none';
		e[i].style.display = 'none';
		f[i].style.display = 'none';
		g[i].style.display = 'none';
		h[i].style.display = 'none';
		j[i].style.display = 'none';
	}
}
function jaipur() {
	var c = document.getElementsByClassName("jaipur");
	var x = document.getElementsByClassName("pune");
	var y = document.getElementsByClassName("punjab");
	var z = document.getElementsByClassName("lucknow");
	var a = document.getElementsByClassName("delhi");
	var b = document.getElementsByClassName("mumbai");

	var d = document.getElementsByClassName("kolkata");
	var e = document.getElementsByClassName("noida");
	var f = document.getElementsByClassName("chandigarh");
	var g = document.getElementsByClassName("ludhiana");
	var h = document.getElementsByClassName("patna");
	var j = document.getElementsByClassName("agra");

	var i;
	for (i = 0; i < x.length; i++) {
		c[i].style.display = 'block';
		x[i].style.display = 'none';
		y[i].style.display = 'none';
		z[i].style.display = 'none';
		a[i].style.display = 'none';

		b[i].style.display = 'none';
		d[i].style.display = 'none';
		e[i].style.display = 'none';
		f[i].style.display = 'none';
		g[i].style.display = 'none';
		h[i].style.display = 'none';
		j[i].style.display = 'none';
	}
}
function kolkata() {
	var d = document.getElementsByClassName("kolkata");
	var x = document.getElementsByClassName("pune");
	var y = document.getElementsByClassName("punjab");
	var z = document.getElementsByClassName("lucknow");
	var a = document.getElementsByClassName("delhi");
	var b = document.getElementsByClassName("mumbai");
	var c = document.getElementsByClassName("jaipur");

	var e = document.getElementsByClassName("noida");
	var f = document.getElementsByClassName("chandigarh");
	var g = document.getElementsByClassName("ludhiana");
	var h = document.getElementsByClassName("patna");
	var j = document.getElementsByClassName("agra");

	var i;
	for (i = 0; i < x.length; i++) {
		d[i].style.display = 'block';
		x[i].style.display = 'none';
		y[i].style.display = 'none';
		z[i].style.display = 'none';
		a[i].style.display = 'none';
		c[i].style.display = 'none';
		b[i].style.display = 'none';

		e[i].style.display = 'none';
		f[i].style.display = 'none';
		g[i].style.display = 'none';
		h[i].style.display = 'none';
		j[i].style.display = 'none';
	}
}
function noida() {
	var e = document.getElementsByClassName("noida");
	var x = document.getElementsByClassName("pune");
	var y = document.getElementsByClassName("punjab");
	var z = document.getElementsByClassName("lucknow");
	var a = document.getElementsByClassName("delhi");
	var b = document.getElementsByClassName("mumbai");
	var c = document.getElementsByClassName("jaipur");
	var d = document.getElementsByClassName("kolkata");

	var f = document.getElementsByClassName("chandigarh");
	var g = document.getElementsByClassName("ludhiana");
	var h = document.getElementsByClassName("patna");
	var j = document.getElementsByClassName("agra");

	var i;
	for (i = 0; i < x.length; i++) {
		e[i].style.display = 'block';
		x[i].style.display = 'none';
		y[i].style.display = 'none';
		z[i].style.display = 'none';
		a[i].style.display = 'none';
		c[i].style.display = 'none';
		b[i].style.display = 'none';
		d[i].style.display = 'none';

		f[i].style.display = 'none';
		g[i].style.display = 'none';
		h[i].style.display = 'none';
		j[i].style.display = 'none';
	}
}
function chandigarh() {
	var f = document.getElementsByClassName("chandigarh");
	var x = document.getElementsByClassName("pune");
	var y = document.getElementsByClassName("punjab");
	var z = document.getElementsByClassName("lucknow");
	var a = document.getElementsByClassName("delhi");
	var b = document.getElementsByClassName("mumbai");
	var c = document.getElementsByClassName("jaipur");
	var d = document.getElementsByClassName("kolkata");
	var e = document.getElementsByClassName("noida");

	var g = document.getElementsByClassName("ludhiana");
	var h = document.getElementsByClassName("patna");
	var j = document.getElementsByClassName("agra");

	var i;
	for (i = 0; i < x.length; i++) {
		f[i].style.display = 'block';
		x[i].style.display = 'none';
		y[i].style.display = 'none';
		z[i].style.display = 'none';
		a[i].style.display = 'none';
		c[i].style.display = 'none';
		b[i].style.display = 'none';
		d[i].style.display = 'none';
		e[i].style.display = 'none';

		g[i].style.display = 'none';
		h[i].style.display = 'none';
		j[i].style.display = 'none';
	}
}
function ludhiana() {
	var g = document.getElementsByClassName("ludhiana");
	var x = document.getElementsByClassName("pune");
	var y = document.getElementsByClassName("punjab");
	var z = document.getElementsByClassName("lucknow");
	var a = document.getElementsByClassName("delhi");
	var b = document.getElementsByClassName("mumbai");
	var c = document.getElementsByClassName("jaipur");
	var d = document.getElementsByClassName("kolkata");
	var e = document.getElementsByClassName("noida");
	var f = document.getElementsByClassName("chandigarh");

	var h = document.getElementsByClassName("patna");
	var j = document.getElementsByClassName("agra");

	var i;
	for (i = 0; i < x.length; i++) {
		g[i].style.display = 'block';
		x[i].style.display = 'none';
		y[i].style.display = 'none';
		z[i].style.display = 'none';
		a[i].style.display = 'none';
		c[i].style.display = 'none';
		b[i].style.display = 'none';
		d[i].style.display = 'none';
		e[i].style.display = 'none';
		f[i].style.display = 'none';

		h[i].style.display = 'none';
		j[i].style.display = 'none';
	}
}
function patna() {
	var h = document.getElementsByClassName("patna");
	var x = document.getElementsByClassName("pune");
	var y = document.getElementsByClassName("punjab");
	var z = document.getElementsByClassName("lucknow");
	var a = document.getElementsByClassName("delhi");
	var b = document.getElementsByClassName("mumbai");
	var c = document.getElementsByClassName("jaipur");
	var d = document.getElementsByClassName("kolkata");
	var e = document.getElementsByClassName("noida");
	var f = document.getElementsByClassName("chandigarh");
	var g = document.getElementsByClassName("ludhiana");

	var j = document.getElementsByClassName("agra");

	var i;
	for (i = 0; i < x.length; i++) {
		h[i].style.display = 'block';
		x[i].style.display = 'none';
		y[i].style.display = 'none';
		z[i].style.display = 'none';
		a[i].style.display = 'none';
		c[i].style.display = 'none';
		b[i].style.display = 'none';
		d[i].style.display = 'none';
		e[i].style.display = 'none';
		f[i].style.display = 'none';
		g[i].style.display = 'none';

		j[i].style.display = 'none';
	}
}
function agra() {
	var j = document.getElementsByClassName("agra");
	var x = document.getElementsByClassName("pune");
	var y = document.getElementsByClassName("punjab");
	var z = document.getElementsByClassName("lucknow");
	var a = document.getElementsByClassName("delhi");
	var b = document.getElementsByClassName("mumbai");
	var c = document.getElementsByClassName("jaipur");
	var d = document.getElementsByClassName("kolkata");
	var e = document.getElementsByClassName("noida");
	var f = document.getElementsByClassName("chandigarh");
	var g = document.getElementsByClassName("ludhiana");
	var h = document.getElementsByClassName("patna");


	var i;
	for (i = 0; i < x.length; i++) {
		j[i].style.display = 'block';
		x[i].style.display = 'none';
		y[i].style.display = 'none';
		z[i].style.display = 'none';
		a[i].style.display = 'none';
		c[i].style.display = 'none';
		b[i].style.display = 'none';
		d[i].style.display = 'none';
		e[i].style.display = 'none';
		f[i].style.display = 'none';
		g[i].style.display = 'none';
		h[i].style.display = 'none';

	}
}

function redcar(){
    document.getElementById("red1").style.display="block";
    document.getElementById("red2").style.display="block";
    document.getElementById("red3").style.display="block";
    document.getElementById("red4").style.display="block";
    document.getElementById("black1").style.display="none";
    document.getElementById("blue1").style.display="none";
    document.getElementById("silver1").style.display="none";
    document.getElementById("silver2").style.display="none";
    document.getElementById("silver3").style.display="none";
    document.getElementById("silver4").style.display="none";
    document.getElementById("silver5").style.display="none";
    document.getElementById("white1").style.display="none";
    document.getElementById("white2").style.display="none";
    document.getElementById("white3").style.display="none";
    document.getElementById("white4").style.display="none";
}
function blackcar(){
    document.getElementById("red1").style.display="none";
    document.getElementById("red2").style.display="none";
    document.getElementById("red3").style.display="none";
    document.getElementById("red4").style.display="none";
    document.getElementById("black1").style.display="block";
    document.getElementById("blue1").style.display="none";
    document.getElementById("silver1").style.display="none";
    document.getElementById("silver2").style.display="none";
    document.getElementById("silver3").style.display="none";
    document.getElementById("silver4").style.display="none";
    document.getElementById("silver5").style.display="none";
    document.getElementById("white1").style.display="none";
    document.getElementById("white2").style.display="none";
    document.getElementById("white3").style.display="none";
    document.getElementById("white4").style.display="none";
}
function bluecar(){
    document.getElementById("red1").style.display="none";
    document.getElementById("red2").style.display="none";
    document.getElementById("red3").style.display="none";
    document.getElementById("red4").style.display="none";
    document.getElementById("black1").style.display="none";
    document.getElementById("blue1").style.display="block";
    document.getElementById("silver1").style.display="none";
    document.getElementById("silver2").style.display="none";
    document.getElementById("silver3").style.display="none";
    document.getElementById("silver4").style.display="none";
    document.getElementById("silver5").style.display="none";
    document.getElementById("white1").style.display="none";
    document.getElementById("white2").style.display="none";
    document.getElementById("white3").style.display="none";
    document.getElementById("white4").style.display="none";
}
function silvercar(){
    document.getElementById("red1").style.display="none";
    document.getElementById("red2").style.display="none";
    document.getElementById("red3").style.display="none";
    document.getElementById("red4").style.display="none";
    document.getElementById("black1").style.display="none";
    document.getElementById("blue1").style.display="none";
    document.getElementById("silver1").style.display="block";
    document.getElementById("silver2").style.display="block";
    document.getElementById("silver3").style.display="block";
    document.getElementById("silver4").style.display="block";
    document.getElementById("silver5").style.display="block";
    document.getElementById("white1").style.display="none";
    document.getElementById("white2").style.display="none";
    document.getElementById("white3").style.display="none";
    document.getElementById("white4").style.display="none";
}
