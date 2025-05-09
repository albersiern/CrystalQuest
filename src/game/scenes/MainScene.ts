import Phaser from 'phaser';

export default class MainScene extends Phaser.Scene {
  constructor() {
    super('MainScene');
  }

  preload() {
    // Load assets here
    this.load.image('logo', 'assets/logo.png');
  }

  create() {
    // Setup game objects here
    const logo = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'logo');
    logo.setInteractive();
    
    logo.on('pointerdown', () => {
      logo.setScale(1.1);
    });

    logo.on('pointerup', () => {
      logo.setScale(1);
    });
    
    // Add welcome text
    this.add.text(
      this.cameras.main.centerX, 
      this.cameras.main.centerY + 100, 
      'Welcome to Crystal Quest', 
      { 
        fontSize: '24px',
        color: '#ffffff'
      }
    ).setOrigin(0.5);
  }

  update() {
    // Game loop code here
  }
}
