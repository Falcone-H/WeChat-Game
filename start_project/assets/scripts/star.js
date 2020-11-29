// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        // ���Ǻ�����֮��ľ���С�������ֵ���ͻ�����ռ�
        pickRadius: 0,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    getPlayerDistance: function(){
        // ����Player�ڵ�λ���жϾ���
        var playerPos = this.game.player.getPosition();
        // ��������λ�ü�������֮�����
        var dist = this.node.position.sub(playerPos).mag();
        return dist;
    },

    onPicked: function() {
        // �����Ǳ��ռ�ʱ������Game�ű��еĽӿڣ�����һ���µ�����
        this.game.spawnNewStar();
        // ���� Game �ű��еĵ÷ַ���
        this.game.gainScore();
        // Ȼ�����ٵ�ǰ���ǽڵ�
        this.node.destroy();
    },

    update: function (dt) {
        // ÿ֡�ж����Ǻ�����֮��ľ����Ƿ�С���ռ�����
        if (this.getPlayerDistance() < this.pickRadius) {
            // �����ռ���Ϊ
            this.onPicked();
            return ;
        }

        // ����Game�ű��еļ�ʱ���������ǵ�͸����
        var opacityRatio = 1 - this.game.timer / this.game.starDuration;
        var minOpacity = 50;
        this.node.opacity = minOpacity + Math.floor(opacityRatio * (255 - minOpacity));
    },
});