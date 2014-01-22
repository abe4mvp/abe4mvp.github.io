(function(root) {
	var Asteroids = root.Asteroids = (root.Asteroids || {});

<<<<<<< HEAD
=======


>>>>>>> 9b5f1a270f628d7a96c0eb411444d01a5ab27cbc
	var Game = Asteroids.Game = function(ctx) {
		this.ctx = ctx;
		this.interval = 1000/(Game.FPS); // milliseconds 
		
		// Bind pause key
		var self = this;
<<<<<<< HEAD
		
=======
>>>>>>> 9b5f1a270f628d7a96c0eb411444d01a5ab27cbc
		key("p", function () {
			self.togglePaused();
			return false;
		});	
		
<<<<<<< HEAD
		this.restart();
	};
	
=======
		// Reset game
		this.reset();
	};



	// Constants
>>>>>>> 9b5f1a270f628d7a96c0eb411444d01a5ab27cbc

	Game.DIM_X = 500;
	Game.DIM_Y = 500;
	Game.FPS = 30; // Frames per second
	Game.NUM_ASTEROIDS = 10;
	Game.BACKGROUND_COLOR = "black"

<<<<<<< HEAD
	Game.prototype.restart = function() {
=======


	Game.prototype.reset = function() {
>>>>>>> 9b5f1a270f628d7a96c0eb411444d01a5ab27cbc
		this.ship = new Asteroids.Ship([Math.floor(Game.DIM_X/2),
										Math.floor(Game.DIM_Y/2)]);
										
		this.asteroids = [];
		this.addAsteroids(Game.NUM_ASTEROIDS);

		this.bullets = [];
		
		this.score = 0;
		
<<<<<<< HEAD
=======
		// Clear _downKeys array in keymaster.js
		// to remove keys pressed when the game is paused
>>>>>>> 9b5f1a270f628d7a96c0eb411444d01a5ab27cbc
	    while (key._downKeys.length > 0) {
	       key._downKeys.pop();
	    }
	};
	
<<<<<<< HEAD
	Game.prototype.addAsteroids = function(numAsteroids, pos, radius) {
=======

	Game.prototype.addAsteroids = function(numAsteroids) {
>>>>>>> 9b5f1a270f628d7a96c0eb411444d01a5ab27cbc
		for (var i = 0; i < numAsteroids; i++) {
			var asteroid = null;
			
			do {
				asteroid = Asteroids.Asteroid.randomAsteroid(Game.DIM_X,
<<<<<<< HEAD
															 Game.DIM_Y,
														 	 pos,
														 	 radius);
=======
															 Game.DIM_Y);
>>>>>>> 9b5f1a270f628d7a96c0eb411444d01a5ab27cbc
			} while (asteroid.isCollidedWith(this.ship));

			this.asteroids.push(asteroid);
		}
	};

<<<<<<< HEAD
=======

>>>>>>> 9b5f1a270f628d7a96c0eb411444d01a5ab27cbc
	Game.prototype.movingObjects = function() {
		return [this.ship].concat(this.asteroids).concat(this.bullets);
	};

<<<<<<< HEAD
	Game.prototype.draw = function() {
		this.ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);

		var self = this;

=======

	Game.prototype.draw = function() {
		this.ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);

		// Draw objects
		var self = this;
>>>>>>> 9b5f1a270f628d7a96c0eb411444d01a5ab27cbc
		this.movingObjects().forEach(function(obj) {
			obj.draw(self.ctx);
		});
		
<<<<<<< HEAD
=======
		// Draw score box
>>>>>>> 9b5f1a270f628d7a96c0eb411444d01a5ab27cbc
		this.ctx.font="20px Sans-Serif";
		this.ctx.fillStyle="gray"
		this.ctx.fillText("Score: " + this.score, 20, 30);
	};

<<<<<<< HEAD
	Game.prototype.move = function() {
		var self = this;

=======

	Game.prototype.move = function() {
		var self = this;
>>>>>>> 9b5f1a270f628d7a96c0eb411444d01a5ab27cbc
		this.movingObjects().forEach(function(obj) {
			obj.move(self.interval, Game.DIM_X, Game.DIM_Y);
		});
	};

<<<<<<< HEAD
	Game.prototype.step = function() {	
		var ship = this.ship;
		
=======

	Game.prototype.step = function() {	
		// Check key presses
		var ship = this.ship;

>>>>>>> 9b5f1a270f628d7a96c0eb411444d01a5ab27cbc
		if (key.isPressed('up')) {
			ship.power(ship.getImpulse("forward"));
		} else if (key.isPressed('down')) {
			ship.power(ship.getImpulse("reverse"));
		}

		if (key.isPressed('left')) {
			ship.power(ship.getImpulse("leftturn"));
		} else if (key.isPressed('right')) {
			ship.power(ship.getImpulse("rightturn"));
		}

		if (key.isPressed('space') && ship.canFire) {
			this.fireBullet();
		}
<<<<<<< HEAD

		
=======
		
		// Refresh
>>>>>>> 9b5f1a270f628d7a96c0eb411444d01a5ab27cbc
		this.move();
		this.draw();
		this.checkCollisions();
	};

<<<<<<< HEAD
=======

>>>>>>> 9b5f1a270f628d7a96c0eb411444d01a5ab27cbc
	Game.prototype.start = function() {
		var self = this;
		this.intervalID = setInterval(function() {
			self.step();
		}, self.interval);
		
		this.paused = false;
		
		this.bindKeyHandlers();
	};

<<<<<<< HEAD
	Game.prototype.checkCollisions = function() {
		// Check collisions between ship and asteroids

=======

	Game.prototype.checkCollisions = function() {
		// Check collisions between ship and asteroids
>>>>>>> 9b5f1a270f628d7a96c0eb411444d01a5ab27cbc
		var self = this;
		this.asteroids.forEach(function(asteroid) {
			if (self.ship.isCollidedWith(asteroid)) {
				self.stop();
				if (confirm("You lost! Humanity is doomed!\nDo you want to try again?")) {
<<<<<<< HEAD
					self.restart();
=======
					self.reset();
>>>>>>> 9b5f1a270f628d7a96c0eb411444d01a5ab27cbc
					self.start();
				}
			}
		});
		
<<<<<<< HEAD
		this.checkBulletHits();
	};
	
=======
		// Check collisions between bullets and asteroids
		this.checkBulletHits();
	};
	

>>>>>>> 9b5f1a270f628d7a96c0eb411444d01a5ab27cbc
	Game.prototype.checkBulletHits = function () {
		// Check collisions between bullets and asteroids
		numBullets = this.bullets.length;
		for (var i = numBullets - 1; i >= 0 ; i--) {
			numAsteroids = this.asteroids.length;
			for (var j = numAsteroids - 1; j >= 0; j--) {
				if (this.bullets[i].isCollidedWith(this.asteroids[j])) {
<<<<<<< HEAD
					this.removeBullet(i);
					numBullets--;
					
					var asteroid = this.asteroids[j];
	
					if (asteroid.radius !== Asteroids.Asteroid.RADIUS) {
						numAsteroids--;
					} else {
						this.addAsteroids(2, asteroid.pos, asteroid.radius/2);
						numAsteroids++;
					}
					
					this.removeAsteroid(j);
					
=======
					// If the bullet hits an asteroid
					// Remove the bullet
					this.removeBullet(i);
					numBullets--;
					
					// Split the asteroid if it's big enough
					var self = this;
					var asteroid = this.asteroids[j];
					
					if (asteroid.radius !== Asteroids.Asteroid.RADIUS) {
						numAsteroids--;
					} else {
						asteroid.splitAsteroids().forEach(function(a) {
							self.asteroids.push(a);
						});
						numAsteroids++;
					}
					
					// Remove the asteroid hit
					this.removeAsteroid(j);

					// Increment the score
>>>>>>> 9b5f1a270f628d7a96c0eb411444d01a5ab27cbc
					this.score++;
				}
			}
		}
		
		// Replace asteroids that were destroyed
<<<<<<< HEAD
		this.addAsteroids(10-this.asteroids.length); 
	};

	Game.prototype.stop = function() {
		clearInterval(this.intervalID);
		this.paused = true;
		
=======
		this.addAsteroids(Game.NUM_ASTEROIDS - this.asteroids.length); 
	};


	Game.prototype.stop = function() {
		// Stop timer
		clearInterval(this.intervalID);
		this.paused = true;
		
		// Unbind ship controls
>>>>>>> 9b5f1a270f628d7a96c0eb411444d01a5ab27cbc
		["up" , "down", "left", "right", "space"].forEach(function (k) {
			key.unbind(k);
		});
							
<<<<<<< HEAD
=======
		// Show pause text
>>>>>>> 9b5f1a270f628d7a96c0eb411444d01a5ab27cbc
		this.ctx.font="40px Sans-Serif";
		this.ctx.fillStyle="green"
		this.ctx.fillText("PAUSED", Game.DIM_X/2 - 75 ,Game.DIM_Y/2+ 15);
	};
	
<<<<<<< HEAD
=======

>>>>>>> 9b5f1a270f628d7a96c0eb411444d01a5ab27cbc
	Game.prototype.togglePaused = function () {
		if (this.paused) {
			this.start();
		} else {
			this.stop();
		}
	}

<<<<<<< HEAD
=======

>>>>>>> 9b5f1a270f628d7a96c0eb411444d01a5ab27cbc
	Game.prototype.bindKeyHandlers = function() {
		var ship = this.ship;
		var self = this;
		
<<<<<<< HEAD
=======
		// For each key, prevent the default action (e.g. page scrolling)
>>>>>>> 9b5f1a270f628d7a96c0eb411444d01a5ab27cbc
		["up" , "down", "left", "right", "space"].forEach(function (k) {
			key(k, function() {
				return false;
			});
		});
	};

<<<<<<< HEAD
=======

>>>>>>> 9b5f1a270f628d7a96c0eb411444d01a5ab27cbc
	Game.prototype.fireBullet = function() {
		this.bullets.push(this.ship.fireBullet());
	};

<<<<<<< HEAD
=======

>>>>>>> 9b5f1a270f628d7a96c0eb411444d01a5ab27cbc
	Game.prototype.removeAsteroid = function(index) {
		this.asteroids.splice(index, 1);
	};

<<<<<<< HEAD
=======

>>>>>>> 9b5f1a270f628d7a96c0eb411444d01a5ab27cbc
	Game.prototype.removeBullet = function(index) {
		this.bullets.splice(index, 1);
	};
})(this);