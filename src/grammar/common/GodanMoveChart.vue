<script setup lang="ts">
</script>

<template>
  <div class="arrow">
    <span class="line first"></span>
    <span class="text-box"></span>
    <span class="line second"></span>
  </div>
  <div class="characters">
    <div class="inner">
      <span>あ</span>
      <span>い</span>
      <span class="text k">う</span>
      <span>え</span>
      <span>お</span>
    </div>
  </div>
</template>

<style scoped>
.arrow {
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 20px;

  span {
    float: left;
    display: block;
  }

  .text-box {
    padding: 0 12px;
    font-size: 1.7rem;
    margin: 0 12px;
  }
}

.characters {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 20px;

  .inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.7rem;
    margin-top: 8px;
    width: 100%;
    max-width: 400px;
  
    .text {
      padding: 0 8px;
      border: 1px solid #e4c4e3;
    }
  }
}


.line {
  width: 100%;
  max-width: 220px;
  background: rgb(134, 134, 134);
  height: 4px;
  float: left;
  position: relative;
}

.line.first:before {
  content: '';
  position: absolute;
  right: 100%;
  top: -5px;
  display: inline-block;
  width: 0;
  height: 0;
  border-top: 7px solid transparent;
  border-bottom: 7px solid transparent;
  border-right: 10px solid rgb(134, 134, 134);
}

.line.second:after {
  content: '';
  position: absolute;
  left: 100%;
  top: -5px;
  display: inline-block;
  width: 0;
  height: 0;
  border-top: 7px solid transparent;
  border-bottom: 7px solid transparent;
  border-left: 10px solid rgb(134, 134, 134);
}
</style>
