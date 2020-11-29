
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcR2FtZS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInN0YXJQcmVmYWIiLCJ0eXBlIiwiUHJlZmFiIiwibWF4U3RhckR1cmF0aW9uIiwibWluU3RhckR1cmF0aW9uIiwiZ3JvdW5kIiwiTm9kZSIsInBsYXllciIsInNjb3JlRGlzcGxheSIsIkxhYmVsIiwic2NvcmVBdWRpbyIsIkF1ZGlvQ2xpcCIsIm9uTG9hZCIsImdyb3VuZFkiLCJ5IiwiaGVpZ2h0IiwidGltZXIiLCJzdGFyRHVyYXRpb24iLCJzcGF3bk5ld1N0YXIiLCJzY29yZSIsIm5ld1N0YXIiLCJpbnN0YW50aWF0ZSIsIm5vZGUiLCJhZGRDaGlsZCIsInNldFBvc2l0aW9uIiwiZ2V0TmV3U3RhclBvc2l0aW9uIiwiZ2V0Q29tcG9uZW50IiwiZ2FtZSIsIk1hdGgiLCJyYW5kb20iLCJyYW5kWCIsInJhbmRZIiwianVtcEhlaWdodCIsIm1heFgiLCJ3aWR0aCIsInYyIiwiZ2FpblNjb3JlIiwic3RyaW5nIiwiYXVkaW9FbmdpbmUiLCJwbGF5RWZmZWN0IiwiZ2FtZU92ZXIiLCJzdG9wQWxsQWN0aW9ucyIsImRpcmVjdG9yIiwibG9hZFNjZW5lIiwidXBkYXRlIiwiZHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSO0FBQ0FDLElBQUFBLFVBQVUsRUFBRTtBQUNSLGlCQUFTLElBREQ7QUFFUkMsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0FBRkQsS0FGSjtBQU9SO0FBQ0FDLElBQUFBLGVBQWUsRUFBRSxDQVJUO0FBU1JDLElBQUFBLGVBQWUsRUFBRSxDQVRUO0FBV1I7QUFDQUMsSUFBQUEsTUFBTSxFQUFF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LEdBM0ZJO0FBNkZMQyxFQUFBQSxNQUFNLEVBQUUsZ0JBQVVDLEVBQVYsRUFBYztBQUNsQjtBQUNBLFFBQUcsS0FBSzdCLEtBQUwsR0FBYSxLQUFLQyxZQUFyQixFQUFtQztBQUMvQixXQUFLdUIsUUFBTDtBQUNBO0FBQ0g7O0FBQ0QsU0FBS3hCLEtBQUwsSUFBYzZCLEVBQWQ7QUFDSDtBQXBHSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgLy8g77+977+977+977+977+977+977+9x7Xvv73UpO+/ve+/ve+/ve+/vdS0XHJcbiAgICAgICAgc3RhclByZWZhYjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5QcmVmYWIsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLy8g77+977+977+9x7Lvv73vv73vv73vv73vv73vv73vv73Kp8qx77+977+977+977+977+977+977+977+9zqdcclxuICAgICAgICBtYXhTdGFyRHVyYXRpb246IDAsXHJcbiAgICAgICAgbWluU3RhckR1cmF0aW9uOiAwLFxyXG5cclxuICAgICAgICAvLyDvv73vv73vv73vv73ateOjrO+/ve+/ve+/ve+/vci377+977+977+977+977+977+977+977+977+9ybXEuN+277+9XHJcbiAgICAgICAgZ3JvdW5kOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGUsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLy8gUGxheWVyIO+/vdq146OsIO+/ve+/ve+/vdq777+9yKHvv73vv73vv73Hte+/ve+/ve+/ve+/vcS437bIo++/ve+/vc2/77+977+977+977+977+977+977+977+90Lbvv73vv73Ev++/ve+/ve+/vVxyXG4gICAgICAgIHBsYXllcjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlLFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHNjb3JlRGlzcGxheToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbCxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBzY29yZUF1ZGlvOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkF1ZGlvQ2xpcCxcclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyDvv73vv73Ioe+/ve+/ve+/ve+/ve+/vXnvv73vv73vv73vv73vv73vv71cclxuICAgICAgICB0aGlzLmdyb3VuZFkgPSB0aGlzLmdyb3VuZC55ICsgdGhpcy5ncm91bmQuaGVpZ2h0LzI7XHJcbiAgICAgICAgLy8g77+977+9yrzvv73vv73vv73vv73Kse+/ve+/vVxyXG4gICAgICAgIHRoaXMudGltZXIgPSAwO1xyXG4gICAgICAgIHRoaXMuc3RhckR1cmF0aW9uID0gMDtcclxuICAgICAgICAvLyDvv73vv73vv73vv73Su++/ve+/ve+/vcK177+977+977+977+977+9XHJcbiAgICAgICAgdGhpcy5zcGF3bk5ld1N0YXIoKTtcclxuICAgICAgICAvLyDvv73vv73KvO+/ve+/ve+/vca377+9XHJcbiAgICAgICAgdGhpcy5zY29yZSA9IDA7XHJcbiAgICB9LFxyXG5cclxuICAgIHNwYXduTmV3U3RhcjogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgLy8gyrnvv73DuO+/ve+/ve+/ve+/ve+/vcSj77+977+977+92rPvv73vv73vv73vv73vv73vv73vv73vv73vv73Su++/ve+/ve+/vcK92rXvv71cclxuICAgICAgICB2YXIgbmV3U3RhciA9IGNjLmluc3RhbnRpYXRlKHRoaXMuc3RhclByZWZhYik7XHJcbiAgICAgICAgLy8g77+977+977+977+977+977+977+9xL3ate+/ve+/ve+/ve+/vdO177+9Q2FudmFz77+92rXvv73vv73vv73vv73vv71cclxuICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQobmV3U3Rhcik7XHJcbiAgICAgICAgLy8gzqrvv73vv73vv73vv73vv73vv73vv73vv73Su++/ve+/ve+/ve+/ve+/vc6777+977+9XHJcbiAgICAgICAgbmV3U3Rhci5zZXRQb3NpdGlvbih0aGlzLmdldE5ld1N0YXJQb3NpdGlvbigpKTtcclxuXHJcbiAgICAgICAgbmV3U3Rhci5nZXRDb21wb25lbnQoJ3N0YXInKS5nYW1lID0gdGhpcztcclxuXHJcbiAgICAgICAgLy8g77+977+977+9w7zvv73Kse+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/vcqnyrHvv73kt7bOp++/ve+/ve+/vcih0rvvv73vv73WtVxyXG4gICAgICAgIHRoaXMuc3RhckR1cmF0aW9uID0gdGhpcy5taW5TdGFyRHVyYXRpb24gKyBNYXRoLnJhbmRvbSgpICogKHRoaXMubWF4U3RhckR1cmF0aW9uIC0gdGhpcy5taW5TdGFyRHVyYXRpb24pO1xyXG4gICAgICAgIHRoaXMudGltZXIgPSAwO1xyXG4gICAgfSxcclxuXHJcbiAgICBnZXROZXdTdGFyUG9zaXRpb246IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciByYW5kWCA9IDA7XHJcbiAgICAgICAgLy8g77+977+977+93bXvv73Gve+/ve+/vc6777+9w7rvv73vv73vv73vv73vv73vv73vv73Uvu+/vd+2yKPvv73vv73vv73vv73vv73Dte+/vdK777+977+977+977+977+9x7Xvv71577+977+977+977+9XHJcbiAgICAgICAgdmFyIHJhbmRZID0gdGhpcy5ncm91bmRZICsgTWF0aC5yYW5kb20oKSAqIHRoaXMucGxheWVyLmdldENvbXBvbmVudCgnUGxheWVyJykuanVtcEhlaWdodCArIDUwO1xyXG4gICAgICAgIC8vIO+/ve+/ve+/ve+/ve+/ve+/vcS777+977+977+9yKPvv73vv73vv73vv73vv73Dte+/vdK777+977+977+977+977+9x7Xvv71477+977+977+977+9XHJcbiAgICAgICAgdmFyIG1heFggPSB0aGlzLm5vZGUud2lkdGgvMjtcclxuICAgICAgICByYW5kWCA9IChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIDIgKiBtYXhYO1xyXG4gICAgICAgIC8vIO+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/vVxyXG4gICAgICAgIHJldHVybiBjYy52MihyYW5kWCwgcmFuZFkpO1xyXG4gICAgfSxcclxuXHJcbiAgICBnYWluU2NvcmU6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuc2NvcmUgKz0gMTtcclxuICAgICAgICAvLyDvv73vv73vv73vv70gc2NvcmVEaXNwbGF5IExhYmVsIO+/ve+/ve+/ve+/ve+/ve+/vVxyXG4gICAgICAgIHRoaXMuc2NvcmVEaXNwbGF5LnN0cmluZyA9ICdTY29yZSA6ICcgKyB0aGlzLnNjb3JlO1xyXG4gICAgICAgIC8vIO+/ve+/ve+/vcW1w7fvv73vv73vv73Qp1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5zY29yZUF1ZGlvLCBmYWxzZSk7XHJcbiAgICB9LFxyXG5cclxuICAgIGdhbWVPdmVyOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAvLyDNo9a5UGxheWVy77+92rXvv73vv73vv73vv73Uvu+/ve+/ve+/ve+/vVxyXG4gICAgICAgIHRoaXMucGxheWVyLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgLy8g77+977+977+9wrzvv73vv73Ys++/ve+/ve+/vSBnYW1lXHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdnYW1lJyk7XHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XHJcbiAgICAgICAgLy8gw7/Woe+/ve+/ve+/vcK877+9yrHvv73vv73vv73vv73vv73vv73vv73vv73vv73etsi777+9w7vvv73vv73vv73vv73vv73vv73vv73Cte+/ve+/ve+/ve+/vcej77+977+9zbvvv73vv73vv73vv73vv73vv73Pt8qn77+977+977+937zvv71cclxuICAgICAgICBpZih0aGlzLnRpbWVyID4gdGhpcy5zdGFyRHVyYXRpb24pIHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lT3ZlcigpO1xyXG4gICAgICAgICAgICByZXR1cm4gO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnRpbWVyICs9IGR0O1xyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==