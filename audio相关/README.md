## audio相关API
audio用法：
+ 首先 可以用`<audio></audio>`的方式去写，可以设置他的src去制定播放地址。
+ 第二 可以用new Audio来创建一个Audio对象

这个Audio对象有一些属性：
+ play
+ pause (暂停) 
+ paused (是否在播放 可用于暂停开始)
+ autoPlay (默认为false，开启后更换Src会自动播放，可用于下一曲。)
+ currentTime (当前播放到到时间)
+ volume (音量 区间在 0-1)
这个对象还有一些事件：
+ playing / panse / ended / timeupdate / volumeChange / onplay /onpause / ...