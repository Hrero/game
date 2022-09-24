import {
  BOARD_SIZE,
  GAME_SIZE,
  GAP,
  PIECE_SIZE,
  MINEMAXNUM,
  INIT_DATA,
} from "../gameconfig";
import { fill, getFourWeekNumber, getRandomArrayElements } from "../utils";
import Piece from "./piece";
import PieceManager from "../pieceManager";
import EventConfig from "../eventConfig";
export default class Board extends FYGE.Graphics {
  public pieceManager: PieceManager
  constructor() {
    super();
    this.x = 65;
    this.y = 50;
    this.beginFill(0xffffff, 1);
    this.drawRect(0, 0, BOARD_SIZE, BOARD_SIZE);
    this.endFill();
    this.addEventListener(FYGE.Event.ADDED_TO_STAGE, this.initBoard);
  }
  public initBoard() {
    INIT_DATA.forEach((id, index) => {
      const fragment = this.addChild(new Piece());
      const col = index % GAME_SIZE;
      const row = Math.floor(index / GAME_SIZE);
      fragment.id = id;
      fragment.mineList = this.pieceManager.mineList;
      fragment.x = col * (PIECE_SIZE + GAP) + 1;
      fragment.y = row * (PIECE_SIZE + GAP) + 1;
      fragment.initMineNum();
      this.pieceManager.add(fragment)
      this.addChild(fragment);
    });
  }
}
