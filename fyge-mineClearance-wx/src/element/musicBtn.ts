import { musicPic } from "../gameconfig"

export class MusicBtn extends FYGE.Sprite {
    constructor() {
        super()
        this.texture = FYGE.Texture.fromUrl(musicPic)
        this.x = 680
        this.y = 20
        this.width = 40
        this.height = 40
        var shp: FYGE.Graphics = new FYGE.Graphics();
        shp.x = 0
        shp.y = 0
        shp.beginFill(0xff0000, 1);
        shp.drawCircle(680, 20, 50);
        shp.endFill()
        this.addChild(shp);
    }
}