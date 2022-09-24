import { getStage } from "./stage";
import Board from "./element/board";
import EventConfig from "./eventConfig";
import PieceManager from "./pieceManager";
import { getRandomArrayElements } from "./utils";
import { INIT_DATA, MINEMAXNUM } from "./gameconfig";
import { TimeText } from "./element/TimeText";
import { MusicBtn } from './element/musicBtn';

export default class Game extends FYGE.Sprite {
  private board: Board;
  private timeText: TimeText;
  constructor() {
    super();
    getStage().addChild(this);
    this._createBoard();
    this._createTime()
    // this._createMusic()
  }
  private _createMusic() {
    const musicBtn = new MusicBtn()
    this.addChild(musicBtn)
  }
  private _createBoard() {
    this.board = new Board();
    this.board.pieceManager = new PieceManager()
    this.board.pieceManager.mineList = getRandomArrayElements(INIT_DATA, MINEMAXNUM)
    this.board.pieceManager.addEventListener(EventConfig.GAME_OVER, this.gameOver, this)
    this.board.pieceManager.addEventListener(EventConfig.SUCCESS, this.success, this)
    this.addChild(this.board);
  }

  private _createTime() {
    this.timeText = new TimeText()
    this.timeText.addEventListener(EventConfig.GAME_OVER, this.gameOver, this)
    this.addChild(this.timeText)
  }

  private gameOver() {
    this.board.mouseChildren = false
    // 失败文案
    this.timeText.errorText()
  }

  private success() {
    // 移除事件
    this.board.mouseChildren = false
    // 移除盖板
    this.board.children.forEach(element => {
      element.removeChild(element.hoodGraphics)
    });
    // 成功文案
    this.timeText.successText()
  }
}
