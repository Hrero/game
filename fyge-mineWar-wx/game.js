import './js/libs/weapp-adapter'
import './js/libs/symbol'

import Main from './js/main'
import { config } from './config'
new Main()

window.go = {
    game: null, // 游戏实例
    userInfo: null, // 玩家信息
    opponentInfo: null, // 对手信息
    server: require('js/server.js'), // 与服务器的交互
    launchRoomId: null, // 进入主菜单时需要加入的房间 id
    battle: null, // 对战状态
};
// wx.connectSocket({
//     url: 'wss://game.haozengrun.com',
//     header:{
//       'content-type': 'application/json'
//     },
//     protocols: []
// })
// wx.onSocketOpen(function(res) {
//     socketOpen = true
//     console.log(22);
//     for (let i = 0; i < socketMsgQueue.length; i++){
//       sendSocketMessage(socketMsgQueue[i])
//     }
//     socketMsgQueue = []
// })

// function sendSocketMessage(msg) {
//     if (socketOpen) {
//       wx.sendSocketMessage({
//         data:msg
//       })
//     } else {
//       socketMsgQueue.push(msg)
//     }
// }
go.server.initSocket();
// console.log(1);
