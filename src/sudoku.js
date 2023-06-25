import { createApp } from 'vue'
  
// createApp(App).mount('#app')
const app = createApp(
  {
  data () {
    return {
      cells: [{
          number:1,
          row:1,
          column:1
      },{
          number:2,
          row:1,
          column:2
      }]
    }
  }})
  
  app.mount('#sudoku')