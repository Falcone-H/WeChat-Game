
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/scripts/Game');
require('./assets/scripts/Player');
require('./assets/scripts/star');

                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Game.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '56720Wza9tJirtg4vQsYyPs', 'Game');
// scripts/Game.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    // �������ǵ�Ԥ����Դ
    starPrefab: {
      "default": null,
      type: cc.Prefab
    },
    // ���ǲ�������ʧʱ��������Χ
    maxStarDuration: 0,
    minStarDuration: 0,
    // ����ڵ㣬����ȷ���������ɵĸ߶�
    ground: {
      "default": null,
      type: cc.Node
    },
    // Player �ڵ㣬 ���ڻ�ȡ���ǵ����ĸ߶ȣ��Ϳ��������ж��Ŀ���
    player: {
      "default": null,
      type: cc.Node
    },
    scoreDisplay: {
      "default": null,
      type: cc.Label
    },
    scoreAudio: {
      "default": null,
      type: cc.AudioClip
    }
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    // ��ȡ�����y������
    this.groundY = this.ground.y + this.ground.height / 2; // ��ʼ����ʱ��

    this.timer = 0;
    this.starDuration = 0; // ����һ���µ�����

    this.spawnNewStar(); // ��ʼ���Ʒ�

    this.score = 0;
  },
  spawnNewStar: function spawnNewStar() {
    // ʹ�ø�����ģ���ڳ���������һ���½ڵ�
    var newStar = cc.instantiate(this.starPrefab); // �������Ľڵ����ӵ�Canvas�ڵ�����

    this.node.addChild(newStar); // Ϊ��������һ�����λ��

    newStar.setPosition(this.getNewStarPosition());
    newStar.getComponent('star').game = this; // ���ü�ʱ����������ʧʱ�䷶Χ���ȡһ��ֵ

    this.starDuration = this.minStarDuration + Math.random() * (this.maxStarDuration - this.minStarDuration);
    this.timer = 0;
  },
  getNewStarPosition: function getNewStarPosition() {
    var randX = 0; // ���ݵ�ƽ��λ�ú�������Ծ�߶ȣ�����õ�һ�����ǵ�y����

    var randY = this.groundY + Math.random() * this.player.getComponent('Player').jumpHeight + 50; // ������Ļ���ȣ�����õ�һ�����ǵ�x����

    var maxX = this.node.width / 2;
    randX = (Math.random() - 0.5) * 2 * maxX; // ������������

    return cc.v2(randX, randY);
  },
  gainScore: function gainScore() {
    this.score += 1; // ���� scoreDisplay Label ������

    this.scoreDisplay.string = 'Score : ' + this.score; // ���ŵ÷���Ч

    cc.audioEngine.playEffect(this.scoreAudio, false);
  },
  gameOver: function gameOver() {
    // ֹͣPlayer�ڵ����Ծ����
    this.player.stopAllActions(); // ���¼��س��� game

    cc.director.loadScene('game');
  },
  update: function update(dt) {
    // ÿ֡���¼�ʱ���������޶Ȼ�û�������µ����ǣ��ͻ������Ϸʧ���߼�
    if (this.timer > this.starDuration) {
      this.gameOver();
      return;
    }

    this.timer += dt;
  }
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcR2FtZS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInN0YXJQcmVmYWIiLCJ0eXBlIiwiUHJlZmFiIiwibWF4U3RhckR1cmF0aW9uIiwibWluU3RhckR1cmF0aW9uIiwiZ3JvdW5kIiwiTm9kZSIsInBsYXllciIsInNjb3JlRGlzcGxheSIsIkxhYmVsIiwic2NvcmVBdWRpbyIsIkF1ZGlvQ2xpcCIsIm9uTG9hZCIsImdyb3VuZFkiLCJ5IiwiaGVpZ2h0IiwidGltZXIiLCJzdGFyRHVyYXRpb24iLCJzcGF3bk5ld1N0YXIiLCJzY29yZSIsIm5ld1N0YXIiLCJpbnN0YW50aWF0ZSIsIm5vZGUiLCJhZGRDaGlsZCIsInNldFBvc2l0aW9uIiwiZ2V0TmV3U3RhclBvc2l0aW9uIiwiZ2V0Q29tcG9uZW50IiwiZ2FtZSIsIk1hdGgiLCJyYW5kb20iLCJyYW5kWCIsInJhbmRZIiwianVtcEhlaWdodCIsIm1heFgiLCJ3aWR0aCIsInYyIiwiZ2FpblNjb3JlIiwic3RyaW5nIiwiYXVkaW9FbmdpbmUiLCJwbGF5RWZmZWN0IiwiZ2FtZU92ZXIiLCJzdG9wQWxsQWN0aW9ucyIsImRpcmVjdG9yIiwibG9hZFNjZW5lIiwidXBkYXRlIiwiZHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSO0FBQ0FDLElBQUFBLFVBQVUsRUFBRTtBQUNSLGlCQUFTLElBREQ7QUFFUkMsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0FBRkQsS0FGSjtBQU9SO0FBQ0FDLElBQUFBLGVBQWUsRUFBRSxDQVJUO0FBU1JDLElBQUFBLGVBQWUsRUFBRSxDQVRUO0FBV1I7QUFDQUMsSUFBQUEsTUFBTSxFQUFFO0FBQ0osaUJBQVMsSUFETDtBQUVKSixNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ1U7QUFGTCxLQVpBO0FBaUJSO0FBQ0FDLElBQUFBLE1BQU0sRUFBRTtBQUNKLGlCQUFTLElBREw7QUFFSk4sTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNVO0FBRkwsS0FsQkE7QUF1QlJFLElBQUFBLFlBQVksRUFBRTtBQUNWLGlCQUFTLElBREM7QUFFVlAsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNhO0FBRkMsS0F2Qk47QUE0QlJDLElBQUFBLFVBQVUsRUFBRTtBQUNSLGlCQUFTLElBREQ7QUFFUlQsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNlO0FBRkQ7QUE1QkosR0FIUDtBQXNDTDtBQUVBQyxFQUFBQSxNQUFNLEVBQUUsa0JBQVk7QUFDaEI7QUFDQSxTQUFLQyxPQUFMLEdBQWUsS0FBS1IsTUFBTCxDQUFZUyxDQUFaLEdBQWdCLEtBQUtULE1BQUwsQ0FBWVUsTUFBWixHQUFtQixDQUFsRCxDQUZnQixDQUdoQjs7QUFDQSxTQUFLQyxLQUFMLEdBQWEsQ0FBYjtBQUNBLFNBQUtDLFlBQUwsR0FBb0IsQ0FBcEIsQ0FMZ0IsQ0FNaEI7O0FBQ0EsU0FBS0MsWUFBTCxHQVBnQixDQVFoQjs7QUFDQSxTQUFLQyxLQUFMLEdBQWEsQ0FBYjtBQUNILEdBbERJO0FBb0RMRCxFQUFBQSxZQUFZLEVBQUUsd0JBQVc7QUFDckI7QUFDQSxRQUFJRSxPQUFPLEdBQUd4QixFQUFFLENBQUN5QixXQUFILENBQWUsS0FBS3JCLFVBQXBCLENBQWQsQ0FGcUIsQ0FHckI7O0FBQ0EsU0FBS3NCLElBQUwsQ0FBVUMsUUFBVixDQUFtQkgsT0FBbkIsRUFKcUIsQ0FLckI7O0FBQ0FBLElBQUFBLE9BQU8sQ0FBQ0ksV0FBUixDQUFvQixLQUFLQyxrQkFBTCxFQUFwQjtBQUVBTCxJQUFBQSxPQUFPLENBQUNNLFlBQVIsQ0FBcUIsTUFBckIsRUFBNkJDLElBQTdCLEdBQW9DLElBQXBDLENBUnFCLENBVXJCOztBQUNBLFNBQUtWLFlBQUwsR0FBb0IsS0FBS2IsZUFBTCxHQUF1QndCLElBQUksQ0FBQ0MsTUFBTCxNQUFpQixLQUFLMUIsZUFBTCxHQUF1QixLQUFLQyxlQUE3QyxDQUEzQztBQUNBLFNBQUtZLEtBQUwsR0FBYSxDQUFiO0FBQ0gsR0FqRUk7QUFtRUxTLEVBQUFBLGtCQUFrQixFQUFFLDhCQUFXO0FBQzNCLFFBQUlLLEtBQUssR0FBRyxDQUFaLENBRDJCLENBRTNCOztBQUNBLFFBQUlDLEtBQUssR0FBRyxLQUFLbEIsT0FBTCxHQUFlZSxJQUFJLENBQUNDLE1BQUwsS0FBZ0IsS0FBS3RCLE1BQUwsQ0FBWW1CLFlBQVosQ0FBeUIsUUFBekIsRUFBbUNNLFVBQWxFLEdBQStFLEVBQTNGLENBSDJCLENBSTNCOztBQUNBLFFBQUlDLElBQUksR0FBRyxLQUFLWCxJQUFMLENBQVVZLEtBQVYsR0FBZ0IsQ0FBM0I7QUFDQUosSUFBQUEsS0FBSyxHQUFHLENBQUNGLElBQUksQ0FBQ0MsTUFBTCxLQUFnQixHQUFqQixJQUF3QixDQUF4QixHQUE0QkksSUFBcEMsQ0FOMkIsQ0FPM0I7O0FBQ0EsV0FBT3JDLEVBQUUsQ0FBQ3VDLEVBQUgsQ0FBTUwsS0FBTixFQUFhQyxLQUFiLENBQVA7QUFDSCxHQTVFSTtBQThFTEssRUFBQUEsU0FBUyxFQUFFLHFCQUFXO0FBQ2xCLFNBQUtqQixLQUFMLElBQWMsQ0FBZCxDQURrQixDQUVsQjs7QUFDQSxTQUFLWCxZQUFMLENBQWtCNkIsTUFBbEIsR0FBMkIsYUFBYSxLQUFLbEIsS0FBN0MsQ0FIa0IsQ0FJbEI7O0FBQ0F2QixJQUFBQSxFQUFFLENBQUMwQyxXQUFILENBQWVDLFVBQWYsQ0FBMEIsS0FBSzdCLFVBQS9CLEVBQTJDLEtBQTNDO0FBQ0gsR0FwRkk7QUFzRkw4QixFQUFBQSxRQUFRLEVBQUUsb0JBQVc7QUFDakI7QUFDQSxTQUFLakMsTUFBTCxDQUFZa0MsY0FBWixHQUZpQixDQUdqQjs7QUFDQTdDLElBQUFBLEVBQUUsQ0FBQzhDLFFBQUgsQ0FBWUMsU0FBWixDQUFzQixNQUF0QjtBQUNILEdBM0ZJO0FBNkZMQyxFQUFBQSxNQUFNLEVBQUUsZ0JBQVVDLEVBQVYsRUFBYztBQUNsQjtBQUNBLFFBQUcsS0FBSzdCLEtBQUwsR0FBYSxLQUFLQyxZQUFyQixFQUFtQztBQUMvQixXQUFLdUIsUUFBTDtBQUNBO0FBQ0g7O0FBQ0QsU0FBS3hCLEtBQUwsSUFBYzZCLEVBQWQ7QUFDSDtBQXBHSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgLy8g77+977+977+977+977+977+977+9x7Xvv73UpO+/ve+/ve+/ve+/vdS0XHJcbiAgICAgICAgc3RhclByZWZhYjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5QcmVmYWIsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLy8g77+977+977+9x7Lvv73vv73vv73vv73vv73vv73vv73Kp8qx77+977+977+977+977+977+977+977+9zqdcclxuICAgICAgICBtYXhTdGFyRHVyYXRpb246IDAsXHJcbiAgICAgICAgbWluU3RhckR1cmF0aW9uOiAwLFxyXG5cclxuICAgICAgICAvLyDvv73vv73vv73vv73ateOjrO+/ve+/ve+/ve+/vci377+977+977+977+977+977+977+977+977+9ybXEuN+277+9XHJcbiAgICAgICAgZ3JvdW5kOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGUsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLy8gUGxheWVyIO+/vdq146OsIO+/ve+/ve+/vdq777+9yKHvv73vv73vv73Hte+/ve+/ve+/ve+/vcS437bIo++/ve+/vc2/77+977+977+977+977+977+977+977+90Lbvv73vv73Ev++/ve+/ve+/vVxyXG4gICAgICAgIHBsYXllcjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlLFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHNjb3JlRGlzcGxheToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbCxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBzY29yZUF1ZGlvOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkF1ZGlvQ2xpcCxcclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyDvv73vv73Ioe+/ve+/ve+/ve+/ve+/vXnvv73vv73vv73vv73vv73vv71cclxuICAgICAgICB0aGlzLmdyb3VuZFkgPSB0aGlzLmdyb3VuZC55ICsgdGhpcy5ncm91bmQuaGVpZ2h0LzI7XHJcbiAgICAgICAgLy8g77+977+9yrzvv73vv73vv73vv73Kse+/ve+/vVxyXG4gICAgICAgIHRoaXMudGltZXIgPSAwO1xyXG4gICAgICAgIHRoaXMuc3RhckR1cmF0aW9uID0gMDtcclxuICAgICAgICAvLyDvv73vv73vv73vv73Su++/ve+/ve+/vcK177+977+977+977+977+9XHJcbiAgICAgICAgdGhpcy5zcGF3bk5ld1N0YXIoKTtcclxuICAgICAgICAvLyDvv73vv73KvO+/ve+/ve+/vca377+9XHJcbiAgICAgICAgdGhpcy5zY29yZSA9IDA7XHJcbiAgICB9LFxyXG5cclxuICAgIHNwYXduTmV3U3RhcjogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgLy8gyrnvv73DuO+/ve+/ve+/ve+/ve+/vcSj77+977+977+92rPvv73vv73vv73vv73vv73vv73vv73vv73vv73Su++/ve+/ve+/vcK92rXvv71cclxuICAgICAgICB2YXIgbmV3U3RhciA9IGNjLmluc3RhbnRpYXRlKHRoaXMuc3RhclByZWZhYik7XHJcbiAgICAgICAgLy8g77+977+977+977+977+977+977+9xL3ate+/ve+/ve+/ve+/vdO177+9Q2FudmFz77+92rXvv73vv73vv73vv73vv71cclxuICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQobmV3U3Rhcik7XHJcbiAgICAgICAgLy8gzqrvv73vv73vv73vv73vv73vv73vv73vv73Su++/ve+/ve+/ve+/ve+/vc6777+977+9XHJcbiAgICAgICAgbmV3U3Rhci5zZXRQb3NpdGlvbih0aGlzLmdldE5ld1N0YXJQb3NpdGlvbigpKTtcclxuXHJcbiAgICAgICAgbmV3U3Rhci5nZXRDb21wb25lbnQoJ3N0YXInKS5nYW1lID0gdGhpcztcclxuXHJcbiAgICAgICAgLy8g77+977+977+9w7zvv73Kse+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/vcqnyrHvv73kt7bOp++/ve+/ve+/vcih0rvvv73vv73WtVxyXG4gICAgICAgIHRoaXMuc3RhckR1cmF0aW9uID0gdGhpcy5taW5TdGFyRHVyYXRpb24gKyBNYXRoLnJhbmRvbSgpICogKHRoaXMubWF4U3RhckR1cmF0aW9uIC0gdGhpcy5taW5TdGFyRHVyYXRpb24pO1xyXG4gICAgICAgIHRoaXMudGltZXIgPSAwO1xyXG4gICAgfSxcclxuXHJcbiAgICBnZXROZXdTdGFyUG9zaXRpb246IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciByYW5kWCA9IDA7XHJcbiAgICAgICAgLy8g77+977+977+93bXvv73Gve+/ve+/vc6777+9w7rvv73vv73vv73vv73vv73vv73vv73Uvu+/vd+2yKPvv73vv73vv73vv73vv73Dte+/vdK777+977+977+977+977+9x7Xvv71577+977+977+977+9XHJcbiAgICAgICAgdmFyIHJhbmRZID0gdGhpcy5ncm91bmRZICsgTWF0aC5yYW5kb20oKSAqIHRoaXMucGxheWVyLmdldENvbXBvbmVudCgnUGxheWVyJykuanVtcEhlaWdodCArIDUwO1xyXG4gICAgICAgIC8vIO+/ve+/ve+/ve+/ve+/ve+/vcS777+977+977+9yKPvv73vv73vv73vv73vv73Dte+/vdK777+977+977+977+977+9x7Xvv71477+977+977+977+9XHJcbiAgICAgICAgdmFyIG1heFggPSB0aGlzLm5vZGUud2lkdGgvMjtcclxuICAgICAgICByYW5kWCA9IChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIDIgKiBtYXhYO1xyXG4gICAgICAgIC8vIO+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/vVxyXG4gICAgICAgIHJldHVybiBjYy52MihyYW5kWCwgcmFuZFkpO1xyXG4gICAgfSxcclxuXHJcbiAgICBnYWluU2NvcmU6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuc2NvcmUgKz0gMTtcclxuICAgICAgICAvLyDvv73vv73vv73vv70gc2NvcmVEaXNwbGF5IExhYmVsIO+/ve+/ve+/ve+/ve+/ve+/vVxyXG4gICAgICAgIHRoaXMuc2NvcmVEaXNwbGF5LnN0cmluZyA9ICdTY29yZSA6ICcgKyB0aGlzLnNjb3JlO1xyXG4gICAgICAgIC8vIO+/ve+/ve+/vcW1w7fvv73vv73vv73Qp1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5zY29yZUF1ZGlvLCBmYWxzZSk7XHJcbiAgICB9LFxyXG5cclxuICAgIGdhbWVPdmVyOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAvLyDNo9a5UGxheWVy77+92rXvv73vv73vv73vv73Uvu+/ve+/ve+/ve+/vVxyXG4gICAgICAgIHRoaXMucGxheWVyLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgLy8g77+977+977+9wrzvv73vv73Ys++/ve+/ve+/vSBnYW1lXHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdnYW1lJyk7XHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XHJcbiAgICAgICAgLy8gw7/Woe+/ve+/ve+/vcK877+9yrHvv73vv73vv73vv73vv73vv73vv73vv73vv73etsi777+9w7vvv73vv73vv73vv73vv73vv73vv73Cte+/ve+/ve+/ve+/vcej77+977+9zbvvv73vv73vv73vv73vv73vv73Pt8qn77+977+977+937zvv71cclxuICAgICAgICBpZih0aGlzLnRpbWVyID4gdGhpcy5zdGFyRHVyYXRpb24pIHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lT3ZlcigpO1xyXG4gICAgICAgICAgICByZXR1cm4gO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnRpbWVyICs9IGR0O1xyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/star.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e1deaejQQdBBrqFO/PgA3Ut', 'star');
// scripts/star.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    // ���Ǻ�����֮��ľ���С�������ֵ���ͻ�����ռ�
    pickRadius: 0
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  getPlayerDistance: function getPlayerDistance() {
    // ����Player�ڵ�λ���жϾ���
    var playerPos = this.game.player.getPosition(); // ��������λ�ü�������֮�����

    var dist = this.node.position.sub(playerPos).mag();
    return dist;
  },
  onPicked: function onPicked() {
    // �����Ǳ��ռ�ʱ������Game�ű��еĽӿڣ�����һ���µ�����
    this.game.spawnNewStar(); // ���� Game �ű��еĵ÷ַ���

    this.game.gainScore(); // Ȼ�����ٵ�ǰ���ǽڵ�

    this.node.destroy();
  },
  update: function update(dt) {
    // ÿ֡�ж����Ǻ�����֮��ľ����Ƿ�С���ռ�����
    if (this.getPlayerDistance() < this.pickRadius) {
      // �����ռ���Ϊ
      this.onPicked();
      return;
    } // ����Game�ű��еļ�ʱ���������ǵ�͸����


    var opacityRatio = 1 - this.game.timer / this.game.starDuration;
    var minOpacity = 50;
    this.node.opacity = minOpacity + Math.floor(opacityRatio * (255 - minOpacity));
  }
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcc3Rhci5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInBpY2tSYWRpdXMiLCJnZXRQbGF5ZXJEaXN0YW5jZSIsInBsYXllclBvcyIsImdhbWUiLCJwbGF5ZXIiLCJnZXRQb3NpdGlvbiIsImRpc3QiLCJub2RlIiwicG9zaXRpb24iLCJzdWIiLCJtYWciLCJvblBpY2tlZCIsInNwYXduTmV3U3RhciIsImdhaW5TY29yZSIsImRlc3Ryb3kiLCJ1cGRhdGUiLCJkdCIsIm9wYWNpdHlSYXRpbyIsInRpbWVyIiwic3RhckR1cmF0aW9uIiwibWluT3BhY2l0eSIsIm9wYWNpdHkiLCJNYXRoIiwiZmxvb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSO0FBQ0FDLElBQUFBLFVBQVUsRUFBRTtBQUZKLEdBSFA7QUFRTDtBQUVBO0FBRUFDLEVBQUFBLGlCQUFpQixFQUFFLDZCQUFVO0FBQ3pCO0FBQ0EsUUFBSUMsU0FBUyxHQUFHLEtBQUtDLElBQUwsQ0FBVUMsTUFBVixDQUFpQkMsV0FBakIsRUFBaEIsQ0FGeUIsQ0FHekI7O0FBQ0EsUUFBSUMsSUFBSSxHQUFHLEtBQUtDLElBQUwsQ0FBVUMsUUFBVixDQUFtQkMsR0FBbkIsQ0FBdUJQLFNBQXZCLEVBQWtDUSxHQUFsQyxFQUFYO0FBQ0EsV0FBT0osSUFBUDtBQUNILEdBbEJJO0FBb0JMSyxFQUFBQSxRQUFRLEVBQUUsb0JBQVc7QUFDakI7QUFDQSxTQUFLUixJQUFMLENBQVVTLFlBQVYsR0FGaUIsQ0FHakI7O0FBQ0EsU0FBS1QsSUFBTCxDQUFVVSxTQUFWLEdBSmlCLENBS2pCOztBQUNBLFNBQUtOLElBQUwsQ0FBVU8sT0FBVjtBQUNILEdBM0JJO0FBNkJMQyxFQUFBQSxNQUFNLEVBQUUsZ0JBQVVDLEVBQVYsRUFBYztBQUNsQjtBQUNBLFFBQUksS0FBS2YsaUJBQUwsS0FBMkIsS0FBS0QsVUFBcEMsRUFBZ0Q7QUFDNUM7QUFDQSxXQUFLVyxRQUFMO0FBQ0E7QUFDSCxLQU5pQixDQVFsQjs7O0FBQ0EsUUFBSU0sWUFBWSxHQUFHLElBQUksS0FBS2QsSUFBTCxDQUFVZSxLQUFWLEdBQWtCLEtBQUtmLElBQUwsQ0FBVWdCLFlBQW5EO0FBQ0EsUUFBSUMsVUFBVSxHQUFHLEVBQWpCO0FBQ0EsU0FBS2IsSUFBTCxDQUFVYyxPQUFWLEdBQW9CRCxVQUFVLEdBQUdFLElBQUksQ0FBQ0MsS0FBTCxDQUFXTixZQUFZLElBQUksTUFBTUcsVUFBVixDQUF2QixDQUFqQztBQUNIO0FBekNJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyDvv73vv73vv73Huu+/ve+/ve+/ve+/ve+/vdau77+977+9xL7vv73vv73vv73Qoe+/ve+/ve+/ve+/ve+/ve+/ve+/vda177+977+977+9zbvvv73vv73vv73vv73vv73VvO+/vVxyXG4gICAgICAgIHBpY2tSYWRpdXM6IDAsXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fSxcclxuXHJcbiAgICBnZXRQbGF5ZXJEaXN0YW5jZTogZnVuY3Rpb24oKXtcclxuICAgICAgICAvLyDvv73vv73vv73vv71QbGF5ZXLvv73ate+/vc6777+977+977+90LbPvu+/ve+/ve+/vVxyXG4gICAgICAgIHZhciBwbGF5ZXJQb3MgPSB0aGlzLmdhbWUucGxheWVyLmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgLy8g77+977+977+977+977+977+977+977+9zrvvv73DvO+/ve+/ve+/ve+/ve+/ve+/ve+/vdau77+977+977+977+977+9XHJcbiAgICAgICAgdmFyIGRpc3QgPSB0aGlzLm5vZGUucG9zaXRpb24uc3ViKHBsYXllclBvcykubWFnKCk7XHJcbiAgICAgICAgcmV0dXJuIGRpc3Q7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uUGlja2VkOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAvLyDvv73vv73vv73vv73vv73Hse+/ve+/vdW877+9yrHvv73vv73vv73vv73vv73vv71HYW1l77+9xbHvv73vv73QtcS907/ao++/ve+/ve+/ve+/ve+/vdK777+977+977+9wrXvv73vv73vv73vv73vv71cclxuICAgICAgICB0aGlzLmdhbWUuc3Bhd25OZXdTdGFyKCk7XHJcbiAgICAgICAgLy8g77+977+977+977+9IEdhbWUg77+9xbHvv73vv73QtcS1w7fWt++/ve+/ve+/vVxyXG4gICAgICAgIHRoaXMuZ2FtZS5nYWluU2NvcmUoKTtcclxuICAgICAgICAvLyDIu++/ve+/ve+/ve+/ve+/vdm177+9x7Dvv73vv73vv73Hvdq177+9XHJcbiAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcclxuICAgICAgICAvLyDDv9ah77+90Lbvv73vv73vv73vv73Huu+/ve+/ve+/ve+/ve+/vdau77+977+9xL7vv73vv73vv73vv73Ht++/vdCh77+977+977+91bzvv73vv73vv73vv73vv71cclxuICAgICAgICBpZiAodGhpcy5nZXRQbGF5ZXJEaXN0YW5jZSgpIDwgdGhpcy5waWNrUmFkaXVzKSB7XHJcbiAgICAgICAgICAgIC8vIO+/ve+/ve+/ve+/ve+/vdW877+977+977+9zqpcclxuICAgICAgICAgICAgdGhpcy5vblBpY2tlZCgpO1xyXG4gICAgICAgICAgICByZXR1cm4gO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g77+977+977+977+9R2FtZe+/vcWx77+977+90LXEvO+/vcqx77+977+977+977+977+977+977+977+977+9x7Xvv73NuO+/ve+/ve+/ve+/vVxyXG4gICAgICAgIHZhciBvcGFjaXR5UmF0aW8gPSAxIC0gdGhpcy5nYW1lLnRpbWVyIC8gdGhpcy5nYW1lLnN0YXJEdXJhdGlvbjtcclxuICAgICAgICB2YXIgbWluT3BhY2l0eSA9IDUwO1xyXG4gICAgICAgIHRoaXMubm9kZS5vcGFjaXR5ID0gbWluT3BhY2l0eSArIE1hdGguZmxvb3Iob3BhY2l0eVJhdGlvICogKDI1NSAtIG1pbk9wYWNpdHkpKTtcclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Player.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b6a37Qn3RlGtI+HXMNe1aw2', 'Player');
// scripts/Player.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    // 主角跳跃高度
    jumpHeight: 0,
    // 主角跳跃持续时间
    jumpDuration: 0,
    // 最大移动速度
    maxMoveSpeed: 0,
    // 加速度
    accel: 0,
    // 跳跃音效资源
    jumpAction: {
      "default": null,
      type: cc.AudioClip
    }
  },
  runJumpAction: function runJumpAction() {
    // 跳跃上升
    var jumpUp = cc.tween().by(this.jumpDuration, {
      y: this.jumpHeight
    }, {
      easing: 'sineOut'
    }); // 下落

    var jumpDown = cc.tween().by(this.jumpDuration, {
      y: -this.jumpHeight
    }, {
      easing: 'sineIn'
    }); // 创建一个缓动，按 jumpUp、jumpDown 的顺序执行动作

    var tween = cc.tween().sequence(jumpUp, jumpDown).call(this.playJumpSound, this); // 不断重复

    return cc.tween().repeatForever(tween);
  },
  playJumpSound: function playJumpSound() {
    // 调用声音引擎播放声音
    cc.audioEngine.playEffect(this.jumpAudio, false);
  },
  onKeyDown: function onKeyDown(event) {
    switch (event.keyCode) {
      case cc.macro.KEY.a:
        this.accLeft = true;
        break;

      case cc.macro.KEY.d:
        this.accRight = true;
        break;
    }
  },
  onKeyUp: function onKeyUp(event) {
    switch (event.keyCode) {
      case cc.macro.KEY.a:
        this.accLeft = false;
        break;

      case cc.macro.KEY.d:
        this.accRight = false;
        break;
    }
  },
  onLoad: function onLoad() {
    // 初始化跳跃动作
    var jumpAction = this.runJumpAction();
    cc.tween(this.node).then(jumpAction).start(); // 加速度方向开关

    this.accLeft = false;
    this.accRight = false; // 主角当前水平方向速度

    this.xSpeed = 0; // 初始化键盘输入监听

    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
  },
  onDestroy: function onDestroy() {
    // 取消键盘输入监听
    cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
  },
  // start () {
  // },
  update: function update(dt) {
    // 根据当前加速度方向每帧更新速度
    if (this.accLeft) {
      this.xSpeed -= this.accel * dt;
    } else if (this.accRight) {
      this.xSpeed += this.accel * dt;
    } // 限制主角的速度不能超过最大值


    if (Math.abs(this.xSpeed) > this.maxMoveSpeed) {
      // if speed reach limit, use max speed with current direction
      this.xSpeed = this.maxMoveSpeed * this.xSpeed / Math.abs(this.xSpeed);
    } // 根据当前速度更新主角的位置


    this.node.x += this.xSpeed * dt; // 最大视窗边界的x坐标

    this.xScreenWidthHalf = this.node.parent.width / 2; // 主角当前的x坐标

    var xNodeX = this.node.x; // 判断主角是否超出屏幕

    if (Math.abs(xNodeX) > this.xScreenWidthHalf) {
      this.node.x = this.xScreenWidthHalf * xNodeX / Math.abs(xNodeX);
      this.xSpeed = 0;
    }
  }
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcUGxheWVyLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwianVtcEhlaWdodCIsImp1bXBEdXJhdGlvbiIsIm1heE1vdmVTcGVlZCIsImFjY2VsIiwianVtcEFjdGlvbiIsInR5cGUiLCJBdWRpb0NsaXAiLCJydW5KdW1wQWN0aW9uIiwianVtcFVwIiwidHdlZW4iLCJieSIsInkiLCJlYXNpbmciLCJqdW1wRG93biIsInNlcXVlbmNlIiwiY2FsbCIsInBsYXlKdW1wU291bmQiLCJyZXBlYXRGb3JldmVyIiwiYXVkaW9FbmdpbmUiLCJwbGF5RWZmZWN0IiwianVtcEF1ZGlvIiwib25LZXlEb3duIiwiZXZlbnQiLCJrZXlDb2RlIiwibWFjcm8iLCJLRVkiLCJhIiwiYWNjTGVmdCIsImQiLCJhY2NSaWdodCIsIm9uS2V5VXAiLCJvbkxvYWQiLCJub2RlIiwidGhlbiIsInN0YXJ0IiwieFNwZWVkIiwic3lzdGVtRXZlbnQiLCJvbiIsIlN5c3RlbUV2ZW50IiwiRXZlbnRUeXBlIiwiS0VZX0RPV04iLCJLRVlfVVAiLCJvbkRlc3Ryb3kiLCJvZmYiLCJ1cGRhdGUiLCJkdCIsIk1hdGgiLCJhYnMiLCJ4IiwieFNjcmVlbldpZHRoSGFsZiIsInBhcmVudCIsIndpZHRoIiwieE5vZGVYIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUjtBQUNBQyxJQUFBQSxVQUFVLEVBQUUsQ0FGSjtBQUdSO0FBQ0FDLElBQUFBLFlBQVksRUFBRSxDQUpOO0FBS1I7QUFDQUMsSUFBQUEsWUFBWSxFQUFFLENBTk47QUFPUjtBQUNBQyxJQUFBQSxLQUFLLEVBQUUsQ0FSQztBQVNSO0FBQ0FDLElBQUFBLFVBQVUsRUFBRTtBQUNSLGlCQUFTLElBREQ7QUFFUkMsTUFBQUEsSUFBSSxFQUFFVCxFQUFFLENBQUNVO0FBRkQ7QUFWSixHQUhQO0FBbUJMQyxFQUFBQSxhQW5CSywyQkFtQlk7QUFDYjtBQUNBLFFBQUlDLE1BQU0sR0FBR1osRUFBRSxDQUFDYSxLQUFILEdBQVdDLEVBQVgsQ0FBYyxLQUFLVCxZQUFuQixFQUFpQztBQUFDVSxNQUFBQSxDQUFDLEVBQUUsS0FBS1g7QUFBVCxLQUFqQyxFQUF1RDtBQUFDWSxNQUFBQSxNQUFNLEVBQUU7QUFBVCxLQUF2RCxDQUFiLENBRmEsQ0FHYjs7QUFDQSxRQUFJQyxRQUFRLEdBQUdqQixFQUFFLENBQUNhLEtBQUgsR0FBV0MsRUFBWCxDQUFjLEtBQUtULFlBQW5CLEVBQWlDO0FBQUNVLE1BQUFBLENBQUMsRUFBRSxDQUFDLEtBQUtYO0FBQVYsS0FBakMsRUFBd0Q7QUFBQ1ksTUFBQUEsTUFBTSxFQUFFO0FBQVQsS0FBeEQsQ0FBZixDQUphLENBTWI7O0FBQ0EsUUFBSUgsS0FBSyxHQUFHYixFQUFFLENBQUNhLEtBQUgsR0FBV0ssUUFBWCxDQUFvQk4sTUFBcEIsRUFBNEJLLFFBQTVCLEVBQ2FFLElBRGIsQ0FDa0IsS0FBS0MsYUFEdkIsRUFDc0MsSUFEdEMsQ0FBWixDQVBhLENBU2I7O0FBQ0EsV0FBT3BCLEVBQUUsQ0FBQ2EsS0FBSCxHQUFXUSxhQUFYLENBQXlCUixLQUF6QixDQUFQO0FBQ0gsR0E5Qkk7QUFnQ0xPLEVBQUFBLGFBQWEsRUFBRSx5QkFBVTtBQUNyQjtBQUNBcEIsSUFBQUEsRUFBRSxDQUFDc0IsV0FBSCxDQUFlQyxVQUFmLENBQTBCLEtBQUtDLFNBQS9CLEVBQTBDLEtBQTFDO0FBQ0gsR0FuQ0k7QUFxQ0xDLEVBQUFBLFNBckNLLHFCQXFDTUMsS0FyQ04sRUFxQ2E7QUFDZCxZQUFPQSxLQUFLLENBQUNDLE9BQWI7QUFDSSxXQUFLM0IsRUFBRSxDQUFDNEIsS0FBSCxDQUFTQyxHQUFULENBQWFDLENBQWxCO0FBQ0ksYUFBS0MsT0FBTCxHQUFlLElBQWY7QUFDQTs7QUFDSixXQUFLL0IsRUFBRSxDQUFDNEIsS0FBSCxDQUFTQyxHQUFULENBQWFHLENBQWxCO0FBQ0ksYUFBS0MsUUFBTCxHQUFnQixJQUFoQjtBQUNBO0FBTlI7QUFRSCxHQTlDSTtBQWdETEMsRUFBQUEsT0FoREssbUJBZ0RJUixLQWhESixFQWdEVztBQUNaLFlBQU9BLEtBQUssQ0FBQ0MsT0FBYjtBQUNJLFdBQUszQixFQUFFLENBQUM0QixLQUFILENBQVNDLEdBQVQsQ0FBYUMsQ0FBbEI7QUFDSSxhQUFLQyxPQUFMLEdBQWUsS0FBZjtBQUNBOztBQUNKLFdBQUsvQixFQUFFLENBQUM0QixLQUFILENBQVNDLEdBQVQsQ0FBYUcsQ0FBbEI7QUFDSSxhQUFLQyxRQUFMLEdBQWdCLEtBQWhCO0FBQ0E7QUFOUjtBQVFILEdBekRJO0FBMkRMRSxFQUFBQSxNQUFNLEVBQUUsa0JBQVk7QUFDaEI7QUFDQSxRQUFJM0IsVUFBVSxHQUFHLEtBQUtHLGFBQUwsRUFBakI7QUFDQVgsSUFBQUEsRUFBRSxDQUFDYSxLQUFILENBQVMsS0FBS3VCLElBQWQsRUFBb0JDLElBQXBCLENBQXlCN0IsVUFBekIsRUFBcUM4QixLQUFyQyxHQUhnQixDQUtoQjs7QUFDQSxTQUFLUCxPQUFMLEdBQWUsS0FBZjtBQUNBLFNBQUtFLFFBQUwsR0FBZ0IsS0FBaEIsQ0FQZ0IsQ0FRaEI7O0FBQ0EsU0FBS00sTUFBTCxHQUFjLENBQWQsQ0FUZ0IsQ0FXaEI7O0FBQ0F2QyxJQUFBQSxFQUFFLENBQUN3QyxXQUFILENBQWVDLEVBQWYsQ0FBa0J6QyxFQUFFLENBQUMwQyxXQUFILENBQWVDLFNBQWYsQ0FBeUJDLFFBQTNDLEVBQXFELEtBQUtuQixTQUExRCxFQUFxRSxJQUFyRTtBQUNBekIsSUFBQUEsRUFBRSxDQUFDd0MsV0FBSCxDQUFlQyxFQUFmLENBQWtCekMsRUFBRSxDQUFDMEMsV0FBSCxDQUFlQyxTQUFmLENBQXlCRSxNQUEzQyxFQUFtRCxLQUFLWCxPQUF4RCxFQUFpRSxJQUFqRTtBQUNILEdBekVJO0FBMkVMWSxFQUFBQSxTQTNFSyx1QkEyRVE7QUFDVDtBQUNBOUMsSUFBQUEsRUFBRSxDQUFDd0MsV0FBSCxDQUFlTyxHQUFmLENBQW1CL0MsRUFBRSxDQUFDMEMsV0FBSCxDQUFlQyxTQUFmLENBQXlCQyxRQUE1QyxFQUFzRCxLQUFLbkIsU0FBM0QsRUFBc0UsSUFBdEU7QUFDQXpCLElBQUFBLEVBQUUsQ0FBQ3dDLFdBQUgsQ0FBZU8sR0FBZixDQUFtQi9DLEVBQUUsQ0FBQzBDLFdBQUgsQ0FBZUMsU0FBZixDQUF5QkUsTUFBNUMsRUFBb0QsS0FBS1gsT0FBekQsRUFBa0UsSUFBbEU7QUFDSCxHQS9FSTtBQWlGTDtBQUVBO0FBRUFjLEVBQUFBLE1BQU0sRUFBRSxnQkFBVUMsRUFBVixFQUFjO0FBQ2xCO0FBQ0EsUUFBSSxLQUFLbEIsT0FBVCxFQUFrQjtBQUNkLFdBQUtRLE1BQUwsSUFBZSxLQUFLaEMsS0FBTCxHQUFhMEMsRUFBNUI7QUFDSCxLQUZELE1BR0ssSUFBSSxLQUFLaEIsUUFBVCxFQUFtQjtBQUNwQixXQUFLTSxNQUFMLElBQWUsS0FBS2hDLEtBQUwsR0FBYTBDLEVBQTVCO0FBQ0gsS0FQaUIsQ0FTbEI7OztBQUNBLFFBQUlDLElBQUksQ0FBQ0MsR0FBTCxDQUFTLEtBQUtaLE1BQWQsSUFBd0IsS0FBS2pDLFlBQWpDLEVBQStDO0FBQzNDO0FBQ0EsV0FBS2lDLE1BQUwsR0FBYyxLQUFLakMsWUFBTCxHQUFvQixLQUFLaUMsTUFBekIsR0FBa0NXLElBQUksQ0FBQ0MsR0FBTCxDQUFTLEtBQUtaLE1BQWQsQ0FBaEQ7QUFDSCxLQWJpQixDQWVsQjs7O0FBQ0EsU0FBS0gsSUFBTCxDQUFVZ0IsQ0FBVixJQUFlLEtBQUtiLE1BQUwsR0FBY1UsRUFBN0IsQ0FoQmtCLENBa0JsQjs7QUFDQSxTQUFLSSxnQkFBTCxHQUF3QixLQUFLakIsSUFBTCxDQUFVa0IsTUFBVixDQUFpQkMsS0FBakIsR0FBeUIsQ0FBakQsQ0FuQmtCLENBb0JsQjs7QUFDQSxRQUFJQyxNQUFNLEdBQUcsS0FBS3BCLElBQUwsQ0FBVWdCLENBQXZCLENBckJrQixDQXNCbEI7O0FBQ0EsUUFBR0YsSUFBSSxDQUFDQyxHQUFMLENBQVNLLE1BQVQsSUFBbUIsS0FBS0gsZ0JBQTNCLEVBQTZDO0FBQ3pDLFdBQUtqQixJQUFMLENBQVVnQixDQUFWLEdBQWMsS0FBS0MsZ0JBQUwsR0FBd0JHLE1BQXhCLEdBQWlDTixJQUFJLENBQUNDLEdBQUwsQ0FBU0ssTUFBVCxDQUEvQztBQUNBLFdBQUtqQixNQUFMLEdBQWMsQ0FBZDtBQUNIO0FBQ0o7QUFoSEksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIOS4u+inkui3s+i3g+mrmOW6plxyXG4gICAgICAgIGp1bXBIZWlnaHQ6IDAsXHJcbiAgICAgICAgLy8g5Li76KeS6Lez6LeD5oyB57ut5pe26Ze0XHJcbiAgICAgICAganVtcER1cmF0aW9uOiAwLFxyXG4gICAgICAgIC8vIOacgOWkp+enu+WKqOmAn+W6plxyXG4gICAgICAgIG1heE1vdmVTcGVlZDogMCxcclxuICAgICAgICAvLyDliqDpgJ/luqZcclxuICAgICAgICBhY2NlbDogMCxcclxuICAgICAgICAvLyDot7Pot4Ppn7PmlYjotYTmupBcclxuICAgICAgICBqdW1wQWN0aW9uOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkF1ZGlvQ2xpcCxcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHJ1bkp1bXBBY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIOi3s+i3g+S4iuWNh1xyXG4gICAgICAgIHZhciBqdW1wVXAgPSBjYy50d2VlbigpLmJ5KHRoaXMuanVtcER1cmF0aW9uLCB7eTogdGhpcy5qdW1wSGVpZ2h0fSwge2Vhc2luZzogJ3NpbmVPdXQnfSk7XHJcbiAgICAgICAgLy8g5LiL6JC9XHJcbiAgICAgICAgdmFyIGp1bXBEb3duID0gY2MudHdlZW4oKS5ieSh0aGlzLmp1bXBEdXJhdGlvbiwge3k6IC10aGlzLmp1bXBIZWlnaHR9LCB7ZWFzaW5nOiAnc2luZUluJ30pO1xyXG5cclxuICAgICAgICAvLyDliJvlu7rkuIDkuKrnvJPliqjvvIzmjIkganVtcFVw44CBanVtcERvd24g55qE6aG65bqP5omn6KGM5Yqo5L2cXHJcbiAgICAgICAgdmFyIHR3ZWVuID0gY2MudHdlZW4oKS5zZXF1ZW5jZShqdW1wVXAsIGp1bXBEb3duKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKHRoaXMucGxheUp1bXBTb3VuZCwgdGhpcyk7XHJcbiAgICAgICAgLy8g5LiN5pat6YeN5aSNXHJcbiAgICAgICAgcmV0dXJuIGNjLnR3ZWVuKCkucmVwZWF0Rm9yZXZlcih0d2Vlbik7XHJcbiAgICB9LFxyXG5cclxuICAgIHBsYXlKdW1wU291bmQ6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgLy8g6LCD55So5aOw6Z+z5byV5pOO5pKt5pS+5aOw6Z+zXHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmp1bXBBdWRpbywgZmFsc2UpO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbktleURvd24gKGV2ZW50KSB7XHJcbiAgICAgICAgc3dpdGNoKGV2ZW50LmtleUNvZGUpIHtcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuYTpcclxuICAgICAgICAgICAgICAgIHRoaXMuYWNjTGVmdCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuZDpcclxuICAgICAgICAgICAgICAgIHRoaXMuYWNjUmlnaHQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBvbktleVVwIChldmVudCkge1xyXG4gICAgICAgIHN3aXRjaChldmVudC5rZXlDb2RlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmE6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjY0xlZnQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5kOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hY2NSaWdodCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyDliJ3lp4vljJbot7Pot4PliqjkvZxcclxuICAgICAgICB2YXIganVtcEFjdGlvbiA9IHRoaXMucnVuSnVtcEFjdGlvbigpO1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSkudGhlbihqdW1wQWN0aW9uKS5zdGFydCgpO1xyXG5cclxuICAgICAgICAvLyDliqDpgJ/luqbmlrnlkJHlvIDlhbNcclxuICAgICAgICB0aGlzLmFjY0xlZnQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmFjY1JpZ2h0ID0gZmFsc2U7XHJcbiAgICAgICAgLy8g5Li76KeS5b2T5YmN5rC05bmz5pa55ZCR6YCf5bqmXHJcbiAgICAgICAgdGhpcy54U3BlZWQgPSAwO1xyXG5cclxuICAgICAgICAvLyDliJ3lp4vljJbplK7nm5jovpPlhaXnm5HlkKxcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMub25LZXlEb3duLCB0aGlzKTtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX1VQLCB0aGlzLm9uS2V5VXAsIHRoaXMpOyAgIFxyXG4gICAgfSxcclxuXHJcbiAgICBvbkRlc3Ryb3kgKCkge1xyXG4gICAgICAgIC8vIOWPlua2iOmUruebmOi+k+WFpeebkeWQrFxyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9mZihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMub25LZXlEb3duLCB0aGlzKTtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vZmYoY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9VUCwgdGhpcy5vbktleVVwLCB0aGlzKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gc3RhcnQgKCkge1xyXG5cclxuICAgIC8vIH0sXHJcblxyXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcclxuICAgICAgICAvLyDmoLnmja7lvZPliY3liqDpgJ/luqbmlrnlkJHmr4/luKfmm7TmlrDpgJ/luqZcclxuICAgICAgICBpZiAodGhpcy5hY2NMZWZ0KSB7XHJcbiAgICAgICAgICAgIHRoaXMueFNwZWVkIC09IHRoaXMuYWNjZWwgKiBkdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5hY2NSaWdodCkge1xyXG4gICAgICAgICAgICB0aGlzLnhTcGVlZCArPSB0aGlzLmFjY2VsICogZHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDpmZDliLbkuLvop5LnmoTpgJ/luqbkuI3og73otoXov4fmnIDlpKflgLxcclxuICAgICAgICBpZiAoTWF0aC5hYnModGhpcy54U3BlZWQpID4gdGhpcy5tYXhNb3ZlU3BlZWQpIHtcclxuICAgICAgICAgICAgLy8gaWYgc3BlZWQgcmVhY2ggbGltaXQsIHVzZSBtYXggc3BlZWQgd2l0aCBjdXJyZW50IGRpcmVjdGlvblxyXG4gICAgICAgICAgICB0aGlzLnhTcGVlZCA9IHRoaXMubWF4TW92ZVNwZWVkICogdGhpcy54U3BlZWQgLyBNYXRoLmFicyh0aGlzLnhTcGVlZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDmoLnmja7lvZPliY3pgJ/luqbmm7TmlrDkuLvop5LnmoTkvY3nva5cclxuICAgICAgICB0aGlzLm5vZGUueCArPSB0aGlzLnhTcGVlZCAqIGR0O1xyXG5cclxuICAgICAgICAvLyDmnIDlpKfop4bnqpfovrnnlYznmoR45Z2Q5qCHXHJcbiAgICAgICAgdGhpcy54U2NyZWVuV2lkdGhIYWxmID0gdGhpcy5ub2RlLnBhcmVudC53aWR0aCAvIDI7XHJcbiAgICAgICAgLy8g5Li76KeS5b2T5YmN55qEeOWdkOagh1xyXG4gICAgICAgIHZhciB4Tm9kZVggPSB0aGlzLm5vZGUueDtcclxuICAgICAgICAvLyDliKTmlq3kuLvop5LmmK/lkKbotoXlh7rlsY/luZVcclxuICAgICAgICBpZihNYXRoLmFicyh4Tm9kZVgpID4gdGhpcy54U2NyZWVuV2lkdGhIYWxmKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS54ID0gdGhpcy54U2NyZWVuV2lkdGhIYWxmICogeE5vZGVYIC8gTWF0aC5hYnMoeE5vZGVYKTtcclxuICAgICAgICAgICAgdGhpcy54U3BlZWQgPSAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------
