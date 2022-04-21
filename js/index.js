/*获取#nav_ul中所有的小li，通过querySelectorAll获取到的是伪数组，for遍历数组给每个小li注册鼠标移入事件，移除所有active类
this指向当前鼠标移入的li，给它添加active这个类*/
//头部导航栏高亮模块
let lis = document.querySelectorAll('#nav_ul li')
for (let i = 0; i < lis.length; i++) {
    lis[i].addEventListener('mouseenter', function() {
        document.querySelector('#nav_ul li.active').classList.remove('active')
        this.classList.add('active')
    })
}

/*获取.show子代的所有小li，遍历每个小li添加鼠标移入和移除事件，鼠标移入当前li通过children获取当前li中
第二个孩子ul让鼠标经过或移除时相对应的显示和隐藏并添加样式和移除样式*/
//左侧但杭兰弹出模块
let show = document.querySelectorAll('.all-class .show>li')
for (let j = 0; j < show.length; j++) {
    show[j].addEventListener('mouseenter', function() {
        this.children[1].style.overflow = 'visible'
        this.children[1].style.backgroundColor = 'rgba(20, 4, 70, .7)'
        this.children[1].style.height = '350px'
    })
    show[j].addEventListener('mouseleave', function() {
        this.children[1].style.overflow = 'hidden'
        this.children[1].style.backgroundColor = ''
        this.children[1].style.height = ''
    })
}

//轮播图模块
//获取所有banner图中的所有小圆点
let dot = document.querySelectorAll('#b_dot a')
    //获取所有的banner图
let pic = document.querySelectorAll('#publish-copy li')

//全局变量存定时器数据方便鼠标移除时可以使用
let timer = 0
let index = 0
    //封装定时器
function timers() {
    timer = setInterval(function() {
        index++
        //移除所有小圆点的样式
        document.querySelector('#b_dot a.on').classList.remove('on')
            //index指定的小圆点显示
        dot[index].classList.add('on')
            //让所有的图片隐藏
        for (let i = 0; i < pic.length; i++) {
            pic[i].style.display = 'none'
        }
        //index指定的图片显示
        pic[index].style.display = 'block'
            /*图片和小圆点的个数是对应的所以可以用一个判断条件，如果到了最后一个把-1赋值给index，因为index要自加 所以给-1合适
            不会跳过第一张图片*/
        if (index === dot.length - 1) {
            index = -1
        }
    }, 1000)
}
timers()
let boxBanner = document.querySelector('#publish-copy')
    //鼠标移入时停止定时器
boxBanner.addEventListener('mouseenter', function() {
        clearInterval(timer)
    })
    //鼠标移除时调用定时器函数
boxBanner.addEventListener('mouseleave', function() {
    timers()
})

//右侧倒计时模块
let days = document.querySelector('#_d')
let hours = document.querySelector('#_h')
let minutes = document.querySelector('#_m')
let seconds = document.querySelector('#_s')
    // 先调用1次，就省去了1秒的空白期
time()
setInterval(time, 1000)

function time() {
    //  得到现在的时间戳
    let now = +new Date()
        // 得到指定时间的时间戳
    let last = +new Date('2023-4-11 00:00:00')
        // （计算剩余的毫秒数） / 1000 === 剩余的秒数
    let count = (last - now) / 1000
        // 转换为天数时分秒
        //计算天数
    let d = parseInt(count / (60 * 60 * 24))
    d = d < 10 ? '0' + d : d
        //   计算小时
    let h = parseInt(count / 60 / 60 % 24)
    h = h < 10 ? '0' + h : h
        //   计算分数
    let m = parseInt(count / 60 % 60)
    m = m < 10 ? '0' + m : m
        //   计算当前秒数
    let s = parseInt(count % 60);
    //小于10的话要补零
    s = s < 10 ? '0' + s : s
    days.innerHTML = d + '天'
    hours.innerHTML = h + '时'
    minutes.innerHTML = m + '分'
    seconds.innerHTML = s + '秒'
}