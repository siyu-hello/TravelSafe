<template>
  <dv-full-screen-container>
    <div class="header">
      <dv-decoration-8 style="width:600px;height:50px;" />
      <dv-decoration-5 class="app-header-center" style="width:600px;height:40px;" />
      <dv-decoration-8 reverse style="width:600px;height:50px;" />
      <div class="title">统计系统</div>
    </div>
    <div class="nums-container">
      <div class="nums-box">
        <div class="nums-box-item">
          <p>累计出行量</p>
          <dv-digital-flop :config="{number:[Math.ceil(Math.random()*100000)]}" style="width:250px;height:50px;" />
        </div>
        <div class="nums-box-item">
          <p>预计出行量</p>
          <dv-digital-flop :config="{number:[Math.ceil(Math.random()*100000)]}" style="width:250px;height:50px;" />
        </div>
        <dv-decoration-10 style="width:90%;height:5px;" />
      </div>
    </div>
    <div class="center map">
      <dv-flyline-chart-enhanced class="map-conter" :config="config6" style="width:700px;height:100%;" />
    </div>
    <!-- 固定定位 -->
    <div class="lt">
      <dv-border-box-1>
        <dv-conical-column-chart :config="config2" style="width:350px;height:180px;" />
      </dv-border-box-1>
    </div>
    <div class="lb">
      <dv-border-box-1>
        <dv-scroll-board :config="config4" style="width:300px;height:180px" />
      </dv-border-box-1>
    </div>
    <div class="rt">
      <dv-border-box-1>
        <dv-active-ring-chart :config="config3" style="width:450px;height:260px" />
      </dv-border-box-1>
    </div>
    <div class="rb">
      <dv-border-box-1>
        <dv-capsule-chart :config="config5" style="width:250px;height:200px;margin: 0 auto;" />
      </dv-border-box-1>
    </div>
    <div class="leftList">
      <dv-scroll-ranking-board :config="config7" style="width:350px;height:250px" />
    </div>
    <div class="rightList">
      <dv-scroll-ranking-board :config="config7" style="width:350px;height:250px" />
    </div>
  </dv-full-screen-container>
</template>

<script setup>
import { config2, config3, config4,config5, config6, config7 } from './config2'
</script>

<style lang="scss">
body {
  margin: 0;
  background-color: rgb(4, 24, 61);
}

p {
  margin: 0;
  padding: 0;
}

.header {
  height: 100px;
  display: flex;
  justify-content: space-between;
  position: relative;
}

.nums-container {
  height: 100px;
}

.map {
  height: 500px;
  padding-top: 50px;
}

.down-data-list {
  height: 100px;
}
.app-header-center{
  transform: translateY(22px);
}
.title{
  color: #fff;
  font-size: 20px;
  font-weight: 700px;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  top: 10px;
}
.nums-box{
  width: 500px;
  height: 100px;
  display: flex;
  margin: 0 auto;
  text-align: center;
  color: #fff;
  position: relative;
}
.nums-box-item{
  width: 250px;
  height: 80px;
  background: rgba(6,16,43,0.5);
  border-right: 3px solid blue;
}
.dv-decoration-10{
  position: absolute;
  bottom: 0;
  left: 5%;
}
.lt,
.lb,
.rt,
.rb{
  position: fixed;
  width: 350px;
  height: 200px;
}
.lt{
  left: 0;
  top:100px;
}
.lb{
  left: 0;
  bottom: 130px;
}
.rt{
  right: 0;
  top: 100px;
}
.rb{
  right: 0;
  bottom: 130px;
}
.dv-scroll-board{
  margin: 0 auto;
}
.dv-border-box-1 .border-box-content{
  padding-top: 10px;
}
.map-conter{
  margin: 0 auto;
}
.leftList{
  position: fixed;
  left: 0;
  top: 330px;
}
.rightList{
  position: fixed;
  right: 0;
  top: 330px;
}
</style>

