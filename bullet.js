(function(root) {
	var Asteroids = root.Asteroids = (root.Asteroids || {});

<<<<<<< HEAD
	var Bullet = Asteroids.Bullet = function(pos, direction) {
		var vel = [	Bullet.SPEED * Math.cos(direction),
					Bullet.SPEED * Math.sin(direction)];

		Asteroids.MovingObject.call(this, pos,
=======


	var Bullet = Asteroids.Bullet = function(ship) {
		var vel = [	Bullet.SPEED * Math.cos(ship.direction) + ship.vel[0],
					Bullet.SPEED * Math.sin(ship.direction) + ship.vel[1] ];

		// Call parent class's constructor
		Asteroids.MovingObject.call(this, ship.pos,
>>>>>>> 9b5f1a270f628d7a96c0eb411444d01a5ab27cbc
										  vel,
										  Bullet.RADIUS,
										  Bullet.COLOR);
	};

	Bullet.inherits(Asteroids.MovingObject);

<<<<<<< HEAD
	Bullet.RADIUS = 2;
	Bullet.COLOR = "lightGreen";
	Bullet.SPEED = 50/1; // pixels/second
=======


	// Constants
	Bullet.RADIUS = 2;
	Bullet.COLOR = "lightGreen";
	Bullet.SPEED = 200/1; // pixels/second


>>>>>>> 9b5f1a270f628d7a96c0eb411444d01a5ab27cbc
})(this);