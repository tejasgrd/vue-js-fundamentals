/* eslint-disable no-restricted-globals */
<template>
  <div v-if="availableParts" class="content">
    <div class="preview">
      <CollapsibleSection>
        <div class="preview-content">
          <div class="top-row">
            <img :src="selectedRobots.head.src"/>
          </div>
          <div class="middle-row">
            <img :src="selectedRobots.leftArm.src" class="rotate-left"/>
            <img :src="selectedRobots.torsos.src"/>
            <img :src="selectedRobots.rightArm.src" class="rotate-right"/>
          </div>
          <div class="bottom-row">
            <img :src="selectedRobots.bases.src"/>
          </div>
        </div>
      </CollapsibleSection>
      <button class="add-to-cart" @click="addToCart()">
        Add to Cart
      </button>
    </div>
    <div class="top-row">
        <!-- <div class="robot-name">
          {{selectedRobots.head.title}}
          <span v-if="selectedRobots. " class="sale">
            Sale !
          </span>
        </div>-->
        <PartSelector
        :parts="availableParts.heads"
        position="top"
        @partSelected="part => selectedRobots.head = part " />
    </div>
    <div class="middle-row">
      <PartSelector
      :parts="availableParts.arms"
      position="left"
      @partSelected="part => selectedRobots.leftArm = part " />
      <PartSelector
      :parts="availableParts.torsos"
      position="center"
      @partSelected="part => selectedRobots.torsos = part " />
      <PartSelector
      :parts="availableParts.arms"
      position="right"
      @partSelected="part => selectedRobots.rightArm = part " />
    </div>
    <div class="bottom-row">
      <PartSelector
      :parts="availableParts.bases"
      position="bottom"
      @partSelected="part => selectedRobots.bases = part " />
    </div>
    <div>
      <h1>Cart</h1>
      <table>
        <thead>
          <tr>
            <th>Robot</th>
            <th class="cost">Cost</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(robot, index) in cart" :key="index" >
            <td>{{robot.head.title}}</td>
            <td class="cost">{{robot.cost}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import createdHookMixin from './created-hook.mixin';
import PartSelector from './PartSelector.vue';
import CollapsibleSection from '../shared/CollapsibleSection.vue';

export default {
  name: 'RobotBuilder',
  created() {
    // this.$store.dispatch('robots/getParts');
    this.getParts();
  },
  beforeRouteLeave(to, from, next) {
    if (this.addedToCart) {
      next(true);
    } else {
      // eslint-disable-next-line no-restricted-globals
      const resposne = confirm('you have not added your robot to car, are you sure you want to leave?');
      next(resposne);
    }
  },
  components: { PartSelector, CollapsibleSection },
  data() {
    return {
      addedToCart: false,
      cart: [],
      selectedRobots: {
        head: {},
        leftArm: {},
        rightArm: {},
        torsos: {},
        bases: {},
      },
    };
  },
  mixins: [createdHookMixin],
  computed: {
    availableParts() {
      return this.$store.state.robots.parts;
    },
    saleBorderClass() {
      return this.selectedRobots.head.onSale ? 'sale-border' : '';
    },
    headBorderStyle() {
      return {
        border: this.selectedRobots.head.onSale ? '3px solid rd' : '3px solid #aaa',
      };
    },
  },
  methods: {
    ...mapActions('robots', ['getParts', 'addRobotTocart']),
    addToCart() {
      debugger;
      const robot = this.selectedRobots;
      const cost = robot.head.cost + robot.leftArm.cost
      + robot.rightArm.cost + robot.torsos.cost + robot.bases.cost;
      // this.$store.dispatch('robots/addRobotTocart', { ...robot, cost })
      this.addRobotTocart({ ...robot, cost })
        .then(() => this.$router.push('/cart'));
      // this.cart.push({ ...robot, cost });
      this.addToCart = true;
    },
  },
};
</script>

<style scoped>
.part {
  position: relative;
  width:165px;
  height:165px;
  border: 3px solid #aaa;
}
.part img {
  width:165px;
}
.top-row {
  display:flex;
  justify-content: space-around;
}
.middle-row {
  display:flex;
  justify-content: center;
}
.bottom-row {
  display:flex;
  justify-content: space-around;
  border-top: none;
}
.head {
  border-bottom: none;
}
.left {
  border-right: none;
}
.right {
  border-left: none;
}
.left img {
  transform: rotate(-90deg);
}
.right img {
  transform: rotate(90deg);
}
.bottom {
  border-top: none;
}
.prev-selector {
  position: absolute;
  z-index:1;
  top: -3px;
  left: -28px;
  width: 25px;
  height: 171px;
}
.next-selector {
  position: absolute;
  z-index:1;
  top: -3px;
  right: -28px;
  width: 25px;
  height: 171px;
}
.center .prev-selector, .center .next-selector {
  opacity:0.8;
}
.left .prev-selector {
  top: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.left .next-selector {
  top: auto;
  bottom: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.right .prev-selector {
  top: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.right .next-selector {
  top: auto;
  bottom: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.right .next-selector {
  right: -3px;
}
.robot-name {
  position: absolute;
  top: -25px;
  text-align: center;
  widows: 100%;
}
.sale {
  color: red;
}
.content {
  position: relative;
}
.add-to-cat {
  position: absolute;
  right: 30px;
  width: 220px;
  padding: 3px;
  font-size: 16px;
}
td, th {
  text-align: left;
  padding: 5px;
  padding-right: 20px;
}
.cost {
  text-align: right;
}
.sale-border {
  border: 3px solid red;
}
.preview {
  position: absolute;
  top: -20px;
  right: 0;
  width: 210px;
  height: 210px;
  padding: 5px;
}
.preview-content {
  border: 1px solid #999;
}
.preview img {
  width: 50px;
  height: 50px;
}
.rotate-right {
  transform: rotate(90deg);
}
.rotate-left {
  transform: rotate(-90deg);
}
.add-to-cart {
  position: absolute;
  width: 210px;
  padding: 3px;
  font-size: 16px;
}
</style>
