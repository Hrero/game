import EventConfig from "../eventConfig";
import { TEXT_OUT } from "../gameconfig";

export class TimeText extends FYGE.TextField {
  public pieceManager;
  private timerVal;
  constructor() {
    super();
    this.fillColor = "#ff0000";
    this.text = TEXT_OUT;
    this.x = 335;
    this.y = 880;
    this.size = 90;
    this.addEventListener(FYGE.Event.ADDED_TO_STAGE, this.initTime);
  }
  private initTime() {
    this.timerVal = setInterval(() => {
      this.text = (Number(this.text) - 1).toString();
      if (!+this.text) {
        clearInterval(this.timerVal);
        this.errorText()
        this.dispatchEvent(EventConfig.GAME_OVER);
      }
    }, 1000);
  }
  public successText() {
    const testResult = new FYGE.TextField();
    testResult.fillColor = "#ff0000";
    testResult.text = "游戏成功";
    testResult.size = 90;
    testResult.x = -130;
    testResult.y = 0;
    this.text = "";
    this.removeAllChildren()
    this.addChild(testResult);
  }
  /**
   * errorText
   */
  public errorText() {
    clearInterval(this.timerVal);
    const testResult = new FYGE.TextField();
    testResult.fillColor = "#ff0000";
    testResult.text = "游戏失败";
    testResult.size = 90;
    testResult.x = -130;
    testResult.y = 0;
    this.text = "";
    this.removeAllChildren()
    this.addChild(testResult);
  }
}
