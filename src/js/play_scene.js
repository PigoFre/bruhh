'use strict';

var PlayScene = {
	create() {
		var logo = this.game.add.sprite(
			this.game.world.centerX, this.game.world.centerY, 'logo');
		logo.anchor.setTo(0.5, 0.5);
	}
};

module.exports = PlayScene;
