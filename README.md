# ace-vue-waves

一个vue自定义指令，实现按钮点击水波纹效果

## 如何使用

### 安装

```bash
npm i -S ace-vue-waves
```

然后在main.js里

```javascript
import Vue from 'vue';
import aceVueWaves from 'vue-waves';

Vue.use(aceVueWaves);
```


### 使用

默认：
```javascript
{
  type: 'hit',
  color: 'rgba(0, 0, 0, 0.15)'
}
```

```html
<button v-waves>ace-vue-Waves</button>

<button v-waves="{ type: 'center', color: '#fff' }">ace-vue-Waves</button>
```

