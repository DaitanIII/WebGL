/* POINT */

var Point = function (x, y) {
  this.x = x || 0;// se i valori passati sono null vengono inizializzati a 0
  this.y = y || 0;
};

Point.prototype.toString = function() {	
   return "x = " + this.x + " , y = " + this.y;
};

oint.prototype.translate = function(dx,dy) {	
  this.x += dx;	
  this.y += dy;
  return this; // utile per il chaining
};

var randomPoint = function() {
  var x = Math.sin(Math.random() * 90) * 100;
  var y = Math.sin(Math.random() * 90) * 100;
  /*
	*oppure	
	*var x = Math.cell(Math.random * 100);
	*var y = Math.cell(Math.random * 100);
  */
  return new Point(x,y);
};


+var generatePoints = function(n) {
   var n = n || 1;
   var array = new Array(n);
 	for (var i = 0; i < n; i++) {
 	array[i] = randomPoint();
 	}
 return array;
};

var sqrt = Math.sqrt;
var pow = Math.pow;

Point.prototype.getDistance = function(point) {
  return sqrt(pow(point.y - this.y, 2) + pow(point.x - this.y, 2));
};


/* TRIANGLE */

var Triangle = function (p1, p2, p3) {
  this.p1 = p1;
  this.p2 = p2;
  this.p3 = p3;

  this.l1 = p2.getDistance(p3);
  this.l2 = p3.getDistance(p1);
  this.l3 = p1.getDistance(p2);
}

Triangle.prototype.getPerimeter = function() {
  return this.l1 + this.l2 + this.l3;
};

Triangle.prototype.getArea = function() {
  var p = this.getPerimeter() / 2;

  return sqrt(p*(p - this.l1)*(p - this.l2)*(p - this.l3));
};


var x1 = 0, y1 = 0;
var x2 = 10, y2 = 0;
var x3 = 0, y3 = 10;

var p1 = new Point(x1, y1);
var p2 = new Point(x2, y2);
var p3 = new Point(x3, y3);

var d = p1.getDistance(p2);

var t = new Triangle(p1,p2,p3);

var perimetro = t.getPerimeter();
var area = t.getArea();
