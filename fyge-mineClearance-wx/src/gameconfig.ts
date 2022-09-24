import { fill } from "./utils";

export const PIC_URLS = []

export const GAME_SIZE = 10;

export const BOARD_SIZE = 622;

export const PIECE_SIZE = 60;
// export const minePic = 'http://file.haozengrun.com/1663853069381WechatIMG234.png'
export const minePic = './image/WechatIMG234.png'
export const musicPic = './image/WechatIMG236.png'

export const GAP = 2;

export const MINEMAXNUM = 10

export const INIT_DATA: any[] = fill(GAME_SIZE * GAME_SIZE); // 数据为图片id，从0开始（图片索引）

export const TEXT_OUT = "59"