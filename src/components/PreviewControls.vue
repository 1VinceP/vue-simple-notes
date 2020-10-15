<script>
export default {
   name: 'preview-controls',

   props: {
      darkMode: { type: Boolean, default: false },
      mode: { type: String, default: () => 'plaintext' },
   },

   methods: {
      changePreviewMode(mode) {
         this.$emit('modeChange', mode);
      },
   },
};
</script>

<template>
   <div class="controls">
      <button
         @click="changePreviewMode('plaintext')"
         :class="[
            'control-btn',
            {
               active: mode === 'plaintext',
               'control-btn--light-mode': !darkMode,
            },
         ]"
      >
         Plaintext
      </button>
      <button
         @click="changePreviewMode('markdown')"
         :class="[
            'control-btn',
            {
               active: mode === 'markdown',
               'control-btn--light-mode': !darkMode,
            },
         ]"
      >
         Markdown
      </button>
   </div>
</template>

<style lang="scss" scoped>
.controls {
   display: flex;
   justify-content: center;
   margin: 1.5rem 0;

   @media (min-width: 750px) {
      justify-content: flex-end;
      margin: 0.5rem 0;
   }

   * + * {
      margin-left: 1rem;
   }
}

.control-btn {
   padding: 0.5rem 2rem;
   border: 1px solid #fff;
   color: #fff;
   border-radius: 3px;
   background: none;
   cursor: pointer;
   transition: 0s background ease-in-out;

   &.active,
   &:hover {
      background: #fff;
      color: #212121;
   }

   &--light-mode {
      color: #212121;
      border: 1px solid #212121;

      &.active,
      &:hover {
         background: #212121;
         color: #fff;
      }
   }
}
</style>
