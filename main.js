// configuration
var milkcocoa = new MilkCocoa("https://io-ihyw9k58f.mlkcca.com");
var bearDatastore = milkcocoa.dataStore("bear");
enchant();

window.onload = function(){
	console.log('hello enchantjs');
	var core = new Core(320, 320);
	core.preload('chara1.png');
	core.fps = 6;
	core.onload = function(){

        // class difinition
        var Bear = Class.create(Sprite, {
            initialize: function(x, y){
                Sprite.call(this, 32, 32);
                this.x = x;
                this.y = y;
                this.image = core.assets['chara1.png'];
                this.on('enterframe', function(){
                    if(core.input.left){this.x -= 5;}
		    	    if(core.input.right){this.x += 5;}
			        if(core.input.up){this.y -= 5;}
    	    		if(core.input.down){this.y += 5;}
	        		this.frame = this.age % 3;
                    bearDataStore.push({x : this.x, y:this.y},function(data){                                    
                          console.log("送信完了!");                                                             
                          novel.textArea.val("");
                    });
                });
                gameScene.addChild(this);
            }
        });

        var GameScene = Class.create(Scene, {
            initialize: function(string, stringColor, backgroundColor){
                Scene.call(this);
                this.backgroundColor = backgroundColor;
                var label = new Label();
                label.x = 80;
                label.y = 100;
                label.color = stringColor;
                label.font = '32px "Arial"';
                label.text = string;
                this.addChild(label);
            }
        });

        var gameScene = new GameScene('','','#BBB');
        var myBear = new Bear(0,0);

        var startScene = new GameScene('Game Start!', 'blue', '#EEE');
        startScene.on('touchstart', function(){
            core.pushScene(gameScene);
        });
        core.pushScene(startScene);

	}
	core.start();
};
