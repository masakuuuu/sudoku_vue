<script setup>
</script>

<script>
import Cell from './components/Cell.vue'

export default {
  data() {
    return {
      number: 100,
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
  },
  components: {
    Cell
  }
}
</script>

<template>
  <header>
  </header>

  <main>
    Sudokuテスト
    <table>
      <tr>
        <td>
          <div :id="test">
            出力
            {{ number }}
            <Cell number="10000"/>
          </div>
          <div>
            <li v-bind:id="sudoku" v-for="cell in cells">
              {{ cell.number }}
            </li>
          </div>
        </td>
      </tr>
    </table>
  </main>
</template>






