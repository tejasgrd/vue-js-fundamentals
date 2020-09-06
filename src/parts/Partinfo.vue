<template>
    <div>
        <h1>{{ part.title }}</h1>
        <div>
            {{ part.description }}
        </div>
    </div>
</template>

<script>
import getPartsMixin from './get-parts-mixin';

export default {
  name: 'PartInfo',
  props: ['partType', 'id'],
  mixins: [getPartsMixin],
  computed: {
    part() {
      debugger;
      const { partType, id } = this;
      return this.parts[partType].find((part) => part.id === +id);
    },
  },
};
</script>
