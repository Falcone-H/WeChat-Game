
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