1.扫雷的棋盘
    样式 
        宽高
        背景
    坐标

2.棋子
    样式
    坐标
    分类
        底板
        盖子
        雷
    内容
        数字
    事件
        点击

3.管理器
    点击
        点击棋子
    判断事件
        棋子类型是不是雷
            是 - 胜负
            不是 - 周边几个雷
                    0 - 展开没有雷的区域
                    n - 内容
    胜负
4.游戏
    胜负

