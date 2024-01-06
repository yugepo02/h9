let petImage;
let backgroundImage;

function preload() {
  // 画像のパスを指定してプリロード
  petImage = loadImage('./assets/to-masu.png');
  backgroundImage = loadImage('./assets/y_bkg.png');
}

class Pet {
	constructor() {
		this.x = width / 2; // 初期位置：画面の中央
		this.y = height / 2;
		this.size = 100;
		this.speed = 5;

	}
	autoMove() {
		// ペットの座標を更新
		this.x += random(-this.speed, this.speed);
		this.y += random(-this.speed, this.speed);
	
		// 画面からはみ出ないように制御
		this.x = constrain(this.x, 0, width - this.size);
		this.y = constrain(this.y, 0, height - this.size);
	  }

  
	evolve() {
	  // 進化ロジック
	  if (this.energy > 150 && this.level < 3) {
		this.level++;
		this.size += 30; // 進化後のサイズ
	  }
	}
  
	update() {
	  // ペットの属性やアクションの更新ロジック
	  this.energy -= 0.1;
	  this.evolve();
	}
  
	display() {
	  // 画像表示
	  //image(petImage, this.x - this.size / 2, this.y - this.size / 2, this.size, this.size);
	  image(petImage, this.x, this.y, this.size, this.size);
	}
  }

  function setup() {
	//createCanvas(1000, 800);
	createCanvas(backgroundImage.width, backgroundImage.height);
	pet = new Pet(width / 2, height / 2);
  }

  function draw() {
	background(backgroundImage);
	pet.update();
	pet.display();
	pet.autoMove(); // ペットを自動で動かす
	pet.display();
  }
  
  