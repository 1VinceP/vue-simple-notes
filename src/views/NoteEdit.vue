<script>
import marked from 'marked';
import '../markdown.scss';

import PreviewControls from '@/components/PreviewControls.vue';

export default {
   name: 'note-edit',

   components: { PreviewControls },

   data: () => ({
      previewMode: 'plaintext',
   }),

   props: {
      darkMode: { type: Boolean, default: false },
      note: { type: Object, default: () => ({}) },
   },

   methods: {
      onControlsChange(mode) {
         this.previewMode = mode;
      },

      getMarkdownPreview() {
         return marked(this.note.content);
      },
   },
};
</script>

<template>
   <div class="note-edit">
      <div class="title">
         <!-- $emit(Eventname, arg):
            Trigger an event on the current instance. Any additional arguments will be
            passed into the listener’s callback function.
         -->
         <input
            :class="{
               name: true,
               'name--light-mode': !darkMode,
            }"
            @input="(e) => $emit('name', e)"
            :value="note.name"
         />
         <div class="date">{{ note.creationDate }}</div>
      </div>

      <PreviewControls
         :mode="previewMode"
         v-on:modeChange="onControlsChange"
         :dark-mode="darkMode"
      ></PreviewControls>

      <textarea
         :class="{
            'textarea': true,
            'textarea--light-mode': !darkMode,
         }"
         v-if="previewMode === 'plaintext'"
         @input="(e) => $emit('content', e)"
         :value="note.content"
         placeholder="Note"
      />

      <div
         :class="{ 
            'markdown-body': true ,
            'markdown-body--light-mode': !darkMode
         }"
         v-if="previewMode === 'markdown'"
         v-html="getMarkdownPreview()"
      ></div>
   </div>
</template>

<style lang="scss" scoped>
$header-height: 60px;
$controls-height: 31px;

.note-edit {
   height: 100%;
   width: 100%;
   padding: 10px;

   .title {
      height: 60px;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      .name {
         width: 50%;
         background: transparent;
         border: none;
         outline: none;
         border-bottom: 1px solid #f5f5f5;
         margin-bottom: 6px;
         font-size: 26px;
         color: #f5f5f5;

         @media (max-width: 750px) {
            width: 100%;
         }

         &--light-mode {
            border-bottom: 1px solid #323231;
            color: #323231;
         }
      }

      .date {
         height: 16px;
         font-size: 12px;
         font-style: italic;
         color: #888;
      }
   }

   .textarea {
      height: calc(100% - #{$header-height} - #{$controls-height});
      width: 100%;
      background: #212121;
      border: none;
      outline: none;
      color: #f5f5f5;

      &--light-mode {
         border: 1px solid #212121;
         background: #f5f5f5;
         color: #212121;
      }
   }

   .markdown-body {
      height: calc(100% - #{$header-height} - #{$controls-height});
      padding: 0 1rem;
      text-align: left;
      overflow: auto;
   }
}
</style>
