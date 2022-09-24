import EventConfig from "../eventConfig";
import { GAME_SIZE, minePic, PIECE_SIZE } from "../gameconfig";
import { getFourWeekNumber } from "../utils";
import { UpEvent } from './upEvent'

/**
 * 数字
 */
class TextNum extends FYGE.TextField {
  constructor(num) {
    super();
    this.fillColor = "#ff0000";
    this.text = num;
    this.x = 20;
    this.y = 18;
    this.size = 30;
  }
}

/**
 * 底板
 */
class PieceGraphics extends FYGE.Graphics {
  constructor(x, y) {
    super();
    this.x = x;
    this.y = y;
    this.beginFill(0xcccccc, 1);
    this.drawRect(0, 0, PIECE_SIZE, PIECE_SIZE);
    this.endFill();
  }
}

/**
 * 地雷
 */
class Mine extends FYGE.Sprite {
  constructor() {
    super();
    this.texture = FYGE.Texture.fromUrl(minePic);
    this.x = 0;
    this.y = 0;
    this.width = PIECE_SIZE;
    this.height = PIECE_SIZE;
  }
}

/**
 * 罩子
 */
class HoodGraphics extends FYGE.Graphics {
  constructor(x, y) {
    super();
    this.x = x;
    this.y = y;

    this.beginFill(0x7fff00, 1);
    this.drawRect(0, 0, PIECE_SIZE, PIECE_SIZE);
    this.endFill();
  }
}

/**
 * 方格
 */
export default class Piece extends FYGE.Graphics {
  private _id;
  get id(): number {
    return this._id;
  }
  set id(val: number) {
    this._id = val;
  }
  private _mineList;
  get mineList(): Array<number> {
    return this._mineList;
  }
  set mineList(val: Array<number>) {
    this._mineList = val;
  }

  private pieceGraphics;
  private textNum;
  private mine;
  private hoodGraphics;
  constructor() {
    super();
    this.pieceGraphics = new PieceGraphics(0, 0);
    this.hoodGraphics = new HoodGraphics(0, 0);
    this.lineStyle(2, 0xff0000);
    this.addChild(this.pieceGraphics);
    this.addChild(this.hoodGraphics);
    this.setChildIndex(this.pieceGraphics, 0);
    this.setChildIndex(this.hoodGraphics, 2);
  }

  public initMineNum() {
    const getMineList = getFourWeekNumber(this.id, GAME_SIZE);
    if (this._mineList.includes(this._id)) {
      this.mine = new Mine();
      this.addChild(this.mine);
      this.setChildIndex(this.mine, 1);
    } else {
      const mineNum = this._mineList.filter((item) =>
        getMineList.includes(item)
      ).length;
      this.textNum = new TextNum(mineNum);
      this.addChild(this.textNum);
      this.setChildIndex(this.textNum, 1);
    }
  }
  public onMouseUp() {
    this.removeChild(this.hoodGraphics);
    const upEvent: UpEvent = new UpEvent(UpEvent.NAME);
    this.dispatchEvent(upEvent, { id: this.id });
  }
}
