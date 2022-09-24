//hi
export class UpEvent extends FYGE.Event {
    public static NAME: string = "点击";
    public _year: number = 0;
    public _month: number = 0;
    public _date: number = 0;
    public _where: string = "";
    public _todo: string = "";
    public constructor(type: string,) {
        super(type);
    }
}
