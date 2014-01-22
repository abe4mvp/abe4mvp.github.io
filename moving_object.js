(function(root) {
	var Asteroids = root.Asteroids = (root.Asteroids || {});

<<<<<<< HEAD
=======


>>>>>>> 9b5f1a270f628d7a96c0eb411444d01a5ab27cbc
	var MovingObject = Asteroids.MovingObject = function(pos, vel, radius, color) {
		this.pos = [pos[0], pos[1]];
		this.vel = [vel[0], vel[1]];
		this.radius = radius;
		this.color = color;
	};

<<<<<<< HEAD
=======


>>>>>>> 9b5f1a270f628d7a96c0eb411444d01a5ab27cbc
	// Velocity is in pixels/second
	// Interval is in milliseconds
	MovingObject.prototype.move = function(interval, dimX, dimY) {
		this.pos[0] += this.vel[0] * interval / 1000;
		this.pos[1] += this.vel[1] * interval / 1000;
	};

<<<<<<< HEAD
	MovingObject.prototype.draw = function(ctx) {
=======

	MovingObject.prototype.draw = function(ctx) {
		// Draw a filled circle to represent the object
>>>>>>> 9b5f1a270f628d7a96c0eb411444d01a5ab27cbc
		ctx.fillStyle = this.color;
		ctx.beginPath();

		ctx.arc(
			this.pos[0],
			this.pos[1],
			this.radius,
			0,
			2 * Math.PI,
			false
		);

		ctx.fill();
	};

<<<<<<< HEAD
=======

>>>>>>> 9b5f1a270f628d7a96c0eb411444d01a5ab27cbc
	MovingObject.prototype.isCollidedWith = function(otherObject) {
		var dx = otherObject.pos[0] - this.pos[0];
		var dy = otherObject.pos[1] - this.pos[1];
		var dist = Math.sqrt(dx*dx + dy*dy);

		return (otherObject.radius + this.radius > dist);
	};
})(this);