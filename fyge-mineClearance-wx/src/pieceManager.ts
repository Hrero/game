import Game from "./game";
import Piece from "./element/piece"
import { UpEvent } from "./element/upEvent";
import { INIT_DATA } from "./gameconfig";
import EventConfig from "./eventConfig";

export default class PieceManager extends FYGE.EventDispatcher {
    private _upPieceList: Array<number> = []
    // 初始化对象事件
    public add(item: Piece) {
        item.once(FYGE.MouseEvent.MOUSE_UP, this.onMouseUp);
        item.addEventListener(UpEvent.NAME, this._mouseUp, this);
    }

    private _mineList
    get mineList() {
        return this._mineList
    }
    set mineList(val) {
        this._mineList = val
    }
    private _mouseUp(e) {
        const id = e.data.id
        // 游戏失败
        if (this._mineList.includes(id)) {
            console.log(11);
            this.dispatchEvent(EventConfig.GAME_OVER)
            return
        }
        this._upPieceList.push(id)
        if (this._upPieceList.concat(this._mineList).sort().toString() === INIT_DATA.sort().toString()) {
            this.dispatchEvent(EventConfig.SUCCESS)
            return
        }
    }

    private onMouseUp(event: FYGE.MouseEvent) {
        const item: Piece = event.target;
        item.onMouseUp()
    }
}
