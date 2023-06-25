import { createApp } from 'vue'
  
// createApp(App).mount('#app')
const app = createApp({
  data() {
    return {
      number: 100
    }
  }
})
  
  app.mount('#test')