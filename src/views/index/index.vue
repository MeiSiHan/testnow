<!--
 * @Author: You
 * @Date: 2022-12-30 14:30:26
 * @LastEditors: Do not edit
 * @LastEditTime: 2022-12-30 17:13:24
 * @FilePath: \examsf:\Protest\newyear\src\views\index\index.vue
-->
<template>
  <div class="heart" ref='element'>
    <div v-for=" item in flakes" :style="item.style" class="snowfall-flakes">
    </div>
  </div>
</template>
<script setup lang="ts">
import type { CSSProperties } from 'vue'
import { ref, reactive, defineComponent, toRefs, onMounted,computed} from 'vue'
import { useRouter, useRoute} from 'vue-router'
const route=useRoute()
const pageSize = ref(20)





// 作者：老骥farmer
// 链接：https://juejin.cn/post/7143059307402100772
// 来源：稀土掘金
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
interface Option {
    flakeCount: number,
    flakeColor: string,
    flakePosition: string,
    flakeIndex: number,
    minSize: number,
    maxSize: number,
    minSpeed: number,
    maxSpeed: number,
    round: boolean,
    shadow: boolean,
}
interface Flakes {
    style: CSSProperties,
    speed: number,
    top: number,
    left: number,
    stepSize: number,
    step: number
}
 const random = function random(min: number, max: number) {
    return Math.round(min + Math.random() * (max - min));
}
 const defaults: Option = {
    flakeCount: 35,
    flakeColor: 'red',
    flakePosition: 'absolute',
    flakeIndex: 999999,
    minSize: 1,
    maxSize: 2,
    minSpeed: 1,
    maxSpeed: 5,
    round: false,
    shadow: false,
}
// 接收 props
const props = defineProps<{
  option?: Partial<Option>
}>()
// 默认参数
const options = Object.assign(defaults, props.option)
const style = {
  '--bg': options.flakeColor,
  position: options.flakePosition,
  zIndex: options.flakeIndex,
}
const element:any = ref(null)
var widthOffset = ref(0)
// 容器宽高
let elHeight:any = 0
let elWidth:any = 0
var snowTimeout = 0
//心形数组
const flakes: any = reactive([])
// 设置样式
const setStyle = (top:any, left:any) => {
  return {
    ...style,
    top: `${top}px`,
    left: `${left}px`,
  }
}
// 重置样式
const reset = (item:any) => {
  item.left = random(widthOffset.value, elWidth - widthOffset.value);
  item.top = 0;
  item.speed = random(options.minSpeed, options.maxSpeed);
  item.stepSize = random(1, 10) / 100;
}

// 更新函数
const update = () => {
  console.log(111)
  flakes.forEach((item:any) => {
    item.top += item.speed;
    if (item.top > elHeight) {
      reset(item)
    }
    item.step += item.stepSize;
    item.left += Math.cos(item.step);
    item.style = setStyle(item.top, item.left)
  })
  snowTimeout = requestAnimationFrame(function () { update() });
}


function onloadPage(){

}
onMounted(() => {
//   tableHeight.value = window.innerHeight - tableBox.value.$el.offsetTop - 140
//   window.onresize = () => {
//     tableHeight.value = window.innerHeight - tableBox.value.$el.offsetTop - 140
//   }




elHeight = element.value.offsetHeight
  elWidth = element.value.offsetWidth

  flakes.push(...new Array(options.flakeCount).fill(null).map(() => ({
      style: setStyle(random(0, elHeight), random(widthOffset.value, elWidth - widthOffset.value)),
      top: random(0, elHeight),
      left: random(widthOffset.value, elWidth - widthOffset.value),
      speed: random(options.minSpeed, options.maxSpeed),
      step: 0,
      stepSize: random(1, 10) / 100
    })
  ))
  update()
  
  onloadPage()
})
</script>
<style>
#canvas_sakura{
  display: none;
}
</style>
<style lang="scss" scoped>

.heart {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    background: url("https://preview.qiantucdn.com/58pic/44/33/95/03R58PICEij287vF4K3mZ_PIC2018.png!w1024_new_0");
    background-position: center;
    background-size: 80%;
    background-repeat: no-repeat;
    position: relative;
    

    .snowfall-flakes {

      &::before,
      &::after {
        content: "";
        position: absolute;
        width: 20px;
        height: 30px;
        display: block;
        background: var(--bg);
        border-radius: 10px 10px 0 0;
      }

      &::before {
        transform: rotate(-45deg);
      }

      &::after {
        transform: rotate(45deg);
        left: 7px;
      }
    }
  }


</style>